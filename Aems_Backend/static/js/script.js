document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;  // Get the selected role

        // Validate form data (if needed)
        if (!username || !password || !role) {
            displayMessage('All fields are required!', 'red');
            return;
        }

        // Send the data to the server via a POST request
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),  // Include role in the request body
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the home page or show success message
                window.location.href = '/home';
            } else {
                // Show error message
                displayMessage('Login failed. Try again.', 'red');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            displayMessage('An error occurred. Please try again.', 'red');
        });
    });

    // Function to display messages to the user
    function displayMessage(message, color) {
        const output = document.getElementById('output');
        output.textContent = message;
        output.style.color = color;
    }
});
