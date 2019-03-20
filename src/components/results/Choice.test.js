import React from 'react';
import renderer from 'react-test-renderer';
import Choice from './Choice';

describe('Choice snapshot', () => {
  it('can match a snapshot', () => {
    const props = {
      choice: 'hay',
      total: 50
    };
    const tree = renderer.create(
      <Choice total={props.total} choice={props.choice}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
