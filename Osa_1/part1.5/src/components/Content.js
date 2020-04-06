import React from 'react';
import Part from './Part';

export default function Content(props) {
  console.log(props);
  return (
    <div>
      <Part course={props.course.parts[0]} />
      <Part course={props.course.parts[1]} />
      <Part course={props.course.parts[2]} />
    </div>
  );
}
