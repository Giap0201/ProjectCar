const menu = document.querySelector(".header .an");
const iconMenu = document.querySelector(".header #togger");
iconMenu.addEventListener('click', show);

function show() {
  if (menu.style.display == 'block') {
    
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

//khi click ra ngoai thi an di
document.addEventListener('click', function (event) {
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

sec4List1.addEventListener('click', show1);
sec4List2.addEventListener('click', show2);
function show2() {
  content1.style.display = 'none';
  content2.style.display = 'flex';
  sec4List2.classList.add('active');
  sec4List1.classList.remove('active');
}
function show1() {
  content1.style.display = 'flex';
  content2.style.display = 'none';
  sec4List1.classList.add('active');
  sec4List2.classList.remove('active');

}


// section5-feedback 
let feedback0 = document.querySelector(".section-5 #feedback-content0");
let feedback1 = document.querySelector(".section-5 #feedback-content1");
let feedback2 = document.querySelector(".section-5 #feedback-content2");
let feedback3 = document.querySelector(".section-5 #feedback-content3");
let feedback4 = document.querySelector(".section-5 #feedback-content4");

var feedback = [feedback0, feedback1, feedback2, feedback3,feedback4];
var currentIndex = 0;
function changeFeedback() {
  feedback[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) ;
  if(currentIndex > feedback.length-1){
    currentIndex  = 0;
  }
  feedback[currentIndex].style.display = 'block';
}
feedback[currentIndex].addEventListener('click', changeFeedback);
setInterval(changeFeedback, 4000);
// end section5-feedback 