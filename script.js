document.getElementById('chatbot-bubble').addEventListener('click', function() {
  alert('Chatbot is under development.');
});

function copyAddress(type) {
  let addresses = {
    btc: "bc1q62s4qjw3mzrgu3qn6dgrxnft3ysautl02akazd",
    eth: "0xF4CCB63eeBa308C98B2440A3f4933BC389E6822f",
    sol: "J1dYiMNf1BgFwpcDiaDUP218vPbWX4o6a5qq8TCQ7oQL"
  };
  navigator.clipboard.writeText(addresses[type]).then(() => {
    alert('Address copied!');
  });
}