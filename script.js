particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json', function() {
  console.log('particles.js loaded - callback');
});

document.querySelectorAll('.content-section').forEach((section, i) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.content-section').forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
