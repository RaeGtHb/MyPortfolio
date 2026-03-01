// Icons
lucide.createIcons();

// Message
const message = document.getElementById("message");
const chatBox = document.getElementById("chatBox");
let timeout;

function startAnimation() {
  message.className = "chat-message thinking";
  message.innerHTML = `
    <div class="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    message.className = "chat-message";
    message.innerHTML = "Hi! There 👋";
  }, 3000);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startAnimation();
    }
  });
}, { threshold: 0.6 });

observer.observe(chatBox);
