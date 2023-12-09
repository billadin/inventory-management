import { NavLink } from 'react-router-dom';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdManageHistory, MdOutlineShoppingCartCheckout, MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import useAdmin from '../hooks/useAdmin';
import { useEffect, useState } from 'react';
import { FaShop } from 'react-icons/fa6';
import { AiOutlineStock } from 'react-icons/ai';
import { RiHome8Fill } from "react-icons/ri";
import { PiSignOutDuotone } from "react-icons/pi";
import { FcSalesPerformance } from 'react-icons/fc';
import { LuCircleDollarSign } from "react-icons/lu";

const adminLinks = [
    { id: 1, text: 'Manage Shop', path: 'admin/manage', icon: <FaShop className='text-xl text-warning' /> },
    { id: 2, text: 'Sale Summary', path: 'admin/sales-summary', icon: <AiOutlineStock className='text-2xl text-warning' /> },
    // { id: 3, text: 'manage item', path: 'admin/manage-item', icon: <FaWpforms /> },
    // { id: 4, text: 'all users', path: 'admin/all-users', icon: <ImProfile /> },
  ];

const managerLinks = [
    { id: 1, text: 'Manage Products', path: 'manager/products', icon: <MdManageHistory  className='text-xl text-warning'/> },
    { id: 2, text: 'Sales Collection', path: 'manager/sales', icon: <FcSalesPerformance  className='text-xl text-warning' /> },
    { id: 3, text: 'Checkout', path: 'manager/checkout', icon: <MdOutlineShoppingCartCheckout  className='text-xl text-warning'/> },
    { id: 4, text: 'Subscriptions', path: 'subscriptions', icon: <LuCircleDollarSign  className='text-xl text-warning'/> },
    { id: 5, text: 'Sales Summary', path: 'manager/sales-summary', icon: <MdQueryStats   className='text-xl text-warning'/> },
  ];

const sharedLinks = [
    { id: 1, text: 'Home', path: '/', icon: <RiHome8Fill className='text-xl text-warning'/> },
    { id: 2, text: 'Logout', path: '/logout', icon: <PiSignOutDuotone className='text-xl text-warning'/> },
    // { id: 2, text: 'products', path: '/products', icon: <MdQueryStats /> },
  ];


const SideNavLinks = () => {
  const [loading, setLoading] = useState(false)
  const [isAdmin, setIsAdmin]= useState(false)
  const [isManager, setIsManager]= useState(false)

  
  useEffect(()=>{
    setLoading(true)
  const user = localStorage.getItem('userInfo')
  if(user) {
    const userObject = JSON.parse(user)
    const role = userObject?.role
    const shopName = userObject?.shopName
    if(role=== "admin") {
      setIsAdmin(true)
    }
    if(role === "manager") {
      setIsManager(true)
    }
  }
  setLoading(false)

  },[])

  return (
    <>

      {
        isAdmin && !isManager ?
      adminLinks?.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <li className='capitalize text-lg ' key={id}>
          <NavLink
            to={path} 
          >
          <span>{icon}</span>
            {text}
          </NavLink>
          </li>
        );
      }) :

      managerLinks?.map((link) => {
       const { text, path, id, icon } = link;
       return (
         <li className='capitalize text-lg' key={id}>
         <NavLink
           to={path}
         >
         <span>{icon}</span>
           {text}
         </NavLink>
         </li>
       );
      })
    }

    <div className="py-10">
        <hr className='h-1 bg-primary '/>
    </div>
    
    {/* Shared Links */}

      {sharedLinks?.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <li className='text-lg capitalize' key={id}>
          <NavLink
            to={path}
          >
          <span>{icon}</span>
            {text}
          </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default SideNavLinks;
