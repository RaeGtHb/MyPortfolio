// Header Icons
lucide.createIcons();

// Header Scroll
let lastScrollTop = 0; // Keeps track of the last scroll position
const header = document.getElementById('header'); // Get the header element

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.style.top = '-100px'; // Hide header (adjust based on header height)
  } else {
    // Scrolling up
    header.style.top = '0'; // Show header
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});

// Main Message
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

// Project Images
let galleries = [
  [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500"
  ],
  [
    "https://picsum.photos/id/1020/800/500",
    "https://picsum.photos/id/1024/800/500",
    "https://picsum.photos/id/1027/800/500"
  ],
  [
    "https://picsum.photos/id/1035/800/500",
    "https://picsum.photos/id/1039/800/500",
    "https://picsum.photos/id/1043/800/500"
  ]
];

let currentGallery = 0;
let currentIndex = 0;

function openModal(galleryIndex) {
  currentGallery = galleryIndex;
  currentIndex = 0;
  document.getElementById("myModal").style.display = "block";
  showImage();
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = galleries[currentGallery].length - 1;
  }

  if (currentIndex >= galleries[currentGallery].length) {
    currentIndex = 0;
  }

  showImage();
}

function showImage() {
  const modalImage = document.getElementById("modalImage");
  const bottomThumbs = document.getElementById("bottomThumbs");

  modalImage.src = galleries[currentGallery][currentIndex];

  bottomThumbs.innerHTML = "";

  galleries[currentGallery].forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img;

    if (index === currentIndex) {
      thumb.classList.add("active");
    }

    thumb.addEventListener("click", () => {
      currentIndex = index;
      showImage();
    });

    bottomThumbs.appendChild(thumb);
  });
}
