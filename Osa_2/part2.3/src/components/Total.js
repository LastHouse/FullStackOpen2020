import React from 'react';

export default function Total(props) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const exercises = props.course.parts.map((item) => item.exercises);

  const total = exercises.reduce(reducer);

  return (
    <div>
      <b> Total of {total} exercises </b>
    </div>
  );
}
