// Top 10 Crypto Placeholder (voit yhdistää oikeaan APIin)
document.getElementById("top-crypto").innerText = "BTC, ETH, SOL, XRP, ADA, DOGE, AVAX, LINK, TON, BNB (data coming soon)";

// Uutisosio Placeholder (voit lisätä RSS-integraation tai API-haun)
document.getElementById("latest-news").innerText = "Cointelegraph, Decrypt & more – integration coming soon.";

// Copy to clipboard toiminto
function copyText(type) {
  let text = "";
  if (type === "btc") {
    text = "bc1q62s4qjw3mzrgu3qn6dgrxnft3ysautl02akazd";
  } else if (type === "eth") {
    text = "0xF4CCB63eeBa308C98B2440A3f4933BC389E6822f";
  } else if (type === "sol") {
    text = "J1dYiMNf1BgFwpcDiaDUP218vPbWX4o6a5qq8TCQ7oQL";
  }

  navigator.clipboard.writeText(text).then(() => {
    alert(type.toUpperCase() + " address copied!");
  });
}
