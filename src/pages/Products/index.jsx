import React, { createRef, useEffect, useState } from "react";
import { Table } from "antd";
import { useGetData } from "../../hooks/services/useGetApi";
import { BRANDS, PRODUCTS } from "../../constants/api";
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
  const [brandSearch, setBrandSearch] = useState();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onRefresh = () => {
    setKeyword("");
    setBrandSearch();
  };
  const getProducts = useGetData(
    brandSearch
      ? `${PRODUCTS.LIST}?keyword=${keyword}&brand=${brandSearch}`
      : `${PRODUCTS.LIST}?keyword=${keyword}`
  );
  const getBrands = useGetData(`${BRANDS.LIST}`);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getProducts._getData();
    }
    void getBrands._getData();
    return () => {
      isCurrent = false;
    };
  }, [keyword, brandSearch]);
  const brands = [{ value: "", label: "Tất cả" }];
  getBrands.data.brand &&
    getBrands.data.brand.forEach((item, i) => {
      brands.push({
        value: item.name,
        label: item.name,
      });
    });
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
      setKeyword={setKeyword}
      keyword={keyword}
      mode={0}
      brands={brands}
      setBrandSearch={setBrandSearch}
      brandSearch={brandSearch}
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
