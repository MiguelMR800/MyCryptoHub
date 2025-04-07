
document.getElementById("crypto-prices").innerText = "BTC: +2.3% | ETH: +1.7% | SOL: +4.5%";
const ticker = document.getElementById("news-ticker");
const news = ["Bitcoin ETF approved!", "Solana hits new highs.", "LayerZero launches new feature."];

let index = 0;
function updateNews() {
  ticker.innerText = news[index];
  index = (index + 1) % news.length;
}
setInterval(updateNews, 3000);
updateNews();
