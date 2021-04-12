import React, {useState} from 'react';
import axios from 'axios';
// import './onboarding.css';


function OnboardingForm(){
    const [newUser, setNewUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        username:'',
        password:''
    });


    const handleSubmit = (event) =>{
        event.prefaultDefault();
    };

    const handleInputChange =(event)=>{
        setNewUser({...newUser, [event.target.name]:event.target.value})

    };


    return (
        <div className='form-container'>
            <form>
                <label>
                    First class
                    <input
                        required
                        type='text'
                        name='firstName'
                        value={newUser.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <input type='submit' value="Sign Up"/>
            </form>
        </div>
    )
};

export default OnboardingForm;