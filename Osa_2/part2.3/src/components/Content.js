import React from 'react';
import Part from './Part';
import Total from './Total';

export default function Content(props) {
  return (
    <div>
      <h2>{props.course.name}</h2>
      {props.course.parts.map((item) => (
        <Part key={item.id} course={item} />
      ))}
      <Total course={props.course} />
    </div>
  );
}
