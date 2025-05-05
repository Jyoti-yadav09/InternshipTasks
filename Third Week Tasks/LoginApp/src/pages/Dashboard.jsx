import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
const user=JSON.parse(localStorage.getItem('user'));
const navigate=useNavigate();
const logout=()=>
{
     localStorage.removeItem('isLoggedIn');
     navigate('/auth');
};
  return (

    <div>
        <div>
            <div>
                <h1>Dashboard</h1>
                <button onClick={logout}>Logout</button>
            </div>
            <p>
                Hello, <span>{user?.name || 'User'}</span>!
            </p>
            <div>
                <div>
                    <h3>Users</h3>
                    <p>120</p>
                </div>
                  
                  <div>
                    <h3>Messages</h3>
                    <p>45</p>
                  </div>

                   <div>
                    <h3>Notes</h3>
                    <p>30</p>
                   </div>
                   </div>
                   
                    <div>
                        <h2>Recent Activity</h2>
                        <ul>
                            <li>You logged in successfully</li>
                            <li>Registered a new user</li>
                            <li>Accessed protected dashboard</li>
                        </ul>
                    </div>
            </div>
        </div>
      
   
  )
}

export default Dashboard;
