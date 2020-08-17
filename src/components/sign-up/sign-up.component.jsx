import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName:'testing',
            email:'testing@gmail.com',
            password:'testin',
            confirmPassword:'testin'
        }
    }

    handleSubmit = async (event) => {
        const {signUp} = this.props;
        event.preventDefault();
        const user = this.state;

        signUp(user);

        this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
         });
    }

    handleChange = async (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
                <div className="sign-up">
                    <h2 className="title"> I don't have a account</h2>
                    <span>Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                       <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required></FormInput>
                       <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required></FormInput>
                       <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required></FormInput>
                       <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required></FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                    </form>
                </div>

        );

    }
}

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUpStart(user))

})
export default connect(null, mapDispatchToProps)(SignUp);
