// Validation function
document.getElementById("regForm").addEventListener("submit", function(e){
     e.preventDefault();

    let valid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let course = document.getElementById("course").value;

    // Name validation
    if (name === "") {
        valid = false;
        document.getElementById("nameError").style.display = "block";
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Email validation (basic regex)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById("emailError").style.display = "block";
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        valid = false;
        document.getElementById("phoneError").style.display = "block";
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // Password validation
    if (password.length < 6) {
        valid = false;
        document.getElementById("passwordError").style.display = "block";
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Confirm password validation
    if (password !== confirmPassword || confirmPassword === "") {
        valid = false;
        document.getElementById("confirmPasswordError").style.display = "block";
    } else {
        document.getElementById("confirmPasswordError").style.display = "none";
    }

    // Course validation
    if (course === "") {
        valid = false;
        document.getElementById("courseError").style.display = "block";
    } else {
        document.getElementById("courseError").style.display = "none";
    }

    // If all valid
    if (valid) {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("regForm").reset();
    }
});