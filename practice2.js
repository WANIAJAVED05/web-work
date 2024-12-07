function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    const usernameError = document.getElementById("username-error");

    passwordError.textContent = "";
    usernameError.textContent = "";

    let isValid = true;

    // Username validation (basic email format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        usernameError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation (basic length check)
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long. contain number and special character";
        isValid = false;
    }

    return isValid;
}