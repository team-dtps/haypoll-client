import React from 'react';
import renderer from 'react-test-renderer';
import Results from './Results';

describe('Results snapshot', () => {
  it('can match a snapshot', () => {
    const props = {
      results: {
        prompt: 'do you like hay?',
        voteTotals: [
          { choice: 'yay', total: 3 },
          { choice: 'nay', total: 5 }
        ]
      }
    };

    const tree = renderer.create(
      <Results results={props.results}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
