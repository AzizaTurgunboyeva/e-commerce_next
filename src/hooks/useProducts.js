import { useQuery } from "@tanstack/react-query"
import { getProductsApi, getProductsApiOne } from "../api"

export const useProducts= ()=>{
    return useQuery({
        queryKey:['products'],
        queryFn:getProductsApi,
        
    })   
}
export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product",id],
    queryFn:()=> getProductsApiOne(id),
    enabled:!!id
  });
};