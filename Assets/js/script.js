// Assignment code here
//Array of special characters to be included in password
var specialCharacters = [
  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'
];
//Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
//Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',  'B',  'C',  'D',  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  var choices;
 // Loop if answer is not a number or out of 8-128
  while(confirmLength < 8 || confirmLength > 128) {
  alert("Password length must be between 8-128 characters Try again");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  } 

  // Repeat back how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);
  
  var includeNumber = confirm("Will this contain numbers?");
  var includeCharacter = confirm("Will this contain special characters?");
  var includeUppercase = confirm("Will this contain Uppercase letters?");
  var includeLowercase = confirm("Will this contain Lowercase letters?");

  // While loop for 4 negative options
  // Will repeat to get criteria
  while (!includeCharacter && !includeNumber && !includeUppercase && !includeLowercase) {
      choices = alert("You must choose a criteria!");
        var includeNumber = confirm("Will this contain numbers?");
        var includeCharacter = confirm("Will this contain special characters?");
        var includeUppercase = confirm("Will this contain Uppercase letters?");
        var includeLowercase = confirm("Will this contain Lowercase letters?");
  }
  // First if statement that uses user input prompts to determine choices
  // If for 4 positive options
  if (includeCharacter && includeNumber && includeUppercase && includeLowercase) {
      choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if for 3 positive options
  else if (includeCharacter && includeNumber && includeUppercase) {
      choices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
  }
  else if (includeCharacter && includeNumber && includeLowercase) {
      choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
  }
  else if (includeCharacter && includeLowercase && includeUppercase) {
      choices = specialCharacters.concat(alpha, upperCasedCharacters);
  }
  else if (includeNumber && includeLowercase && includeUppercase) {
      choices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if for 2 positive options 
  else if (includeCharacter && includeNumber) {
      choices = specialCharacters.concat(numericCharacters);

  } else if (includeCharacter && includeLowercase) {
      choices = specialCharacters.concat(lowerCasedCharacters);

  } else if (includeCharacter && includeUppercase) {
      choices = specialCharacters.concat(upperCasedCharacters);
  }
  else if (includeLowercase && includeNumber) {
      choices = lowerCasedCharacters.concat(numericCharacters);

  } else if (includeLowercase && includeUppercase) {
      choices = lowerCasedCharacters.concat(upperCasedCharacters);

  } else if (includeNumber && includeUppercase) {
      choices = numericCharacters.concat(upperCasedCharacters);
  }
  // Else if for 1 positive option
  else if (includeCharacter) {
      choices = specialCharacters;
  }
  else if (includeNumber) {
      choices = numericCharacters;
  }
  else if (includeLowercase) {
      choices = lowerCasedCharacters;
  }
  
  else if (includeUppercase) {
      choices = upperCasedCharacters;
  };

  // password variable is an array placeholder for user generated amount of length
  var randomPassword = ""
      
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + choices[Math.floor(Math.random() * choices.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};