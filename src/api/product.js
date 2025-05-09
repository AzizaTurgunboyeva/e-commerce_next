import { toast } from "react-toastify";
import { instance } from "./instance";

export const getProductsApi = async () => {
  try {
    const res = await instance.get("/e-commerce/products");
    return res.data;
  } catch (error) {
    toast.error("Failed to fetch products");
    console.log(error);
    
  }
};
