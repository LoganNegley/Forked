import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './onboarding.css';


function OnboardingForm(){
    const [newUser, setNewUser] = useState({
        first_name:'',
        last_name:'',
        email:'',
        username:'',
        password:''
    });


    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('https://forked-application.herokuapp.com/auth/register', newUser)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    };

    const handleInputChange =(event)=>{
        setNewUser({...newUser, [event.target.name]:event.target.value})

    };

    return (
       <div className='onboarding-container'>
            <div className='triangle form-heading'>
                <h1>Welcome</h1>
            </div>
            <div className='form-container'>
                <div className='form-wrapper'>
                    <h3>Sign Up, It's <span>Free</span></h3>
                    <form  onSubmit={handleSubmit}>
                        <label>
                            First Name
                            <input
                                required
                                type='text'
                                name='first_name'
                                value={newUser.firstName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Last Name
                            <input
                                required
                                type='text'
                                name='last_name'
                                value={newUser.lastName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Email
                            <input
                                required
                                type='text'
                                name='email'
                                value={newUser.email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Username
                            <input
                                required
                                type='text'
                                name='username'
                                value={newUser.username}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Password
                            <input
                                required
                                type='text'
                                name='password'
                                value={newUser.password}
                                onChange={handleInputChange}
                            />
                        </label>
                        <div className='onboarding-buttons'>
                            <button>Create</button>
                            <Link to='login'>Have an Account? Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default OnboardingForm;