import { Lexer, } from '../src/lexer';
describe('Test lexer with different inputs ',()=>{
    test('leftParenthesis',()=>{
        const lexer=new Lexer("{12}")
        expect(lexer.tokenize("{12}")).toStrictEqual([
            {type:"left-curlybrace",value:"{"},
            {type:"numericliteral",value:12},
            /*{type:"separator",value:","},
            {type:"numericliteral",value:345},*/
            {type:"right-curlybrace",value:"}"}
        ]);
    })
})