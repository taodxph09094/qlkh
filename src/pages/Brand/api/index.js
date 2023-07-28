import { useEffect } from "react";
import { useGetData } from "../../../hooks/services/useGetApi";
import { BRANDS } from "../../../constants/api";
import { message } from "antd";
import { usePostData } from "../../../hooks/services/usePostApi";
import { useDeleteData } from "../../../hooks/services/useDeleteApi";

export const BrandDataList = (keyword, refreshTable) => {
  const data = [];
  const getBrands = useGetData(`${BRANDS.LIST}?keyword=${keyword}`);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getBrands._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, [keyword, refreshTable]);
  const brandsSelect = [{ value: "", label: "Tất cả" }];
  getBrands.data.brand &&
    getBrands.data.brand.forEach((item, i) => {
      brandsSelect.push({
        value: item.name,
        label: item.name,
      });
    });
  getBrands.data.brand &&
    getBrands.data.brand.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        name: item.name,
        address: item.address,
      });
    });
  const brand = { data, brandsSelect };
  if (getBrands.isLoading === false && getBrands.data.success === true) {
    return brand;
  }
};

export const BrandDataPost = (refreshTable, setRefreshTable, setOpen) => {
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
    return postData._postData(`${BRANDS.CREATE}`, payload);
  };
  const postBrand = async (payload) => {
    await create(payload);
  };
  return postBrand;
};

export const BrandDataDelete = (refreshTable, setRefreshTable) => {
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
  const deleteBrand = (id) => {
    return deteleM._deleteData(`${BRANDS.DELETE}${id}`);
  };
  const deleteM = async (id) => {
    await deleteBrand(id);
  };
  return deleteM;
};
