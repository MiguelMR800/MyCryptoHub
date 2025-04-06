function copy(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}