import React from 'react';
import PollFormContainer from '../../containers/PollFormConnect';
import Results from '../results/Results'; 

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

function App() {
  return (
    <>
      <h1> HAYHAY </h1>
      <PollFormContainer />
      <Results results={results}/>
    </>
  );
}
export default App;
