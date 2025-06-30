// // element node
// // Lấy element theo className => mảng
// const container = document.getElementsByClassName("element");
// //Lấy element theo id => element
// const elementId = document.getElementById("element");
// console.log(container);
// const toggleBackground = () => {
//   elementId.classList.toggle("bg--red");
// };

// //   elementId.onclick = toggleBackground;
// elementId.onclick = () => {
//   elementId.classList.toggle("bg--red");
// };
// // Lấy element theo className và id đều đưụoc => element
// const inputElement = document.querySelector("#inputElement");
// const elements = document.querySelectorAll(".element");
// const tagDiv = document.getElementsByTagName("li");
// console.log(tagDiv);

// inputElement.onblur = (e) => {
//   console.log(e.target.value);
// };

//string rỗng, undefine, null, 0 => boolean +> false
window.onload = () => {
  const NAV_ITEMS = [
    {
      title: "about",
      icon: "",
      dropdown: [],
    },
    {
      title: "Beanz",
      icon: "bxr  bx-chevron-down",
      dropdown: [
        {
          name: "The waiting main",
        },
        {
          name: "The waiting main2",
        },
        {
          name: "The waiting mai 3",
        },
      ],
    },
  ];

  // Mảng tập hợp các giá trị, có kiểu dữ liệu bất kì

  // [1,"2", false, {name:"trieu"} ]

  //objject kis hiệu {}
  // Gồm key:
  // value

  const students = [{ fullName: "Minh sơn" }, "xuan trieu"];

  students.forEach((name, index) => {
    if (index === 0) {
      console.log(name.fullName);
    }
  });

  let htmlNav = "";
  NAV_ITEMS.forEach((nav, index) => {
    let dropdown = "";
    if (nav.dropdown?.length) {
      nav.dropdown.forEach((item, index) => {
        /* 
        item tương đương đương {
          name: "The waiting main",
        }
          */
        dropdown += `<li>${item.name}</li>`;
      });
    }
    const htmlDropdown = `<div class="drop--down__menu">
                            <ul id="nav--container">
                            ${dropdown}
                            </ul>
                        </div>`;

    htmlNav += `<div class="header--nav__item">${nav.title} ${nav.icon && "<i class='bxr  bx-chevron-down'></i>"} ${
      nav.dropdown?.length ? htmlDropdown : ""
    }</div>`;
  });

  const navContainer = document.querySelector(".header--nav");
  //Thay đổi nội dung bên trong element dạng text string. không biên dịch các thẻ html
  //   navContainer.textContent = "<h1>azuki<h1>";
  navContainer.innerHTML = htmlNav;
};
