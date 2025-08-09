const tableBody = document.getElementById("tableContent");

const changeOrderStatus = async (e, id) => {
  const status = e.value;
  await axios.patch(`http://localhost:3000/orders/${id}`, {
    status: status,
  });
  alert("Thay đổi trạng thái đơn hàng thành công!");
  getOrder();
};

const getOrder = async () => {
  const { data: orderList } = await axios.get("http://localhost:3000/orders", {
    params: {
      _embed: "orderDetails",
    },
  });

  let content = "";

  for (const order of orderList) {
    const orderDetails = order.orderDetails;

    let childContent = "";

    for (const item of orderDetails) {
      const { data } = await axios.get(`http://localhost:3000/products/${item.productId}`);
      childContent += ` <tr>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">${data.name}</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      <img src="${data.url}" class="w-[40px]"/>
                      </td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">${item.quantity}</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">${item.price.toLocaleString()} VND</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      ${(item.price * item.quantity).toLocaleString()} VND
                      </td>
                    </tr>
                    `;
    }
    content += `<tr class="bg-gray-100">
               <td class="text-[13px] py-4">${order.name}</td>
              <td class="text-[13px] py-4">${order.address}</td>
              <td class="text-[13px] py-4">${order.phone}</td>
              <td class="text-[13px] py-4">${order?.totalPrice?.toLocaleString()} VND</td>
              <td class="text-[13px] py-4">
              <select class="py-1 border rounded" onchange="changeOrderStatus(this,${order.id})">
              <option value="pending" ${order.status === "pending" && "selected"}>Chưa xác nhận đơn hàng</option>
               <option value="confirm" ${order.status === "confirm" && "selected"}>Đã xác nhận đơn hàng</option>
               <option value="ship" ${order.status === "ship" && "selected"}>Đang giao</option>
               <option value="done" ${order.status === "done" && "selected"}> Đã giao</option>
               <option value="canceledByAdmin" ${order.status === "canceledByAdmin" && "selected"}>Từ chối đơn hàng</option>
              </select>
              </td>
            </tr>
            <tr>
              <td colspan="6">
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Tên sản phẩm</th>
                      <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Hình ảnh</th>
                      <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Số lượng</th>
                      <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Giá</th>
                      <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Tổng tiền</th>
                    </tr>
                   ${childContent}
                  </thead>
                </table>
              </td>
            </tr>
            `;
  }

  tableBody.innerHTML = content;
};

getOrder();
