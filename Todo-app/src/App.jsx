import { useReducer, useState } from "react";

// Reducer Function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">📝 Todo List</h1>

        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-indigo-50 px-4 py-2 rounded-lg"
            >
              <span
                onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>

        {todos.length > 0 && (
          <button
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
            className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
