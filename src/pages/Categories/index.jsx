import React, { createRef, useState } from "react";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";
import {
  CategoriesDataDelete,
  CategoriesDataList,
  CategoriesDataPost,
} from "./api";
import TableCustom from "../../components/TableCustom";
import FormCategories from "./Form";

const Categories = () => {
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
  const categories = CategoriesDataList(keyword, refreshTable);
  const createCategory = CategoriesDataPost(
    refreshTable,
    setRefreshTable,
    setOpen
  );
  const deleteCategory = CategoriesDataDelete(refreshTable, setRefreshTable);
  return (
    <CardCustom
      title="Danh mục sản phẩm"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
      setKeyword={setKeyword}
      keyword={keyword}
      mode={1}
    >
      <TableCustom
        columns={columns}
        dataSource={categories?.data}
        deleteM={deleteCategory}
        showDrawer={showDrawer}
        mode={1}
        refreshTable={refreshTable}
      />
      <DrawerCustom
        title={"Thêm mới danh mục sản phẩm"}
        mode={mode}
        onClose={onClose}
        open={open}
        formRef={formRef}
        setFormData={setFormData}
        onPressCreate={createCategory}
      >
        <FormCustom formRef={formRef} initialValues={formData}>
          <FormCategories />
        </FormCustom>
      </DrawerCustom>
    </CardCustom>
  );
};

export default Categories;
