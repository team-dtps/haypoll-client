import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PollForm from '../components/polls/PollForm';
import { getPrompt, getChoice, getChoices } from '../selectors/polls';
import { createPoll, addChoice, updateChoice, updatePrompt } from '../actions/polls';

class PollFormConnect extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    prompt: PropTypes.string.isRequired,
    choice: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    choices: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    createPoll: PropTypes.func.isRequired,
    addChoice: PropTypes.func.isRequired
  }

  render() {
    return (
      <PollForm 
        prompt={this.props.prompt}
        choice={this.props.choice}
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
        createPoll={this.props.createPoll}
        addChoice={this.props.addChoice}
        choices={this.props.choices}
      />
    );
  }
}

const mapStateToProps = state => ({
  prompt: getPrompt(state),
  choice: getChoice(state),
  choices: getChoices(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(event) {
    event.preventDefault();
  },
  addChoice() {
    console.log('props', props);
    dispatch(addChoice(props.choice));
  },
  onChange({ target }) {
    const factoryMethod = {
      prompt: updatePrompt,
      choice: updateChoice
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  createPoll(prompt, choices, event) {
    event.preventDefault();
    dispatch(createPoll({ prompt, choices: props.choices }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PollFormConnect);
