var fullName = "Minh Sơn";

// có thể khai báo lại

var fullName = " Xuân Triều";

// console.log(fullName);

//Ghi đè được không thể khai báo lại được
let old = 17;

old = 9;

// console.log(old);

const NUMBERS = 19;
//Không thể khai báo lại, không thể ghi đè

// if (NUMBERS === 10) {
//   console.log(NUMBERS);
// } else if(âs){
//   console.log();

// }
// else {
//   console.log("Không bầng");
// }

// const a = prompt("Nhập tuổi:");
const a = 1;
// switch (a) {
//   case "16":
//     // console.log("lớp 10");
//     return;
//   case "17":
//     // console.log("11");
//     break;
//   default:
//     // console.log("Không xác dịnh");
//     break;
// }

const arr = ["Minh son", 12, false, { fullName: "Xuan Trieu" }];

// console.log(arr.length);
//lấy kích thuớc mảng;

// console.log(arr[0]);
//Dùng để truy cập giá trị thônmg qua index

const studentAs = ["Minh Son", "Xuan Trieu"];
const studentBs = ["hùng", "Nam"];
// students[1] = " Javascript";
// students.push("html"); // Thêm vào cuối mảng;
// students.unshift("css"); // Thêm vào đầu mảng;
// // có thể gán lại gía trị

// students.pop(); // Xóa  phần tửu cuối mảng

// const classOne = console.log(students);

const classOne = studentAs.concat(studentBs);

// console.log(classOne.includes("Nam")); // => Kiểm tra gái trị có tồn tại trong ảmng hay không. Trả về gái trị boolean

let c = 3;
// c++;
// console.log(c++);

const index = classOne.findIndex((item) => item === "hùng");
// console.log(index);

classOne.splice(index, 2);

console.log(classOne);

// for (let i = 0; i < classOne.length; i++) {
//   console.log("fullName:", classOne[i]);
// }

classOne.forEach((item, index) => {
  console.log("item:", item);
  console.log("index:", index);
});

function sayHi({ name, old }) {
  console.log("hi:", name);
  console.log("old:", old);
}

/**
 * object{
 * key: value
 * }
 */

// sayHi({ old: 16, name: "son" });

// //arrow function
// const sum = (a = 0, b = 0) => {
//   console.log("say hello");
//   return a + b;
//   // if (a < b) return a + b;
//   // console.log("Qua bước 1");
//   // if (a > b) return a - b;
//   // console.log("pl");
// };
// const sum = (a, b) => {
//   if (true) return a + b;
// };

// console.log(sum(3, 4));

const day = ["Tue", "Thu", "Sat", "Nine"];
//.length độ dài mảng

// for (let i = 4; i < day.length; i++) {
//   const element = day[3];
// }

// Khai báo biến
// Kiểm tra điều kiện
// tăng gái trị biến lên 1 đơn vị tiếp tục vòng lặp

const productList = [
  {
    productName: "Iphone 15 Pro",
    category: "Iphone",
    price: 99,
  },
  {
    productName: "Iphone 14 Pro Max",
    category: "Iphone",
    price: 12,
  },
  {
    productName: "Iphone 7 Plus",
    category: "Iphone",
    price: 78,
  },
  {
    productName: "Macbook M1",
    category: "Laptop",
    price: 99,
  },
  {
    productName: "Macbook M3",
    category: "Laptop",
    price: 78,
  },
  {
    productName: "Apple watch",
    category: "Watch",
    price: 78,
  },
];

// const iphoneList = [];
// productList.forEach((item, index) => {
//   if (item.category === "Iphone") {
//     iphoneList.push(item);
//   }
// });

// console.log(iphoneList);
//lọc trả về ảmng mưới có giá trị return là true

const iphoneList = productList.filter((item, index) => item.category === "Iphone");

const newProductList = productList.map((item, index) => {
  return {
    ...item,
    category: item.category === "Iphone" ? "Điện Thoại" : item.category,
  };
});

console.log(newProductList);

const azuki = [
  {
    name: "Frida",
    image: "./img/....",
    color: "red",
  },
  {
    name: "ED",
    image: "./img/....",
    color: "yellow",
  },
];
