import React from 'react';
import 'normalize.css';
import PollFormContainer from '../../containers/PollFormConnect';
import Results from '../results/Results'; 
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loading from '../Loading';
import { withSession } from '../../containers/auth/withSession';
import Callback from '../../containers/auth/Callback';
import Home from '../Home';

const results = {
  prompt: 'prompt',
  voteTotals: [
    { choice: 'yay', total: 0 },
    { choice: 'nay', total: 5 },
    { choice: 'way', total: 19 },
    { choice: 'lay', total: 2 },
    { choice: 'bay', total: 6 }
  ]
};

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/callback" component={Callback}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/" component={withSession(Loading)}></Route>
        </Switch>
          <h1> HAYHAY </h1>
          <PollFormContainer />
          <Results results={results}/>
      </>
    </Router>
  );	  
} 
