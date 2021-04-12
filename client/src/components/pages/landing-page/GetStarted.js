import React from 'react';
import StartedButton from './GetStartedButton';


function GetStarted(){
    return (
        <div className='get-started-container'>
            <div className='get-started-wrapper'>
                <h3>How To Get Started</h3>
                <div className='started-contents'>
                    <p>Getting Started is just a click away. Create your <span>free</span> account today and start storing your tasty recipes today.</p>
                    <StartedButton/>
                    <p>Never worry about your recipes cards getting lost or ruined every again!</p>
                </div>
            </div>
        </div>
    )
};

export default GetStarted;