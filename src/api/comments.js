import { toast } from "react-toastify"
import { comInstance } from "./instance"

export const getCommentsApi= async()=>{
    try {
        const res = await comInstance.get("/store/comments/comments");
        return res.data
    } catch (error) {
        toast.error('Failed to fetch categories')
    }
}