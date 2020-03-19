import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = props => {
  return <button onClick={props.handleClicks}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Statistics = props => {
  const totalFeedback = props.good + props.bad + props.neutral;
  const average = (props.good + props.bad * -1) / totalFeedback;
  const positive = (props.good / totalFeedback) * 100 + '%';

  if (totalFeedback === 0) {
    return 'No feedback given';
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Statistic text="good" value={props.good} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic text="bad" value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic text="neutral" value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic text="all" value={totalFeedback} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic text="average" value={average} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic text="positive" value={positive} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutalClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClicks={handleGoodClick} text="good" />
      <Button handleClicks={handleNeutalClick} text="neutral" />
      <Button handleClicks={handleBadClick} text="bad" />
      <h3>statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
