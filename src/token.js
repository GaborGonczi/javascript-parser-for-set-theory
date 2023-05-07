/**
* An object containing the tokens for the lexer and parser.
* @constant
* @type {Object.<string, string>}
*/
export const TOKEN={
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
    VERTICALBAR:"|",
    LEFTCURLYBRACE:"{",
    RIGHTCURLYBRACE:"}",
    LESSTHAN:"<",
    GREATERTHAN:">",
    LESSTHANOREQUAL:"<=",
    GREATERTHANOREQUAL:">=",
    IDENTIFIER:"^([_a-zA-Z][_a-zA-Z0-9]*)$",
    NUMBER:"^(0|-?[1-9][0-9]*)$",
}

