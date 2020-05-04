import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Course({ courses }) {
  return (
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
    </div>
  );
}
