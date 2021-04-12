import React from 'react';
import './onboarding.css';
import OnboardingForm from './OnboardingForm';

function OnboardingContainer(){
    return (
        <div className='onboarding-container'>
            <div className='triangle form-heading'>
            <h1>Welcome</h1>
            </div>
            <OnboardingForm/>
        </div>
    )
};

export default OnboardingContainer;