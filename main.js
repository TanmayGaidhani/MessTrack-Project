
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const icon = document.querySelector(".mode-toggle i");
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
    } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
    }
}
// Toggle the sidebar when clicking the menu icon
document.querySelector('.menu_icon').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

// Optional: Close sidebar on clicking outside
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu_icon');

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});


const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent it from triggering the document click
  sidebar.classList.toggle('active');
});

// Close sidebar if clicking outside
document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('active');
  }
});


