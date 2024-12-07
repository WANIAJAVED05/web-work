import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    const usernameError = document.getElementById("username-error");

    passwordError.textContent = "";
    usernameError.textContent = "";

    let isValid = true;

    // Username validation
    if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters long.";
        isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain numbers and special characters.";
        isValid = false;
    }

    return isValid;
}
