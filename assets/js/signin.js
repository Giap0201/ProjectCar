var check_name = /^[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ ]{1,30}$/;
var check_phone = /^[0]{1}[1-9]{1}\d{8}$/;
var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

let namefield = document.getElementById('fullname');
let phonefield = document.getElementById('phone');
let passfield = document.getElementById('password');
let checkbox = document.getElementById('check');
let isValid = true;

function checknull(txt) {
    if (txt.value.length === 0)
        return true;
    else
        return false;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}
function validform(event) {

    isValid = true;

    if (checknull(namefield) || !StringMatch(namefield, check_name)) {
        namefield.classList.remove('success');
        namefield.classList.add('error');
        document.getElementById('namewarning').style.display = "block";
        isValid = false;
    }
    else {
        namefield.classList.remove('error');
        namefield.classList.add('success');
        document.getElementById('namewarning').style.display = "none";
    }

    if (checknull(phonefield) || !StringMatch(phonefield, check_phone)) {
        phonefield.classList.remove('success');
        phonefield.classList.add('error');
        document.getElementById('phonewarning').style.display = "block";
        isValid = false;
    }
    else {
        phonefield.classList.remove('error');
        phonefield.classList.add('success');
        document.getElementById('phonewarning').style.display = "none";
    }

    if (checknull(passfield) || !StringMatch(passfield, check_password)) {
        passfield.classList.remove('success');
        passfield.classList.add('error');
        document.getElementById('passwarning').style.display = "block";
        isValid = false;
    }
    else {
        passfield.classList.remove('error');
        passfield.classList.add('success');
        document.getElementById('passwarning').style.display = "none";
    }

    if (!isValid) {
        event.preventDefault();
        alert('Vui lòng kiểm tra lại!');
        return;
    }

    if (!checkbox.checked) {
        event.preventDefault();
        alert('Bạn phải đồng ý với Điều khoản sử dụng và Chính sách bảo mật!');
        isValid = false;
        return;
    }

    if (!isValid) {
        event.preventDefault();
        alert('Vui lòng kiểm tra lại!');
    }
    else {
        window.location.href = "signup.html";
        alert('Đăng ký thành công!');
        
    }
}