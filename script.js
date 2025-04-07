
function toggleChat() {
  const chatWindow = document.getElementById('chatbot-window');
  chatWindow.classList.toggle('hidden');
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const log = document.getElementById('chat-log');
  const userText = input.value;
  if (!userText) return;

  const userMsg = document.createElement('div');
  userMsg.textContent = "You: " + userText;
  log.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.textContent = "Bot: I’ll get back to you on that!";
  log.appendChild(botMsg);

  input.value = '';
  log.scrollTop = log.scrollHeight;
}

function copyToClipboard(type) {
  let text = '';
  if (type === 'btc') text = 'bc1q62s4qjw3mzrgu3qn6dgrxnft3ysautl02akazd';
  if (type === 'eth') text = '0xF4CCB63eeBa308C98B2440A3f4933BC389E6822f';
  if (type === 'sol') text = 'J1dYiMNf1BgFwpcDiaDUP218vPbWX4o6a5qq8TCQ7oQL';

  navigator.clipboard.writeText(text).then(() => {
    alert(type.toUpperCase() + " address copied!");
  });
}

window.onload = () => {
  // Top10 ticker simulation
  const ticker = document.getElementById('top10-ticker');
  const coins = ['BTC +2.4%', 'ETH +1.7%', 'SOL +3.2%', 'XRP -0.5%', 'DOGE +0.9%', 'ADA +0.3%', 'AVAX +2.1%', 'LINK +0.6%', 'DOT -1.0%', 'TON +4.5%'];
  let i = 0;
  setInterval(() => {
    ticker.textContent = coins[i % coins.length];
    i++;
  }, 2500);

  // Mock news ticker
  const news = document.getElementById('news-ticker');
  const headlines = [
    'Cointelegraph: Bitcoin halving draws near.',
    'SEC delays ETF decisions again.',
    'Solana DeFi surges in Q2.',
    'Ledger releases new firmware update.'
  ];
  let j = 0;
  setInterval(() => {
    news.textContent = headlines[j % headlines.length];
    j++;
  }, 4000);
};
