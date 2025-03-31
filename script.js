
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const body = document.body;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        body.className = '';
        if (entry.target.id === "affiliates") body.classList.add("affiliates-bg");
        else if (entry.target.id === "wallets") body.classList.add("wallets-bg");
        else if (entry.target.id === "exchanges") body.classList.add("exchanges-bg");
        else body.classList.add("default-bg");
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
