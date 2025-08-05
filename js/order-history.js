const tableBody = document.getElementById("tableContent");

const getOrder = async () => {
  const { data: orderList } = await axios.get("http://localhost:3000/orders", {
    params: {
      userId: userData.id,
      _embed: "orderDetails",
    },
  });

  let content = "";

  orderList.forEach((order, index) => {
    const orderDetails = order.orderDetails;

    let childContent = ` <tr>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Iphone</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">image</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">2</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">99.000</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">188.000</td>
                    </tr>
                     <tr>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Iphone</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">image</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">2</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">99.000</td>
                      <td scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">188.000</td>
                    </tr>`;
    orderDetails.forEach((item) => {
      console.log(item);
    });

    content += `<tr>
               <td>${order.name}</td>
              <td>${order.address}</td>
              <td>${order.phone}</td>
              <td>${order?.totalPrice?.toLocaleString()} VND</td>
              <td>${order.status == "pending" ? "Đang chờ xác nhận đơn hàng" : ""}</td>
              <td>Hủy đơn hàng</td>
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
  });

  tableBody.innerHTML = content;
};

getOrder();
