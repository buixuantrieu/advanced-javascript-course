const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const formRegister = document.getElementById("form-register");
const regexEmail = /^\S+@\S+\.\S+$/;
const showError = (element, message) => {
  element.parentNode.querySelector(".error-message").textContent = message;
};

formRegister.onsubmit = async (event) => {
  event.preventDefault();
  const userNameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  let messageErrorUserName = "";
  let messageErrorEmail = "";
  let messageErrorConfirmPassword = "";

  if (userNameValue.trim().length == 0) {
    messageErrorUserName = "Vui lòng nhập tên tài khoản!";
  } else if (userNameValue.trim().length < 6) {
    messageErrorUserName = "Tên tài khoản tối thiểu 6 kí tự!";
  } else if (userNameValue.trim().length > 15) {
    messageErrorUserName = "Tên tài khoản tối đa 15 kí tự!";
  } else if (userNameValue.trim().includes(" ")) {
    messageErrorUserName = "Tên tài khoản không được chứa khoảng trắng!";
  }

  if (!regexEmail.test(emailValue)) {
    messageErrorEmail = "Email không hợp lệ";
  }

  if (passwordValue != confirmPasswordValue) {
    messageErrorConfirmPassword = "Mật khẩu không trùng khớp";
  }
  showError(userName, messageErrorUserName);
  showError(email, messageErrorEmail);
  showError(confirmPassword, messageErrorConfirmPassword);

  if (!messageErrorUserName && !messageErrorEmail && !messageErrorConfirmPassword) {
    const data = {
      userName: userNameValue.trim(),
      email: emailValue.trim(),
      password: passwordValue.trim(),
      role: "user",
    };

    const user = await axios.get("http://localhost:3000/users", {
      params: {
        userName: userNameValue.trim(),
      },
    });

    if (user.data.length == 0) {
      await axios.post("http://localhost:3000/users", data);
      alert("Đăng kí tài khoản thành công!");
      window.location.href = "http://127.0.0.1:5500/login.html";
    } else {
      showError(userName, "Tài khoản đã tồn tại!");
    }
  }
};
