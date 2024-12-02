import './App.css';

function App() {
  return (
    <div className="h-svh bg-[#0B2434] p-6 flex flex-col justify-center items-center">
      <section className="bg-[#F5F5F5] space-y-4 p-4 text-center rounded-xl w-full max-w-[32rem] h-full max-h-[32rem]">
        <h1 className="text-4xl font-semibold">Tenzies</h1>
        <p className="">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-5 grid-rows-2 items-center gap-4">
          {[...Array(10).keys()].map((value) => (
            <button
              key={value}
              className="rounded-md aspect-square p-2 max-w-16 shadow-md"
            >
              <span className="text-xl font-bold">{value}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
