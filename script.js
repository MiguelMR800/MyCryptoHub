document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const body = document.body;

  const affiliate = document.getElementById('affiliate');
  const wallets = document.getElementById('wallets');
  const exchanges = document.getElementById('exchanges');

  body.className = 'default-bg';

  if (scrollY >= exchanges.offsetTop - 100) {
    body.className = 'exchanges-bg';
  } else if (scrollY >= wallets.offsetTop - 100) {
    body.className = 'wallets-bg';
  } else if (scrollY >= affiliate.offsetTop - 100) {
    body.className = 'affiliates-bg';
  }
});
