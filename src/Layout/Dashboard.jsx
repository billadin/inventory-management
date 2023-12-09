import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState()

  useEffect(()=>{
    setLoading(true)
    const user = localStorage.getItem('userInfo')
    if(user) {
      const userObject = JSON.parse(user)
      const role = userObject?.role
      if(role=== "admin") {
        navigate('/dashboard/admin/manage')
      }
      if(role === "manager") {
        navigate('/dashboard/manager/products')
      }
      setLoading(false)
    }
    setLoading(false)
  },[])
  
  return (

    <>
    <Helmet>
      <title>Sphere Inventory | Dashboard </title>
    </Helmet>
    <Sidebar>
      <Outlet/>
    </Sidebar>
    </>

  );
};
export default Dashboard;
