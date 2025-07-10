const nameElement = document.getElementById("name");
const priceElement = document.getElementById("price");
const descriptionElement = document.getElementById("description");
const formProduct = document.getElementById("form-product");
const image = document.getElementById("image");
const preview = document.getElementById("preview");
const boxAdd = document.getElementById("box-add");
const toggleBoxAdd = () => {
  boxAdd.classList.toggle("display-none");
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
getData = async () => {
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
    class="cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Xóa</button>
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
  const url = await convertFileToBase64(image.files[0]);
  const newData = {
    name: name,
    price: Number(price),
    description: description,
    url: url,
  };
  await axios.post("http://localhost:3000/products", newData);
  getData();
  toggleBoxAdd();
};
//Post thêm
//PUT cập nhật
//PATCH cập nhật
//GET laasy data
//DELETE xóa

getData();
