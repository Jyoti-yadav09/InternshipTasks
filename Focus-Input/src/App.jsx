import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300 from-teal-400 via-indigo-400 to-purple-500 p-4">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-xl w-full max-w-md text-white text-center">
        <h1 className="text-3xl font-bold mb-6"> Focus Input App</h1>

        <input
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus me!"
          className="w-full px-4 py-3 rounded-xl text-black focus:ring-2 focus:ring-indigo-300 outline-none transition mb-4"
        />

        <button
          onClick={handleFocus}
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-purple-100 transition-all duration-300"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default App;
