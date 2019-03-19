export const postPoll =  poll => {
  const { prompt, choices, creator } = poll;
  return Promise.all([
    { prompt, choices, creator }
  ]);
};
