import React from 'react';

export default function Part(props) {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
}
