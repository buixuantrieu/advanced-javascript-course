// const getData = async () => {
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log("Then one:", res);
    return res.json();
  })
  .then((json) => {
    return "xuan trieu";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("đã xong");
  });

//   // let count = 1;
//   // const setCount = () => {
//   //   return new Promise((resolve, reject) => {
//   //     setTimeout(() => {
//   //       count = 5;
//   //       reject(``);
//   //     }, 5000);
//   //   });
//   // };
//   // try {
//   //   await setCount();
//   // } catch (error) {
//   //   console.log("lỗi");
//   // }

//   // console.log(count);

//   // try {
//   //   let result = await fetch("https://jsonplaceholder.typicode.com/users");
//   //   const data = await result.json();
//   // } catch (error) {
//   //   console.log(error);
//   // } finally {
//   // }
// };
// getData();
// https://jsonplaceholder.typicode.com/posts
const apiUrl = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector("ul");

const countPlus = async () => {
  // await ////
};
async function renderUI() {
  const result = await fetch(apiUrl);
  let listName = await result.json();
  let listItem = "";
  listName.forEach((item, index) => {
    const name = item.name;
    listItem += `<li>${name}</li>`;
  });

  container.innerHTML = listItem;
}

renderUI();
