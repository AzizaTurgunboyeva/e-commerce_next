import { useQuery } from "@tanstack/react-query"
import { getCommentsApi } from "../api"

export const useComments=()=>{
    return useQuery({
        queryFn:getCommentsApi,
        queryKey:["comments"]
    })
}