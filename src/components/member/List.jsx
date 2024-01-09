import React from 'react';

export default function List({ lists }) {
  return (
    <ul>
      {lists.map((obj, index) => {
        return <li key={obj.id}>{obj.name}</li>;
      })}
    </ul>
  );
}
