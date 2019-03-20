import React from 'react';
import PropTypes from 'prop-types';
import Choice from './Choice';

function Results({ results }) {
  const { prompt, voteTotals } = results;
  const resultsList = voteTotals.map((option, i) => {
    return <Choice key={i} total={option.total} choice={option.choice} />;
  });
  return (
    <section>
      <h1>{prompt}</h1>
      <ul>
        {resultsList}
      </ul>
    </section>
  );
}

Results.propTypes = {
  results: PropTypes.object.isRequired
};

export default Results;
