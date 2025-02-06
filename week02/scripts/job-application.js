document.getElementById('job-application-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting for now

    // Grab form values (you can store or process these as needed)
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('degree').value;

    // Example: Display a thank-you message or redirect user
    alert(`Thank you for applying, ${fullName}! We will review your application and get back to you soon.`);
});
