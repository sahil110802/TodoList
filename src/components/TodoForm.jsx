import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState([]);
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write todo..."
        className="w-full border-black/10 rounded-l-lg px-3 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg bg-green-400 shrink-0">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
