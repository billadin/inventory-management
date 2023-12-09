import {BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';



const Navbar = () => {
  const {user} = useContext(AuthContext);

  return (
    <nav>
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex"
          >
            <img src="https://i.ibb.co/vkhdL3G/logo.png"  className='w-60' alt="" />
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal menu-">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {/* <label className="swap swap-rotate">
            <input type="checkbox" />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label> */}
          <label>
            {
            user && 
            <div className="avatar">
              <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL}/>
              </div>
            </div>
            }
          </label>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
