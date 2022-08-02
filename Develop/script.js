// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  // Ask user for length of password.
  var promptLength = window.prompt('How many characters would you like your password to be?', "Choose between 8-128 characters");
  // Validate input of promptLength to be between 8 and 128.
  if (promptLength === "" || promptLength === null) {
    window.alert(" Please provide a number between 8 and 128.");
    return generatePassword();
  }
  else if (promptLength < 8 || promptLength > 128) {
    window.alert("Please provide a number between 8 and 128.");
    return generatePassword();
  }
  else if (promptLength >= 8 || promptLength <= 128) {
    window.alert("Your password will be " + promptLength + " characters long."); 
    console.log("promptLength = " + promptLength);       
  }
  else {
    window.alert(" Please provide a number between 8 and 128.");
    return generatePassword();
  };
  
  // Ask if uppercase letters should be included.
  var promptUppercase = window.prompt('Would you like to include uppercase letters?' , "Yes or No?");
  // Validate input of promptUpperCase to be either "Yes" or "No"
    
  if (promptUppercase === "yes" || promptUppercase === "YES" || promptUppercase === "Yes") {
      window.alert("Uppercase Letters will be included.");
      promptUppercase = "Yes";
      console.log("promptUppercase = " + promptUppercase)       
  }
  else if (promptUppercase ==="no" || promptUppercase === "NO" || promptUppercase === "No") {
      window.alert("Uppercase Letters will NOT be included.");
      promptUppercase = "No"; 
      console.log("promptUppercase = " + promptUppercase);           
  }
  else {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  };

  // Ask if lowercase letters should be included.
  var promptLowercase = window.prompt('Would you like to include lowercase letters?' , "Yes or No?");
  // Validate input of promptUpperCase to be either "Yes" or "No"
  if (promptLowercase === "" || promptLowercase === null) {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  }
  else if (promptLowercase === "yes" || promptLowercase === "YES" || promptLowercase === "Yes") {
      window.alert("Lowercase letters will be included.");
      promptLowercase = "Yes";
      console.log("promptLowercase = " + promptLowercase)       
  }
  else if (promptLowercase ==="no" || promptLowercase === "NO" || promptLowercase === "No") {
      window.alert("Lowercase letters will NOT be included.");
      promptLowercase = "No";  
      console.log("promptLowercase = " + promptLowercase);       
  }
  else {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  };
  
  // Ask if numbers should be included.
  var promptNumber = window.prompt('Would you like to include numbers?' , "Yes or No?");
  // Validate input of promptUpperCase to be either "Yes" or "No"
  if (promptNumber === "" || promptNumber === null) {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  }
  else if (promptNumber === "yes" || promptNumber === "YES" || promptNumber === "Yes") {
      window.alert("Special characters will be included.");
      promptNumber = "Yes";
      console.log("promptNumber = " + promptNumber);       
  }
  else if (promptNumber ==="no" || promptNumber === "NO" || promptNumber === "No") {
      window.alert("Special characters will NOT be included.");
      promptNumber = "No";
      console.log("promptNumber = " + promptNumber); 
  }
  else {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  };
   
  // Ask if special characters should be included.
  var promptSpecialChar = window.prompt('Would you like to include special characters?' , "Yes or No?");
  // Validate input of promptUpperCase to be either "Yes" or "No"
  if (promptSpecialChar === "" || promptSpecialChar === null) {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  }
  else if (promptSpecialChar === "yes" || promptSpecialChar === "YES" || promptSpecialChar === "Yes") {
      window.alert("Special characters will be included.");
      promptSpecialChar = "Yes";
      console.log("promptSpecialChar = " + promptSpecialChar); 
  }
  else if (promptSpecialChar ==="no" || promptSpecialChar === "NO" || promptSpecialChar === "No" ) {
      window.alert("Special characters will NOT be included.");
      promptSpecialChar = "No";
      console.log("promptSpecialChar = " + promptSpecialChar); 
  }
  else {
    window.alert(" Please answer Yes or No.");
    return generatePassword();
  };
  console.log(generatePassword);
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

