import React, {useState} from 'react';
import './user-login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import FailedLogin from './FailedLogin';

function LoginForm(){
    const [userCreds, setUserCreds] =useState({
        username:'',
        password:''
    });
    const [loggedUser, setLoggedUser] = useState({});
    const [failed, setFailed] = useState("false");

    // Form functions
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/auth/login', userCreds)
        .then(res =>{
            setLoggedUser(res.data.user)
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error)
            setFailed('true')
        })
    };


    const handleChange = (event)=>{
        setFailed('false')
        setUserCreds({...userCreds, [event.target.name]:event.target.value})
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
                                value={userCreds.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password
                            <input
                                required
                                type='text'
                                name='password'
                                value={userCreds.password}
                                onChange={handleChange}
                            />
                        </label>
                        <div className='login-buttons'>
                            <button onClick={handleSubmit} className='sign-in'>Sign In</button>
                            <Link to='/sign-up'><button className='create-account'>Create Account</button></Link>
                        </div>
                    </form>
                    <div id='failed-login-attempt'>
                        <p className={failed}>Unable to login. Make sure Username and Password are correct</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;