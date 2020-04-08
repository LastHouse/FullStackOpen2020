import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/* const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
}; */

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good * 1 + props.bad * -1) / total;
  const positive = (props.good / total) * 100;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{'good'}</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>{'neutral'}</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>{'bad'}</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>{'all'}</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>{'average'}</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>{'positive'}</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>{'good'}</td>
            <td>{positive + ' %'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>

      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
