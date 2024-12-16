const items = document.querySelectorAll(".gallery-item");
let currentIndex = 0;
const intervalTime = 2000; 

function clearActiveClasses() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

function setActiveClass(index) {
  clearActiveClasses();
  items[index].classList.add("active");
}

function startAutoSwitch() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length; 
    setActiveClass(currentIndex);
  }, intervalTime);
}

for (const [index, item] of items.entries()) {
  item.addEventListener("click", () => {
    clearActiveClasses();
    item.classList.add("active");
    currentIndex = index; 
  });
}

startAutoSwitch();