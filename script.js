async function askChatGPT(question) {
  const response = await fetch("https://my-crypto-hub.vercel.app/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: question })
  });
  const data = await response.json();
  return data.reply || "No response.";
}

function toggleChat() {
  const box = document.getElementById('chatbox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chatInput");
  const replyBox = document.getElementById("chatReply");

  input.addEventListener("keypress", async function(e) {
    if (e.key === "Enter") {
      const question = input.value.trim();
      if (!question) return;
      input.disabled = true;
      replyBox.innerText = "Thinking...";
      const answer = await askChatGPT(question);
      replyBox.innerText = answer;
      input.disabled = false;
      input.value = "";
    }
  });
});
