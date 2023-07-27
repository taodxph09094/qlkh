import { Space } from "antd";
import { formatCurrency } from "../../../helpers";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const columns = [
  {
    title: "STT",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "Tên sản phẩm",
    width: "15%",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá",
    dataIndex: "price",
    width: "10%",
    key: "price",
    align: "center",
    render: (price) => <span>{formatCurrency(`${price}`) + " đ"}</span>,
  },
  {
    title: "Khuyến mãi",
    dataIndex: "promotion",
    key: "promotion",
    width: "7%",
    align: "center",
  },
  {
    title: "Giá nhập hàng",
    dataIndex: "importPrice",
    key: "importPrice",
    width: "10%",
    align: "center",
    render: (importPrice) => (
      <span>{formatCurrency(`${importPrice}`) + " đ"}</span>
    ),
  },
  {
    title: "Hàng tồn",
    dataIndex: "Stock",
    key: "stock",
    width: "10%",
    align: "center",
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
    align: "center",
  },
  {
    title: "Nhà phân phối",
    dataIndex: "supplier",
    key: "supplier",
    align: "center",
  },
  {
    title: "Thương hiệu",
    dataIndex: "brand",
    key: "brand",
    align: "center",
  },
  {
    title: "Ngày nhập",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
    render: (importPrice) => {
      const date = new Date(importPrice);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      return <span>{formattedDate}</span>;
    },
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined
        // onClick={(e) => showDrawerUpdate(record)}
        />
        <DeleteOutlined
          style={{ color: "red" }}
          // onClick={(e) => deleteProductHandler(record._id)}
        />
      </Space>
    ),
  },
];
