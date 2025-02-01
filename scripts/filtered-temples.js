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

   

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 106000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/NorthBirdsEye.jpg" },
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, February, 14",
    area: 24710,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg" },
  {
    templeName: "Port-au-Prince Haiti Temple",
    location: "Port-au-Prince, Haiti",
    dedicated: "2019, September, 1",
    area: 10396,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/01-Port-au-Prince-Haiti-Temple-2264538.jpg"
  }
  ];

  document.addEventListener("DOMContentLoaded", function() {
    const templeContainer = document.getElementById("temple-cards-container");
  
    // Function to create a temple card
    function createTempleCard(temple) {
        let card = document.createElement("div");
      card.classList.add("temple-card");
      let templeName = document.createElement("h3");
      templeName.textContent = temple.templeName;
      
      let location = document.createElement("p");
      location.textContent = `Location: ${temple.location}`;
      
      let dedicated = document.createElement("p");
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      
      let area = document.createElement("p");
      area.textContent = `Area: ${temple.area} sq. ft.`;
      
      let image = document.createElement("img");
      image.setAttribute("src", temple.imageUrl);
      image.setAttribute("alt", temple.templeName);
      image.setAttribute("loading", "lazy");
        // Append elements to the card
        card.appendChild(templeName);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);
    
        // Append card to container
        templeContainer.appendChild(card);
      }
       // Loop through the temples array and create a card for each
    temples.forEach(temple => createTempleCard(temple));
});

// Function to filter and sort temples based on different filters
function filterTemples(filterType) {
    let filteredTemples = [temples]; // Make a copy of the temples array
  
    switch (filterType) {
      case 'old':
        // Temples built before 1900
        filteredTemples = filteredTemples.filter(temple => {
          const date = new Date(temple.dedicated);
          return date.getFullYear() < 1900;
        });
        break;
  
      case 'new':
        // Temples built after 2000
        filteredTemples = filteredTemples.filter(temple => {
          const date = new Date(temple.dedicated);
          return date.getFullYear() > 2000;
        });
        break;
  
      case 'large':
        // Temples with area greater than 90,000 sqft
        filteredTemples = filteredTemples.filter(temple => temple.area > 90000);
        break;
  
      case 'small':
        // Temples with area smaller than 10,000 sqft
        filteredTemples = filteredTemples.filter(temple => temple.area < 10000);
        break;
  
      case 'home':
        // Show all temples (no filter)
        filteredTemples = [temples];
        break;
  
      default:
        break;
    }
  
    renderTemples(filteredTemples); // Render the filtered temples
  }
  
  // Toggle filter menu visibility when hamburger is clicked
  let hamburger = document.getElementById("hamburger");
  let filterMenu = document.getElementById("filter-menu");
  
  hamburger.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default action of the link
    filterMenu.classList.toggle("show"); // Toggle menu visibility
  });
  
  // Add event listeners to filter menu buttons
  document.getElementById("filter-old").addEventListener("click", () => filterTemples('old'));
  document.getElementById("filter-new").addEventListener("click", () => filterTemples('new'));
  document.getElementById("filter-large").addEventListener("click", () => filterTemples('large'));
  document.getElementById("filter-small").addEventListener("click", () => filterTemples('small'));
  document.getElementById("filter-home").addEventListener("click", () => filterTemples('home'));
  
  // Initial render (display all temples by default)
  renderTemples(temples);