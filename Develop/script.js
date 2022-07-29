// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var getLength = function() {
    /* ask for length of password */
    var promptLength = window.prompt('How many characters would you like your password to be? Please choose between 8 and 120 characters.');
  }
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* PASSWORD GENERATOR / VARIABLES */
var alphaUpperCase = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z"
];

var alphaLowerCase = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
  "t","u","v","w","x","y","z"
];

var number = [0,1,2,3,4,5,6,7,8,9];

var specialCharacter = [
  "!","@","#","$","%","^","&","?"
];
