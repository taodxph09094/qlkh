import React, { useState } from "react";
import { formatCurrency } from "../../helpers";
import { Popconfirm, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TableCustom = (props) => {
  //   const [refreshTable, setRefreshTable] = useState(false);
  const columnDefaults = [
    {
      title: "Action",
      key: "action",
      width: "5%",
      align: "center",
      render: (_, record) => (
        <>
          {props.mode === 0 && (
            <Space size="middle">
              <EditOutlined onClick={(e) => showDrawerUpdate(record)} />
              <Popconfirm
                placement="right"
                title={"Bạn có chắc chắn muốn xoá ?"}
                okText="Có"
                cancelText="Không"
                onConfirm={(event) => handleDelete(record._id)}
              >
                <DeleteOutlined
                  style={{ color: "red" }}
                  // onClick={(e) => handleDelete(record._id)}
                />
              </Popconfirm>
            </Space>
          )}
          {props.mode === 1 && (
            <Space size="middle">
              <Popconfirm
                placement="right"
                title={"Bạn có chắc chắn muốn xoá ?"}
                okText="Có"
                cancelText="Không"
                onConfirm={(event) => handleDelete(record._id)}
              >
                <DeleteOutlined
                  style={{ color: "red" }}
                  // onClick={(e) => handleDelete(record._id)}
                />
              </Popconfirm>
            </Space>
          )}
        </>
      ),
    },
  ];
  const mergedColumns = [...props.columns, ...columnDefaults];
  const handleDelete = (id) => {
    props?.deleteM(id);
    // setRefreshTable(!refreshTable);
  };
  const showDrawerUpdate = (value) => {
    props?.showDrawer();
    props?.setMode(1);
  };
  return (
    <Table
      bordered
      columns={mergedColumns}
      dataSource={props.dataSource}
      key={props.refreshTable}
    />
  );
};

export default TableCustom;
