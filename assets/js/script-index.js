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
// let feedback0 = document.querySelector(".section-5 #feedback-content0");
// let feedback1 = document.querySelector(".section-5 #feedback-content1");
// let feedback2 = document.querySelector(".section-5 #feedback-content2");
// let feedback3 = document.querySelector(".section-5 #feedback-content3");
// var feedback  =[feedback0,feedback1,feedback2,feedback3];
// let indexFeedback = 1;
// // var feedback = [feedback0,feedback1,feedback2,feedback3];
// feedback0.addEventListener('click',feebackChange());
// function feebackChange(){
  
// }

// let feedback0 = document.querySelector(".section-5 #feedback-content0");
// let feedback1 = document.querySelector(".section-5 #feedback-content1");
// let feedback2 = document.querySelector(".section-5 #feedback-content2");
// let feedback3 = document.querySelector(".section-5 #feedback-content3");
// var feedback = [feedback0, feedback1, feedback2, feedback3];
// var i = 0; // Bắt đầu từ feedback đầu tiên


// feedback[i].addEventListener('click',changeFeedback);
// function changeFeedback(){
//   feedback0.style.display = 'none';

// }
let feedback0 = document.querySelector(".section-5 #feedback-content0");
let feedback1 = document.querySelector(".section-5 #feedback-content1");
let feedback2 = document.querySelector(".section-5 #feedback-content2");
let feedback3 = document.querySelector(".section-5 #feedback-content3");
var feedback = [feedback0, feedback1, feedback2, feedback3];
var currentIndex = 0; // Bắt đầu từ phần tử đầu tiên

// Ẩn tất cả phản hồi ngoại trừ phản hồi đầu tiên
for (let j = 1; j < feedback.length; j++) {
  feedback[j].style.display = 'none';
}

// Định nghĩa hàm changeFeedback
function changeFeedback() {
  // Ẩn phản hồi hiện tại
  feedback[currentIndex].style.display = 'none';

  // Cập nhật chỉ số phần tử tiếp theo
  currentIndex = (currentIndex + 1) % feedback.length; // Quay lại 0 nếu vượt quá số lượng phần tử

  // Hiển thị phản hồi tiếp theo
  feedback[currentIndex].style.display = 'block';
}

// Thêm sự kiện click cho phần tử đầu tiên
feedback[currentIndex].addEventListener('click', changeFeedback);

// Sử dụng setInterval để tự động chuyển đổi phản hồi
setInterval(changeFeedback, 2000);


// end section5-feedback 