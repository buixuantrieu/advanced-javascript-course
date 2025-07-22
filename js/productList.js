const userData = JSON.parse(localStorage.getItem("userData"));

const userName = document.getElementById("user-name");
userName.innerHTML = userData.userName;

const getData = async () => {
  const result = await axios.get("http://localhost:3000/products");
  const productList = result.data;
  productList.forEach((product) => {
    console.log(product);
  });
};

getData();

//Tạo 1 string rỗng => sau mỗi lần lặp sẽ cộng dồn chuỗi => sao đó sẽ dùng innerHTML thẻ cha bằng chuỗi đã được nối
//
