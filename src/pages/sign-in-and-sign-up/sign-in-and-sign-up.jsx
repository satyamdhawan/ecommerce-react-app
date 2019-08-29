import React from 'react';
// custom imports
import SignIn from '../../components/sign-in/sign-in';
//css
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = ()=>{
    return(
        <>
            <div className="form-container">
                <div className="signin">
                    <SignIn/>
                </div>

                <div className="signup">
                    signup
                </div>
            </div>
        </>
    );
}

export default SignInAndSignUp;