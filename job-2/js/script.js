// script.js
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Display Current Date & Time
    const datetimeElement = document.getElementById("current-datetime");
    if (datetimeElement) {
        setInterval(() => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            datetimeElement.textContent = now.toLocaleDateString('en-US', options);
        }, 1000);
    }

    // 2. Contact Form Confirmation Popup
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // Basic validation check (handled by HTML5 requires as well)
            if (this.checkValidity()) {
                alert("Thank you for reaching out! We have received your message and will get back to you shortly.");
                this.reset(); // Clear the form
            } else {
                this.reportValidity();
            }
        });
    }
});
