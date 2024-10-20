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
//khi click ra ngoai thi an di
document.addEventListener('click', function(event) {
  if (!iconMenu.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = 'none';
  }
});





