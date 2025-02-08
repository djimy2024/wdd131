// Get the current year and populate the #currentyear span in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the document's last modified date and populate the #lastModified paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


// Array of product objects
const products = [
    {
      id: "fc-1888",
      name: "Television",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Microwave",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "washing machine",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "iron",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "gas oven",
      averagerating: 5.0
    }
  ];
  
  // Function to populate the select options dynamically
  function populateProductOptions() {
    const productSelect = document.getElementById("product"); // Get the select element by its id
    // Create the default placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.textContent = "Choose a Product ...";
    productSelect.appendChild(placeholderOption);
  
    // Loop through the products array and create option elements
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id; // Set the value to the product ID
      option.textContent = product.name; // Set the display text to the product name
      productSelect.appendChild(option);
    });
  }
  
  // Call the function to populate the product options when the page loads
  window.onload = populateProductOptions;
  
  