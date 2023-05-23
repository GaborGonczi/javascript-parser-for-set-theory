import express, { static as _static, json as _json,raw } from 'express';
import {BSON  } from "bson";
import { Lexer } from './lexer.js'
import { Parser } from './parser.js';
import { Evaluator } from './evaluator.js';
import { CONFIG } from './env.js';

let expressions=[];
const app=express();

app.use(_static("public"));
app.use(_json())
app.use(raw())

app.get('/expressions',(req,res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.send({json:expressions})
    
})
app.post('/expressions',(req,res)=>{
    let stmttoevaluate = req.body.data;
    let prevExpIndex=expressions.findIndex(exp=>exp.start==stmttoevaluate.start);
    res.setHeader('Content-Type', 'application/json')
    if(stmttoevaluate.noparse){
        if(prevExpIndex!=-1){
            expressions[prevExpIndex]={ statement: stmttoevaluate.statement, result: stmttoevaluate.statement , start: stmttoevaluate.start, end: stmttoevaluate.end ,noparse:stmttoevaluate.noparse}
        }
        expressions.push({ statement: stmttoevaluate.statement, result: stmttoevaluate.statement , start: stmttoevaluate.start, end: stmttoevaluate.end ,noparse:stmttoevaluate.noparse})
        res.send({json:expressions})
        return;
    } 
    let lexer = new Lexer(stmttoevaluate.statement);
    let parser = new Parser(lexer.tokenize());
    let evaluator = new Evaluator(parser.parse())
    
    if(prevExpIndex!=-1){
        expressions[prevExpIndex]={ statement: stmttoevaluate.statement, result: evaluator.evaluate() , start: stmttoevaluate.start, end: stmttoevaluate.end ,noparse:stmttoevaluate.noparse}
        res.send({json:expressions})
        return;
    }
   
    
    expressions.push({ statement: stmttoevaluate.statement, result:evaluator.evaluate() , start: stmttoevaluate.start, end: stmttoevaluate.end, noparse:stmttoevaluate.noparse})
    res.send({json:expressions})
    return;
   
   

})
app.post('/load',(req,res)=>{
    expressions=BSON.deserialize(req.body).json;
    res.setHeader('Content-Type', 'application/json')
    res.send({json:expressions})
    return;
})

app.get('/save',(req,res)=>{
    let saveToBin= {json:expressions}
    let binary=BSON.serialize(saveToBin);
    res.setHeader('Content-Type', 'application/octet-stream')
    res.send(binary);
    return;
})

app.listen(CONFIG.PORT,() => console.log(`Template engine listening on port ${CONFIG.PORT}!`));