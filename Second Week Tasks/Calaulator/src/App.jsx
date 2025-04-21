import { useState, useMemo } from "react";

// Expensive Fibonacci calculation
const calculateFibonacci = (n) => {
  console.log("Calculating...");
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const App = () => {
  const [number, setNumber] = useState(0);

  const fib = useMemo(() => calculateFibonacci(number), [number]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 to-indigo-600 p-4">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-xl text-white w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">📈 useMemo Fibonacci</h1>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="w-full p-3 rounded-xl text-black focus:ring-2 focus:ring-indigo-300 outline-none transition mb-4"
          placeholder="Enter a number"
          min="0"
        />

        <div className="text-lg">
          Fibonacci of <span className="font-semibold text-yellow-300">{number}</span> is:
          <p className="text-2xl mt-2 font-bold">{fib}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
