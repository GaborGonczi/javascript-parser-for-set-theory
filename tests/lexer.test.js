import { Lexer, } from "../src/lexer";

describe("Test lexer constructor",()=>{
    test("with empty string",()=>{
        const lexer=new Lexer("",true);
        expect(lexer.getInput()).toBe("$")
    })
    test("with non-empty string",()=>{
        const lexer=new Lexer("someinput",true);
        expect(lexer.getInput()).toBe("someinput$")
    })
    
})

describe("Test lexer with different inputs ",()=>{
    test("3∈A",()=>{
        const lexer=new Lexer("3∈A")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"number",value:3},
            {type:"elementof",value:"∈"},
            {type:"identifier",value:"A"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("-2∉A",()=>{
        const lexer=new Lexer("-2∉A")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"minus",value:"-"},
            {type:"number",value:2},
            {type:"notelementof",value:"∉"},
            {type:"identifier",value:"A"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("1∈B",()=>{
        const lexer=new Lexer("1∈B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"number",value:1},
            {type:"elementof",value:"∈"},
            {type:"identifier",value:"B"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("3∉B",()=>{
        const lexer=new Lexer("3∉B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"number",value:3},
            {type:"notelementof",value:"∉"},
            {type:"identifier",value:"B"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A:={}",()=>{
        const lexer=new Lexer("A:={}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B:={1,2,3}",()=>{
        const lexer=new Lexer("B:={1,2,3}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"number",value:1},
            {type:"comma",value:","},
            {type:"number",value:2},
            {type:"comma",value:","},
            {type:"number",value:3},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A.add(2)",()=>{
        const lexer=new Lexer("A.add(2)")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"dot",value:"."},
            {type:"builtin",value:"add"},
            {type:"leftparenthesis",value:"("},
            {type:"number",value:2},
            {type:"rightparenthesis",value:")"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B.delete(1)",()=>{
        const lexer=new Lexer("B.delete(1)")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"dot",value:"."},
            {type:"builtin",value:"delete"},
            {type:"leftparenthesis",value:"("},
            {type:"number",value:1},
            {type:"rightparenthesis",value:")"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("Venn(A,B)",()=>{
        const lexer=new Lexer("Venn(A,B)")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"builtin",value:"Venn"},
            {type:"leftparenthesis",value:"("},
            {type:"identifier",value:"A"},
            {type:"comma",value:","},
            {type:"identifier",value:"B"},
            {type:"rightparenthesis",value:")"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("C:={x∣x>1ʌx<=3}",()=>{
        const lexer=new Lexer("C:={x∣x>1ʌx<=3}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"C"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"identifier",value:"x"},
            {type:"divides",value:"∣"},
            {type:"identifier",value:"x"},
            {type:"greaterthan",value:">"},
            {type:"number",value:1},
            {type:"land",value:"ʌ"},
            {type:"identifier",value:"x"},
            {type:"lessthanorequal",value:"<="},
            {type:"number",value:3},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("D:={y ∣ z>=0 ʌ z<3 ʌ y=2*z}",()=>{
        const lexer=new Lexer("D:={y ∣ z>=0 ʌ z<3 ʌ y=2*z}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"D"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"identifier",value:"y"},
            {type:"divides",value:"∣"},
            {type:"identifier",value:"z"},
            {type:"greaterthanorequal",value:">="},
            {type:"number",value:0},
            {type:"land",value:"ʌ"},
            {type:"identifier",value:"z"},
            {type:"lessthan",value:"<"},
            {type:"number",value:3},
            {type:"land",value:"ʌ"},
            {type:"identifier",value:"y"},
            {type:"equal",value:"="},
            {type:"number",value:2},
            {type:"multiply",value:"*"},
            {type:"identifier",value:"z"},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("E:={y ∣ z>0 ʌ z<=100 ʌ y=z/10}",()=>{
        const lexer=new Lexer("E:={y ∣ z>0 ʌ z<=100 ʌ y=z/10}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"E"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"identifier",value:"y"},
            {type:"divides",value:"∣"},
            {type:"identifier",value:"z"},
            {type:"greaterthan",value:">"},
            {type:"number",value:0},
            {type:"land",value:"ʌ"},
            {type:"identifier",value:"z"},
            {type:"lessthanorequal",value:"<="},
            {type:"number",value:100},
            {type:"land",value:"ʌ"},
            {type:"identifier",value:"y"},
            {type:"equal",value:"="},
            {type:"identifier",value:"z"},
            {type:"divide",value:"/"},
            {type:"number",value:10},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("F:={i∣ i>=0ʌi<=20ʌ(5∣i∨7∣iʌ10∤i)}",()=>{
        const lexer=new Lexer("F:={i∣ i>=0ʌi<=20ʌ(5∣i∨7∣iʌ10∤i)}");
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"F"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"identifier",value:"i"},
            {type:"divides",value:"∣"},
            {type:"identifier",value:"i"},
            {type:"greaterthanorequal",value:">="},
            {type:"number",value:0},
            {type:"land",value:"ʌ"},
            {type:"identifier",value:"i"},
            {type:"lessthanorequal",value:"<="},
            {type:"number",value:20},
            {type:"land",value:"ʌ"},
            {type:"leftparenthesis",value:"("},
            {type:"number",value:5},
            {type:"divides",value:"∣"},
            {type:"identifier",value:"i"},
            {type:"lor",value:"∨"},
            {type:"number",value:7},
            {type:"divides",value:"∣"},
            {type:"identifier",value:"i"},
            {type:"land",value:"ʌ"},
            {type:"number",value:10},
            {type:"doesnotdivide",value:"∤"},
            {type:"identifier",value:"i"},
            {type:"rightparenthesis",value:")"},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ])
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A=B",()=>{
        const lexer=new Lexer("A=B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"equal",value:"="},
            {type:"identifier",value:"B"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B=C",()=>{
        const lexer=new Lexer("B=C")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"equal",value:"="},
            {type:"identifier",value:"C"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A⊆B",()=>{
        const lexer=new Lexer("A⊆B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"subsetof",value:"⊆"},
            {type:"identifier",value:"B"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("C⊆D",()=>{
        const lexer=new Lexer("C⊆D")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"C"},
            {type:"subsetof",value:"⊆"},
            {type:"identifier",value:"D"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A⊂B",()=>{
        const lexer=new Lexer("A⊂B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"realsubsetof",value:"⊂"},
            {type:"identifier",value:"B"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A⊂H",()=>{
        const lexer=new Lexer("A⊂H")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"realsubsetof",value:"⊂"},
            {type:"identifier",value:"H"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("H⊂H",()=>{
        const lexer=new Lexer("H⊂H")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"H"},
            {type:"realsubsetof",value:"⊂"},
            {type:"identifier",value:"H"},
            {type:"eol",value:"$"}
        ]);expect(lexer).not.toHaveProperty("getInput");
    })
    test("A∁",()=>{
        const lexer=new Lexer("A∁")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"complement",value:"∁"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("H∁",()=>{
        const lexer=new Lexer("H∁")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"H"},
            {type:"complement",value:"∁"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("D∁",()=>{
        const lexer=new Lexer("D∁")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"D"},
            {type:"complement",value:"∁"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A∪D",()=>{
        const lexer=new Lexer("A∪D")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"D"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B∪C",()=>{
        const lexer=new Lexer("B∪C")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"C"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("C∪D",()=>{
        const lexer=new Lexer("C∪D")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"C"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"D"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A∪B∪C∪D",()=>{
        const lexer=new Lexer("A∪B∪C∪D")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"B"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"C"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"D"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B∩C",()=>{
        const lexer=new Lexer("B∩C")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("D∩C",()=>{
        const lexer=new Lexer("D∩C")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"D"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B∖C",()=>{
        const lexer=new Lexer("B∖C")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"setminus",value:"∖"},
            {type:"identifier",value:"C"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("C∖B",()=>{
        const lexer=new Lexer("C∖B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"C"},
            {type:"setminus",value:"∖"},
            {type:"identifier",value:"B"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("H∖(A∪B∪C∪D)",()=>{
        const lexer=new Lexer("H∖(A∪B∪C∪D)")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"H"},
            {type:"setminus",value:"∖"},
            {type:"leftparenthesis",value:"("},
            {type:"identifier",value:"A"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"B"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"C"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"D"},
            {type:"rightparenthesis",value:")"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("C:=[1,2]",()=>{
        const lexer=new Lexer("C:=[1,2]")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"C"},
            {type:"tobeequal",value:":="},
            {type:"leftsquarebracket",value:"["},
            {type:"number",value:1},
            {type:"comma",value:","},
            {type:"number",value:2},
            {type:"rightsquarebracket",value:"]"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("D:=[-2,-8]",()=>{
        const lexer=new Lexer("D:=[-2,-8]")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"D"},
            {type:"tobeequal",value:":="},
            {type:"leftsquarebracket",value:"["},
            {type:"minus",value:"-"},
            {type:"number",value:2},
            {type:"comma",value:","},
            {type:"minus",value:"-"},
            {type:"number",value:8},
            {type:"rightsquarebracket",value:"]"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("A:={[3,-4],[5,-6]}",()=>{
        const lexer=new Lexer("A:={[3,-4],[5,-6]}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"leftsquarebracket",value:"["},
            {type:"number",value:3},
            {type:"comma",value:","},
            {type:"minus",value:"-"},
            {type:"number",value:4},
            {type:"rightsquarebracket",value:"]"},
            {type:"comma",value:","},
            {type:"leftsquarebracket",value:"["},
            {type:"number",value:5},
            {type:"comma",value:","},
            {type:"minus",value:"-"},
            {type:"number",value:6},
            {type:"rightsquarebracket",value:"]"},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("B:={C,D}",()=>{
        const lexer=new Lexer("B:={C,D}")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"B"},
            {type:"tobeequal",value:":="},
            {type:"leftcurlybrace",value:"{"},
            {type:"identifier",value:"C"},
            {type:"comma",value:","},
            {type:"identifier",value:"D"},
            {type:"rightcurlybrace",value:"}"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("PointSetDiagram(A,B)",()=>{
        const lexer=new Lexer("PointSetDiagram(A,B)")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"builtin",value:"PointSetDiagram"},
            {type:"leftparenthesis",value:"("},
            {type:"identifier",value:"A"},
            {type:"comma",value:","},
            {type:"identifier",value:"B"},
            {type:"rightparenthesis",value:")"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("PointSetDiagram({[3,5],[-7,-8]})",()=>{
        const lexer=new Lexer("PointSetDiagram({[3,5],[-7,-8]})")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"builtin",value:"PointSetDiagram"},
            {type:"leftparenthesis",value:"("},
            {type:"leftcurlybrace",value:"{"},
            {type:"leftsquarebracket",value:"["},
            {type:"number",value:3},
            {type:"comma",value:","},
            {type:"number",value:5},
            {type:"rightsquarebracket",value:"]"},
            {type:"comma",value:","},
            {type:"leftsquarebracket",value:"["},
            {type:"minus",value:"-"},
            {type:"number",value:7},
            {type:"comma",value:","},
            {type:"minus",value:"-"},
            {type:"number",value:8},
            {type:"rightsquarebracket",value:"]"},
            {type:"rightcurlybrace",value:"}"},
            {type:"rightparenthesis",value:")"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("|H|",()=>{
        const lexer=new Lexer("|H|")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"verticalline",value:"|"},
            {type:"identifier",value:"H"},
            {type:"verticalline",value:"|"},
            {type:"eol",value:"$"}
        ]);
    })
    test("|C|",()=>{
        const lexer=new Lexer("|C|")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"verticalline",value:"|"},
            {type:"identifier",value:"C"},
            {type:"verticalline",value:"|"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("(A∩C)∁=A∁∪C∁",()=>{
        const lexer=new Lexer("(A∩C)∁=A∁∪C∁")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"leftparenthesis",value:"("},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"rightparenthesis",value:")"},
            {type:"complement",value:"∁"},
            {type:"equal",value:"="},
            {type:"identifier",value:"A"},
            {type:"complement",value:"∁"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"C"},
            {type:"complement",value:"∁"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("(A∪C)∁=A∁∩C∁",()=>{
        const lexer=new Lexer("(A∪C)∁=A∁∩C∁")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"leftparenthesis",value:"("},
            {type:"identifier",value:"A"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"C"},
            {type:"rightparenthesis",value:")"},
            {type:"complement",value:"∁"},
            {type:"equal",value:"="},
            {type:"identifier",value:"A"},
            {type:"complement",value:"∁"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"complement",value:"∁"},
            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
    test("|H|=|A|+|B|+|C|+|D|-|A∩B|-|A∩C|-|A∩D|-|B∩C|-|B∩D|-|C∩D|+|A∩B∩C|+|A∩B∩D|+|B∩C∩D|+|A∩C∩D|-|A∩ B∩C∩D|+|(A∪B∪C∪D)∁|",()=>{
        const lexer=new Lexer("|H|=|A|+|B|+|C|+|D|-|A∩B|-|A∩C|-|A∩D|-|B∩C|-|B∩D|-|C∩D|+|A∩B∩C|+|A∩B∩D|+|B∩C∩D|+|A∩C∩D|-|A∩ B∩C∩D|+|(A∪B∪C∪D)∁|")
        expect(lexer.tokenize()).toStrictEqual([

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"H"},
            {type:"verticalline",value:"|"},

            {type:"equal",value:"="},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"B"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"C"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"B"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"C"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"minus",value:"-"},

            {type:"verticalline",value:"|"},
            {type:"identifier",value:"A"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"B"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"C"},
            {type:"intersection",value:"∩"},
            {type:"identifier",value:"D"},
            {type:"verticalline",value:"|"},

            {type:"plus",value:"+"},

            {type:"verticalline",value:"|"},
            {type:"leftparenthesis",value:"("},
            {type:"identifier",value:"A"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"B"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"C"},
            {type:"union",value:"∪"},
            {type:"identifier",value:"D"},
            {type:"rightparenthesis",value:")"},
            {type:"complement",value:"∁"},
            {type:"verticalline",value:"|"},

            {type:"eol",value:"$"}
        ]);
        expect(lexer).not.toHaveProperty("getInput");

    })
    test("A?B",()=>{
        const lexer=new Lexer("A?B")
        expect(lexer.tokenize()).toStrictEqual([
            {type:"identifier",value:"A"},
            {type:"undefined",value:"?",rowPos:2},
        ]);
        expect(lexer).not.toHaveProperty("getInput");
    })
})
