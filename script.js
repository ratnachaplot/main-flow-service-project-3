// Form validation
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic validation
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!fname || !lname || !email) {
        alert('First name, Last name, and Email are required.');
        return;
    }

    // Sanitize input to prevent XSS
    const sanitizedFname = sanitizeInput(fname);
    const sanitizedLname = sanitizeInput(lname);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Process the form data
    console.log('First Name:', sanitizedFname);
    console.log('Last Name:', sanitizedLname);
    console.log('Email:', sanitizedEmail);
    console.log('Message:', sanitizedMessage);

    // Show success message or further processing
    alert('Form submitted successfully!');
});

// Sanitize input function to prevent XSS
function sanitizeInput(input) {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}