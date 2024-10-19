const menu = document.querySelector(".header .an");
const iconMenu = document.querySelector(".header .inner-list");
iconMenu.addEventListener('click', show);

function show() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}



