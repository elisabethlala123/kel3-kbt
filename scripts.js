function detectFood() {
    const input = document.getElementById('foodImage');
    if (input.files && input.files[0]) {
        alert('Food detection started!');
        // Add your food detection logic here
    } else {
        alert('Please choose an image file first.');
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign up successful!');
    // Add your sign-up logic here
});
