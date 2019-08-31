import React, {Component} from 'react';
//custom imports
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { signInWithGoogle } from '../../firebase/firebase-util';
//css
import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        };
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email : '', password : ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]  : value });
    }

    render(){
        return(
            <>
            <h3>Already have an Account?</h3>
            <h4>Sign In</h4>
            <form onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} name="email" type="email" label="email" value={this.state.email} required/>

                <FormInput handleChange={this.handleChange} name="password" type="password" label="password" value={this.state.password}/>

                <Button type="submit" value="Sign In" input_class="signin-button"/>
                <Button onClick={signInWithGoogle} type="button" input_class="signin-button-google" value="Sign In With Google"/>                
            </form>
            </>
        );
    }
}

export default SignIn;