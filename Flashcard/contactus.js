document.getElementById('contactForm').addEventListener('submit', function(e) {
    
   /* 
   //prevent default
    e.preventDefault();
    */
    
    //display conformation message
    document.getElementById('confirmationMessage').style.display = 'block';

    //reset fields
    document.getElementById('contactForm').reset();
});