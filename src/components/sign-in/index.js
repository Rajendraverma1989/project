import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import {auth, signInWithGoogle } from '../../firebase/firebase-utils'; 

import './styles.scss';

class SignIn extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            email: '',
            password: '',
            error: ''
        }
    }

 handleSubmit =  async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
       const data = await auth.signInWithEmailAndPassword(email, password);
       this.setState({
            email:'',
            password:'',
            error: ''
         })
         console.log('datratatat:::', data)
    } catch (error) {
        console.log(error);
        this.setState({
            error: error.message
        })
    }
    
}

handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value} );
}

    render (){
        return(
            <div className='sign-in'>
                <h2> I aleady have an account</h2>
                <span>Sign in with your email and password</span>
                <div className={`${this.state.error ? 'error':''}`}>{this.state.error}</div>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput type='email'
                     name='email'
                     label="email"
                     handleChange= { this.handleChange }
                     value= { this.state.email } required />
                    <FormInput type='password'
                     handleChange= { this.handleChange }
                     name='password'
                     label="password"
                     value={ this.state.password } required />
                    <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button"  onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>             
                </form>
            </div>
        )
    }
}
export default SignIn;