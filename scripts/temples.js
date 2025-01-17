// Get the current year and populate the #currentyear span in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the document's last modified date and populate the #lastModified paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu functionality for mobile view
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    
    function checkScreenSize() {
        if (window.innerWidth <= 600) {
            navLinks.style.display = 'none'; //Hide navigation links on small screens
        } else {
            navLinks.style.display = 'flex'; // Show navigation links on large screens
            navLinks.classList.remove('active'); // Remove the "active" class if present
        }
    }
    // Initialize display on page load
checkScreenSize();

// Add an event listener to monitor window size changes
window.addEventListener('resize', checkScreenSize);

// Add event to hamburger button to show/hide links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Add/remove the "active" class on the navLinks
});

    // Add event listener to toggle the menu visibility
    hamburger.addEventListener('click', function() {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
            hamburger.textContent = '☰'; // Show hamburger icon
        } else {
            navLinks.style.display = 'block';
            hamburger.textContent = 'X'; // Change to 'X' to close
        }
    });
});

// Function to handle menu selection and update content
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const mainHeading = document.querySelector('main h2');
    const figures = document.querySelector('main');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedMenu = event.target.textContent;
            
            // Update the heading based on the menu selection
            mainHeading.textContent = `${selectedMenu}`;

            // Modify the content (here we're just changing the figure content for simplicity)
            updateFigures(selectedMenu);
        });
    });
});

   