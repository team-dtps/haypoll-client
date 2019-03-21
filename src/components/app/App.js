import React from 'react';
import 'normalize.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loading from '../Loading';
import { withSession } from '../../containers/auth/withSession';
import Callback from '../../containers/auth/Callback';
import Home from '../Home';

export default function App() {
  return (
    <Router>
    <>
    <Switch>
      <Route path="/callback" component={Callback}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/" component={withSession(Loading)}></Route>
    </Switch>
    </>
    </Router>
  );	  
} 


