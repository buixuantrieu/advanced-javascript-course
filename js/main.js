// Khai báo biến

let one = 1;
//Thay đổi được
const two = 2;
//Không thay đổi được
var three = 3;
//Thay đổi được không khai báo lại được

//Cá kiểu dữ liệu

//number: 1,2,3,4,...
//string: "minh sơn"
//boolean: true false
//null
//undefine
//array: [1,2,3]
//object: {key: value}

let students = [
  {
    name: "Xuân Triều",
    old: 27,
  },
  {
    name: "Minh sơn",
    old: 16,
  },
];

//Thêm học sinh tên Minh Trí 23 tuổi vào mảng

//Log ra tên từng học sinh và số tuổi

students.push({ name: "Minh trí", old: 23 });

//Học trường THPT Hùng Vương

//Map & Filter
//Đều phải có return

//map trả về mảng mới dựa trên cấu trúc mảng cũ
students = students.map((item, index) => {
  // return {
  //   name: item.name,
  //   old: item.old,
  //   school: "THPT Hùng Vương",
  // };
  return {
    ...item,
    school: "THPT Hùng Vương",
  };
});

//Lấy ra danh sách học sinh có số tuổi nhỏ hơn 24

//Filter return về điều kiện
students = students.filter((item, index) => {
  return item.old < 24;
});

//Cách 1: Dùng forEach

// students.forEach((item, index) => {
//   console.log("Họ và tên học sinh:", item.name);
//   console.log("Tuổi:", item.old);
//   console.log("Trường:", item.school);
// });

//Cách 2: Dùng for thường

// for (let i = 0; i < students.length; i++) {
//   console.log("Họ và tên học sinh:", students[i].name);
//   console.log("Tuổi:", students[i].old);
// }

// Promise

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = false;
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Thành công!");
//     } else {
//       reject("Thất bại!");
//     }
//   }, 500);
// });

// const getPromise = async () => {
//   const newResult = await promise;
//   console.log(newResult);
// };

// getPromise();
// res => response
// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const nameELement = document.getElementsByClassName("name");
// const nameELement = document.querySelector(".name");
// const buttonElement = document.getElementById("button");

//DOM Event
// //onClick, onHover, onSubmit, onchange, onFocus, onBlur

// nameELement.textContent = "Minh sơn";

// buttonElement.onclick = () => {
//   nameELement.classList.toggle("color-red");
// };

//Call api

//Các Method : GET, DELETE, PATCH, PUT , POST

const baseUrl = "https://jsonplaceholder.typicode.com";

// const getPost = async () => {
//   const posts = await axios.get(`${baseUrl}/posts`);
//   console.log(posts);
// };

// getPost();
//Lấy dữ liệu

//Rest Api CURD

//C: Create => Post
//U: Update => Put or Patch
//R: Read => Get
//D: Delete => Delete

const getPostDetail = async (id) => {
  const post = await axios.get(`${baseUrl}/posts/${id}`);
};

//Delete xóa
const deletePost = async (id) => {
  await axios.delete(`${baseUrl}/posts/${id}`);
};

//put , patch
//put cập nhật nguyên object
//path chỉ cập nhật nhật những key có giá trị cần thay đổi
//post là thêm phần tử mới

const updatePost = async (id, newData) => {
  await axios.patch(`${baseUrl}/posts/${id}`, newData);
};

const createPost = async (data) => {
  await axios.post(`${baseUrl}/posts`, data);
};
