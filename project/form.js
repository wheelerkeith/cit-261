window.onload = function() {
    
    window.scrollTo(0,0); 
        
    getContactFromLocalStorage();
    
    // Add an event listener for form submissions
    document.getElementById('contactForm').addEventListener('submit', function() {
        
        var f = document.getElementById('contactForm');
        
        // Save the contact form in localStorage.
        localStorage.setItem(f.elements['name'].name, f.elements['name'].value);
        localStorage.setItem(f.elements['address'].name, f.elements['address'].value);
        localStorage.setItem(f.elements['email'].name, f.elements['email'].value);
        localStorage.setItem(f.elements['phone'].name, f.elements['phone'].value);
        localStorage.setItem(f.elements['company'].name, f.elements['company'].value);
        localStorage.setItem(f.elements['employees'].name, f.elements['employees'].value);
        localStorage.setItem(f.elements['webURL'].name, f.elements['webURL'].value);
        localStorage.setItem(f.elements['svcs'].name, f.elements['svcs'].value);
        localStorage.setItem(f.elements['date'].name, f.elements['date'].value);
        localStorage.setItem(f.elements['message'].name, f.elements['message'].value);   
    });
}

// Retrieve the contact form from localStorage.
function getContactFromLocalStorage(){

    var f = document.getElementById('contactForm');

    var contactField = localStorage.getItem(f.elements['name'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['name'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['address'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['address'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['email'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['email'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['phone'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['phone'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['company'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['company'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['employees'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['employees'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['webURL'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['webURL'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['svcs'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['svcs'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['date'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['date'].value = contactField;
    }
    contactField = localStorage.getItem(f.elements['message'].name);
    if (contactField != "undefined" || contactField != "null") {
        f.elements['message'].value = contactField;
    }
}


// Clear the Contact Form and remove it from LocalStorage
function clearContactForm(){
    localStorage.clear();
    document.getElementById("contactForm").reset();     
}