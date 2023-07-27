import { Space } from "antd";
import { EditOutlined } from "@ant-design/icons";

export const columns = [
  {
    title: "Tên khách hàng",
    dataIndex: "userName",
    key: "userName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số điện thoại",
    dataIndex: ["shippingInfo", "phoneNo"],
    key: "userNumber",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số lượng",
    dataIndex: "orderItems",
    key: "orderItems",
    width: "5%",
    align: "center",
    render: (orderItems) => <span>{orderItems?.length}</span>,
  },
  {
    title: "Tổng tiền",
    dataIndex: "itemsPrice",
    key: "itemsPrice",
    render: (itemsPrice) => (
      <span>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(itemsPrice)}
      </span>
    ),
  },
  {
    title: "Ngày mua",
    dataIndex: "dateFind",
    key: "dateFind",
  },
  {
    title: "Trạng thái",
    key: "orderStatus",
    dataIndex: "orderStatus",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    width: "5%",
    align: "center",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined
        //  onClick={(e) => showModal(record)}
        />
        {/* <DeleteOutlined
          style={{ color: "red" }}
          onClick={(e) => deleteOrderHandler(record._id)}
        /> */}
      </Space>
    ),
  },
];
