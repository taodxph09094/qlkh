export const columns = [
  {
    title: "Đơn vị phân phối",
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
