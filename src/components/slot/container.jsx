import React from "react";
import "./rollingSlot.css";

export default function SlotContainer({ names }) {
  return (
    <div className="slot-container">
      <ul className="slot">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
