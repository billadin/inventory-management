import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Home } from "../Layout";
import { ErrorElement } from "../components";
import { About, AdminSalesSummary, Checkout, CreateStore, Demo, Error, Landing, Login, ManageProduct, ManageShop, Pricing, Register, Sales, SalesSummary, Subscription } from "../pages";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import NonProtected from "./NonProtected";
import Logout from "../pages/Logout";
import ManagerRoute from "./ManagerRoute";
import UserRoute from "./UserRoute";

//Loader

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,

      },
      {
        path: '/about',
        element: <About/>,
        errorElement: <ErrorElement/>
      },
      {
        path: '/pricing',
        element: <Pricing/>,
        errorElement: <ErrorElement/>
      },
      {
        path: 'create-shop',
        element: <PrivateRoute><CreateStore/></PrivateRoute>,
        errorElement: <ErrorElement />,
      },
    ]},
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        errorElement: <Error/>,
        children: [
          // Admin routes
          {
            path: 'admin/manage',
            element: <AdminRoute><ManageShop/></AdminRoute>,
            errorElement: <ErrorElement/>
          },
          {
            path: 'admin/sales-summary',
            element: <AdminRoute><AdminSalesSummary/></AdminRoute>,
            errorElement: <ErrorElement/>
          },
    
          //Manager routes
          {
            path: 'manager/products',
            element: <ManagerRoute><ManageProduct/></ManagerRoute>,
            errorElement: <ErrorElement/>,
          }, 
          {
            path: 'manager/sales',
            element:<ManagerRoute><Sales/></ManagerRoute> ,
            errorElement: <ErrorElement/>,
          },  
          {
            path: 'manager/checkout',
            element:<ManagerRoute><Checkout/></ManagerRoute> ,
            errorElement: <ErrorElement/>,
          }, 
          {
            path: 'manager/sales-summary',
            element:<ManagerRoute> <SalesSummary/></ManagerRoute>,
            errorElement: <ErrorElement/>,
          }, 
          {
            path: 'subscriptions',
            element:<ManagerRoute><Subscription/></ManagerRoute>,
            errorElement: <ErrorElement/>
          },  
             
        ]
      },
      {
        path: '/register',
        element: <NonProtected><Register /></NonProtected>,
        errorElement: <Error />,

      },
      {
        path: '/login',
        element: <NonProtected><Login /></NonProtected>,
        errorElement: <Error />,
      },
      {
        path: '/logout',
        element: <Logout/>,
        errorElement: <Error/>
      }
])


export default router;