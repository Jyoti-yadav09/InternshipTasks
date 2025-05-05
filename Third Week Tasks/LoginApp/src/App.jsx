import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/dashboard" element={
           <PrivateRoute>
            <Dashboard/>
           </PrivateRoute>
        }
        />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  );
}

export default App
