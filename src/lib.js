import { Point, PointSetDiagramOptions, point_set_diagram } from "./pointsetdiagramlib";

/**
* Determines whether the given element is a number.
* @function
* @param {any} elem - The input element.
* @returns {boolean} True if the input element is a number; false otherwise.
*/
export function is_number(elem) {
    return typeof elem === "number";
}
/**
* Determines whether the given literal is a string.
* @function
* @param {any} literal - The input literal.
* @returns {boolean} True if the value is a string; false otherwise.
*/
export function is_string(literal) {
    return typeof literal === "string";
}
/**
* Determines whether the given ufunction is a function.
* @function
* @param {any} ufunction - The input literal.
* @returns {boolean} True if the value is a function; false otherwise.
*/
export function is_function(ufunction) {
    return typeof ufunction === "function"
}
/**
* Determines whether the given element is a whole number.
* @function
* @param {any} elem - The input element.
* @returns {boolean} True if the input element is a whole number; false otherwise.
*/
export function is_whole_number(elem) {
    let macher = new RegExp('^(0|-?[1-9][0-9]*)$');
    return is_number(elem) && macher.test(elem);
}
/**
* Determines whether the given object is a Set object.
* @function
* @param {Set} set - The input object.
* @returns {boolean} True if the input object is a Set object; false otherwise.
*/
export function is_set(set) {
    return typeof set === "object" && set instanceof Set
}
/**
* Thrown as an exception by other functions, if arguments are illegal passed to a caller
* @function
* @param {string} func_name - The name of the function that received illegal arguments.
*/
export function illegal_arguments(func_name) {
    return new Error(`Illegal arguments of a function ${func_name}`);
}
/**
* Creates a set object from a string literal of comma-separated numbers enclosed in curly braces.
* @param {string} setliteral - The string literal representing the set.
* @returns {Set} A set object containing the numbers from the string literal.
* @throws {Error} If the argument is not a string.
*/
export function create_set_from_literal(setliteral) {
    if (!is_string(setliteral)) illegal_arguments("create_set_from_literal")
    const result = new Set();
    setliteral.slice(1, -1).split(',').forEach(elem => {
        result.add(parseFloat(elem))
    })
    return result;
}
/**
* Creates a set object from a formula that generates numbers based on an index variable.
* @param {number} start - The starting value of the index variable.
* @param {number} end - The ending value of the index variable.
* @param {function} formula - The formula that takes an index variable and returns a number.
* @returns {Set} A set object containing the numbers generated by the formula.
* @throws {Error} If any of the arguments are invalid.
*/
export function create_set_from_formula(start, end, formula) {
    if (!is_whole_number(start) || !is_whole_number(end) || !is_function(formula)) return illegal_arguments("create_set_from_formula")
    const result = new Set();
    for (let i = start; i <= end; i++) {
        result.add(formula(i));
    }
    return result;
}
/**
* Determines whether the given set is empty.
* @function
* @param {Set} set - The input set.
* @returns {boolean} True if the input set is empty; false otherwise.
* @throws {Error} If the input argument is not a Set object.
*/
export function is_empty(set) {
    if (!is_set(set)) illegal_arguments('is_empty')
    return set.size === 0;
}
/**
* Determines whether the given element is an element of the given set.
* @function
* @param {any} elem - The input element.
* @param {Set} set - The input set.
* @returns {boolean} True if the input element is an element of the input set; false otherwise.
* @throws {Error} If either argument is not a whole number or if the second argument is not a Set object.
*/
export function is_element_of(elem, set) {
    if (!is_whole_number(elem) || !is_set(set)) illegal_arguments("is_element_of")
    return set.has(elem)
}
/**
* Determines whether the given element is not an element of the given set.
* @function
* @param {any} elem - The input element.
* @param {Set} set - The input set.
* @returns {boolean} True if the input element is not an element of the input set; false otherwise.
* @throws {Error} If either argument is not a whole number or if the second argument is not a Set object.
*/
export function is_not_element_of(elem, set) {
    if (!is_whole_number(elem) || !is_set(set)) illegal_arguments("is_not_element_of")
    return !is_element_of(elem, set)
}
/**
* Determines whether two sets are equal to each other (i.e., have exactly the same elements).
* @function
* @param {Set} setA - The first set to compare.
* @param {Set} setB - The second set to compare.
* @returns {boolean} True if both sets are equal; false otherwise.
* @throws {Error} If either argument is not a Set object.
*/
export function are_equal(setA, setB) {
    if (!is_set(setA) || !is_set(setB)) illegal_arguments("are_equal")
    return is_empty(difference(setA, setB)) && is_empty(difference(setB, setA))
}
/**
* Determines whether setA is a subset of setB.
* @function
* @param {Set} setA - The first set.
* @param {Set} setB - The second set.
* @returns {boolean} True if setA is a subset of setB; false otherwise.
* @throws {Error} If either argument is not a Set object.
*/
export function is_subset_of(setA, setB) {
    if (!is_set(setA) || !is_set(setB)) illegal_arguments("is_subset_of")
    for (const i of setA) {
        if (!setB.has(i)) {
            return false
        }
    }
    return true
}
/**
* Determines whether setA is a real subset of setB.
* @function
* @param {Set} setA - The first set.
* @param {Set} setB - The second set.
* @returns {boolean} True if setA is a real subset of setB; false otherwise.
* @throws {Error} If either argument is not a Set object.
*/
export function is_real_subset_of(setA, setB) {
    if (!is_set(setA) || !is_set(setB)) illegal_arguments("is_real_subset_of")
    return is_subset_of(setA, setB) && !are_equal(setA, setB);
}
/**
* Returns the complement of a given set with respect to the given universe.
* @function
* @param {Set} setA - The input set.
* @param {Set} Universe - The universe of discourse.
* @returns {Set} The complement of the input set with respect to the universe.
* @throws {Error} If either argument is not a Set object.
*/
export function complement(setA, Universe) {
    if (!is_set(setA) || !is_set(Universe)) illegal_arguments("complement")
    return difference(Universe, setA);
}
/**
* Returns the union of two or more sets.
* @function
* @param {...Set} sets - Two or more sets to be unioned together.
* @returns {Set} The union of all input sets.
* @throws {Error} If any argument is not a Set object.
*/
export function union(...sets) {

    for (const set of sets) {
        if (!is_set(set)) illegal_arguments("union")
    }
    const result = new Set();
    for (const set of sets) {
        for (const element of set) {
            result.add(element);
        }
    }
    return result;
}
/**
* Returns the intersection of two or more sets.
* @function
* @param {...Set} sets - Two or more sets to be intersected together.
* @returns {Set} The intersection of all input sets.
* @throws {Error} If any argument is not a Set object.
*/
export function intersection(...sets) {
    for (const set of sets) {
        if (!is_set(set)) illegal_arguments("intersection");
    }
    return sets.reduce((accumulator, currentSet) => {
        return new Set([...accumulator].filter(element => currentSet.has(element)));
    });
}
/**
* Calculates the difference between two sets.
* @function
* @param {Set} setA - The first set.
* @param {Set} setB - The second set.
* @returns {Set} - The difference between the two sets.
* @throws {Error} - If either argument is not a set.
*/
export function difference(setA, setB) {
    if (!is_set(setA) || !is_set(setB)) illegal_arguments("difference")
    const result = new Set();
    for (const element of setA) {
        if (!setB.has(element)) {
            result.add(element);
        }
    }
    return result
}
/**
* Calculates the cardinality of a set.
* @function
* @param {Set} set - The set to calculate the cardinality of.
* @returns {number} - The cardinality of the set.
* @throws {Error} - If the argument is not a set.
*/
export function cardinality(set) {
    if (!is_set(set)) illegal_arguments("cardinality")
    return set.size
}
/**
* Adds an element to a set.
* @function
* @param {number} elem - The element to add to the set.
* @param {Set} set - The set to add the element to.
* @returns {boolean} - True if the element was added successfully, false otherwise.
* @throws {Error} - If either argument is not a set or if elem is not a whole number.
*/
export function add_element(elem, set) {
    if (!is_set(set) || !is_whole_number(elem)) illegal_arguments("add_element")
    let oldSize = set.size;
    return set.has(elem) || (set.add(elem).size === oldSize + 1);
}
/**
* Deletes an element from a set.
* @function
* @param {number} elem - The element to delete from the set.
* @param {Set} set - The set to delete the element from.
* @returns {boolean} - True if the element was deleted successfully, false otherwise.
* @throws {Error} - If either argument is not a set or if elem is not a whole number.
*/
export function del_element(elem, set) {
    if (!is_set(set) || !is_whole_number(elem)) illegal_arguments("del_element")
    return !set.has(elem) || (set.delete(elem) === true)
}
export function Venn() {
    //TODO:Implement the function which retuns an image about the Venn diagrams of the given sets
}
// inclusion–exclusion principle-logikai szita
export function IEP() {
    //TODO:Implement the function
}

export { Point, PointSetDiagramOptions, point_set_diagram };