const user = JSON.parse(localStorage.getItem("userData"));

const table = document.querySelector("#tableContent");
const totalElement = document.getElementById("total");
const buttonSubmit = document.getElementById("button-submit");
const nameElement = document.querySelector("#name");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");

let total = 0;
let cartList = [];

const changeQuantity = async (quantity, id) => {
  await axios.patch(`http://localhost:3000/carts/${id}`, {
    quantity: Number(quantity),
  });
  getCart();
};

const deleteCart = async (id) => {
  await axios.delete(`http://localhost:3000/carts/${id}`);
  getCart();
};

const getCart = async () => {
  let tableContent = "";
  let totalPrice = 0;

  const { data } = await axios.get("http://localhost:3000/carts", {
    params: {
      userId: user.id,
      _expand: "product",
    },
  });
  cartList = data;

  data.forEach((item) => {
    totalPrice += item.product.price * item.quantity;

    tableContent += ` <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">${item.product.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <img class="w-[70px] rounded" src="${item.product.url}" alt="">
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <div>
                  <input onchange="changeQuantity(this.value,${item.id})" class="border p-1 w-[50px] rounded-[4px]" type="text" value="${
      item.quantity
    }"/>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  ${item.product.price.toLocaleString()} VND
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                   ${(item.quantity * item.product.price).toLocaleString()} VND
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                  <button type="button" onclick="deleteCart(${item.id})"
                    class="cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none text-red-700 hover:text-red-400">
                    Xóa
                  </button>
                </td>
              </tr>`;
  });
  total = totalPrice;
  table.innerHTML = tableContent;
  totalElement.innerHTML = `${totalPrice.toLocaleString()} VND`;
};

getCart();

buttonSubmit.onclick = async () => {
  const orderData = {
    userId: user.id,
    name: nameElement.value,
    phone: phone.value,
    address: address.value,
    totalPrice: total,
    status: "pending",
  };
  fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then((res) => res.json())
    .then((order) => {
      const orderId = order.id;

      const createOrderDetails = cartList.map((cart) => {
        const newOrderDetail = {
          orderId: orderId,
          quantity: cart.quantity,
          productId: cart.productId,
          price: cart.product.price,
        };

        return fetch("http://localhost:3000/orderDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOrderDetail),
        });
      });
      return Promise.all(createOrderDetails).then(() => {
        const deleteCarts = cartList.map((cart) => {
          return fetch(`http://localhost:3000/carts/${cart.id}`, {
            method: "DELETE",
          });
        });

        return Promise.all(deleteCarts);
      });
    })
    .then(() => {
      getCart();
    });
};
