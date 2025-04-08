function toggleChat() {
  const container = document.getElementById("chatContainer");
  container.style.display = container.style.display === "flex" ? "none" : "flex";
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";
  appendMessage("bot", "Typing...");

  try {
    const res = await fetch("https://my-crypto-hub.vercel.app/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    const botMessages = document.querySelectorAll(".bot");
    if (botMessages.length) {
      botMessages[botMessages.length - 1].textContent = data.reply;
    }
  } catch (err) {
    console.error(err);
  }
}

function appendMessage(sender, text) {
  const chat = document.getElementById("chatMessages");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}