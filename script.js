const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const contentDiv = document.getElementById('content');
const messageArea = document.getElementById('messageArea');

let yesFontSize = 18; 

const messages = [
  "Are you sure? 🙄",
  "Really sure? 😑",
  "Think again!😥",
  "Come on, say yes!😰"
];
let messageIndex = 0;

noBtn.addEventListener('click', () => {
  // Analytics event for "No" click
  gtag('event', 'click_no', { 'event_category': 'engagement' });

  // Increase Yes button size
  yesFontSize += 10; 
  yesBtn.style.fontSize = yesFontSize + "px";
  yesBtn.style.padding = (yesFontSize / 2) + "px " + yesFontSize + "px";

  // Cycle through messages
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

yesBtn.addEventListener('click', () => {
  // Analytics event for "Yes" click
  gtag('event', 'click_yes', { 'event_category': 'engagement' });

  // 1. Update content with local image and text
  contentDiv.innerHTML = `
    <h1 style="color: #ed8595;">I knew you'd say yes! ❤️</h1>
    <img src="kissing-bears.jpg" alt="Teddy Bear Kissing" width="80%" style="max-width:500px; border-radius: 20px; margin-bottom: 20px;">
  `;

  // 2. Display the message form
  messageArea.style.display = 'block';

  // 3. Scroll to the message form
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
