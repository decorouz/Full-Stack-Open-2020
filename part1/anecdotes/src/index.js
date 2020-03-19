import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const MaxVote = props => {
  const maxVote = Math.max(...props.vote);
  const indexofmaxVote = props.vote.indexOf(maxVote);

  if (maxVote === 0) {
    return 'The votes are not in yet. Be the first to vote';
  }

  return (
    <div>
      {props.anecdote[indexofmaxVote]}
      <br /> has {maxVote} votes
    </div>
  );
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));

  const randNumber = Math.floor(Math.random() * anecdotes.length);

  const handleRandomAnecdote = () => setSelected(randNumber);

  const handleVoting = () => {
    const copy = [...votes];
    copy[selected] += 1;

    return setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVoting} text="vote" />
      <Button handleClick={handleRandomAnecdote} text="next anecdote" />
      <h3>anecdote with the most votes</h3>
      <MaxVote anecdote={props.anecdotes} vote={votes} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
