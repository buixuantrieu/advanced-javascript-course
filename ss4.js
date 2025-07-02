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
let indexEdit = -1;

const editName = (name, index) => {
  nameElement.value = name;
  indexEdit = index;
};
const bodyTable = document.querySelector("tbody");
formElement.onsubmit = (event) => {
  event.preventDefault();
  let listItem = "";
  const nameVale = nameElement.value;
  if (indexEdit < 0) {
    nameList.push(nameVale);
  } else {
    nameList[indexEdit] = nameVale;
    indexEdit = -1;
  }
  //lặp mảng danh sách tên
  nameList.forEach((name, index) => {
    listItem += `
    <tr>
        <td>${name}</td>
        <td>
          <div style="display: flex; justify-content: end; gap:4px;">
          <span onclick="editName('${name}',${index})"> 
              <i class='bxr  bx-edit-alt'  ></i> 
            </span>
            <span onclick="deleteItem(${index})">
              <i class='bxr  bx-trash-alt'></i>
            </span>
          </div>
        </td>
      </tr>`;
  });
  bodyTable.innerHTML = listItem;
  nameElement.value = "";
};
const deleteItem = (index) => {
  nameList.splice(index, 1);

  let listItem = "";
  nameList.forEach((name, index) => {
    listItem += `
    <tr>
        <td>${name}</td>
        <td>
          <div style="display: flex; justify-content: end; gap:4px;">
            <span> 
              <i class='bxr  bx-edit-alt'  ></i> 
            </span>
            <span onclick="deleteItem(${index})">
              <i class='bxr  bx-trash-alt'></i>
            </span>
          </div>
        </td>
      </tr>`;
  });
  bodyTable.innerHTML = listItem;
};
