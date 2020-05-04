import React from 'react';
import Part from './Part';
import Total from './Total';

export default function Content(props) {
  return (
    <div>
      <h2>{props.courses[0].name}</h2>
      {props.courses[0].parts.map((item) => (
        <Part key={item.id} courses={item} />
      ))}
      <Total courses={props.courses[0]} />
      <h2>{props.courses[1].name}</h2>
      {props.courses[1].parts.map((item) => (
        <Part key={item.id} courses={item} />
      ))}
      <Total courses={props.courses[1]} />
    </div>
  );
}
