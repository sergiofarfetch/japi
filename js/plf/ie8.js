/*jslint browser: true*/
/*global Element*/

/**
 * This functions makes the document.getElementsByClassName to work on IE8. This is a crucial fast performance enhancement. It uses the querySelectorAll method that is slower but works on IE8.
 * @method document.getElementsByClassName
 */
document.getElementsByClassName = Element.prototype.getElementsByClassName = function(class_names) {
	'use strict';
    // Turn input in a string, prefix space for later space-dot substitution
    class_names = ('.' + class_names);
    return this.querySelectorAll(class_names);
};


/**
* Inner width IE8 polyfill
* @return {[window innerWidth]}
*/
if(!window.innerWidth){
window.innerWidth = document.documentElement.clientWidth || document.body.clientWidth;
}



/**
* Inner width IE8 polyfill
* @return {[window innerHeight]}
*/
if(!window.innerHeight){
window.innerHeight = document.documentElement.clientHeight || document.body.clientHeight;
}