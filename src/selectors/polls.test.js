import { getPrompt, getChoices, getPolls } from './polls';

describe('polls selector', () => {
  let state = {
    polls: {
      prompt: 'Are you okay?',
      choices: ['yes', 'no', 'idk'],
      polls: [{ 
        prompt: 'Are you okay?', 
        choices: ['yes', 'no', 'idk'] 
      }]
    }
  };
  it('can get a prompt from state', () => {
    const prompt = getPrompt(state);
    expect(prompt).toEqual('Are you okay?');
  });
  it('can get choices from state', () => {
    const choices = getChoices(state);
    expect(choices).toEqual(['yes', 'no', 'idk']);
  });
  it('can get polls from state', () => {
    const polls = getPolls(state);
    expect(polls).toEqual([{ 
      prompt: 'Are you okay?', 
      choices: ['yes', 'no', 'idk'] 
    }]);
  });
});
