lucide.createIcons();

setTimeout(() => {
    const msg = document.getElementById("message");
    msg.classList.remove("thinking");
    msg.innerHTML = "Hi! There 👋";
  }, 3000);

  function showMessage() {
    document.getElementById("text").classList.toggle("show");
  }
  