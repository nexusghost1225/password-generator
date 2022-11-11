//assignment code
var generateBtn = document.querySelector("generate")

//password generator 
function generatePassword() {

    //ask for password length
    var promptLength = window.prompt("How many characters do you require for the password (8-120)");
    return;

    //if not a number return
    if (isNaN(promptLength)) {
        window.alert("Must be a number between 8-120");
        return;
    }

    //if outside length paramaters
    if (promtlength < 8 || promptlength > 120) {
        window.alert("PLease Choose a number between 8 and 120");
        return;
    }

    //ask for character types
var promptNumbers = window.confirm("Would you like your passcode to include numbers?");
var promptLowercase = window.confirm("would you like your passcode to contain lowrcase numbers?");
var promptUppercase = window.confirm("would you like your asscode to contain uppercase letters?");
var promptSpecial = window.confirm("would you like your passcode to contain special characters?");

//arrays of each characters
cosnt arLowercase = ["abcdefghijklmnopqrstuvwxyz"];
conts arUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
conts arNumber = ["0123456789"];
conts arSpecial = ["!@#$%^&*-_`~"];

//define master list of characters
var masterList = [];

//define a list if chosen types
var chosen = [];

//if statements
if (promptNumbers === true) {
    for (var i=o; i <13; i++ ){
        var masterList = arNumbers.concat(masterList)
    }
}
if (promptLowercase === true) {
    for (var i=0; i < 5; i++) {
        var masterList = arLowercase.concat(masterList);
    }
chosen.push("lowercase letters")
}
if (promptUppercase === true) {
    for (var i = 0; i < 5; i++) {
        var masterList = arUppercase.concat(masterList);
    } 
    chosen.push("uppercase letters")
}
if (promptSpecial=== true) {
 for (var i = 0; i = < 12; i++) {
    var masterList = arSpecial.concat(masterList);
 }   
 chosen.push("special characters")
}
//if no choices weree selected
if (!promptSpecial &&
    !promptUppercase &&
    !promptNumbers &&
    !promptLowercase) {
        window.alert("You must select atleast one character type")
        var masterList = arLowercase.concat(masterList);
        chosen.push("lowercase letters")
    }
    