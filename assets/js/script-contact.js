// check  feedback 
let checkName = /^[a-zA-ZÀ-ỹ0-9]{2,}$/;
let checkEmail = /^[a-zA-Z0-9_+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let checkPhone = /^(0[3|5|7|8|9])([0-9]{8})$/;
//kiem tra chuoi nhap vao co rong khong
function checkNull(text){
  return text.value.trim().length === 0;
}
//kiem tra chuoi nhap vao co phai la so khong
function checkNumber(text){
  return !isNaN(text.value) && text.value.trim() !=="";
}
//kiem tra tinh hop le cua bieu mau
function validForm(forNameContact){
  if(checkNull(forNameContact.fullname)){
    alert("Tên không được để trống");
    forNameContact.fullname.focus();
    return false;
  }else if(!checkName.test(forNameContact.fullname.value)){
    alert("Tên truy cập chỉ gồm chữ cái chữ số và có it nhất 2 kí tự!!");
    forNameContact.fullname.focus();
    return false;
  }
  if(checkNull(forNameContact.email)){
    alert("Email không được bỏ trống!!");
    forNameContact.email.focus();
    return false;
  }else if(!checkEmail.test(forNameContact.email.value)){
    alert("Email không hợp lệ!!!");
    forNameContact.email.focus();
    return false;
  }
  if(checkNull(forNameContact.phone)){
    alert("Số điện thoại không được để trống!!");
    forNameContact.phone.focus();
    return false;
  }else if(!checkPhone.test(forNameContact.phone.value)){
    alert("Số điện thoại không hợp lệ!!!");
    forNameContact.phone.focus();
    return false;
  }
  if(checkNull(forNameContact.message)){
    alert("Hãy để lại tin nhắn cho chúng tôi !!");
    forNameContact.message.focus();
    return false;
  }else if(!checkName.test(forNameContact.message.value)){
    alert("Tin nhắn phải có ít nhất 2 kí tự!!");
    forNameContact.message.focus();
    return false;
  }
  return true;
}
let checkForm = document.querySelector("#NameFeedback");
checkForm.addEventListener('submit',function(event){
  
  if(validForm(this)){
    this.submit();//de gui di
    alert("Biểu mẫu đã được gửi!!");
  }
  else{
    event.preventDefault();
  }
});
//check footer
let checkfooter = document.querySelector(".section-end form");
function checkNull(text) {
  return text.value.trim().length === 0;
}
function checkValid(forName) {
  if (checkNull(forName.emailcheck)) {
    alert("Email không được bỏ trống");
    forName.emailcheck.focus();
    return false;
  } else if (!checkEmail.test(forName.emailcheck.value)) {
    alert("Email không đúng định dạng");
    forName.emailcheck.focus();
    return false;
  }
  return true;
}
checkfooter.addEventListener('submit', function (event) {
  if (checkValid(this)) {
    alert("Email đã được gửi đi");
    this.submit();
  }
  else {
    event.preventDefault();
  }
})

// end checkfeedback 