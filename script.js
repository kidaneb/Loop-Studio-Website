const menuButton = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

menuButton.addEventListener("click", menuButtonClicked);

function menuButtonClicked() {
  const isItOpen = menuButton.classList.contains("open");
  if (!isItOpen) {
    menuButton.classList.add("open");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex")
  } else {
    menuButton.classList.remove("open");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden")
  }

// use can delete the above and use this simple code
    // menuButton.classList.toggle("open");
    // menuButton.classList.toggle("flex");
    // menuButton.classList.toggle("hidden");
}
