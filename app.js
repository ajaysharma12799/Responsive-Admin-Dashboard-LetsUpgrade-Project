const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");

menuButton.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
