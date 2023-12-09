import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Loading } from "../components";


const ManagerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading/>
    }

    if (user && !isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default ManagerRoute;