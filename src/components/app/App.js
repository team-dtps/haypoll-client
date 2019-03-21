import React from 'react';
import 'normalize.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withSession } from '../../containers/auth/withSession';
import Callback from '../../containers/auth/Callback';
import Loading from './Loading';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/callback" component={Callback}></Route>
          <Route path="/home" component={withSession(Home)}></Route>
          <Route path="/" component={Loading}></Route>
        </Switch>
      </>
    </Router>
  );	  
} 
