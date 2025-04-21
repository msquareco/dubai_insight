window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded. Starting to load header and footer...");
  
  // Load header HTML into the header-container
  loadHTML("./components/header.html", "header-container");

  // Load footer HTML into the footer-container
  loadHTML("./components/footer.html", "footer-container");
});

// General function to load HTML into a container
function loadHTML(file, elementId) {
  console.log(`Attempting to load HTML from ${file} into element with ID "${elementId}"...`);

  // Fetch the HTML file
  fetch(file)
    .then(response => {
      if (!response.ok) {
        // If response is not OK, log an error with status code
        throw new Error(`HTTP error! Status: ${response.status} while fetching ${file}`);
      }
      console.log(`Successfully fetched ${file} from server.`);
      return response.text();
    })
    .then(data => {
      const element = document.getElementById(elementId);
      
      // If the element doesn't exist, log an error
      if (!element) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
      }
      
      // Successfully loaded the HTML into the container
      console.log(`Injecting HTML into element with ID "${elementId}"...`);
      element.innerHTML = data;
    })
    .catch(err => {
      // Log any errors that occurred during fetch or processing
      console.error(`Error loading "${file}":`, err);
    });
}
