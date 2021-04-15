import React from 'react';
import {Link} from 'react-router-dom'

function GetStartedButton(){
    return(
        <Link to='/sign-up'>
            <button className='started-button'>
                Get Started
            </button>
        </Link>
    )
};

export default GetStartedButton;