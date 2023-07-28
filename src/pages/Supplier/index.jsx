import React, { createRef, useState } from "react";
import { columns } from "./column";
import CardCustom from "../../components/CardCustom";
import DrawerCustom from "../../components/Drawer";
import FormCustom from "../../components/FormCustom";
import { SupplierDataDelete, SupplierDataList, SupplierDataPost } from "./api";
import TableCustom from "../../components/TableCustom";
import FormSupplier from "./Form";

const Supplier = () => {
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
  const supplier = SupplierDataList(keyword, refreshTable);
  const createSupplier = SupplierDataPost(
    refreshTable,
    setRefreshTable,
    setOpen
  );
  const deleteSupplier = SupplierDataDelete(refreshTable, setRefreshTable);
  return (
    <CardCustom
      title="Danh sách đơn vị phân phối"
      showDrawer={showDrawer}
      onRefresh={onRefresh}
      setKeyword={setKeyword}
      keyword={keyword}
      mode={1}
    >
      <TableCustom
        columns={columns}
        dataSource={supplier?.data}
        deleteM={deleteSupplier}
        showDrawer={showDrawer}
        mode={1}
        refreshTable={refreshTable}
      />
      <DrawerCustom
        title={"Thêm mới đơn vị phân phối"}
        mode={mode}
        onClose={onClose}
        open={open}
        formRef={formRef}
        setFormData={setFormData}
        onPressCreate={createSupplier}
      >
        <FormCustom formRef={formRef} initialValues={formData}>
          <FormSupplier />
        </FormCustom>
      </DrawerCustom>
    </CardCustom>
  );
};

export default Supplier;
