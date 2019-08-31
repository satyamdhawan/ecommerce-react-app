import React from 'react';
// custom imports
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
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
                    <SignUp/>
                </div>
            </div>
        </>
    );
}

export default SignInAndSignUp;