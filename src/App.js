// react imports
import React from 'react';
// css
import './App.css';

// custom imports
import {Switch, Route} from 'react-router-dom';

// components 
import { Homepage } from './pages/homepage/homepage'; 

const casual = ()=>{
  return <h1>Casual Cothing</h1>;
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/casual-clothing' component={casual}></Route>
      </Switch>
    </>
  );
}

export default App;