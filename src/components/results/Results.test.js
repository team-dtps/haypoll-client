import React from 'react';
import { shallow } from 'enzyme';
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
    const wrapper = shallow(
      <Results results={props.results}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
