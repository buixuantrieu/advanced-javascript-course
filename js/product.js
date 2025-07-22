const nameElement = document.getElementById("name");
const priceElement = document.getElementById("price");
const descriptionElement = document.getElementById("description");
const formProduct = document.getElementById("form-product");
const image = document.getElementById("image");
const preview = document.getElementById("preview");
const boxAdd = document.getElementById("box-add");
const titlePopup = document.getElementById("title-popup");
const buttonSubmit = document.getElementById("button-submit");
let id = 0;
const toggleBoxAdd = () => {
  boxAdd.classList.toggle("display-none");
  if (isEdit) {
    isEdit = false;
    titlePopup.textContent = "Thêm sản phẩm";
    buttonSubmit.textContent = "Thêm sản phẩm";
  }
  nameElement.value = "";
  priceElement.value = "";
  descriptionElement.value = "";
  preview.src = "";
  image.value = "";
  idProduct = 0;
};
// price.onfocus = (e) => {
//   console.log("focus");
// };
// price.onblur = () => {
//   console.log("blur");
// };

// nameProduct.onblur = (e) => {
//   const value = e.target.value;
//   if (!value.trim()) {
//     console.log("vui lòng nhập!");
//   }
// };
// price.onblur = (e) => {
//   const value = e.target.value;
//   if (!value.trim()) {
//     console.log("vui lòng nhập!");
//   } else if (isNaN(Number(value.trim()))) {
//     console.log("Không đúng định dạng");
//   }
// };
// description.onblur = (e) => {
//   const value = e.target.value;
//   if (!value.trim()) {
//     console.log("vui lòng nhập!");
//   }
// };

let isEdit = false;

image.onchange = async (e) => {
  if (e.target.files[0]) {
    const urlBase64 = await convertFileToBase64(e.target.files[0]);
    preview.src = urlBase64;
  }
};
const bodyTable = document.querySelector("tbody");
let contentBody = "";

const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
  await getData();
};

const getProductDetail = async (id) => {
  toggleBoxAdd();
  isEdit = true;
  const { data } = await axios.get(`http://localhost:3000/products/${id}`);
  idProduct = data.id;

  titlePopup.textContent = "Chỉnh sửa sản phẩm";
  buttonSubmit.textContent = "Cập nhật";
  nameElement.value = data.name;
  priceElement.value = data.price;
  descriptionElement.value = data.description;
  preview.src = data.url;
};

const getData = async () => {
  const result = await axios.get("http://localhost:3000/products");
  result.data.forEach((product) => {
    contentBody += `<tr>
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">${product.name}</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${product.price} $</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
  <img src=${product.url} alt="" class="w-[50px] rounded">
</td>
<td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
  <button type="button" onclick="deleteProduct(${product.id})"
    class="cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none text-red-700 hover:text-red-400">
    Xóa
  </button>
  <button type="button" onclick="getProductDetail(${product.id})"
    class="cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
    Chỉnh sửa
  </button>
</td>
</tr>`;
  });
  bodyTable.innerHTML = contentBody;
};

const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

formProduct.onsubmit = async (event) => {
  event.preventDefault();
  const name = nameElement.value;
  const price = priceElement.value;
  const description = descriptionElement.value;
  if (isEdit) {
    let url = "";
    if (image.files?.length !== 0) {
      url = await convertFileToBase64(image.files[0]);
    }
    const newData = {
      name: name,
      price: Number(price),
      description: description,
      ...(url && { url: url }),
    };
    await axios.patch(`http://localhost:3000/products/${idProduct}`, newData);
  } else {
    const url = await convertFileToBase64(image.files[0]);
    const newData = {
      name: name,
      price: Number(price),
      description: description,
      url: url,
    };
    await axios.post("http://localhost:3000/products", newData);
  }
  getData();
  toggleBoxAdd();
};
//Post thêm
//PUT cập nhật
//PATCH cập nhật
//GET laasy data
//DELETE xóa
//async await => xử lí bất đồng bộ
getData();
