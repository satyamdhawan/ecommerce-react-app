// react imports
import React from 'react';
// css
import './App.css';

// custom imports
import {Switch, Route} from 'react-router-dom';

// components 
import { Homepage } from './pages/homepage/homepage'; 
import Shop from './pages/shop/shop';
import Header from './components/header/header';

const casual = ()=>{
  return <h1>Casual Cothing</h1>;
}

function App() {
  return (
    <>
      <div className="header">
        <Header/>
      </div>
      <div className="switch">
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path='/casual-clothing' component={casual}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;