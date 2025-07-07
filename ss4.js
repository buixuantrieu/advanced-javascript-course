/**
 * Các kiểu dữ liệu JS
 * Number
 * String
 * Boolean
 * Object
 * Null
 * Undefine
 * Array
 * Object gồm key và value
 */

const product = {
  price: [null, undefined, { fullName: "Xuan Trieu" }, true, "old"],
};
//api server gửi về
const productList = [
  {
    name: "iphone 11",
    price: 99,
    sale: 0.1,
  },
  {
    name: "iphone 10 Pro Max",
    price: 19,
    sale: 0.1,
  },
  {
    name: "iphone XS",
    price: 39,
    sale: 0.1,
  },
  {
    name: "iphone 16 Pro",
    price: 62,
    sale: 0.1,
  },
];
// Hàm map array và filter

const newProductList = productList.map((item, index) => {
  return {
    ...item,
    sale: item.price < 50 ? 0.5 : item.sale,
  };
});
// newProductList.forEach((item, index) => {
//   if (item.price < 50) {
//     item.sale = 0.5;
//   }
// });

// console.log(productList);
const bodyTable = document.querySelector("tbody");
const renderUI = (arr) => {
  let listItem = "";
  arr.forEach((name, index) => {
    listItem += `
    <tr>
        <td>${name}</td>
        <td>
          <div style="display: flex; justify-content: end; gap:4px;">
          <span >
              <i class='bxr  bx-edit-alt'  ></i>
            </span>
            <span >
              <i class='bxr  bx-trash-alt'></i>
            </span>
          </div>
        </td>
      </tr>`;
  });
  bodyTable.innerHTML = listItem;
};

const formElement = document.getElementById("form");

const nameElement = document.getElementById("name");
const nameList = ["Nguyễn Văn An", "Trần Thị Bình", "Lê Thị Chi", "Phạm Văn Dũng", "Hoàng Thị Hà", "Vũ Thị Hương", "Đặng Gia Khánh", "Bùi Ngọc Linh"];

renderUI(nameList);

formElement.onsubmit = (e) => {
  e.preventDefault();
  const keySearch = nameElement.value;
  const searchList = nameList.filter((item, index) => item.toLowerCase().includes(keySearch.toLowerCase()));
  renderUI(searchList);
};

const sum = (a, b) => console.log(Number(a) + Number(b));

// setTimeout(() => {
//   console.log("set time out");
// }, 5000);

// setInterval(() => {
//   console.log("set time out");
// }, 1000);

const buttonElement = document.querySelector("#add");
const buttonSearch = document.querySelector("#search");
buttonElement.onclick = () => {
  console.log("add");
};

buttonSearch.onclick = () => {
  console.log("search");
};
