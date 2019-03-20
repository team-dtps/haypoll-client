import React from 'react';
import renderer from 'react-test-renderer';
import Polls from '../polls/Polls';

describe('Polls snapshot', () => {
  it('can match a snapshot', () => {
    const polls = [ 
      { question: 'Poll question', choices: ['choice1', 'choice2', 'choice3'], creator: 'voter1' }
    ];
    const tree = renderer.create(
      <Polls polls={polls}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

