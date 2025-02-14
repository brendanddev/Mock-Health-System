
// utils/DataValidation.jsx
// @author: Brendan Dileo, 2025-02-10

// Regular expressions for validating first and last name, email,
// date of birth, health card numbers, and addresses.
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const dobRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
const healthCardRegex = /^[0-9]{10}$/; // Valid example: 3728044292
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;

/**
 * This function checks if the first and last name values passed to the
 * form input fields are valid using a regex.
 * 
 * @param {string} firstName The users first name. 
 * @param {string} lastName The users last name.
 * @returns {boolean} True if the first and last name are valid, false if they are invalid.
 */
export const isValidName = (firstName, lastName) => {
    return nameRegex.test(firstName) && nameRegex.test(lastName);
}

/**
 * This function is responsible for checking if an email is valid using
 * a regex pattern.
 * 
 * @param {string} email The users email.
 * @returns {boolean} True if the email is valid, otherwise false.
 */
export const isValidEmail = (email) => {
    return emailRegex.test(email);
}

/**
 * This function checks if a date of birth (dob) is valid or not,
 * using a regex pattern.
 * 
 * @param {string} dob The users date of birth.
 * @returns {boolean} Will return true if the users date of birth is valid, false otherwsie.
 */
export const isValidDOB = (dob) => {
    return dobRegex.test(dob);
}

/**
 * This function checks if a health card number is valid or not.
 * It uses a regex pattern to first check if the health card number
 * meets the basic requirements (regex pattern), and if it does, the
 * number is confirmed using the 'checkLuhn' helper function to see
 * if the number passes the Luhn / Mod 10 check.
 * 
 * @param {string} healthCardNumber The users health card number.
 * @returns {boolean} True if the users health card number is valid, otherwise false.
 */
export const isValidHealthCard = (healthCardNumber) => {
    if (!healthCardRegex.test(healthCardNumber)) {
        return false;
    }
    return checkLuhn(healthCardNumber); // Helper call
}

/**
 * Helper function used to determine if a health card number is valid using the Luhn Algorithm (Mod 10).
 * This algorithm is used to validate a health card number by starting from the last digit, and moving to
 * the left, doubling the value of every second digit. If the doubled value of the second digit exceeds 10,
 * then the two digits are added together to make a single digit. After doubling every second digit, each 
 * digit is added together, and if this value is divisble by 10, the number is valid, otherwise it is not.
 * 
 * @param {string} healthCardNumber The users health card number to be checked.
 * @returns {boolean} True if the number passes the Luhn check, false otherwise.
 */
export const checkLuhn = (healthCardNumber) => {
    // Initialize sum variable and flag to track
    // if digit is at an even postision.
    let sum = 0;
    let isSecond = false;

    for (let i = healthCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(healthCardNumber.charAt(i))

        // Check if digit is at an even pos,
        // double it if it is, if the value
        // exceeds 10, add the two digits.
        if (isSecond) {
            digit = digit * 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;

        // Changes flag in each iteration to
        // switch between even and odd pos's.
        isSecond = !isSecond;
    }
    return sum % 10 === 0;
}

/**
 * This function checks if an address is valid using
 * a regex pattern.
 * 
 * @param {string} homeAddress The users address.
 * @returns {boolean} True if the address is valid, otherwise false.
 */
export const isValidAddress = (homeAddress) => {
    return addressRegex.test(homeAddress);
}
