import React from 'react';
import './App.css';
import PageNotFound from './components/404';
import Register from './components/Register';
import Login from './components/Login';
import {Route, Routes, useNavigate} from 'react-router-dom';

function RedirectToRegister() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/register');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RedirectToRegister/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
