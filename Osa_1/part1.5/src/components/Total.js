import React from 'react';

export default function Total(props) {
  return (
    <div>
      Number of exercises{' '}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </div>
  );
}
