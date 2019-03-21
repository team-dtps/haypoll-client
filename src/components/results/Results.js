import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

function Results({ results }) {
  const { prompt, voteTotals } = results;
  const choices = voteTotals.map(result => result.choice);
  const totals = voteTotals.map(result => result.total);

  const data = {
    labels: [...choices],
    datasets: [{
      label: prompt,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [...totals]
    }]
  };

  return (
    <section>
      <HorizontalBar data={data}/>
    </section>
  );
}

Results.propTypes = {
  results: PropTypes.object.isRequired
};

export default Results;
