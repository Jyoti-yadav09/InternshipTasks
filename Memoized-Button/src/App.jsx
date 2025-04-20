import { useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-400 from-pink-400 to-indigo-500 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center text-white w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Memoized Click Handler</h1>
        <p className="text-xl mb-6">Count: <span className="font-bold text-yellow-300">{count}</span></p>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleClick}
            className="bg-white text-indigo-700 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition"
          >
            Button 1
          </button>
          <button
            onClick={handleClick}
            className="bg-white text-indigo-700 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition"
          >
            Button 2
          </button>
          <button
            onClick={handleClick}
            className="bg-white text-indigo-700 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition"
          >
            Button 3
          </button>
          <button
            onClick={handleClick}
            className="bg-white text-indigo-700 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition"
          >
            Button 4
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
