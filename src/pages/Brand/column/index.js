import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const columns = [
  {
    title: "Tên thương hiệu",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    width: "5%",
    align: "center",
    render: (_, record) => (
      <Space size="middle">
        {/* <EditOutlined /> */}
        <DeleteOutlined
          style={{ color: "red" }}
          // onClick={(e) => deleteProductHandler(record._id)}
        />
      </Space>
    ),
  },
];
