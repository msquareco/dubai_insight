// main.js
window.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header-container").innerHTML = data);

  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);
});
// Function to load HTML file into a placeholder
function loadHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error('Error loading HTML:', err));
}

// Load header and footer dynamically
document.addEventListener('DOMContentLoaded', () => {
  loadHTML('components/header.html', 'header-placeholder');
  loadHTML('components/footer.html', 'footer-placeholder');
});
