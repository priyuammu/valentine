const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const contentDiv = document.getElementById('content');

let yesFontSize = 18; // initial font size in px

const messages = [
  "Are you sure? 🙄",
  "Really sure? 😑",
  "Think again!😥",
  "Come on, say yes!😰"
];
let messageIndex = 0;

noBtn.addEventListener('click', () => {
  // Increase the size of the Yes button
  yesFontSize += 5; 
  yesBtn.style.fontSize = `${yesFontSize}px`;

  // Rotate through messages
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

yesBtn.addEventListener('click', () => {
  // Replace content with success message and image
  contentDiv.innerHTML = `
    <p>I knew you'd say yes! ❤️</p>
    <img src="kissing-bears.jpg" alt="Teddy Bear Kissing" width="573" height="475">
  `;
});

