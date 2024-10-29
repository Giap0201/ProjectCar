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
function validForm(forName){
  if(checkNull(forName.fullname)){
    alert("Tên không được để trống");
    forName.fullname.focus();
    return false;
  }else if(!checkName.test(forName.fullname.value)){
    alert("Tên truy cập chỉ gồm chữ cái chữ số và có it nhất 2 kí tự!!");
    forName.fullname.focus();
    return false;
  }
  if(checkNull(forName.email)){
    alert("Email không được bỏ trống!!");
    forName.email.focus();
    return false;
  }else if(!checkEmail.test(forName.email.value)){
    alert("Email không hợp lệ!!!");
    forName.email.focus();
    return false;
  }
  if(checkNull(forName.phone)){
    alert("Số điện thoại không được để trống!!");
    forName.phone.focus();
    return false;
  }else if(!checkPhone.test(forName.phone.value)){
    alert("Số điện thoại không hợp lệ!!!");
    forName.phone.focus();
    return false;
  }
  if(checkNull(forName.message)){
    alert("Hãy để lại tin nhắn cho chúng tôi !!");
    forName.message.focus();
    return false;
  }else if(!checkName.test(forName.message.value)){
    alert("Tin nhắn phải có ít nhất 2 kí tự!!");
    forName.message.focus();
    return false;
  }
  return true;
}
let checkForm = document.querySelector("#NameFeedback");
checkForm.addEventListener('submit',function(event){
  event.preventDefault();
  if(validForm(this)){
    this.submit();//de gui di
    alert("Biểu mẫu đã được gửi!!");
  }
});

// end checkfeedback 