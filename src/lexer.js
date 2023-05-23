import { TOKEN } from "./token.js";
import {BUILTIN} from "./builtin.js"
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
    constructor(input="", test=false){
        this.#input=input+'$';
        if(test===true){
            this.getInput=()=>{
                return this.#input;
            }
        }
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
                while (numregexp.test(num)){
                    num+=this.#input[++i]
                }
                tokens.push({type:this.#getTokenName(TOKEN,TOKEN.NUMBER),value:parseFloat(num.slice(0,-1))})
                --i
            }
            else if(idregexp.test(c)){
               let id=c;
               while (idregexp.test(id)) {
                    id+=this.#input[++i]
                }
                id=id.slice(0,-1);
                if(BUILTIN.includes(id)) tokens.push({type:"builtin", value:id})
                else tokens.push({type:this.#getTokenName(TOKEN,TOKEN.IDENTIFIER),value:id})
                --i
            }
            else if(tobeeqregexp.test(this.#input[i]+this.#input[i+1])){
                tokens.push({type:this.#getTokenName(TOKEN,TOKEN.TOBEEQUAL),value:TOKEN.TOBEEQUAL});
                i++;
            }
            else if(lessthanoreqregexp.test(this.#input[i]+this.#input[i+1])){
                tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LESSTHANOREQUAL),value:TOKEN.LESSTHANOREQUAL});
                i++;
            }
            else if(greaterthanoreqregexp.test(this.#input[i]+this.#input[i+1])){
                tokens.push({type:this.#getTokenName(TOKEN,TOKEN.GREATERTHANOREQUAL),value:TOKEN.GREATERTHANOREQUAL});
                i++;
            }
            else if(c===' '||c==='\t'){
                continue;
            }
            else{
               switch (c) {
                    case TOKEN.PLUS:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.PLUS),value:TOKEN.PLUS});
                        break;
                    case TOKEN.MINUS:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.MINUS),value:TOKEN.MINUS});
                        break;
                    case TOKEN.MULTIPLY:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.MULTIPLY),value:TOKEN.MULTIPLY});
                        break;
                    case TOKEN.DIVIDE:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.DIVIDE),value:TOKEN.DIVIDE});
                        break;
                    case TOKEN.DOT:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.DOT),value:TOKEN.DOT});
                        break;
                    case TOKEN.COMPLEMENT:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.COMPLEMENT),value:TOKEN.COMPLEMENT});
                        break;
                    case TOKEN.ELEMENTOF:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.ELEMENTOF),value:TOKEN.ELEMENTOF});
                        break;
                    case TOKEN.NOTELEMENTOF:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.NOTELEMENTOF),value:TOKEN.NOTELEMENTOF});
                        break;
                    case TOKEN.EQUAL:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.EQUAL),value:TOKEN.EQUAL});
                        break;
                    case TOKEN.SUBSETOF:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.SUBSETOF),value:TOKEN.SUBSETOF});
                        break;
                    case TOKEN.REALSUBSETOF:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.REALSUBSETOF),value:TOKEN.REALSUBSETOF});
                        break;
                    case TOKEN.UNION:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.UNION),value:TOKEN.UNION});
                        break;
                    case TOKEN.INTERSECTION:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.INTERSECTION),value:TOKEN.INTERSECTION});
                        break;
                    case TOKEN.SETMINUS:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.SETMINUS),value:TOKEN.SETMINUS});
                        break;
                    case TOKEN.COMMA:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.COMMA),value:TOKEN.COMMA});
                        break;
                    case TOKEN.DIVIDES:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.DIVIDES),value:TOKEN.DIVIDES});
                        break;
                    case TOKEN.DOESNOTDIVIDE:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.DOESNOTDIVIDE),value:TOKEN.DOESNOTDIVIDE});
                        break;
                    case TOKEN.LAND:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LAND),value:TOKEN.LAND});
                        break;
                    case TOKEN.LOR:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LOR),value:TOKEN.LOR});
                        break;
                    case TOKEN.VERTICALLINE:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.VERTICALLINE),value:TOKEN.VERTICALLINE});
                        break;
                    case TOKEN.LEFTCURLYBRACE:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LEFTCURLYBRACE),value:TOKEN.LEFTCURLYBRACE});
                        break;
                    case TOKEN.RIGHTCURLYBRACE:
                         tokens.push({type:this.#getTokenName(TOKEN,TOKEN.RIGHTCURLYBRACE),value:TOKEN.RIGHTCURLYBRACE});
                         break;
                    case TOKEN.LEFTPARENTHESIS:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LEFTPARENTHESIS),value:TOKEN.LEFTPARENTHESIS});
                        break;
                    case TOKEN.RIGHTPARENTHESIS:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.RIGHTPARENTHESIS),value:TOKEN.RIGHTPARENTHESIS});
                        break;
                    case TOKEN.LEFTSQUAREBRACKET:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LEFTSQUAREBRACKET),value:TOKEN.LEFTSQUAREBRACKET});
                        break;
                    case TOKEN.RIGHTSQUAREBRACKET:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.RIGHTSQUAREBRACKET),value:TOKEN.RIGHTSQUAREBRACKET});
                        break;
                    case TOKEN.LESSTHAN:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.LESSTHAN),value:TOKEN.LESSTHAN});
                        break;
                    case TOKEN.GREATERTHAN:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.GREATERTHAN),value:TOKEN.GREATERTHAN});
                        break;
                    case TOKEN.EOL:
                        tokens.push({type:this.#getTokenName(TOKEN,TOKEN.EOL),value:TOKEN.EOL});
                        break;
                
                
                    default:
                        tokens.push({type:"undefined",value:this.#input[i],rowPos:i+1});
                        return tokens;
                }
            }
        }
        return tokens
    }
      
    #getTokenName(object,value){
        return Object.keys(object).find(key => object[key] === value).toLowerCase();
    }
}
