/* Hi Grader! Hope all is well. I tried to create a cancel function on the alerts but it was conflicting with the else "empty" statements. Sorry.*/

// Assignment code here

/* PASSWORD GENERATOR / VARIABLES */
var inputAlphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var inputAlphaLower = "abcdefghijklmnopqrstuvwxyz"
var inputNumber = "0123456789"
var inputSpecialChar = "!@#$%^&?><()+"


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
  function startPromptUpperCase() {
  var promptUppercase = window.prompt('Would you like to include uppercase letters?' , "Yes or No?");
  // Validate input of promptUpperCase to be either "Yes" or "No"
    if (promptUppercase === "yes" || promptUppercase === "YES" || promptUppercase === "Yes") {
      window.alert("Uppercase Letters will be included.");
      promptUppercase = inputAlphaUpper;
      console.log("promptUppercase = " + inputAlphaUpper); 
      return promptUppercase;      
    }
    else if (promptUppercase ==="no" || promptUppercase === "NO" || promptUppercase === "No") {
      window.alert("Uppercase Letters will NOT be included.");
      promptUppercase = (promptUppercase = "");
      console.log("promptUpperCase = " + promptUppercase);
      return promptUppercase
    }
    else {
      window.alert(" Please answer Yes or No.");
      return startPromptUpperCase();
    };
  };
  var promptUppercase = startPromptUpperCase()

  // Ask if lowercase letters should be included.
  function startPromptLowerCase() {
  var promptLowercase = window.prompt('Would you like to include lowercase letters?' , "Yes or No?");
  // Validate input of promptUpperCase to be either "Yes" or "No"
    if (promptLowercase === "yes" || promptLowercase === "YES" || promptLowercase === "Yes") {
      window.alert("Lowercase letters will be included.");
      promptLowercase = inputAlphaLower;
      console.log("promptLowercase = " + inputAlphaLower); 
      return promptLowercase      
    }
    else if (promptLowercase ==="no" || promptLowercase === "NO" || promptLowercase === "No") {
      window.alert("Lowercase letters will NOT be included.");
      promptLowercase = (promptLowercase = "");
      console.log("promptLowercase = " + promptLowercase);
      return promptLowercase           
    }
    else {
      window.alert(" Please answer Yes or No.");
      return startPromptLowerCase();
    };
  };
  var promptLowercase = startPromptLowerCase()
  
  // Ask if numbers should be included.
  function startPromptNumber() {
  var promptNumber = window.prompt('Would you like to include numbers?' , "Yes or No?");
    // Validate input of promptUpperCase to be either "Yes" or "No"
    if (promptNumber === "yes" || promptNumber === "YES" || promptNumber === "Yes") {
      window.alert("Numbers will be included.");
      promptNumber = inputNumber;
      console.log("promptNumber = " + inputNumber);
      return promptNumber       
    }
    else if (promptNumber ==="no" || promptNumber === "NO" || promptNumber === "No") {
      window.alert("Numbers will NOT be included.");
      promptNumber = (promptNumber = "");
      console.log("promptNumber = " + promptNumber);
      return promptNumber
    }
    else {
      window.alert(" Please answer Yes or No.");
      return startPromptNumber();
    };
  };
  var promptNumber = startPromptNumber()
   
  // Ask if special characters should be included.
  function startPromptSpecialChar() {
  var promptSpecialChar = window.prompt('Would you like to include special characters?' , "Yes or No?");
    // Validate input of promptUpperCase to be either "Yes" or "No"
    if (promptSpecialChar === "yes" || promptSpecialChar === "YES" || promptSpecialChar === "Yes") {
      window.alert("Special characters will be included.");
      promptSpecialChar = inputSpecialChar;
      console.log("promptSpecialChar = " + inputSpecialChar); 
      return promptSpecialChar
    }
    else if (promptSpecialChar ==="no" || promptSpecialChar === "NO" || promptSpecialChar === "No" ) {
      window.alert("Special characters will NOT be included.");
      promptSpecialChar = (promptSpecialChar = "");
      console.log("promptSpecialChar = " + promptSpecialChar);
      return promptSpecialChar
    }
    else {
      window.alert(" Please answer Yes or No.");
      return startPromptSpecialChar();
    };
  };
  var promptSpecialChar = startPromptSpecialChar()
    
    // build passwordString
    if (promptUppercase === "") {
      console.log("uppercase empty")  
      passwordString = "";
      console.log(passwordString);
    }
    else(passwordString = inputAlphaUpper);
      console.log(passwordString);
    
    if (promptLowercase === "") {
      console.log("lowercase empty");
    }
    else(passwordString = passwordString.concat(inputAlphaLower));
      console.log(passwordString);

    if (promptNumber === "") {
      console.log("number empty");
    }
    else(passwordString = passwordString.concat(inputNumber));
      console.log(passwordString);

    if (promptSpecialChar === "") {
      console.log("special character empty");
    }
    else(passwordString = passwordString.concat(inputSpecialChar));
      console.log(passwordString);

    //Display final password string
      console.log("password string is =" + passwordString);
    
    // return alert if no characters are included
    if (passwordString === "") {
        alert("Password cannot be generated. Please select at least one character option.")
        return generatePassword();
      }

    //confirm user input requests  
    var confirmInput = window.confirm("Please Confirm:" + 
    "Password length will be " + promptLength + " characters, and will include a random sampling of the following characters: " 
      + passwordString);
      
  // calculate password
    var chars = passwordString;
    var passLength = promptLength;
    var password = "";
    
    for (var i = 0; i < passLength; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
      console.log(password); 
   }; 
   return password; 
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



