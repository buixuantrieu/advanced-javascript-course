//Lưu dữ vào localStorage phải là string . hoặc chuyển về string bằng JSON.stringify
// localStorage.setItem("userData", JSON.stringify(user.data[0]));

//Lấy dữ liệu ra thì dùng JSON.parse để nó về lại dữ liệu ban đầu gốc
const userData = JSON.parse(localStorage.getItem("userData"));

const userName = document.getElementById("user-name");
userName.innerHTML = userData.userName; //tương tự "xuantrieu"
