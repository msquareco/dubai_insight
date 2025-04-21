// main.js
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("./components/header.html", "header-container");
  loadHTML("./components/footer.html", "footer-container");
});

// General function to load HTML into a container
function loadHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} while fetching ${file}`);
      }
      return response.text();
    })
    .then(data => {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
      }
      element.innerHTML = data;
    })
    .catch(err => console.error(`Error loading "${file}":`, err));
}
