import express, { static as _static, json as _json } from 'express';
import { Lexer } from './lexer'
import { Parser } from './parser';
import { Evaluator } from './evaluator';
import { CONFIG } from './env';

const expressions=[];
const app=express();

app.use(_static("public"));
app.use(_json())
app.get('/expressions',(req,res)=>{
    res.send({json:expressions})
    
})
app.post('/expressions',(req,res)=>{
    let stmttoevaluate = req.body.data;
    let lexer = new Lexer(stmttoevaluate);
    let parser = new Parser(lexer.tokenize());
    let evaluator = new Evaluator(parser.parse())
    expressions.push({ statement: stmttoevaluate.statement, result: evaluator.evaluate(), start: stmttoevaluate.start, end: stmttoevaluate.end })
   res.send({json:expressions})
   

})
app.listen(CONFIG.PORT,() => console.log(`Template engine listening on port ${CONFIG.PORT}!`));