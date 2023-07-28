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
];
