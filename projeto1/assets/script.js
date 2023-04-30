const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu-list');

function toggleMenu() {
  var bars = document.getElementsByClassName("bar");
  for (var i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("open");
  }
}

hamburgerMenu.addEventListener('click', function () {
  menuList.classList.toggle('show');
  toggleMenu();
  console.log("Teste");
});