/**
* A class that evaluates an abstract syntax tree (AST).
*/
export class Evaluator{
    /**
    * The AST to evaluate.
    * @type {Object}
    * @private
    */
    #ast;
    /**
    * Creates a new evaluator instance with the given AST.
    * @param {Object} ast - The AST to evaluate.
    */
    constructor(ast){
        this.#ast=ast;
    }
    /**
    * Evaluates the AST and returns the result.
    * @returns {*} The result of the evaluation.
    */
    evaluate(){
        // TODO: implement the evaluating logic here
    }
}