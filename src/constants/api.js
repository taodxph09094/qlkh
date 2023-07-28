// export const BASE_API_URL = "https://api-new-8e6b.onrender.com/";
export const BASE_API_URL = "http://localhost:4000/";

export const AUTH_URL = {
  LOGIN: "api/v1/login",
};
export const PRODUCTS = {
  LIST: `api/v1/admin/products`,
  PRODUCT: `api/v1/admin/product/`,
  CREATE: `api/v1/admin/product/new`,
};
export const CATEGORIES = {
  LIST: `api/v1/admin/categories`,
  CREATE: `api/v1/admin/categories/create`,
  DELETE: `api/v1/admin/categories/`,
};
export const BRANDS = {
  LIST: `api/v1/admin/brand`,
  CREATE: `api/v1/admin/brand/create`,
  DELETE: `api/v1/admin/brand/`,
};
export const SUPPLIER = {
  LIST: `api/v1/admin/supplier`,
  CREATE: `api/v1/admin/supplier/create`,
  DELETE: `api/v1/admin/supplier/`,
};
export const ORDERS = {
  LIST: `api/v1/admin/orders`,
};
