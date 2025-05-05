import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const[isLogin, setIsLogin]=useState(true);
    const[form, setForm]=useState({name:'', email:'', password:''});
    const navigate=useNavigate();

    const toggleMode=()=>
    {
         setIsLogin(isLogin);
         setForm({name:'', email:'', password:''});
    };

     const handleChange=(e)=>
     {
         setForm({...form, [e.target.name]: e.target.value});
     };

      const handeSubmit=(e)=>
      {
         e.preventDefault();
          
         if(isLogin)
         {
             const user=JSON.parse(localStorage.getItem('user'));
             if(user && user.email===form.email && user.password===form.password)
             {
                 localStorage.setItem('isLoggedIn', 'true');
                 navigate('/dashboard');
             }
              else{
                 alert('Invalid email or password');
              }

         }
          
         else{
             localStorage.setItem('user', JSON.stringify(form));
             alert('Registration successful ! Please login');
             setIsLogin(true);
         }
      };

  return (
    <div>
      <div>
        <h2>
            {isLogin ? 'Welcome Back!':'Create an Account'}
        </h2>

        <form onSubmit={handeSubmit}>
            {!isLogin && (
                <input type="text" name="name" placeholder='Full Name' value={form.name}
                 onChange={handleChange} required />
           
                
            )}
              <input type="email" name="email" placeholder='Email Address' value={form.email}
              onChange={handleChange}
              required />

              <input type="password" name="password" placeholder='Password' value={form.password} 
              onChange={handleChange} required />

              <button type="submit">{isLogin? 'Login':'Register '}</button>
        </form>

        <p>
            {isLogin ? "Don't have an account ?" :'Already registered?'}{' '}
            <button onClick={toggleMode}>
                {isLogin ? 'Register' : 'Login'} here
            </button>
                  

        </p>
      </div>
    </div>
  );
}

export default Auth;
