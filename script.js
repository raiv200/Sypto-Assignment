const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// Initial display
showItem(currentIndex);

// Auto-advance the carousel (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}, 3000);
