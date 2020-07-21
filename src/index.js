import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter,Route,Switch } from "react-router-dom"
import Register from './conpontent/register/Register';
import Login from './conpontent/login/Login';
import Main from './conpontent/main/Main';


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/Register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/" component={Main}></Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

