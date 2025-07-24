const userData = JSON.parse(localStorage.getItem("userData"));

const userName = document.getElementById("user-name");
const productContainer = document.querySelector("#product-container");
userName.innerHTML = userData.userName;
const quantity = document.querySelector("#quantity");

const getCountCart = async () => {
  const { data } = await axios.get("http://localhost:3000/carts", {
    params: {
      userId: userData.id,
    },
  });
  quantity.innerHTML = data.length;

  // const cartByUserId = data.filter((cart) => {
  //   return cart.userId == 2;
  // });
  // console.log(cartByUserId);
};

const getCartDetail = async () => {
  const { data } = await axios.get("http://localhost:3000/carts", {
    params: {
      _expand: "product",
      userId: userData.id,
    },
  });
  console.log(data);
};

const addProduct = async (productId) => {
  const userId = userData.id;
  const newData = {
    userId: userId,
    productId: productId,
    quantity: 1,
  };

  const { data } = await axios.get("http://localhost:3000/carts", {
    params: {
      userId: userId,
      productId: productId,
    },
  });

  if (data.length !== 0) {
    await axios.patch(`http://localhost:3000/carts/${data[0].id}`, { quantity: data[0].quantity + 1 });
  } else {
    await axios.post("http://localhost:3000/carts", newData);
  }
  getCountCart();

  // if (data.length) {
  //   const checkCart = data.find((cart) => {
  //     return cart.userId === userId && cart.productId === productId;
  //   });
  //   if (checkCart) {
  //     await axios.patch(`http://localhost:3000/carts/${checkCart.id}`, { quantity: checkCart.quantity + 1 });
  //   } else {
  //     await axios.post("http://localhost:3000/carts", newData);
  //   }
  // } else {
  //   await axios.post("http://localhost:3000/carts", newData);
  // }
};

const getData = async () => {
  const result = await axios.get("http://localhost:3000/products");
  const productList = result.data;
  let productHtml = "";

  productList.forEach((product) => {
    productHtml += `
     <div class="border border-gray-300 rounded p-2">
      <img class="w-full aspect-[3/2] object-cover" src="${product.url}" alt="">
      <div>${product.name}</div>
      <div class="text-red-600">${product.price.toLocaleString()} vnd</div>
      <div onclick="addProduct(${product.id})" class="mt-4 text-center bg-gray-200 py-1 rounded cursor-pointer">Thêm giỏ hàng</div>
    </div>
    `;
    productContainer.innerHTML = productHtml;
  });
};

getData();
getCountCart();
getCartDetail();

//Tạo 1 string rỗng => sau mỗi lần lặp sẽ cộng dồn chuỗi => sao đó sẽ dùng innerHTML thẻ cha bằng chuỗi đã được nối
//
