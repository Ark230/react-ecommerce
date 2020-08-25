import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import { useState } from 'react';

const SignUp = ({signUp}) => {

    const [signUpCredentials, setSignUpCredentials] = useState({
        displayName:'testing',
        email:'testing@gmail.com',
        password:'testin',
        confirmPassword:'testin'
    });   

  const {displayName, email, password, confirmPassword} = signUpCredentials;

   const handleSubmit = async (event) => {
        
        event.preventDefault();
        const user = signUpCredentials;

        signUp(user);

        setSignUpCredentials({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        });
    }

   const handleChange = async (event) => {
        const {name, value} = event.target;
        this.setSignUpCredentials({...signUpCredentials, [name]: value});
    }

        
        return(
                <div className="sign-up">
                    <h2 className="title"> I don't have a account</h2>
                    <span>Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                       <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required></FormInput>
                       <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required></FormInput>
                       <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required></FormInput>
                       <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required></FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                    </form>
                </div>

        );

    
}

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUpStart(user))

})
export default connect(null, mapDispatchToProps)(SignUp);
