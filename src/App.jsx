import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (todo == "") return;
    const newState = [...todos, todo];
    setTodos(newState);
    setTodo("");
  };

  const deleteAll = () => setTodos([]);

  // Side Effects
  // LocalStorage
  useEffect(
    () => setTodos(JSON.parse(localStorage.getItem("todos") || [])),
    []
  );

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  return (
    <div className="App">
      <ul className="lista-tareas">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button className="btn-submit" type="submit">submit</button>
      </form>
      <button className="btn-delete" onClick={deleteAll}>Delete all</button>
    </div>
  );
};

export default App;