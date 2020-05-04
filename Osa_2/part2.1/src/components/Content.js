import React from 'react';
import Part from './Part';

export default function Content(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.course.name}</h2>
      {props.course.parts.map((item) => (
        <Part key={item.id} course={item} />
      ))}
    </div>
  );
}
