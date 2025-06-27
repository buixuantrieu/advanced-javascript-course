// Array : [], Tập hợp các kiểu dữu liệu

const studentList = ["Minh sơn", "Xuân Triều"];

//object: {} : Gồm Key và value

const minhSon = {
  fullName: "Minh Sơn",
  old: 19,
  phone: 123333424,
};

//Cho phép khai báo biến lặp đã tồn tại

// var fullName = "Xuan Trieu";

// var fullName = "Minh Sơn";

// Let không cho khai báo biến lặp, Nhưng có thể ghi đè

let fullName = "Xuan Trieu";

fullName = "Minh Sơn";

//const là hằng số, không thể khai báo biến lặp và không thể ghi đè;

const BORDER_RADIUS = 15;

// console.log(BORDER_RADIUS);

window.onload = () => {};

/**
 *
 *
 *
 *
 *
 *
 *
 */

//

/*

*/

function getList() {}
// arrow function

// console.log("log");

// alert("Bạn vừa xóa sản phẩm");
// Hiển thị hộp thoại

// typeof kiểm tra kiểu dữ liệu của biếns
// console.log(typeof fullName);

const total = 56.4988;

// console.log(parseInt(total));

// console.log(Math.random());

// Kiểu number cộng với  string +> trả vể chuỗi string
// const a = 5;

// parseInt();
// console.log(prompt("Nhập tuổi"));

// const b = "b";

// console.log(a + b);

// document.writeln("Bài tậo js");

// == chỉ so sánh gái trị bỏ qua kiểu dữ liệu
// === so sánh luôn kiểu dữu liệu

// console.log(a !== b);
// console.log(Math.sqrt(9));

// if (a > b) {
//   console.log(a - b);
// } else if (a < b) {
//   console.log(b - a);
// } else {
//   console.log(0);
// }

const a = 9;
const b = 10;
//trước dấu chấm hỏi là điều kiện.
//sau dấu ? là câu lệnh thực hiện khi điều kiện đúng
// sau dấu : là khi điều kiện sai

// const c = a > b ? console.log("lớn hơn b") : a == b ? console.log("bằng nhau") : console.log("nhỏ hơn b");

//&& chỉ thực hiện khi điều kiện đsung. nếu điều kiện sai không thực hiện  gì cả
a > b && console.log("đúng");
