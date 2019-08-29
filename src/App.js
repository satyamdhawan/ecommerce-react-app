// react imports
import React, {Component} from 'react';
// css
import './App.css';

// custom imports
import {Switch, Route} from 'react-router-dom';

// components 
import { Homepage } from './pages/homepage/homepage';
import Header from './components/header/header'; 
import Shop from './pages/shop/shop';
import { auth } from './firebase/firebase-util';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

class App extends Component{
  constructor(){
    super();

    this.state={
      currentUser : null
    }
  }
  
  unSubscribeFromAuth =  null;

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged((user)=>{
      this.setState({ currentUser : user });
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <>
        <div className="header">
          <Header currentUser={this.state.currentUser}/>
        </div>
        <div className="switch">
          <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path='/signin-signup' component={SignInAndSignUp}></Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;