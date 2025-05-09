import { useQuery } from "@tanstack/react-query"
import { getProductsApi } from "../api"

export const useProducts= ()=>{
    return useQuery({
        queryKey:['products'],
        queryFn:getProductsApi,
        
    })   
}