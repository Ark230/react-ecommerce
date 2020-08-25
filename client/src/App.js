import React, { useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {connect} from 'react-redux';
import {setCurrentUser, checkUserSession} from './redux/user/user.actions';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';



const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
  
    return(<div>
    <Header/>
    <Switch>
      <Route path="/shop" component={ShopPage}/> 
      <Route exact path="/" component={HomePage}/> 
      <Route exact path="/signIn" render={() => currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/> 
      <Route exact path="/checkout" component={CheckoutPage}/>
    </Switch>
    </div>
    );

}


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()) 
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
