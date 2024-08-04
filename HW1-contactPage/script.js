document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Reset all error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    let hasError = false;

    const fields = [
        { id: 'username', validate: value => value !== '', errorMessage: 'Username is required' },
        { id: 'email', validate: value => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value), errorMessage: 'Invalid email address' },
        { id: 'firstName', validate: value => value !== '', errorMessage: 'First name is required' },
        { id: 'website', validate: value => value === '' || /^https?:\/\/.+\..+/.test(value), errorMessage: 'Invalid website URL' },
        { id: 'password', validate: value => value.length >= 6, errorMessage: 'Password must be at least 6 characters' },
        { id: 'rePassword', validate: value => value === document.getElementById('password').value, errorMessage: 'Passwords do not match' },
        { id: 'terms', validate: value => value, errorMessage: 'You must agree to the terms and conditions', isCheckbox: true }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const value = field.isCheckbox ? input.checked : input.value;

        if (!field.validate(value)) {
            document.getElementById(`${field.id}Error`).innerText = field.errorMessage;
            document.getElementById(`${field.id}Error`).style.display = 'block';
            hasError = true;
        }
    });

    if (!hasError) {
        alert('Form submitted successfully!');
        // You can add code here to send the form data to the server
    }
});
