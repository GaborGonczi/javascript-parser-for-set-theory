import 
{
    create_set_from_literal,
    create_set_from_formula,
    is_empty,
    is_element_of,
    is_not_element_of,
    are_equal,
    is_subset_of,
    is_real_subset_of,
    complement,
    union,
    intersection,
    difference,
    cardinality,
    add_element,
    del_element,
    
} 
from '../src/lib';

describe("test is_empty function",()=>{
    test("with empty set",()=>{
        expect(is_empty(new Set())).toBe(true);
    })
    test("with non-empty set",()=>{
        expect(is_empty(new Set([1,2,3]))).toBe(false);
    })
})
describe("test is_element_of function",()=>{
    test("with element 3 and empty set",()=>{
        expect(is_element_of(3, new Set())).toBe(false);
    })
    test("with element 1 and set contains 1,2,3",()=>{
        expect(is_element_of(1, new Set([1,2,3]))).toBe(true);
    })
})
describe("test is_not_element_of function",()=>{
    test("with element 2 and empty set",()=>{
        expect(is_not_element_of(2, new Set())).toBe(true);
    })
    test("with element 3 and set contains 1,2,3",()=>{
        expect(is_not_element_of(3, new Set([1, 2, 3]))).toBe(false);
    })

})
describe("test are_equal function",()=>{
    test("with set A contains 1,2 and B contains 1,2",()=>{
        expect(are_equal(new Set([1, 2]), new Set([1, 2]))).toBe(true);
    })
    test("with set A contains 1,2 and B contains 2,3",()=>{
        expect(are_equal(new Set([1, 2]), new Set([2, 3]))).toBe(false);
    })
})
describe("test is_subset_of function",()=>{
    test("with set A contains 1,2 and B contains 1,2",()=>{
        expect(is_subset_of(new Set([1, 2]), new Set([1, 2]))).toBe(true);
    })
    test("with set A contains 2,3 and B contains 4,5",()=>{
        expect(is_subset_of(new Set([2, 3]), new Set([4, 5]))).toBe(false);
    })
})
describe("test is_real_subset_of function",()=>{
    test("with set A contains 1,2 and B contains 1,2",()=>{
        expect(is_real_subset_of(new Set([1, 2]), new Set([1, 2]))).toBe(false);
    })
    test("with set A contains 1,2 and B contains 0,1,2,3,4,5",()=>{
        expect(is_real_subset_of(new Set([1, 2]), new Set([0,1, 2, 3, 4, 5]))).toBe(true);
    })
    test("with set A contains 1,2 and B contains 3,4",()=>{
        expect(is_real_subset_of(new Set([1, 2]), new Set([3, 4]))).toBe(false);
    })
    test("with set A contains 0,1,2,3,4,5 and B contains 0,1,2,3,4,5",()=>{
        expect(is_real_subset_of(new Set([0,1,2,3,4,5]), new Set([0,1,2,3,4,5]))).toBe(false);
    })
})
describe("test complement function",()=>{
    const H = new Set([0, 1, 2, 3, 4, 5]);
    test("with set A contains 1,2 and H which is a universe and contains 0,1,2,3,4,5",()=>{
        expect(complement(new Set([1, 2]), H)).toStrictEqual(new Set([0, 3, 4, 5]));
    })
    test("with set A contains 0,1,2,3,4,5 and H which is a universe and contains 0,1,2,3,4,5",()=>{
        expect(complement(new Set([0, 1, 2, 3, 4, 5]), H)).toStrictEqual(new Set());
    })
    test("with set A contains 4,5 and H which is a universe and contains 0,1,2,3,4,5",()=>{
        expect(complement(new Set([4, 5]), H)).toStrictEqual(new Set([0, 1, 2, 3]));
    })
})
describe("test union function",()=>{
    test("with set A contains 1,2 and B contains 4,5",()=>{
        expect(union(new Set([1, 2]), new Set([4, 5]))).toStrictEqual(new Set([1, 2, 4, 5]));
    })
    test("with set A contains 1,2 and B contains 2,3",()=>{
        expect(union(new Set([1, 2]), new Set([2, 3]))).toStrictEqual(new Set([1, 2, 3]));
    })
    test("with set A contains 2,3 and B contains 4,5",()=>{
        expect(union(new Set([2,3]),new Set([4,5]))).toStrictEqual(new Set([2,3,4,5]))
    })
    test("with set A contains 1,2; B contains 1,2; C contains 2,3; D contains 4,5",()=>{
        expect(union(new Set([1,2]), new Set([1 ,2]),new Set([2,3]), new Set([4 ,5]))).
        toStrictEqual(new Set([1 ,2 ,3 ,4 ,5]));
    })
})
describe("test intersection function",()=>{
    test("with set A contains 1,2 and B contains 2,3",()=>{
        expect(intersection(new Set([1, 2]), new Set([2, 3]))).toStrictEqual(new Set([2]));
    })
    test("with set A contains 2,3 and B contains 4,5",()=>{
        expect(intersection(new Set([2, 3]), new Set([4, 5]))).toStrictEqual(new Set([]));
    })
    test("with set A contains 1,2; B contains 1,2; C contains 2,3; D contains 5,2",()=>{
        expect(intersection(new Set([1, 2]), new Set([1, 2]), new Set([2, 3]), new Set([5, 2])))
        .toStrictEqual(new Set([2]));
    })
})
describe("test difference function",()=>{
    test("with set A contains 1,2 and B contains 2,3 where the searched is A minus B",()=>{
        expect(difference(new Set([1, 2]), new Set([2, 3]))).toStrictEqual(new Set([1]));
    }),
    test("with set A contains 1,2 and B contains 2,3 where the searched is B minus A",()=>{
        expect(difference(new Set([2, 3]), new Set([1, 2]))).toStrictEqual(new Set([3]));
    })
    test("with set A contains 1,2; B contains 1,2; C contains 2,3; D contains 4,5 and H which is a universe and contains 0,1,2,3,4,5",()=>{
        expect(difference(new Set([0,1,2,3,4,5]), union(new Set([1, 2]), new Set([1, 2]), new Set([2, 3]), new Set([4,5])))).toStrictEqual(new Set([0]));
    })
})
describe("test cardinality function",()=>{
    test("with set A contains 2,3",()=>{
        expect(cardinality(new Set([2 ,3]))).toBe(2);
    }),
    test("with set A contains 0,1,2,3,4,5",()=>{
        expect(cardinality(new Set([0 ,1 ,2 ,3 ,4 ,5]))).toBe(6);
    })
})
describe("test add_element function",()=>{
    test("with element 2 and empty set",()=>{
        expect(add_element(2,new Set())).toBe(true);
    }),
    test("with element 2 and set contains 1,2,3",()=>{
        expect(add_element(2,new Set([1,2,3]))).toBe(true);
    })
})
describe("test del_element function",()=>{
    test("with element 1 and set contains 2,3",()=>{
        expect(del_element(1,new Set([2,3]))).toBe(true);
    }),
    test("with element 1 and set A contains 1,2,3",()=>{
        expect(del_element(1,new Set([1,2,3]))).toBe(true);
    })
})
describe("test create_set_from_literal",()=>{
    test("which contains '{1,2,3}'",()=>{
        expect(create_set_from_literal("{1,2,3}")).toStrictEqual(new Set([1,2,3]))
    })
    test("which contains '{4,5,6}'",()=>{
        expect(create_set_from_literal("{4,5,6}")).toStrictEqual(new Set([4,5,6]))
    })
})

describe("test create_set_from_formula",()=>{
    test("where formula is x and 1<=x<=3 x element of N",()=>{
        expect(create_set_from_formula(1,3,(x)=>x)).toStrictEqual(new Set([1,2,3]))
    })
    test("where formula is 2*x and 1<=x<=3 x element of N",()=>{
        expect(create_set_from_formula(1,3,(x)=>2*x)).toStrictEqual(new Set([2,4,6]))
    })
})

