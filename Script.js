document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDisplay = document.getElementById('errorMessage');

    errorDisplay.innerText = ""; // Reset errors

    // 1. Check for empty fields (trim handled by .trim() above)
    if (!username || !email || !phone || !password || !confirmPassword) {
        alert("All fields are required and cannot be just spaces.");
        event.preventDefault();
        return;
    }

    // 2. Phone validation: Only numeric and exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        errorDisplay.innerText = "Phone must be exactly 10 numeric digits.";
        event.preventDefault();
        return;
    }

    // 3. Email validation: [chars]@[3 chars].[2 or 3 chars]
    // Regex breakdown: ^.+ = letters before @ | @[a-zA-Z]{3} = 3 letters | \.[a-zA-Z]{2,3}$ = dot then 2-3 letters
    const emailRegex = /^.+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errorDisplay.innerText = "Email format: letters@3letters.2or3letters (e.g., abc@not.com)";
        event.preventDefault();
        return;
    }

    // 4. Password validation: Min 7 chars, 1 Cap, 1 Digit, 1 Special (&,$,#,@)
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&@$#])[A-Za-z\d&@$#]{7,}$/;
    if (!passRegex.test(password)) {
        errorDisplay.innerText = "Password: Min 7 chars, 1 Uppercase, 1 Digit, and 1 Special Character (&,$,#,@)";
        event.preventDefault();
        return;
    }

    // 5. Match Passwords
    if (password !== confirmPassword) {
        errorDisplay.innerText = "Passwords do not match!";
        event.preventDefault();
        return;
    }

    alert("Registration Successful!");
});

