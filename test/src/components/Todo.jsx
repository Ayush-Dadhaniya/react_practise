import React, { useState, useEffect } from 'react';

const Todo = () => {
  // Load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem("todos");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error loading todos from localStorage:", err);
      return [];
    }
  });

  const [todo, setTodo] = useState("");           // Input field
  const [isEditing, setIsEditing] = useState(null); // Index of task being edited
  const [editedTodo, setEditedTodo] = useState(""); // Value while editing

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo.trim()]);
      setTodo("");
    }
  };

  // Delete todo
  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  // Start editing
  const handleEdit = (index) => {
    setIsEditing(index);
    setEditedTodo(todos[index]);
  };

  // Save edited todo
  const handleSaveEdit = (index) => {
    const updated = [...todos];
    updated[index] = editedTodo.trim();
    setTodos(updated);
    setIsEditing(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-yellow-200 h-20">
        <nav className="p-4 justify-between bg-amber-100 flex flex-row">
          <div className="flex">
            <h1 className="cursor-pointer text-3xl font-bold">iTask</h1>
          </div>
          <ul className="flex gap-10 text-l p-2 flex-row">
            <li className="cursor-pointer transition-all hover:font-bold">Home</li>
            <li className="cursor-pointer transition-all hover:font-bold">Your Tasks</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="bg-violet-200 p-3 mx-5 rounded-2xl">
        {/* Add Task */}
        <h1 className="p-5 text-xl font-bold">Create Task</h1>
        <div>
          <input
            type="text"
            className="border-2 focus:outline-none rounded-lg p-2"
            placeholder="Task Name"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-400 border-0 p-2 rounded-lg ml-2"
          >
            Create
          </button>
        </div>

        {/* Task List */}
        <h1 className="p-5 text-xl font-bold">Your Tasks</h1>
        <div className="todos flex flex-col gap-4 p-5">
          {todos.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md"
            >
              {isEditing === index ? (
                <input
                  type="text"
                  className="border p-2 rounded-lg w-full mr-4"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
              ) : (
                <span className="flex-1">{task}</span>
              )}

              <div className="flex gap-2 ml-4">
                {isEditing === index ? (
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="bg-green-500 text-white font-bold p-2 rounded-lg"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white font-bold p-2 rounded-lg"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white font-bold p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
