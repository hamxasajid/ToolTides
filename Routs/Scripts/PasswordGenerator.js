// Get elements
const passwordInput = document.getElementById("generated-password");
const copyBtn = document.getElementById("copy-btn");
const lengthInput = document.getElementById("password-length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");

// Function to generate password
function generatePassword() {
    const length = parseInt(lengthInput.value);
    const chars = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()-_=+[]{}|;:'\",.<>?/~`",
    };

    let charSet = "";
    if (uppercaseCheckbox.checked) charSet += chars.uppercase;
    if (lowercaseCheckbox.checked) charSet += chars.lowercase;
    if (numbersCheckbox.checked) charSet += chars.numbers;
    if (symbolsCheckbox.checked) charSet += chars.symbols;

    if (charSet === "") {
        alert("Please select at least one option.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordInput.value = password;
}

// Copy to clipboard function
copyBtn.addEventListener("click", () => {
    passwordInput.select();
    document.execCommand("copy");
});

// Generate password on button click
generateBtn.addEventListener("click", generatePassword);
