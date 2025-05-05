import React from 'react'

function PrivateRoute({children})
{
     const isLoggedIn=localStorage.getItem('isLoggedIn')==='true';
     return isLoggedIn ? children: <Navigate to ="/auth"/>
}

export default PrivateRoute;
