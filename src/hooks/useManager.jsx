import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";


const useManager = () => {
    const token = localStorage.getItem('token')
    const { user } = useContext(AuthContext);
    const axios = useAxios();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axios.post(`/auth/admin`, {email:user.email}, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useManager;