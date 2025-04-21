// main.js
window.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header-container").innerHTML = data);

  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);
});
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("/components/header.html", "header-container");
  loadHTML("/components/footer.html", "footer-container");
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


// Load header and footer dynamically
document.addEventListener('DOMContentLoaded', () => {
  loadHTML('components/header.html', 'header-placeholder');
  loadHTML('components/footer.html', 'footer-placeholder');
});
