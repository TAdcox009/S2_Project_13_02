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

// Loads the init function when the window is opened.
window.onload = init;

// Init function that has no paramaters. 
// calcButtons variable that gets the element by its class name that affects all the input boxes with that class.
// A for loop that loops through the calcButtons variable when it is clicked.
// When the keydown event happens it will also run the calcKeys function.
function init() {
      var calcButtons = document.getElementsByClassName("calcButton");

      for (var i = 0; i < calcButtons.length; i++) {
            calcButtons[i].onclick = buttonClick;
      }
      document.getElementById("calcWindow").onkeydown = calcKeys;
}

// The buttonClick() function that changes what appears in the calculator window when the user clicks a button.
// calcvalue variable thats equal to the value attribute of the calcWindow text area box. 
// calcDecimal variable thats equal to the value attribute of the decimals input box.
// buttonvalue variable that equals to the value attribute of the event object target.
// For the “del” case that deletes the contents of the calculate window.
// For the “bksp” case it  deletes the last character in the calculator window.
// For the “enter” case it calculate the value of the current expression.
// For the “prev” case it copies the last equation in the calculator window.
function buttonClick(e) {
      var calcValue = document.getElementById("calcWindow").value;
      var calcDecimal = document.getElementById("decimals").value;
      var buttonValue = e.target.value;
      switch (buttonValue) {
            case "del":
                  calcValue = "";
                  break;
            case "bksp":
                  calcValue = eraseChar(calcValue)
                  break;
            case "enter":
                  calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
                  break;
            case "prev":
                  calcValue += lastEq(calcValue) + "\n";
                  break;
            default:
                  calcValue += buttonValue;
                  break;
      }
      document.getElementById("calcWindow").value = calcValue;
      document.getElementById("calcWidnow").focus();
}

// The calcKeys() function that contains the calcValue and calcDecimal variables. 
// For the “Delete” case it erases the contents of the calculator window by changing it to an empty text string.
// For the “Enter” case it adds the expression to the calcValue varible.
// For the “ArrowUp” case adds the expression to calcValue variable.
// The value attribute of the calcWindow text area box is set equal to the calcValue variable.

function calcKeys(e) {
      var calcValue = document.getElementById("calcWindow").value;
      var calcDecimal = document.getElementById("decimals").value;
      switch (e.key) {
            case "Delete":
                  calcValue = "";
                  break;
            case "Enter":
                  calcValue += " = " + evalEq(calcValue, calcDecimal);
                  break;
            case "ArrowUp":
                  calcValue += lastEq(calcWindow.value);
                  e.preventDefault();
      }
      document.getElementById("calcWindow").value = calcValue;
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