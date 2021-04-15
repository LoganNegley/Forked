import React from 'react';
import './user-login.css';
import {Link} from 'react-router-dom';

function LoginForm(){
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
                            />
                        </label>
                        <label>
                            Password
                            <input
                                required
                                type='text'
                                name='password'
                            />
                        </label>
                        <div className='login-buttons'>
                            <button className='sign-in'>Sign In</button>
                            <button className='create-account'>Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
};

export default LoginForm;