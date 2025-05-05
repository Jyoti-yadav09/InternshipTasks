import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location=useLocation();
  const isLoggedIn=localStorage.getItem('isLoggedIn')==='true';

  return (
   
      <nav className='bg-white-100 shadow-md fixed top-0 left-0 w-full z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <Link to ="/" className='text-2xl font-bold text-blue-600'>ReactAuthApp</Link>
          <div className='space-x-4'>
            <Link to="/" className='hover:text-blue-600 font-medium text-lg'>Home</Link>
            {!isLoggedIn&& location.pathname!=='/auth' && (
              <Link to="/auth" className='hover:text-blue-600 font-medium'>Login/Register</Link>
            )}
            {isLoggedIn && (
              <Link to="/dashboard" className='hover:text-blue-600 text-lg font-medium'>Dasboard</Link>
            )}
          </div>
        </div>
      </nav>
      
    
  );
}

export default Navbar;
