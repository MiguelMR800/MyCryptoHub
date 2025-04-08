// Toggle chat visibility
function toggleChat() {
  const container = document.getElementById("chatContainer");
  container.style.display = container.style.display === "flex" ? "none" : "flex";
}

// Send message to backend
async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";
  appendMessage("bot", "Typing...");

  try {
    const res = await fetch("https://my-crypto-hub-iir7.vercel.app/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    const botMessages = document.querySelectorAll(".bot");
    if (botMessages.length) {
      botMessages[botMessages.length - 1].textContent = data.reply || "No response.";
    }
  } catch (err) {
    console.error(err);
    const botMessages = document.querySelectorAll(".bot");
    if (botMessages.length) {
      botMessages[botMessages.length - 1].textContent = "Bot error.";
    }
  }
}

// Append message to chat box
function appendMessage(sender, text) {
  const chat = document.getElementById("chatMessages");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Fetch crypto news from Cryptopanic
const newsUrl = "https://cryptopanic.com/api/v1/posts/?auth_token=demo&filter=important";

fetch(newsUrl)
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById("news-ticker-text");
    if (data.results && data.results.length > 0) {
      const newsHtml = data.results
        .slice(0, 6)
        .map(item => `<a href="${item.url}" target="_blank">${item.title}</a>`)
        .join(" • ");
      newsContainer.innerHTML = newsHtml;
    } else {
      newsContainer.textContent = "No news found.";
    }
  })
  .catch(error => {
    console.error("Failed to load news:", error);
    document.getElementById("news-ticker-text").textContent = "News error.";
  });
