import React from 'react';

export default function Part(props) {
  return (
    <div>
      <p>
        {props.courses.name} {props.courses.exercises}
      </p>
    </div>
  );
}
