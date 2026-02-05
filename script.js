const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const contentDiv = document.getElementById('content');
const messageArea = document.getElementById('messageArea');

let yesFontSize = 18; 

const messages = [
  "Are you sure? 🙄",
  "Really sure? 😑",
  "Think again! 😥",
  "Come on, say yes! 😰"
];
let messageIndex = 0;

noBtn.addEventListener('click', () => {
  gtag('event', 'click_no', { 'event_category': 'engagement' });

  yesFontSize += 10; 
  yesBtn.style.fontSize = yesFontSize + "px";
  yesBtn.style.padding = (yesFontSize / 2) + "px " + yesFontSize + "px";

  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

yesBtn.addEventListener('click', () => {
  gtag('event', 'click_yes', { 'event_category': 'engagement' });

  // Update content with your local image
  contentDiv.innerHTML = `
    <h1 style="color: #ff4d6d;">I knew you'd say yes! ❤️</h1>
    <img src="kissing-bears.jpg" alt="Teddy Bear Kissing" width="80%" style="max-width:500px; border-radius: 20px; margin-bottom: 20px;">
  `;

  // Show the message box
  messageArea.style.display = 'block';

  // Smooth scroll to the textbox
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
