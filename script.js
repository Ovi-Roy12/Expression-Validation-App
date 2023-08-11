const passwordInput = document.getElementById('passwordInput');
const emailInput = document.getElementById('emailInput');
const postalCodeInput = document.getElementById('postalCodeInput');
const validateButton = document.getElementById('validateButton');
const validationResult = document.getElementById('validationResult');

validateButton.addEventListener('click', () => {
    const password = passwordInput.value;
    const email = emailInput.value;
    const postalCode = postalCodeInput.value;
    
    const isPasswordValid = validatePassword(password);
    const isEmailValid = validateEmail(email);
    const isPostalCodeValid = validatePostalCode(postalCode);
    
    displayValidationResult(isPasswordValid, isEmailValid, isPostalCodeValid);
});

function validatePassword(password) {
    // Add your password validation logic here
    // For example, you can check for minimum length, special characters, etc.
    return password.length >= 8;
}

function validateEmail(email) {
    // Use a regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePostalCode(postalCode) {
    // Use a regular expression to validate postal code format
    const postalCodePattern = /^\d{4}$/;
    return postalCodePattern.test(postalCode);
}

function displayValidationResult(isPasswordValid, isEmailValid, isPostalCodeValid) {
    validationResult.innerHTML = `
        Password: ${isPasswordValid ? 'Valid' : 'Invalid'}<br>
        Email: ${isEmailValid ? 'Valid' : 'Invalid'}<br>
        Postal Code: ${isPostalCodeValid ? 'Valid' : 'Invalid'}
    `;
}
