import React, { createRef, useEffect, useState } from "react";
import { Table } from "antd";
import { useGetData } from "../../hooks/services/useGetApi";
import { PRODUCTS } from "../../constants/api";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";

const Products = () => {
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
  const getProducts = useGetData(`${PRODUCTS.LIST}?keyword=${keyword}`);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getProducts._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, [keyword]);

  const data = [];
  getProducts.data.products &&
    getProducts.data.products.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        name: item.name,
        price: item.price - (item.price * item.promotion) / 100,
        promotion: item.promotion,
        importPrice: item.importPrice,
        Stock: item.Stock,
        category: item.category,
        supplier: item.supplier,
        brand: item.brand,
        createdAt: item.createdAt,
      });
    });

  return (
    <CardCustom
      title="Danh sách sản phẩm"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
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

export default Products;
