window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const body = document.body;

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const id = section.id;

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      body.className = ''; // Poistaa vanhat luokat
      body.classList.add(`${id}-bg`); // Lisää uuden luokan esim. 'wallets-bg'
    }
  });
});
