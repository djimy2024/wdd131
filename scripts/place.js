// Get the current year and populate the #currentyear span in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the document's last modified date and populate the #lastModified paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
      // Wind chill formula in Celsius
      return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
    return 'N/A';
  }
  
  // Static values for temperature and wind speed
  const temperature = 5; // in Celsius
  const windSpeed = 6; // in km/h
  
  // Display the windchill value in the page
  document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);

 
