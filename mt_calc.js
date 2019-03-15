"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Todd Adcox Jr
   Date:   3-15-19   
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

// 4.Init() function sets up the event handlers for the page.
// a. Declare the calcbuttons variable containing the collection of page elements belonging to the calcButton class.
// b. Loop through the calcButtons object collection and, for each button in that collection, run the buttonClick() function in response to the click event.
// c. After the for loop, add a command that runs the calcKeys() function in response to the key- down event occurring within the element with the ID “calcWindow”.
function init() {
   var calcButtons = document.getElementsByClassName("calcButton");

   for (var i = 0; i < array.length; i++) {
      
   }
}




/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}