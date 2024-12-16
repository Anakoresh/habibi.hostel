const hideButton = document.querySelector(".hide-slide-out-panel");
const checkButton = document.querySelector(".check-availability");
const slideOutPanel = document.querySelector(".slide-out-panel");

function togglePanel() {
  if (slideOutPanel.classList.contains("active")) {
    slideOutPanel.classList.remove("active");
    hideButton.classList.add("d-none");
    checkButton.classList.remove("d-none");
  } else {
    slideOutPanel.classList.add("active");
    hideButton.classList.remove("d-none");
    checkButton.classList.add("d-none");
  }
}

hideButton.addEventListener("click", togglePanel);
checkButton.addEventListener("click", togglePanel);

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

function closeMenu(event) {
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.getElementById("menu");

  if (
    !menu.contains(event.target) &&
    !burgerMenu.contains(event.target) &&
    menu.classList.contains("active")
  ) {
    menu.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
}

window.addEventListener("click", closeMenu);
window.addEventListener("touchstart", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
});

document
  .getElementById("availability-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const adults = document.getElementById("adults").value;

    if (!checkIn || !checkOut || !adults) {
      alert("Please fill out all fields.");
      return;
    }

    const baseUrl =
      "https://ibe.sabeeapp.com/properties/Habibi-Hostel-booking/";
    const params = `?p=bSp15b42f200a54001b&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}`;
    const fullUrl = baseUrl + params;

    window.open(fullUrl, "_blank");
  });

document.getElementById("profile-icon").addEventListener("click", () => {
  const profileUrl =
    "https://guest.sabeeapp.com/Habibi-Hostel/login?p=bSp15b42f200a54001";
  window.open(profileUrl, "_blank");
});
