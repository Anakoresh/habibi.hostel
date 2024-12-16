document.addEventListener("DOMContentLoaded", () => {
  const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.style.backgroundImage = url('${entry.target.dataset.bg}');
              observer.unobserve(entry.target);
          }
      });
  });

  lazyBackgrounds.forEach((bg) => observer.observe(bg));
});

const textElement = document.getElementById('text');
const text = textElement.innerHTML; // Считываем HTML, а не только текст
textElement.innerHTML = ''; // Очищаем элемент для анимации
let i = 0;

function typeEffect() {
  if (i < text.length) {
    if (text[i] === '<') {
      const tagEnd = text.indexOf('>', i) + 1;
      textElement.innerHTML += text.slice(i, tagEnd);
      i = tagEnd;
    } else {
      textElement.innerHTML += text[i];
      i++;
    }
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  allowTouchMove: true,
});

const swiperTwo = new Swiper(".swiper-two", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-two-button-next",
    prevEl: ".swiper-two-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInterection: false,
  },
  allowTouchMove: true,
});

const expandBtn = document.getElementById("expand-btn");
const modal = document.getElementById("modal");
const expandedImage = document.getElementById("expanded-image");
const closeBtn = document.getElementById("close-btn");
const thumbnail = document.querySelector(".thumbnail");

expandBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  expandedImage.src = thumbnail.src;
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
