import { useEffect, useState } from "react";
import { PRODUCTS } from "../../../constants/api";
import { useGetData } from "../../../hooks/services/useGetApi";

export const useProductData = () => {
  const [products, setProducts] = useState([]);
  const dataFetcher = useGetData(PRODUCTS.LIST, null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetcher._getData(null, null);
      setProducts(data);
    };
    fetchData();
  }, []);

  return products;
};
