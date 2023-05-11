import { Point} from "../src/pointsetdiagramlib";

describe("test point class",()=>{
    test("with coordinates x=1 and y=2",()=>{
        expect(new Point(1,2)).toBeInstanceOf(Point);
        expect(new Point(1,2)).toHaveProperty('x',1);
        expect(new Point(1,2)).toHaveProperty('y',2);
        expect(new Point(1,2)).toEqual(new Point(1,2));
    }),
    test("with coordinates x=-2 and y=-8",()=>{
        expect(new Point(-2,-8)).toBeInstanceOf(Point);
        expect(new Point(-2,-8)).toHaveProperty('x',-2);
        expect(new Point(-2,-8)).toHaveProperty('y',-8);
        expect(new Point(-2,-8)).toEqual(new Point(-2,-8));
    })
    test("with coordinates x=1.56789 and y=2.01234",()=>{
        expect(new Point(1.56789,2.01234)).toBeInstanceOf(Point);
        expect(new Point(1.56789,2.01234)).toEqual(new Point(2,2));
        expect(new Point(1.56789,2.01234)).toHaveProperty('x',2);
        expect(new Point(1.56789,2.01234)).toHaveProperty('y',2);
        
    }),
    test("with coordinates x=-2.98765 and y=-8.43210",()=>{
        expect(new Point(-2.98765,-8.43210)).toBeInstanceOf(Point);
        expect(new Point(-2.98765,-8.43210)).toEqual(new Point(-3,-8));
        expect(new Point(-2.98765,-8.43210)).toHaveProperty('x',-3);
        expect(new Point(-2.98765,-8.43210)).toHaveProperty('y',-8);
       
    })
})