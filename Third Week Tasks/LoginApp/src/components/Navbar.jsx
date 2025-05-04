import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location=useLocation();
  const isLoggedIn=localStorage.getItem('isLoggedIn')==='true';

  return (
   
      <nav className='bg-white shadow-md fixed top-0 '>
        <div>
          <Link to ="/" >ReactAuthApp</Link>
          <div>
            <Link to="/">Home</Link>
            {!isLoggedIn&& location.pathname!=='/auth' && (
              <Link to="/auth">Login/Register</Link>
            )}
            {isLoggedIn && (
              <Link to="/dashboard">Dasboard</Link>
            )}
          </div>
        </div>
      </nav>
      
    
  );
}

export default Navbar;
