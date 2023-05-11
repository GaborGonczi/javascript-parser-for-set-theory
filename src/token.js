/**
* An object containing the tokens for the lexer and parser.
* @constant
* @type {Object.<string, string>}
*/
export const TOKEN={
    PLUS:"+",
    MINUS:"-",
    MULTIPLY:"*",
    DIVIDE:"/",
    DOT:".",
    TOBEEQUAL:":=",
    ELEMENTOF:"∈",
    NOTELEMENTOF:"∉",
    EQUAL:"=",
    SUBSETOF:"⊆",
    REALSUBSETOF:"⊂",
    COMPLEMENT:"∁",
    UNION:"∪",
    INTERSECTION:"∩",
    SETMINUS:"∖",
    COMMA:",",
    DIVIDES:"∣",
    DOESNOTDIVIDE:"∤",
    VERTICALLINE:"|",
    LAND:"ʌ",
    LOR:"∨",
    LEFTCURLYBRACE:"{",
    RIGHTCURLYBRACE:"}",
    LEFTPARENTHESIS:"(",
    RIGHTPARENTHESIS:")",
    LEFTSQUAREBRACKET:"[",
    RIGHTSQUAREBRACKET:"]",
    LESSTHAN:"<",
    GREATERTHAN:">",
    LESSTHANOREQUAL:"<=",
    GREATERTHANOREQUAL:">=",
    IDENTIFIER:"^([_a-zA-Z][_a-zA-Z0-9]*)$",
    NUMBER:"^(0|[1-9][0-9]*)$",
    EOL:"$"
}

