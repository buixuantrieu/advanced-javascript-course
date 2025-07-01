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

const formElement = document.getElementById("form");
const nameElement = document.getElementById("name");
const nameList = [];
const listElement = document.querySelector("ul");
formElement.onsubmit = (event) => {
  event.preventDefault();
  let listItem = "";
  const nameVale = nameElement.value;
  nameList.push(nameVale);
  nameList.forEach((item, index) => {
    listItem += `
    <li class="list--item">
      <span>${item}</span>
      <span onclick="deleteItem(${index})">
        <i class='bxr  bx-trash-alt'></i>
      </span>
    </li>`;
  });
  listElement.innerHTML = listItem;
  nameElement.value = "";
};
const deleteItem = (index) => {
  nameList.splice(index, 1);

  let listItem = "";
  nameList.forEach((item, index) => {
    listItem += `
    <li class="list--item">
      <span>${item}</span>
      <span onclick="deleteItem(${index})">
        <i class='bxr  bx-trash-alt'></i>
      </span>
    </li>`;
  });
  listElement.innerHTML = listItem;
};
