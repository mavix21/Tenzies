export function Dice({ value, isHeld, id, onClick: handleClick }) {
  return (
    <button
      key={value}
      className={`rounded-md aspect-square p-2 w-full max-w-16 shadow-md cursor-pointer ${isHeld && 'bg-green-300'}`}
      onMouseDown={() => {
        handleClick(id);
      }}
      aria-label={`Die with value ${value}, ${isHeld ? 'held' : 'not held'}`}
      aria-pressed={isHeld}
    >
      <span className="text-2xl font-bold">{value}</span>
    </button>
  );
}
