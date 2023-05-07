## Classes

<dl>
<dt><a href="#Evaluator">Evaluator</a></dt>
<dd><p>A class that evaluates an abstract syntax tree (AST).</p>
</dd>
<dt><a href="#Lexer">Lexer</a></dt>
<dd><p>A class that represents a lexer for a set language.</p>
</dd>
<dt><a href="#Parser">Parser</a></dt>
<dd><p>A class that parses tokens into an abstract syntax tree (AST) for set theory expressions.</p>
</dd>
<dt><a href="#Point">Point</a></dt>
<dd><p>A class that represents a single two dimensional point.</p>
</dd>
<dt><a href="#PointSetDiagramOptions">PointSetDiagramOptions</a></dt>
<dd><p>A class that represents the options for a point set diagram.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#TOKEN">TOKEN</a> : <code>Object.&lt;string, string&gt;</code></dt>
<dd><p>An object containing the tokens for the lexer and parser.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#is_number">is_number(elem)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the given element is a number.</p>
</dd>
<dt><a href="#is_whole_number">is_whole_number(elem)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the given element is a whole number.</p>
</dd>
<dt><a href="#is_set">is_set(set)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the given object is a Set object.</p>
</dd>
<dt><a href="#illegal_arguments">illegal_arguments(func_name)</a></dt>
<dd><p>Thrown as an exception by other functions, if arguments are illegal passed to a caller</p>
</dd>
<dt><a href="#is_empty">is_empty(set)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the given set is empty.</p>
</dd>
<dt><a href="#is_element_of">is_element_of(elem, set)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the given element is an element of the given set.</p>
</dd>
<dt><a href="#is_not_element_of">is_not_element_of(elem, set)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether the given element is not an element of the given set.</p>
</dd>
<dt><a href="#are_equal">are_equal(setA, setB)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether two sets are equal to each other (i.e., have exactly the same elements).</p>
</dd>
<dt><a href="#is_subset_of">is_subset_of(setA, setB)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether setA is a subset of setB.</p>
</dd>
<dt><a href="#is_real_subset_of">is_real_subset_of(setA, setB)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines whether setA is a real subset of setB.</p>
</dd>
<dt><a href="#complement">complement(setA, Universe)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the complement of a given set with respect to the given universe.</p>
</dd>
<dt><a href="#union">union(...sets)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the union of two or more sets.</p>
</dd>
<dt><a href="#intersection">intersection(...sets)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the intersection of two or more sets.</p>
</dd>
<dt><a href="#difference">difference(setA, setB)</a> ⇒ <code>Set</code></dt>
<dd><p>Calculates the difference between two sets.</p>
</dd>
<dt><a href="#cardinality">cardinality(set)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the cardinality of a set.</p>
</dd>
<dt><a href="#add_element">add_element(elem, set)</a> ⇒ <code>boolean</code></dt>
<dd><p>Adds an element to a set.</p>
</dd>
<dt><a href="#del_element">del_element(elem, set)</a> ⇒ <code>boolean</code></dt>
<dd><p>Deletes an element from a set.</p>
</dd>
<dt><a href="#is_point">is_point(point)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if an object is an instance of Point.</p>
</dd>
<dt><a href="#is_point_set">is_point_set(points)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a set contains only instances of Point.</p>
</dd>
<dt><a href="#point_set_diagram">point_set_diagram(points, [options])</a> ⇒ <code>string</code></dt>
<dd><p>Draws a point set diagram on a canvas element and returns its data URL.</p>
</dd>
<dt><a href="#draw_horizontal_axes">draw_horizontal_axes(width, ctx, computedParams)</a></dt>
<dd><p>Draws the horizontal axis and labels on the canvas context.</p>
</dd>
<dt><a href="#draw_vertical_axes">draw_vertical_axes(height, ctx, computedParams)</a></dt>
<dd><p>Draws the vertical axis and labels on the canvas context.</p>
</dd>
<dt><a href="#draw_points">draw_points(points, ctx, computedParams)</a></dt>
<dd><p>Draws the points on the canvas context.</p>
</dd>
<dt><a href="#get_canvas_coordinates">get_canvas_coordinates(pointx, pointy, computedParams)</a> ⇒ <code>Object</code></dt>
<dd><p>Converts the point coordinates from the diagram space to the canvas space.</p>
</dd>
</dl>

<a name="TOKEN"></a>

## TOKEN : <code>Object.&lt;string, string&gt;</code>
An object containing the tokens for the lexer and parser.

**Kind**: global constant  
<a name="is_number"></a>

## is\_number(elem) ⇒ <code>boolean</code>
Determines whether the given element is a number.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the input element is a number; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>any</code> | The input element. |

<a name="is_whole_number"></a>

## is\_whole\_number(elem) ⇒ <code>boolean</code>
Determines whether the given element is a whole number.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the input element is a whole number; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>any</code> | The input element. |

<a name="is_set"></a>

## is\_set(set) ⇒ <code>boolean</code>
Determines whether the given object is a Set object.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the input object is a Set object; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The input object. |

<a name="illegal_arguments"></a>

## illegal\_arguments(func_name)
Thrown as an exception by other functions, if arguments are illegal passed to a caller

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| func_name | <code>string</code> | The name of the function that received illegal arguments. |

<a name="is_empty"></a>

## is\_empty(set) ⇒ <code>boolean</code>
Determines whether the given set is empty.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the input set is empty; false otherwise.  
**Throws**:

- <code>Error</code> If the input argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The input set. |

<a name="is_element_of"></a>

## is\_element\_of(elem, set) ⇒ <code>boolean</code>
Determines whether the given element is an element of the given set.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the input element is an element of the input set; false otherwise.  
**Throws**:

- <code>Error</code> If either argument is not a whole number or if the second argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>any</code> | The input element. |
| set | <code>Set</code> | The input set. |

<a name="is_not_element_of"></a>

## is\_not\_element\_of(elem, set) ⇒ <code>boolean</code>
Determines whether the given element is not an element of the given set.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the input element is not an element of the input set; false otherwise.  
**Throws**:

- <code>Error</code> If either argument is not a whole number or if the second argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>any</code> | The input element. |
| set | <code>Set</code> | The input set. |

<a name="are_equal"></a>

## are\_equal(setA, setB) ⇒ <code>boolean</code>
Determines whether two sets are equal to each other (i.e., have exactly the same elements).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if both sets are equal; false otherwise.  
**Throws**:

- <code>Error</code> If either argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| setA | <code>Set</code> | The first set to compare. |
| setB | <code>Set</code> | The second set to compare. |

<a name="is_subset_of"></a>

## is\_subset\_of(setA, setB) ⇒ <code>boolean</code>
Determines whether setA is a subset of setB.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if setA is a subset of setB; false otherwise.  
**Throws**:

- <code>Error</code> If either argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| setA | <code>Set</code> | The first set. |
| setB | <code>Set</code> | The second set. |

<a name="is_real_subset_of"></a>

## is\_real\_subset\_of(setA, setB) ⇒ <code>boolean</code>
Determines whether setA is a real subset of setB.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if setA is a real subset of setB; false otherwise.  
**Throws**:

- <code>Error</code> If either argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| setA | <code>Set</code> | The first set. |
| setB | <code>Set</code> | The second set. |

<a name="complement"></a>

## complement(setA, Universe) ⇒ <code>Set</code>
Returns the complement of a given set with respect to the given universe.

**Kind**: global function  
**Returns**: <code>Set</code> - The complement of the input set with respect to the universe.  
**Throws**:

- <code>Error</code> If either argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| setA | <code>Set</code> | The input set. |
| Universe | <code>Set</code> | The universe of discourse. |

<a name="union"></a>

## union(...sets) ⇒ <code>Set</code>
Returns the union of two or more sets.

**Kind**: global function  
**Returns**: <code>Set</code> - The union of all input sets.  
**Throws**:

- <code>Error</code> If any argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| ...sets | <code>Set</code> | Two or more sets to be unioned together. |

<a name="intersection"></a>

## intersection(...sets) ⇒ <code>Set</code>
Returns the intersection of two or more sets.

**Kind**: global function  
**Returns**: <code>Set</code> - The intersection of all input sets.  
**Throws**:

- <code>Error</code> If any argument is not a Set object.


| Param | Type | Description |
| --- | --- | --- |
| ...sets | <code>Set</code> | Two or more sets to be intersected together. |

<a name="difference"></a>

## difference(setA, setB) ⇒ <code>Set</code>
Calculates the difference between two sets.

**Kind**: global function  
**Returns**: <code>Set</code> - - The difference between the two sets.  
**Throws**:

- <code>Error</code> - If either argument is not a set.


| Param | Type | Description |
| --- | --- | --- |
| setA | <code>Set</code> | The first set. |
| setB | <code>Set</code> | The second set. |

<a name="cardinality"></a>

## cardinality(set) ⇒ <code>number</code>
Calculates the cardinality of a set.

**Kind**: global function  
**Returns**: <code>number</code> - - The cardinality of the set.  
**Throws**:

- <code>Error</code> - If the argument is not a set.


| Param | Type | Description |
| --- | --- | --- |
| set | <code>Set</code> | The set to calculate the cardinality of. |

<a name="add_element"></a>

## add\_element(elem, set) ⇒ <code>boolean</code>
Adds an element to a set.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if the element was added successfully, false otherwise.  
**Throws**:

- <code>Error</code> - If either argument is not a set or if elem is not a whole number.


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>number</code> | The element to add to the set. |
| set | <code>Set</code> | The set to add the element to. |

<a name="del_element"></a>

## del\_element(elem, set) ⇒ <code>boolean</code>
Deletes an element from a set.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if the element was deleted successfully, false otherwise.  
**Throws**:

- <code>Error</code> - If either argument is not a set or if elem is not a whole number.


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>number</code> | The element to delete from the set. |
| set | <code>Set</code> | The set to delete the element from. |

<a name="is_point"></a>

## is\_point(point) ⇒ <code>boolean</code>
Check if an object is an instance of Point.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the object is an instance of Point, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>object</code> | The object to check. |

<a name="is_point_set"></a>

## is\_point\_set(points) ⇒ <code>boolean</code>
Check if a set contains only instances of Point.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the set contains only instances of Point, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Set</code> | The set to check. |

<a name="point_set_diagram"></a>

## point\_set\_diagram(points, [options]) ⇒ <code>string</code>
Draws a point set diagram on a canvas element and returns its data URL.

**Kind**: global function  
**Returns**: <code>string</code> - The data URL of the canvas element.  
**Throws**:

- <code>Error</code> If points is not a valid point set.


| Param | Type | Description |
| --- | --- | --- |
| points | <code>Set</code> | An array of objects representing points with x and y properties. |
| [options] | [<code>PointSetDiagramOptions</code>](#PointSetDiagramOptions) | An optional object containing options for the diagram. |

**Example**  
```js
// Draw a point set diagram with default options
point_set_diagram([{x: 1, y: 2}, {x: 3, y: 4}]);
```
<a name="draw_horizontal_axes"></a>

## draw\_horizontal\_axes(width, ctx, computedParams)
Draws the horizontal axis and labels on the canvas context.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | The width of the canvas element. |
| ctx | <code>CanvasRenderingContext2D</code> | The canvas rendering context. |
| computedParams | <code>Object</code> | An object containing the computed parameters for the diagram. |

<a name="draw_vertical_axes"></a>

## draw\_vertical\_axes(height, ctx, computedParams)
Draws the vertical axis and labels on the canvas context.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | The height of the canvas element. |
| ctx | <code>CanvasRenderingContext2D</code> | The canvas rendering context. |
| computedParams | <code>Object</code> | An object containing the computed parameters for the diagram. |

<a name="draw_points"></a>

## draw\_points(points, ctx, computedParams)
Draws the points on the canvas context.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array</code> | An array of objects representing points with x and y properties. |
| ctx | <code>CanvasRenderingContext2D</code> | The canvas rendering context. |
| computedParams | <code>Object</code> | An object containing the computed parameters for the diagram. |

<a name="get_canvas_coordinates"></a>

## get\_canvas\_coordinates(pointx, pointy, computedParams) ⇒ <code>Object</code>
Converts the point coordinates from the diagram space to the canvas space.

**Kind**: global function  
**Returns**: <code>Object</code> - An object with x and y properties representing the point coordinates in the canvas space.  

| Param | Type | Description |
| --- | --- | --- |
| pointx | <code>number</code> | The x coordinate of the point in the diagram space. |
| pointy | <code>number</code> | The y coordinate of the point in the diagram space. |
| computedParams | <code>Object</code> | An object containing the computed parameters for the diagram. |

