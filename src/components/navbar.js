import React from 'react';

export default function Navbar({ list }) {
  return (
    <nav>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}