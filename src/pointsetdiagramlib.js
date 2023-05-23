import { createCanvas } from 'canvas';
import {is_number,is_whole_number, is_set, illegal_arguments } from "./lib.js";
/**
* A class that represents a single two dimensional point.
* @export
*/
export class Point{
    /**
    * Create a point.
    * @param {number} x - The x coordinate of the point.
    * @param {number} y - The y coordinate of the point.
    * @throws {Error} If x or y are not numbers.
    */
    constructor(x,y){
        if(!is_number(x)||!is_number(y)) illegal_arguments("Point class constructor")
        if(!is_whole_number(x)||!is_whole_number(y))
        {
            this.x=Number(x.toFixed(0));
            this.y=Number(y.toFixed(0));
        }
        else{
            this.x=x;
            this.y=y;
        }
        
    }

}
/**
* Check if an object is an instance of Point.
* @function
* @param {object} point - The object to check.
* @returns {boolean} True if the object is an instance of Point, false otherwise.
*/
function is_point(point){
    return typeof point === "object" && point instanceof Point;
}
/**
* Check if a set contains only instances of Point.
* @function
* @param {Set} points - The set to check.
* @returns {boolean} True if the set contains only instances of Point, false otherwise.
*/
function is_point_set(points){
    return is_set(points)&&[...points].every(point=>is_point(point))
}
export function create_set_from_points(){
    for(const point of arguments){
        if(!is_point(point)) illegal_arguments("create_set_from_points")
    }
    
    
}
/**
* A class that represents the options for a point set diagram.
* @export
*/
export class PointSetDiagramOptions{
    /**
    * The lower bound of the x-axis.
    * @private
    * @type {number}
    */
    #xfrom;
    /**
    * The upper bound of the x-axis.
    * @private
    * @type {number}
    */
    #xto;
    /**
    * The lower bound of the y-axis.
    * @private
    * @type {number}
    */
    #yfrom;
    /**
    * The upper bound of the y-axis.
    * @private
    * @type {number}
    */
    #yto;
    /**
    * The scale factor of the x-axis.
    * @private
    * @type {number}
    */
    #xscale;
    /**
    * The scale factor of the y-axis.
    * @private
    * @type {number}
    */
    #yscale;
    /**
    * The width of the diagram.
    * @private
    * @type {number}
    */
    #WIDTH
    /**
    * The height of the diagram.
    * @private
    * @type {number}
    */
    #HEIGHT
    /**
    * The gap between lines on the x-axis.
    * @private
    * @type {number}
    */
    #line_gap_x
    /**
    * The gap between lines on the y-axis.
    * @private
    * @type {number}
    */
    #line_gap_y
    /**
    * Half the gap between lines on the x-axis.
    * @private
    * @type {number}
    */
    #half_line_gap_x
    /**
    * Half the gap between lines on the y-axis.
    * @private
    * @type {number}
    */
    #half_line_gap_y
    /**
    * The number of lines on the x-axis.
    * @private
    * @type {number}
    */
    #line_count_x
    /**
    * The number of lines on the y-axis.
    * @private
    * @type {number}
    */
    #line_count_y
    /**
    * The y-coordinate of the x-axis line.
    * @private
    * @type {number}
    */
    #x_axis_y_coord
    /**
    * The x-coordinate of the y-axis line.
    * @private
    * @type {number}
    */
    #y_axis_x_coord
    /**
    * Computes the parameters for the diagram based on the options.
    * @private
    */
    #computeParams(){
        this.#WIDTH=500;
        this.#HEIGHT=500;
        this.#line_gap_x=(this.#WIDTH/Math.abs(this.#xto-this.#xfrom)+1);
        this.#line_gap_y=(this.#HEIGHT/Math.abs(this.#yto-this.#yfrom)+1)
        this.#half_line_gap_x=Math.abs(this.#line_gap_x/2);
        this.#half_line_gap_y=Math.abs(this.#line_gap_y/2);
        this.#line_count_x=Math.abs(this.#WIDTH/this.#line_gap_x);
        this.#line_count_y=Math.abs(this.#HEIGHT/this.#line_gap_y);
        this.#x_axis_y_coord=Math.abs((this.#yto-this.#yfrom)/2*(this.#line_count_y+this.#line_gap_y));
        this.#y_axis_x_coord=Math.abs((this.#xto-this.#xfrom)/2*(this.#line_count_x+this.#line_gap_x));
    }
    /**
    * Create options for a point set diagram.
    */
    constructor(){
        /**
        * The lower bound of the x-axis.
        * @default -10
        */
        this.#xfrom=-10;
        /**
        * The upper bound of the x-axis.
        * @default 10
        */
        this.#xto=10;
        /**
        * The lower bound of the y-axis.
        * @default -10
        */
        this.#yfrom=-10;
        /**
        * The upper bound of the y-axis.
        * @default 10
        */
        this.#yto=10;
        /**
        * The scale factor of the x-axis.
        * @default 1
        */
        this.#xscale=1;
        /**
        * The scale factor of the y-axis.
        * @default 1
        */
        this.#yscale=1;
        this.#computeParams()

    }
    /**
    * Get the lower bound of the x-axis.
    * @function
    * @returns {number} The lower bound of the x-axis.
    */
    get_x_from(){
        return this.#xfrom;
    }
    /**
    * Get the upper bound of the x-axis.
    * @function
    * @returns {number} The upper bound of the x-axis.
    */
    get_x_to(){
        return this.#xto;
    }
    /**
    * Get the scale factor of the x-axis.
    * @function
    * @returns {number} The scale factor of the x-axis.
    */
    get_x_scale(){
        return this.#xscale;
    }
    /**
    * Get the lower bound of the y-axis.
    * @function
    * @returns {number} The lower bound of the y-axis.
    */
    get_y_from(){
        return this.#yfrom;
    }
    /**
    * Get the upper bound of the y-axis.
    * @function
    * @returns {number} The upper bound of the y-axis.
    */
    get_y_to(){
        return this.#yto;
    }
    /**
    * Get the scale factor of the y-axis.
    * @function
    * @returns {number} The scale factor of the y-axis.
    */
    get_y_scale(){
        return this.#yscale;
    }
    /**
    * Get the width of the diagram.
    * @function
    * @returns {number} The width of the diagram.
    */
    get_width(){
        return this.#WIDTH;
    }
    /**
    * Get the height of the diagram.
    * @function
    * @returns {number} The height of the diagram.
    */
    get_height(){
        return this.#HEIGHT;
    }
    /**
    * Get the gap between lines on the x-axis.
    * @function
    * @returns {number} The gap between lines on the x-axis.
    */
    get_line_gap_x(){
        return this.#line_gap_x;
    }
    /**
    * Get the gap between lines on the y-axis.
    * @function
    * @returns {number} The gap between lines on the y-axis.
    */
    get_line_gap_y(){
        return this.#line_gap_y;
    }
    /**
    * Get half the gap between lines on the x-axis.
    * @function
    * @returns {number} Half the gap between lines on the x-axis.
    */
    get_half_line_gap_x(){
        return this.#half_line_gap_x;
    }
    /**
    * Get half the gap between lines on the y-axis.
    * @function
    * @returns {number} Half the gap between lines on the y-axis.
    */
    get_half_line_gap_y(){
        return this.#half_line_gap_y;
    }
    /**
    * Get the number of lines on the x-axis.
    * @function
    * @returns {number} The number of lines on the x-axis.
    */
    get_line_count_x(){
        return this.#line_count_x;
    }
    /**
    * Get the number of lines on the y-axis.
    * @function
    * @returns {number} The number of lines on the y-axis.
    */
    get_line_count_y(){
        return this.#line_count_y;
    }
    /**
    * Get the y-coordinate of the x-axis line.
    * @function
    * @returns {number} The y-coordinate of the x-axis line.
    */
    get_x_axis_y_coord(){
        return this.#x_axis_y_coord;
    }
    /**
    * Get the y-coordinate of the x-axis line.
    * @function
    * @returns {number} The y-coordinate of the x-axis line.
    */
    get_y_axis_x_coord(){
        return this.#y_axis_x_coord;
    }
    


}
/**
* Draws a point set diagram on a canvas element and returns its data URL.
* @function
* @param {Set} points - An array of objects representing points with x and y properties.
* @param {PointSetDiagramOptions} [options] - An optional object containing options for the diagram.
* @returns {string} The data URL of the canvas element.
* @throws {Error} If points is not a valid point set.
*/
export function point_set_diagram(points,options=new PointSetDiagramOptions()){
    if(!is_point_set(points)) illegal_arguments("point_set_diagram")
    const computedParams={
        xfrom:options.get_x_from(),
        xto:options.get_x_to(),
        yfrom:options.get_y_from(),
        yto:options.get_y_to(),
        xscale:options.get_x_scale(),
        yscale:options.get_y_scale(),
        WIDTH:options.get_width(),
        HEIGHT:options.get_height(),
        line_gap_x:options.get_line_gap_x(),
        line_gap_y:options.get_line_gap_y(),
        half_line_gap_x:options.get_half_line_gap_x(),
        half_line_gap_y:options.get_half_line_gap_y(),
        line_count_x:options.get_line_count_x(),
        line_count_y:options.get_line_count_y(),
        x_axis_y_coord:options.get_x_axis_y_coord(),
        y_axis_x_coord:options.get_y_axis_x_coord()
    }
    
    const canvas=createCanvas(computedParams.WIDTH+computedParams.line_gap_x*2,computedParams.HEIGHT+computedParams.line_gap_y*2);
    const ctx=canvas.getContext('2d');
    draw_horizontal_axes(canvas.height,ctx,computedParams);
    draw_vertical_axes(canvas.width,ctx,computedParams);
    draw_points(points,ctx,computedParams);
   
    document.body.appendChild(canvas)
    return canvas.toDataURL();
}
/**
* Draws the horizontal axis and labels on the canvas context.
* @function
* @param {number} width - The width of the canvas element.
* @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
* @param {Object} computedParams - An object containing the computed parameters for the diagram.
*/
function draw_horizontal_axes(width,ctx,computedParams){
    ctx.lineWidth=0.25;
    ctx.moveTo(0,computedParams.x_axis_y_coord);
    ctx.lineTo(width,computedParams.x_axis_y_coord);
    ctx.stroke();
    
    
    for(let i=1; i<computedParams.line_count_x+2; i+=computedParams.xscale){
        if(i==Math.abs((computedParams.xto-computedParams.xfrom)/2+1)) continue;
        
        if(i<(computedParams.xto-computedParams.xfrom)/2+1&&(i+((computedParams.xto-computedParams.xfrom)/2-1))%computedParams.xscale==0){
            ctx.fillText(-(((computedParams.xto-computedParams.xfrom)/2+1)-i),
            computedParams.line_gap_x*i,
            computedParams.y_axis_x_coord+computedParams.line_gap_y
            )
        }
        else if(i>(computedParams.xto-computedParams.xfrom)/2&&(i+((computedParams.xto-computedParams.xfrom)/2-1))%computedParams.xscale==0){
        
            ctx.fillText(i-((computedParams.xto-computedParams.xfrom)/2+1),
                computedParams.line_gap_x*i,
                computedParams.y_axis_x_coord+computedParams.line_gap_y
                )
        }
            
         
        ctx.lineWidth=0.25;
        ctx.moveTo(computedParams.line_gap_x*i,computedParams.x_axis_y_coord-computedParams.half_line_gap_y);
        ctx.lineTo(computedParams.line_gap_x*i,computedParams.y_axis_x_coord+computedParams.half_line_gap_y);
        ctx.stroke();
    }
}
/**
* Draws the vertical axis and labels on the canvas context.
* @function
* @param {number} height - The height of the canvas element.
* @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
* @param {Object} computedParams - An object containing the computed parameters for the diagram.
*/
function draw_vertical_axes(height,ctx,computedParams){
    ctx.lineWidth=0.25;
    ctx.moveTo(computedParams.y_axis_x_coord,0);
    ctx.lineTo(computedParams.y_axis_x_coord,height);
    ctx.stroke();


    for(let i=1; i<computedParams.line_count_y+2; i+=computedParams.yscale){ 
        if(i==Math.abs((computedParams.yto-computedParams.yfrom)/2+1)) continue;

        if(i<(computedParams.yto-computedParams.yfrom)/2+1&&(i+((computedParams.yto-computedParams.yfrom)/2-1))%computedParams.yscale==0){
            ctx.fillText(((computedParams.xto-computedParams.xfrom)/2+1)-i,
            computedParams.y_axis_x_coord-computedParams.half_line_gap_x,
            computedParams.line_gap_y*i
            );
        }
        else if(i>(computedParams.yto-computedParams.yfrom)/2&&(i+((computedParams.yto-computedParams.yfrom)/2-1))%computedParams.yscale==0){
            ctx.fillText(((computedParams.xto-computedParams.xfrom)/2+1)-i,
            computedParams.y_axis_x_coord-computedParams.half_line_gap_x,
            computedParams.line_gap_y*i
            );
        }
        ctx.lineWidth=0.25;
        ctx.moveTo(computedParams.y_axis_x_coord-computedParams.half_line_gap_x,computedParams.line_gap_y*i);
        ctx.lineTo(computedParams.y_axis_x_coord+computedParams.half_line_gap_x,computedParams.line_gap_y*i);
        ctx.stroke();
    }
}
/**
* Draws the points on the canvas context.
* @function
* @param {Array} points - An array of objects representing points with x and y properties.
* @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
* @param {Object} computedParams - An object containing the computed parameters for the diagram.
*/
function draw_points(points,ctx,computedParams){
    points.forEach(point => {

        let {x,y}=get_canvas_coordinates(point.x,point.y,computedParams);
        ctx.beginPath();
        ctx.arc(x,y,5,0,2*Math.PI)
        ctx.stroke(); 
        
    });
    
}
/**
* Converts the point coordinates from the diagram space to the canvas space.
* @function
* @param {number} pointx - The x coordinate of the point in the diagram space.
* @param {number} pointy - The y coordinate of the point in the diagram space.
* @param {Object} computedParams - An object containing the computed parameters for the diagram.
* @returns {Object} An object with x and y properties representing the point coordinates in the canvas space.
*/
function get_canvas_coordinates(pointx,pointy,computedParams){

    let origo={x:computedParams.x_axis_y_coord,y:computedParams.y_axis_x_coord};
    let step_on_x_axes=computedParams.line_gap_x/computedParams.xscale;
    let step_on_y_axes=computedParams.line_gap_y/computedParams.yscale;
    return {x:origo.x+step_on_x_axes*pointx,y:origo.y+step_on_y_axes*pointy}
}