// Example of simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.querySelector('input[name="name"]');
    var email = document.querySelector('input[name="email"]');
    
    if (!name.value || !email.value) {
        alert("Please fill in all fields!");
        event.preventDefault();
    }
});
