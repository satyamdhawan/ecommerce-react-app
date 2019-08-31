import React from 'react';
import Button from '../button/button';
import FormInput from '../form-input/form-input';
import { auth, createUserProfileDocument } from '../../firebase/firebase-util';

// css
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const { email, displayName, password, confirmPassword }=this.state;

        if(password!==confirmPassword){
            let pass=document.querySelector('#hidden');
            pass.className="error";
            pass.textContent = `Password does not match`;
            return;
        }
        try{
            const {user} =await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserProfileDocument(user, displayName);
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }
        catch(err){
            console.log(err);
        }
    }

    handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <>
            <h3>Don't have an Account?</h3>
            <h4>Sign Up</h4>
            <form onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} name="displayName" type="text" label="display name" value={displayName} required/>
                
                <FormInput handleChange={this.handleChange} name="email" type="email" label="email" value={email} required/>
                
                <span id="hidden"></span>
                
                <FormInput handleChange={this.handleChange} name="password" type="password" label="password" value={password}/>

                <FormInput handleChange={this.handleChange} name="confirmPassword" type="password" label="confirm password" value={confirmPassword}/>

                <Button type="submit" value="Sign Up" input_class="signup-button"/>               
            </form>
            </>
        );
    }
}


export default SignUp;