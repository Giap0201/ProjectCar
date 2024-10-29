function checkNull(txt) {
  if (txt.value.length == 0)
      return true;
  return false;
}
const phoneRegex = /^[0-9]{3,}$/;
const kmRegex = /^[0-9]{1,}$/;
const yearRegex = /^[0-9]{4}$/;
// ham check bieu thuc chinh qui
function checkMatch(txt, regex) {
  return regex.test(txt.value);
}
function validForm(f, event) {
  event.preventDefault();
  //  check rong brand
  if (checkNull(f.carBrand)) {
      document.getElementById("brandStatus").style.display = "block";
      f.carBrand.focus();
      return;
  }
  else {
      document.getElementById("brandStatus").style.display = "none";
  }
  //  check rong model
  if (checkNull(f.carModel)) {
      document.getElementById("modelStatus").style.display = "block";
      f.carModel.focus();
      return;
  }
  else {
      document.getElementById("modelStatus").style.display = "none";
  }
  //  check rong year
  if (checkNull(f.yearOfManufacture)) {
      document.getElementById("yearStatus").style.display = "block";
      f.yearOfManufacture.focus();
      return;
  }
  else {
      document.getElementById("yearStatus").style.display = "none";
  }
  //  check rong phien ban
  if (checkNull(f.version)) {
      document.getElementById("versionStatus").style.display = "block";
      f.version.focus();
      return;
  }
  else {
      document.getElementById("versionStatus").style.display = "none";
  }
  //  check rong so km da di
  if (checkNull(f.mileage)) {
      document.getElementById("mileageStatus").style.display = "block";
      f.mileage.focus();
      return;
  }
  else {
      document.getElementById("mileageStatus").style.display = "none";
  }
  //  check rong so dien thoai
  if (checkNull(f.phoneNumber)) {
      document.getElementById("phoneNumberStatus").style.display = "block";
      f.phoneNumber.focus();
      return;
  }
  else {
      document.getElementById("phoneNumberStatus").style.display = "none";
  }
  // check dinh dang so dien thoai
  if(!checkMatch(f.phoneNumber, phoneRegex)){
      document.getElementById("phoneNumberStatus").style.display = "block";
      document.getElementById("phoneNumberStatus").innerHTML = "*Định dạng số điện thoại không hợp lệ";
      f.phoneNumber.focus();
      return;
  }
  else{
      document.getElementById("phoneNumberStatus").style.display = "none";
  }
  // check dinh dang so km
  if(!checkMatch(f.mileage , kmRegex)){
      document.getElementById("mileageStatus").style.display = "block";
      document.getElementById("mileageStatus").innerHTML = "*số km không hợp lệ";
      f.phoneNumber.focus();
      return;
  }
  else{
      document.getElementById("mileageStatus").style.display = "none";
  }
  // check nam hop le
  if(!checkMatch(f.yearOfManufacture , yearRegex) || f.yearOfManufacture.value > 2024 || f.yearOfManufacture.value < 1700 ){
      document.getElementById("yearStatus").style.display = "block";
      document.getElementById("yearStatus").innerHTML = "*năm không hợp lệ";
      f.yearOfManufacture.focus();
      return;
  }
  else{
      document.getElementById("yearStatus").style.display = "none";
  }
  alert("Bạn đã nhập thành công!");
  f.submit(); // Chỉ gửi form nếu tất cả đều hợp lệ
}