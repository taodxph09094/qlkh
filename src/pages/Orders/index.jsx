import React, { createRef, useEffect, useState } from "react";
import { Table } from "antd";
import { useGetData } from "../../hooks/services/useGetApi";
import { BRANDS, ORDERS } from "../../constants/api";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const [monAndDate, setMonth] = useState("");
  const [status, setStatus] = useState("");
  const [number, setNumber] = useState("");
  const [mode, setMode] = useState(0);
  const [formData, setFormData] = useState({});
  const formRef = createRef();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onRefresh = () => {
    setStatus("");
    setMonth();
    setNumber("");
  };
  const getOrders = useGetData(
    `${ORDERS.LIST}?number=${number}&status=${status}`
  );
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getOrders._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, [status, number]);

  const data = [];
  getOrders.data.orders &&
    getOrders.data.orders.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        userName: item.userName,
        shippingInfo: item.shippingInfo,
        orderItems: item.orderItems,
        itemsPrice: item.itemsPrice,
        dateFind: item.dateFind,
        orderStatus: item.orderStatus,
      });
    });
  console.log(getOrders);
  return (
    <CardCustom
      title="Danh sách đơn hàng"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
      status={status}
      number={number}
      setNumber={setNumber}
      setStatus={setStatus}
      mode={2}
    >
      <Table bordered columns={columns} dataSource={data} />
      <DrawerCustom
        title={mode === 0 ? "Thêm mới sản phẩm" : "Chi tiết sản phẩm"}
        mode={mode}
        onClose={onClose}
        open={open}
        formRef={formRef}
        setFormData={setFormData}
      >
        <FormCustom formRef={formRef} initialValues={formData} />
      </DrawerCustom>
    </CardCustom>
  );
};

export default Orders;
