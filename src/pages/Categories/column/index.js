import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const columns = [
  {
    title: "Tên danh mục",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    width: "5%",
    align: "center",
    render: (_, record) => (
      <Space size="middle">
        <DeleteOutlined
          style={{ color: "red" }}
          // onClick={(e) => deleteProductHandler(record._id)}
        />
      </Space>
    ),
  },
];
