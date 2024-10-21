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
const sec4List1 = document.querySelector(".list-1");
const sec4List2 = document.querySelector(".list-2");
const sec4List3 = document.querySelector(".list-3");
const content2 = document.querySelector(".section-4 .section4-list2");
const content1 = document.querySelector(".section-4 .inner-box");
content2.style.display = 'none';

sec4List1.addEventListener('click',show1);
sec4List2.addEventListener('click',show2);
function show2(){
  content1.style.display = 'none';
  content2.style.display = 'flex';
  sec4List2.classList.add('active');
  sec4List1.classList.remove('active');
}
function show1(){
  content1.style.display = 'flex';
  content2.style.display = 'none';
  sec4List1.classList.add('active');
  sec4List2.classList.remove('active');
  
}
