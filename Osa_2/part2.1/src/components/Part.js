import React from 'react';

export default function Part(props) {
  return (
    <div>
      <p>
        {props.course.name} {props.course.exercises}
      </p>
    </div>
  );
}
