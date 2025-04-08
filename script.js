
function copyToClipboard(address) {
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied: " + address);
  });
}
