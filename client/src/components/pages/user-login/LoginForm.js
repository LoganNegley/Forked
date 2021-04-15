import React, {useState} from 'react';
import './user-login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function LoginForm(){
    const [user, setUser] =useState({
        username:'',
        password:''
    });

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post(' https://forked-application.herokuapp.com/auth/login', user)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    };

    const handleChange = (event)=>{
        setUser({...user, [event.target.name]:event.target.value})
    };

    return(
        <div className='outer-form-container'>
            <div className='triangle form-heading'>
                <h1 id='login-heading'>Welcome <span className='back'>Back</span></h1>
            </div>
            <div id='login-form-container' className='form-container'>
                <div id='login-form-wrapper' className='form-wrapper'>
                    <h3>Sign In</h3>
                    <form>
                        <label>
                            Username
                            <input
                                required
                                type='text'
                                name='username'
                                value={user.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password
                            <input
                                required
                                type='text'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </label>
                        <div className='login-buttons'>
                            <button onClick={handleSubmit} className='sign-in'>Sign In</button>
                            <Link to='/sign-up'><button className='create-account'>Create Account</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
};

export default LoginForm;