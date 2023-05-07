/**
* A class that parses tokens into an abstract syntax tree (AST) for set theory expressions.
*/
export class Parser{
    /**
    * An array of tokens to be parsed.
    * @type {Array}
    * @private
    */
    #tokens
    /**
    * Creates a new Parser instance with the given tokens.
    * @param {Array} tokens - An array of tokens to be parsed.
    */
    constructor(tokens){
        this.#tokens = tokens;
    }
    /**
    * Throws a syntax error with the given position and type of the unexpected token.
    * @param {number} pos - The position of the unexpected token in the tokens array.
    * @param {string} type - The type of the unexpected token.
    * @returns {Error} - A syntax error object.
    * @private
    */
    #syntax_error(pos,type){
        return new Error(`Unexpected token type ${type} at position: ${pos}`);
    }
    /**
    * Parses a binary statement that consists of an identifier and an operator.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the binary statement AST node.
    * @private
    */
    #parse_binary_statement(tokens){
        const id=parse_identifier(tokens)
        const op=parse_operator(tokens)
    }
    /**
    * Parses an identifier token and returns its value.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {string} - The value of the identifier token.
    * @private
    */
    #parse_identifier(tokens){
    
        const id=tokens.shift();
        if(id.type!=="identifier") return syntax_error()
        return id.value;
    }
    /**
    * Parses an operator token and returns it.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - The operator token object.
    * @private
    */
    #parse_operator(tokens){
    
        const op=tokens.shift();
        if(op.type!=="operator") return syntax_error()
        return op;
    }
    /**
    * Parses a numeric literal token and returns its value.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {number} - The value of the numeric literal token.
    * @private
    */
    #parse_numeric_literal(tokens){
        const numericliteral=tokens.shift();
        if(numericliteral.type!=="numericliteral") return syntax_error()
        return numericliteral;
    }
    /**
    * Parses an element of statement that consists of an identifier and the element of operator (∈).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the element of statement AST node.
    * @private
    */
    #parse_element_of_statement()
    {
    
    }
    /**
    * Parses a not element of statement that consists of an identifier and the not element of operator (∉).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the not element of statement AST node.
    * @private
    */
    #parse_not_element_of_statement()
    {
    
    }
    /**
    * Parses an assign statement that consists of an identifier, the assign operator (=), and a set expression or literal.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the assign statement AST node.
    * @private
    */
    #parse_assign_statement()
    {
    
    }
    /**
    * Parses an equal statement that consists of two set expressions or literals and the equal operator (=).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the equal statement AST node.
    * @private
    */
    #parse_equal_statement()
    {
    
    }
    /**
    * Parses a subset of statement that consists of two set expressions or literals and the subset of operator (⊆).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the subset of statement AST node.
    * @private
    */
    #parse_subset_of_statement()
    {
    
    }
    /**
    * Parses a real subset of statement that consists of two set expressions or literals and the real subset of operator (⊂).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the real subset of statement AST node.
    * @private
    */
    #parse_real_subset_of_statement()
    {
    
    }
    /**
    * Parses a complement statement that consists of a set expression or literal and the complement operator (').
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the complement statement AST node.
    * @private
    */
    #parse_complement_statement()
    {
    
    }
    /**
    * Parses a union statement that consists of two set expressions or literals and the union operator (∪).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the union statement AST node.
    * @private
    */
    #parse_union_statement()
    {
    
    }
    /**
    * Parses an intersection statement that consists of two set expressions or literals and the intersection operator (∩).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the intersection statement AST node.
    * @private
    */
    #parse_intersection_statement()
    {
    
    }
    /**
    * Parses a setminus statement that consists of two set expressions or literals and the setminus operator (\).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the setminus statement AST node.
    * @private
    */
    #parse_setminus_statement()
    {
    
    }
    /**
    * Parses a cardinality statement that consists of a set expression or literal and the cardinality operator (| |).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the cardinality statement AST node.
    * @private
    */
    #parse_cardinality_statemt()
    {
    
    }
    /**
    * Parses an add statement that consists of an identifier, the add operator (+), and an element expression or literal.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the add statement AST node.
    * @private
    */
    #parse_add_statement()
    {
    
    }
    /**
    * Parses a delete statement that consists of an identifier, the delete operator (-), and an element expression or literal.
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the delete statement AST node.
    * @private
    */
    #parse_delete_statement()
    {
    
    }
    /**
    * Parses a set literal that consists of a left brace ({), zero or more element expressions or literals separated by commas (,), and a right brace (}).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the set literal AST node.
    * @private
    */
    #parse_set_literal()
    {
    
    }
    /**
    * Parses a point set diagram statement that consists of an identifier and the point set diagram operator (⊙).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the point set diagram statement AST node.
    * @private
    */
    #parse_point_set_diagram_statement()
    {
    
    }
    /**
    * Parses a point literal that consists of a left parenthesis ((), a numeric literal, a comma (,), another numeric literal, and a right parenthesis ()).
    * @param {Array} tokens - An array of tokens to be parsed.
    * @returns {Object} - An object representing the point literal AST node.
    * @private
    */
    #parse_point_literal()
    {
    
    }
    /**
    * Parses the tokens array into an AST and returns it.
    * @returns {Object} - The AST object representing the parsed tokens.
    */
    parse() {
        let ast={}
        for (let i = 0; i < this.#tokens.length; i++) {
            // TODO: implement the parsing logic here
        }
        return ast;
    }

}
