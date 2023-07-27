import React, { createRef, useEffect, useState } from "react";
import { Table } from "antd";
import { useGetData } from "../../hooks/services/useGetApi";
import { BRANDS, SUPPLIER } from "../../constants/api";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";

const Supplier = () => {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
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
    setKeyword("");
  };
  const getSupplier = useGetData(`${SUPPLIER.LIST}?keyword=${keyword}`);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getSupplier._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, [keyword]);

  const data = [];
  getSupplier.data.supplier &&
    getSupplier.data.supplier.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        name: item.name,
        address: item.address,
      });
    });
  return (
    <CardCustom
      title="Danh sách đơn vị phân phối"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
      setKeyword={setKeyword}
      keyword={keyword}
      mode={1}
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

export default Supplier;
