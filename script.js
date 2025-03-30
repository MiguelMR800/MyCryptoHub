particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json', function() {
  console.log('particles.js loaded');
});

const translations = {
  fi: {
    title: "Tervetuloa kryptosivustolle!",
    bybit: "Bybit: Rekisteröidy tästä",
    binance: "Binance: Rekisteröidy tästä",
    crypto: "Crypto.com: Rekisteröidy tästä",
    coinmotion: "Coinmotion: Rekisteröidy tästä"
  },
  en: {
    title: "Welcome to the crypto site!",
    bybit: "Bybit: Register here",
    binance: "Binance: Register here",
    crypto: "Crypto.com: Register here",
    coinmotion: "Coinmotion: Register here"
  }
};

document.getElementById("language-selector").addEventListener("change", function () {
  const lang = this.value;
  const t = translations[lang] || translations["fi"];
  document.getElementById("title").innerText = t.title;
  document.getElementById("bybit-link").innerHTML = `${t.bybit} <a href="https://www.bybit.com/invite?ref=EQ69EL" target="_blank">Bybit</a>`;
  document.getElementById("binance-link").innerHTML = `${t.binance} <a href="https://www.binance.com/referral/earn-together/refertoearn2000usdc/claim?hl=en&ref=GRO_14352_A3YU5" target="_blank">Binance</a>`;
  document.getElementById("crypto-link").innerHTML = `${t.crypto} <a href="https://crypto.com/app/nrmm4uzm29" target="_blank">Crypto.com</a>`;
  document.getElementById("coinmotion-link").innerHTML = `${t.coinmotion} <a href="https://app.coinmotion.com/fi/register/signup?referral_code=DAWL3TJGXHKJPUK9KPWP" target="_blank">Coinmotion</a>`;
});
