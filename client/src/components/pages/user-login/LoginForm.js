import React, {useState, useEffect} from 'react';
import './user-login.css';
import {Link, Route, useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import UserDashboard from '../user-dashboard/UserDashboard';


function LoginForm({user, setUser}){
    const [userCreds, setUserCreds] =useState({
        username:'',
        password:''
    });
    const [loggedUser, setLoggedUser] = useState('')
    const [failed, setFailed] = useState("false");
    const history = useHistory();
    const {username} = useParams();


    useEffect(() =>{
        setUser('')
    },[])

    // Form functions
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/auth/login', userCreds)
        .then(res =>{
            setUser(res.data.user)
            setLoggedUser(res.data.user.user.username);
            history.push('/');
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

    // if(props.user){
    //     return( <UserDashboard user={props.user}/> )
    // }

    return(
        <div className='outer-form-container'>
        <div className='triangle-container'>
            <div id='triangle'></div>
                <h1 id='login-heading'>Welcome <span>Back</span></h1>

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
                                type='password'
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