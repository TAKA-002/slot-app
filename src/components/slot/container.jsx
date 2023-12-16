import React from "react";

export default function SlotContainer({ names }) {
  return (
    <div className="w-40 overflow-hidden whitespace-nowrap">
      <ul className="list-none p-0 m-0 animate-roll infinite">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
