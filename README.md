![screen shot of ](https://user-images.githubusercontent.com/108424256/182481781-21dd50ba-5617-417c-af4b-1ba3de6e7b3d.png)

TITLE: Password Generator
AUTHOR: Scott Rinaberger

LINKS:
    ** HTTP URL Link: https://rinaberger.github.io/ch03_password_generator/
    ** GitHub URL: https://github.com/Rinaberger/ch03_password_generator.git
    
PURPOSE: 

This assignment designed to apply my learnings around javascript and create a password generator that had the following functions:
    1) Allowed the user to define the length of the password with a minimum of 8 characters and a maximum of 128 characters.
    2) Allow the user to customize their password by allowing the inclusion and exclusion of uppercase letters, lowercase letters, numbers, and special characters in their password. 
    3) Provided the necessary data validations to assure accurate generation of passwords included returning the user to the proper input session  if the inputted data was not expected or valid.
    4) A calculation routine that quickly and randomly generated a password based upon the user's preferences. 
    5) The password result would be written and displayed to the page.


USER STORY:
    AS AN employee with access to sensitive data
    I WANT to randomly generate a password that meets certain criteria
    SO THAT I can create a strong password that provides greater security

ACCEPTANCE CRITERIA:
    GIVEN I need a new, secure password
    WHEN I click the button to generate a password
        THEN I am presented with a series of prompts for password criteria
    WHEN prompted for password criteria
        THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
        THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN asked for character types to include in the password
        THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
        THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
        THEN a password is generated that matches the selected criteria
    WHEN the password is generated
        THEN the password is either displayed in an alert or written to the page Mock-Up


   