import React, { useState } from 'react';
import Navbar from './Navbar';
import '../static/styles/relog.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    fetch('http://localhost:3333/api/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then( async (response) => {
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`${JSON.parse(errorData).message}`);
        }
        return response.text();
      })
      .then((data) => {
        window.sessionStorage.setItem("Authorization", data);
        navigate('/test');
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="txt_field">
              <p>Username</p>
              <input
                type="text"
                name="username"
                placeholder=""
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="txt_field">
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder=""
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input type="submit" value="Login" />
            </div>
            <div className="forgot_pw">
              <Link to="/pw">Forgot Password?</Link>
            </div>
            <div className="line-break"></div>
            <div className="signup_link">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
