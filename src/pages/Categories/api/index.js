import { useEffect } from "react";
import { useGetData } from "../../../hooks/services/useGetApi";
import { message } from "antd";
import { usePostData } from "../../../hooks/services/usePostApi";
import { useDeleteData } from "../../../hooks/services/useDeleteApi";
import { CATEGORIES } from "../../../constants/api";

export const CategoriesDataList = (keyword, refreshTable) => {
  const data = [];
  const getCategories = useGetData(`${CATEGORIES.LIST}?keyword=${keyword}`);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getCategories._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, [keyword, refreshTable]);
  const categoriesSelect = [{ value: "", label: "Tất cả" }];
  getCategories.data.categories &&
    getCategories.data.categories.forEach((item, i) => {
      categoriesSelect.push({
        value: item.name,
        label: item.name,
      });
    });
  getCategories.data.categories &&
    getCategories.data.categories.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        name: item.name,
      });
    });
  const brand = { data, categoriesSelect };
  if (
    getCategories.isLoading === false &&
    getCategories.data.success === true
  ) {
    return brand;
  }
};

export const CategoriesDataPost = (refreshTable, setRefreshTable, setOpen) => {
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
    return postData._postData(`${CATEGORIES.CREATE}`, payload);
  };
  const postCategories = async (payload) => {
    await create(payload);
  };
  return postCategories;
};

export const CategoriesDataDelete = (refreshTable, setRefreshTable) => {
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
  const deleteCategories = (id) => {
    return deteleM._deleteData(`${CATEGORIES.DELETE}${id}`);
  };
  const deleteM = async (id) => {
    await deleteCategories(id);
  };
  return deleteM;
};
