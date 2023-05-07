import { TOKEN } from "./token.js";
/**
* A class that represents a lexer for a set language.
* @export
*/
export class Lexer{
    /**
    * The input string to be tokenized.
    * @private
    * @type {string}
    */
    #input
    /**
    * Creates an instance of Lexer with the given input.
    * @param {string} [input=""] - The input string to be tokenized.
    */
    constructor(input=""){
        this.#input=input;
    }
    /**
    * Tokenizes the input string and returns an array of tokens.
    * @returns {Array<{type: string, value: any}>} - The array of tokens.
    */
    tokenize(){
        const tokens=[];
        let numregexp=new RegExp(TOKEN.NUMBER);
        let idregexp=new RegExp(TOKEN.IDENTIFIER);
        let tobeeqregexp=new RegExp(TOKEN.TOBEEQUAL);
        let lessthanoreqregexp=new RegExp(TOKEN.LESSTHANOREQUAL);
        let greaterthanoreqregexp=new RegExp(TOKEN.GREATERTHANOREQUAL);
    
        for (let i = 0; i < this.#input.length; i++) {
            let c=this.#input[i];
            if(numregexp.test(c)){
                let num=c;
                while (numregexp.test(num)) {
                    num+=this.#input[++i]
                }
                tokens.push({type:"numericliteral",value:parseFloat(num.slice(0,-1))})
                --i;
            }
            else if(idregexp.test(c)){
               let id=c;
               while (idregexp.test(id)) {
                    id+=this.#input[++i]
                }
                tokens.push({type:"identifier",value:id.slice(0,-1)})
               --i;
            }
            else if(tobeeqregexp.test(this.#input[i]+this.#input[i+1])){
                tokens.push({type:"operator",value:TOKEN.TOBEEQUAL});
                i++;
            }
            else if(lessthanoreqregexp.test(this.#input[i]+this.#input[i+1])){
                tokens.push({type:"operator",value:TOKEN.LESSTHANOREQUAL});
                i++;
            }
            else if(greaterthanoreqregexp.test(this.#input[i]+this.#input[i+1])){
                tokens.push({type:"operator",value:TOKEN.GREATERTHANOREQUAL});
                i++;
            }
            else{
               switch (c) {
                    case TOKEN.COMPLEMENT:
                        tokens.push({type:"operator",value:TOKEN.COMPLEMENT});
                        break;
                    case TOKEN.ELEMENTOF:
                        tokens.push({type:"operator",value:TOKEN.ELEMENTOF});
                        break;
                    case TOKEN.NOTELEMENTOF:
                        tokens.push({type:"operator",value:TOKEN.NOTELEMENTOF});
                        break;
                    case TOKEN.SUBSETOF:
                        tokens.push({type:"operator",value:TOKEN.SUBSETOF});
                        break;
                    case TOKEN.EQUAL:
                        tokens.push({type:"operator",value:TOKEN.EQUAL});
                        break;
                    case TOKEN.UNION:
                        tokens.push({type:"operator",value:TOKEN.UNION});
                        break;
                    case TOKEN.INTERSECTION:
                        tokens.push({type:"operator",value:TOKEN.INTERSECTION});
                        break;
                    case TOKEN.SETMINUS:
                        tokens.push({type:"operator",value:TOKEN.SETMINUS});
                        break;
                    case TOKEN.COMMA:
                        tokens.push({type:"separator",value:TOKEN.COMMA});
                        break;
                    case TOKEN.VERTICALBAR:
                        tokens.push({type:"vertical-bar",value:TOKEN.VERTICALBAR});
                        break;
                    case TOKEN.LEFTCURLYBRACE:
                        tokens.push({type:"left-curlybrace",value:TOKEN.LEFTCURLYBRACE});
                        break;
                    case TOKEN.RIGHTCURLYBRACE:
                         tokens.push({type:"right-curlybrace",value:TOKEN.RIGHTCURLYBRACE});
                         break;
                    case TOKEN.LESSTHAN:
                        tokens.push({type:"operator",value:TOKEN.LESSTHAN});
                        break;
                    case TOKEN.GREATERTHAN:
                        tokens.push({type:"operator",value:TOKEN.GREATERTHAN});
                        break;
                
                
                    default:
                        tokens.push({type:"undefined",value:this.#input[i],rowPos:i});
                        return tokens;
                }
            }
        }
        return tokens
    }
}