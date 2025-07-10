const userName = document.getElementById("user-name");
const password = document.getElementById("password");
const formLogin = document.getElementById("form-login");

formLogin.onsubmit = async (event) => {
  event.preventDefault();
  const nameValue = userName.value;
  const passwordValue = password.value;

  //Cách 1
  // const user = await axios.get("http://localhost:3000/users");
  // let isLogin = false;
  // user.data.forEach((item) => {
  //   const userNameData = item.userName;
  //   const passwordData = item.password;
  //   if (nameValue == userNameData && passwordData == passwordValue) {
  //     isLogin = true;
  //   }
  // });
  // if (isLogin) {
  //   alert("Đăng nhập thành công");
  // } else {
  //   alert("Đăng nhập thất bại!");
  // }
  //cách 2:
  // const isLogin = user.data.find((item) => nameValue == item.userName && passwordValue == item.password);
  // if (isLogin) {
  //   alert("Đăng nhập thành công");
  // } else {
  //   alert("Đăng nhập thất bại!");
  // }

  //Cách 3:
  const user = await axios.get("http://localhost:3000/users", {
    params: {
      userName: nameValue,
      password: passwordValue,
    },
  });

  if (!!user.data.length) {
    localStorage.setItem("userData", JSON.stringify(user.data[0]));
  } else {
    ("Đăng nhập thất bại");
  }
};

// "http://localhost:3000/users"
