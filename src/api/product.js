import { toast } from "react-toastify";
import { instance } from "./instance";

export const getProductsApi = async () => {
  try {
    const res = await instance.get("/store/products");
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch products");
    console.log(error);
    
  }
};

export const getProductsApiOne = async (id) => {
  try {
    const res = await instance.get(`/store/products/${id}`);
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch products");
    console.log(error);
  }
};
