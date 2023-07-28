import { useEffect } from "react";
import { useGetData } from "../../../hooks/services/useGetApi";
import { message } from "antd";
import { usePostData } from "../../../hooks/services/usePostApi";
import { useDeleteData } from "../../../hooks/services/useDeleteApi";
import { SUPPLIER } from "../../../constants/api";

export const SupplierDataList = (keyword, refreshTable) => {
  const data = [];
  const getSuppliers = useGetData(`${SUPPLIER.LIST}?keyword=${keyword}`);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getSuppliers._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, [keyword, refreshTable]);
  const SuppliersSelect = [{ value: "", label: "Tất cả" }];
  getSuppliers.data.supplier &&
    getSuppliers.data.supplier.forEach((item, i) => {
      SuppliersSelect.push({
        value: item.name,
        label: item.name,
      });
    });
  getSuppliers.data.supplier &&
    getSuppliers.data.supplier.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        name: item.name,
        address: item.address,
      });
    });
  const supplier = { data, SuppliersSelect };
  if (getSuppliers.isLoading === false && getSuppliers.data.success === true) {
    return supplier;
  }
};

export const SupplierDataPost = (refreshTable, setRefreshTable, setOpen) => {
  const alertSuccess = (value) => {
    if (value.status === 201) {
      message.success("Thêm thành công");
      setRefreshTable(!refreshTable);
      setOpen(false);
    }
  };
  const alertFail = (value) => {
    message.error(value.statusText);
  };
  const postData = usePostData(
    null,
    true,
    null,
    false,
    false,
    alertSuccess,
    alertFail
  );
  const create = (payload) => {
    return postData._postData(`${SUPPLIER.CREATE}`, payload);
  };
  const postSupplier = async (payload) => {
    await create(payload);
  };
  return postSupplier;
};

export const SupplierDataDelete = (refreshTable, setRefreshTable) => {
  const alertSuccess = (value) => {
    if (value.status === 200) {
      message.success("Xoá thành công");
      setRefreshTable(!refreshTable);
    }
  };
  const alertFail = (value) => {
    message.error(value.statusText);
  };
  const deteleM = useDeleteData(
    null,
    true,
    null,
    false,
    false,
    alertSuccess,
    alertFail
  );
  const deleteSupplier = (id) => {
    return deteleM._deleteData(`${SUPPLIER.DELETE}${id}`);
  };
  const deleteM = async (id) => {
    await deleteSupplier(id);
  };
  return deleteM;
};
