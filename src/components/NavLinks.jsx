import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from './Loading';
import { AuthContext } from '../Auth/AuthProvider';

const Navlinks = () => {
  const {user} = useContext(AuthContext) 
  const [isShopCreated, setIsShopCreated] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isAdmin, setIsAdmin]= useState(false)
  const [isManager, setIsManager]= useState(false)
  const [isRoleAdded, setIsRoleAdded] = useState(false) 

useEffect(()=>{
  setLoading(true)
  const localUser = localStorage.getItem('userInfo')
  if(localUser) {
    const userObject = JSON.parse(localUser)
    const role = userObject?.role
    role ? setIsRoleAdded(true) : setIsRoleAdded(false)
    const shopName = userObject?.shopName
    setIsShopCreated(shopName)
    if(role=== "admin") {
      setIsAdmin(true)
    }
    if(role === "manager") {
      setIsManager(true)
    }
  }
  setLoading(false)
},[])


if(loading) {
  return <Loading/>
}


  return (
    <>
      {!loading && (
        <>
          <li className="m-1">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              className="capitalize"
              to={"https://www.youtube.com/watch?v=sL15VM-xN60"}
              target="_blank"
            >
              Demo
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/about"}
            >
              Why Sphere?
            </NavLink>
          </li>
          <li className="m-1">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/pricing"}
            >
              Pricing
            </NavLink>
          </li>
          
          {!isShopCreated && !isAdmin && (
            <li className="m-1">
              <NavLink className="capitalize" to={"/create-shop"}>
                Create Shop
              </NavLink>
            </li>
          )}

          {user && (
            <>
              <li className="m-1">
                <NavLink className="capitalize" to={"/dashboard"}>
                  Dashboard
                </NavLink>
              </li>
              {/* {
              isAdmin || isManager ?
                  <li className="m-1">
                      <NavLink className="capitalize" to={"/dashboard"}>
                        Dashboard
                      </NavLink>
                    </li> : ""
            
            } */}

              {/* {isAdmin || isManager ? (
                <li className="m-1">
                  <NavLink className="capitalize" to={"/dashboard"}>
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {!isRoleAdded && (
                <li className="m-1">
                  <NavLink className="capitalize" to={"/create-shop"}>
                    Create Shop
                  </NavLink>
                </li>
              )} */}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Navlinks;
