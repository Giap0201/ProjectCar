let checkName = /^[a-zA-ZÀ-ỹ.]{2,}$/;
let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let checkPhone = /^(0[3|5|7|8|9])+([0-9]{8})$/;


// Kiểm tra chuỗi có rỗng hay không
function checkNull(text) {
  return text.value.trim().length === 0;
}

// Kiểm tra nhập vào có phải là số không
function isInter(text) {
  return !isNaN(text.value) && Number.isInteger(parseInt(text.value));
}
let feedback = document.querySelector("#NameFeedback");
feedback.onsubmit = function(){
  return validForm(this);
}
function validForm(forName) {
  // Kiểm tra tên không rỗng và theo định dạng
  if (checkNull(forName.fullname)) {
    alert("Tên truy cập không được để trống");
    forName.fullname.focus();
    return false;
  } else if (!checkName.test(forName.fullname.value)) {
    alert("Tên chỉ được chứa chữ cái và khoảng trắng, và phải có ít nhất 2 ký tự");
    forName.fullname.focus();
    return false;
  }

  // Kiểm tra email không rỗng và theo định dạng
  if (checkNull(forName.email)) {
    alert("Email không được để trống");
    forName.email.focus();
    return false;
  } else if (!checkEmail.test(forName.email.value)) {
    alert("Email không hợp lệ");
    forName.email.focus();
    return false;
  }

  // Kiểm tra số điện thoại không rỗng và theo định dạng
  if (checkNull(forName.phone)) {
    alert("Số điện thoại không được để trống");
    forName.phone.focus();
    return false;
  } else if (!checkPhone.test(forName.phone.value)) {
    alert("Số điện thoại không hợp lệ");
    forName.phone.focus();
    return false;
  }

  // Kiểm tra tin nhắn không rỗng
  if (checkNull(forName.message)) {
    alert("Tin nhắn không được để trống");
    forName.message.focus();
    return false;
  }

  // Nếu tất cả đều hợp lệ
  return true;
}
