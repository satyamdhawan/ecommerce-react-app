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
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase-util';

class App extends Component{
  constructor(){
    super();

    this.state={
      currentUser : null
    }
  }
  
  unSubscribeFromAuth =  null;

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async (userAuth)=>{
      // if not null
      if(userAuth){
        // call the createUserProfileDocument function to get the userRef
        const userRef=await createUserProfileDocument(userAuth);
        // userRef has a function onSnapshot that gives a document snapShot object 
        // which has a data function which gives us all the data about the user
        // after getting the data we set it by calling setState function
        userRef.onSnapshot((snapShot)=>{
            this.setState({currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }});
          }
        );
      }
      else{
        this.setState({ currentUser : userAuth });
      }
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