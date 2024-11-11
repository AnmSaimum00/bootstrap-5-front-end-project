// Simple form validation for login pages
document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('admin-email').value;
    let password = document.getElementById('admin-password').value;
    if (!email || !password) {
        alert('Please fill in both fields');
    } else {
        alert('Admin Login successful!');
    }
});

document.getElementById('customer-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('customer-email').value;
    let password = document.getElementById('customer-password').value;
    if (!email || !password) {
        alert('Please fill in both fields');
    } else {
        alert('Customer Login successful!');
    }
});
