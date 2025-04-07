
// Copy to clipboard
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

// Cointelegraph RSS news ticker
async function loadNews() {
  const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://cointelegraph.com/rss');
  try {
    const response = await fetch(url);
    const data = await response.json();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");
    let ticker = "";
    for (let i = 0; i < 5; i++) {
      const title = items[i].querySelector("title").textContent;
      ticker += " | " + title;
    }
    document.getElementById("latest-news").innerText = ticker;
  } catch (error) {
    document.getElementById("latest-news").innerText = "Failed to load news.";
  }
}
loadNews();
