import React, { useContext } from "react";
import SideNavLinks from "./SideNavLinks";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <div>
        <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] overflow-y-scroll ">
          <div>
            <div className="-mx-6 px-6 py-4">
              <Link to={'/'}>
                <img
                  src="https://i.ibb.co/vkhdL3G/logo.png"
                  className="w-[90%]"
                />
              </Link>
            </div>

            <ul className="menu menu-vertical mt-8 space-y-2 tracking-wide">
              <SideNavLinks />
            </ul>
          </div>
        </aside>

        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%]">
          <div className="navbar flex justify-between sticky top-0 h-16  shadow-md shadow-slate-500 rounded-b-md bg-primary  lg:py-2.5">
            <div className="flex items-center justify-between space-x-4 px-6">
              <h5
                hidden=""
                className="text-2xl font-medium text-white lg:block "
              >
                Dashboard
              </h5>
            </div>
            <label className="px-2">
              <p className="text-xs sm:text-sm mr-6 text-white">
                Hello, {user?.displayName}
              </p>
              {user && (
                <div className="avatar">
                  <div className="w-7 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              )}
            </label>
          </div>
          <div className="pt-6 2xl:container">
            <div className="h-[80vh] items-center justify-center rounded-xl p-6 overflow-y-scroll">
              <span>{children}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
