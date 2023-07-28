import React, { createRef, useState } from "react";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";
import { ProductDataDelete, ProductDataList, ProductDataPost } from "./api";
import FormProduct from "./Form";
import TableCustom from "../../components/TableCustom";
import { Form } from "antd";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [mode, setMode] = useState(0);
  const [formData, setFormData] = useState({});
  const formRef = createRef();
  const [form] = Form.useForm();
  const [brandSearch, setBrandSearch] = useState();
  const [refreshTable, setRefreshTable] = useState(false);
  const data = ProductDataList(keyword, brandSearch, refreshTable);
  const deleteProductData = ProductDataDelete(refreshTable, setRefreshTable);
  const createProduct = ProductDataPost(refreshTable, setRefreshTable, setOpen);
  const [description, setDescription] = useState("");
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
  return (
    <CardCustom
      title="Danh sách sản phẩm"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
      setKeyword={setKeyword}
      keyword={keyword}
      mode={0}
      brands={data?.brands}
      setBrandSearch={setBrandSearch}
      brandSearch={brandSearch}
    >
      <TableCustom
        columns={columns}
        dataSource={data?.data}
        deleteM={deleteProductData}
        showDrawer={showDrawer}
        setMode={setMode}
        mode={0}
        refreshTable={refreshTable}
      />
      <DrawerCustom
        title={mode === 0 ? "Thêm mới sản phẩm" : "Chi tiết sản phẩm"}
        mode={mode}
        onClose={onClose}
        open={open}
        formRef={formRef}
        setFormData={setFormData}
        description={description}
        onPressCreate={createProduct}
        width={720}
        typeCommon="product"
      >
        <FormCustom formRef={formRef} initialValues={formData}>
          <FormProduct
            setDescription={setDescription}
            description={description}
          />
        </FormCustom>
      </DrawerCustom>
    </CardCustom>
  );
};

export default Products;
