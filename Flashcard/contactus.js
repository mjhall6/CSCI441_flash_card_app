document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    //display conformation message
    document.getElementById('confirmationMessage').style.display = 'block';

    //reset fields
    document.getElementById('contactForm').reset();
});