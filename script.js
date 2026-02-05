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
  // Track "No" click
  gtag('event', 'click_no', { 'event_category': 'engagement' });

  yesFontSize += 10; 
  yesBtn.style.fontSize = yesFontSize + "px";
  yesBtn.style.padding = (yesFontSize / 2) + "px " + yesFontSize + "px";

  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
});

yesBtn.addEventListener('click', () => {
  // Track "Yes" click
  gtag('event', 'click_yes', { 'event_category': 'engagement' });

  // Hide initial content
  contentDiv.innerHTML = `
    <h1 style="color: #ff4d6d;">I knew you'd say yes! ❤️</h1>
    <img src="https://media.tenor.com/gU_i95yS698AAAAi/tkthao219-bubududu.gif" alt="Happy" width="250">
  `;

  // Show message form
  messageArea.style.display = 'block';
  
  // Scroll to the form automatically
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});
