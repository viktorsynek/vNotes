// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../static/styles/relog.css'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
     const navigate = useNavigate();
     const [errorMsg, setErrorMsg] = useState(null);
     const [showErrorMsg, setShowErrorMsg] = useState(false);

     const createUser = (userData) => {
        console.log(userData);
        fetch('http://localhost:3333/api/admin/user', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        })
          .then( async (response) => {
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMsg(`${JSON.stringify(errorData.body)}`)
                setShowErrorMsg(true);
                setTimeout(() => {
                  setShowErrorMsg(false);
              
                  setTimeout(() => {
                    setErrorMsg(null);
                  }, 5000);
                }, 3000);
                throw new Error(`${JSON.stringify(errorData.body)}`);
            }
            return response.json();
          })
          .then((data) => {
            window.sessionStorage.setItem("Authorization", data);
            navigate('/test');
          })
          .catch((error) => {
            console.error('Error creating user:', error);
          });
    };
      
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
  
    const [inputErrors, setInputErrors] = useState({
        username: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'username' && value.length < 4) {
            setInputErrors((prevErrors) => ({ ...prevErrors, username: 'Username must be at least 4 characters long.' }));
        } else {
            setInputErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }

        setFormData({
            ...formData,
            [name]: value,
          });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,24}$/;
        setIsPasswordValid(passwordRegex.test(newPassword));
        setFormData({
            ...formData,
            password: newPassword,
        });
    };
    
    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputErrors.username) {
            setErrorMsg('Username requires at least 4 characters.')
            setShowErrorMsg(true);
            setTimeout(() => {
              setShowErrorMsg(false);
          
              setTimeout(() => {
                setErrorMsg(null);
              }, 5000);
            }, 3000);
            return;
        }

        if (!isPasswordValid) {
            setErrorMsg("The password doesn't meet the requirements.")
            setShowErrorMsg(true);
            setTimeout(() => {
              setShowErrorMsg(false);
          
              setTimeout(() => {
                setErrorMsg(null);
              }, 5000);
            }, 3000);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsg("Password and confirm password don't match.")
            setShowErrorMsg(true);
            setTimeout(() => {
                setShowErrorMsg(false);
            
                setTimeout(() => {
                  setErrorMsg(null);
                }, 500);
              }, 3000);
            return;
        }

        createUser(formData);
    };

    const extractErrorMessage = (error) => {
        try {
            const parsedError = JSON.parse(error);
            const errorMessage = Object.values(parsedError)[0];
            return (
              <div className={`error-msg ${showErrorMsg ? 'fade-in' : 'fade-out'}`}>
                {errorMessage}
              </div>
            );
          } catch (e) {
            return <div className={`error-msg ${showErrorMsg ? 'fade-in' : 'fade-out'}`}>{error}</div>;
          }
        };
        
        useEffect(() => {
          let timeoutId;
          if (showErrorMsg) {
            setShowErrorMsg(true);
        
            timeoutId = setTimeout(() => {
              setShowErrorMsg(false);
            }, 10000);
        
            return () => {
              clearTimeout(timeoutId);
            };
          }
        }, [showErrorMsg, setErrorMsg, setShowErrorMsg]);
      
    return (
        <>
            <Navbar />
            {errorMsg && extractErrorMessage(errorMsg)}
            <div className="register">
                <h1>Register</h1>
                <div className="container">
                <form action="http://localhost:3333/api/admin/user" method="post" onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <p>Username</p>
                        <input type="text" onChange={handleInputChange} name='username' placeholder='' required/>
                    </div>
                    <div className="txt_field">
                        <p>Email</p>
                        <input type="email" onChange={handleInputChange} name='email' placeholder='' required/>
                    </div>
                    <div className="txt_field">
                            <p>Password</p>
                            <input
                                type="password"
                                name='password'
                                placeholder=""
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            {!isPasswordValid && (
                            <p className="error-message">
                                Password must include at least one uppercase letter, one lowercase letter, 
                                <br />
                                one special character, and be 8-16 characters long.
                            </p>
                        )}
                    </div>
                    <div className="txt_field">
                        <p>Confirm Password</p>
                        <input
                            type="password"
                            name="password"
                            placeholder=""
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                            />
                    </div>
                    <div>
                        <input type="submit" disabled={!isPasswordValid} value={"Register"}/>
                    </div>
                    <div className="line-break"></div>
                    <div className="login_link">
                        <p>Already have an account?</p>
                        <Link to="/Login">Login</Link>
                    </div>
                </form>
                </div>
            </div>
        </>
    );
}
export default Register;