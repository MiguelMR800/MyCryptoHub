
function copyText(button) {
  const text = button.previousSibling.textContent.trim();
  navigator.clipboard.writeText(text);
  button.innerText = "Copied!";
  setTimeout(() => (button.innerText = "Copy"), 2000);
}
