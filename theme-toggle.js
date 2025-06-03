
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("day-theme");
    });
  }
});
