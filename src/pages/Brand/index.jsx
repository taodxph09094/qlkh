import React, { createRef, useState } from "react";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";
import { BrandDataDelete, BrandDataList, BrandDataPost } from "./api";
import TableCustom from "../../components/TableCustom";
import FormBrand from "./Form/index";

const Brands = () => {
  const [open, setOpen] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);
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
  const brand = BrandDataList(keyword, refreshTable);
  const createBrand = BrandDataPost(refreshTable, setRefreshTable, setOpen);
  const deleteBrand = BrandDataDelete(refreshTable, setRefreshTable);
  return (
    <CardCustom
      title="Danh sách thương hiệu"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
      setKeyword={setKeyword}
      keyword={keyword}
      mode={1}
    >
      <TableCustom
        columns={columns}
        dataSource={brand?.data}
        deleteM={deleteBrand}
        showDrawer={showDrawer}
        mode={1}
        refreshTable={refreshTable}
      />
      <DrawerCustom
        title={"Thêm mới thương hiệu"}
        mode={mode}
        onClose={onClose}
        open={open}
        formRef={formRef}
        onPressCreate={createBrand}
        setFormData={setFormData}
      >
        <FormCustom formRef={formRef} initialValues={formData}>
          <FormBrand />
        </FormCustom>
      </DrawerCustom>
    </CardCustom>
  );
};

export default Brands;
