import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PollForm from '../components/polls/PollForm';
import { getPrompt, getChoice, getChoices } from '../selectors/polls';
import { createPoll, addChoice, updateChoice, updatePrompt } from '../actions/polls';

class PollFormConnect extends PureComponent {
  static propTypes = {
    prompt: PropTypes.string.isRequired,
    choice: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    choices: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
  }

  render() {
    return (
      <PollForm 
        prompt={this.props.prompt}
        choice={this.props.choice}
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
        onAdd={this.props.onAdd}
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
  onAdd() {
    dispatch(addChoice());
  },
  onChange({ target }) {
    const factoryMethod = {
      prompt: updatePrompt,
      choice: updateChoice
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(prompt, choice, event) {
    event.preventDefault();
    dispatch(createPoll({ prompt, choices: props.choices }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(PollFormConnect);
