import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const App = () => {
  const [anecdote, setAnecdote] = useState(anecdotes.map((item) => item));

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(
    Array.apply(null, { length: anecdotes.length }).map(function () {
      return 0;
    })
  );

  function toggleAnecdote() {
    let result = anecdote[Math.floor(Math.random() * anecdote.length)];
    let show = anecdote.indexOf(result);
    setSelected(show);
  }

  const handleClick = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      {anecdote[selected]}
      <br></br>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleClick}>Vote</button>
      <button onClick={toggleAnecdote}>Next anecdote</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
