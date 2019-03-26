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

      for (var i = 0; i < calcButtons; i++) {
            document.addEventListener("click", buttonClick);
      }
      document.getElementById(calcWindow).addEventListener("keydown", calcKeys);
}

// 5. Create the buttonClick() function. The purpose of this function is to change what appears in the calculator window when the user clicks the calculator buttons. Add the following commands to the function: 
// a. Declare the calcvalue variable equal to the value attribute of the calcWindow text area box. 
// b. Declare the calcDecimal variable equal to the value attribute of the decimals input box.
// c. Each calculator button has a value attribute that defines what should be done with that button. Declare the buttonvalue attribute equal to the value attribute of the event object target.
// d. Create a switch-case structure for the following possible values of the buttonValue variable:
// Create a switch-case structure for the following possible values of the buttonValue variable: 
// i.	For “del”, delete the contents of the calculate window by changing calcValue to an empty
// text string.
// ii.	For “bksp”, erase the last character in the calculator window by changing calcValue to the value returned by the eraseChar() function using calcValue as the parameter value.
// iii.	For “enter”, calculate the value of the current expression by changing calcValue to:
// “ = “ + evalEq(calcValue, calcDecimal) + “\n” Note that \n is used to add a line return at the end of the answer.
// iv.	For “prev”, copy the last equation in the calculator window by changing calcValue to the value returned by the lastEq() function using calcValue as the parameter value.
// v.	Otherwise, append the calculator button character to the calculator window by letting, calcValue equal calcValue plus buttonValue.
function buttonClick(e) {
      var calcValue = document.getElementById("calcWindow");
      var calcDecimal = document.getElementById("decimals").value;
      var buttonValue = e.target.value;
      switch (buttonValue) {
            case "del":
                  calcValue += "";
                  break;
            case "bksp":
                  calcValue += eraseChar(calcValue)
                  break;
            case "enter":
                  "=" + evalEq(calcValue);
                  break;
            case "prev":
                  calcValue += lastEq(calcValue);
                  break;
            case "":
                  calcValue += calcValue + buttonValue;
                  break;
      }
}

/* ===================================================================== */

function eraseChar(textStr) {
      return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
      var lines = textStr.split(/\r?\n/);
      var lastLine = lines[lines.length - 1];
      var eqValue = eval(lastLine);
      return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
      var lines = textStr.split(/\r?\n/);
      var lastExp = lines[lines.length - 2];
      return lastExp.substr(0, lastExp.indexOf("=")).trim();
}