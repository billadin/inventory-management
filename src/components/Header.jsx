import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { FirebaseErrorMessage } from '../utils';
import { toast } from 'react-toastify';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      logOut()
      localStorage.removeItem('token')
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error(FirebaseErrorMessage(error));
    }
  }

  return (
    <header className='bg-primary py-2 text-white shadow-md shadow-slate-600'>
      <div className='align-element flex justify-center sm:justify-end'>
        <label className="swap swap-rotate mr-6">
          <input type="checkbox" />
          <BsSunFill className="swap-on h-4 w-4" />
          <BsMoonFill className="swap-off h-4 w-4" />
        </label>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.displayName}</p>
            <button
            onClick={handleLogout}
            type='submit'
              className='btn btn-xs btn-neutral'
            >
              logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
              Log in
            </Link>
            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
