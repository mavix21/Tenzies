import { useState } from 'react';

export function Dice({ value, isHeld, id, onClick: handleClick }) {
  return (
    <button
      key={value}
      className={`rounded-md aspect-square p-2 w-full max-w-16 shadow-md cursor-pointer ${isHeld && 'bg-green-300'}`}
      onMouseDown={() => {
        handleClick(id);
        // return setHeld((held) => !held);
      }}
    >
      <span className="text-2xl font-bold">{value}</span>
    </button>
  );
}
