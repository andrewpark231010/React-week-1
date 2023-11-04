import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [divide, setDivide] = useState(1);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddTodo = () => {
    if (title && content) {
      const newTodo = {
        id: divide,
        title,
        content,
        isDone,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
      setIsDone(false);
      setDivide(divide + 1);
    }
  };

  const handleToggleTodoStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };

  const DeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="topTitle">
        <h2>My Todo List</h2>
      </div>
      <div className="container">
        <div className="group">
          <label className="title">제목:</label>
          <input
            className="box"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="group">
          <label className="content">내용:</label>
          <input
            className="box"
            type="text"
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <button onClick={handleAddTodo}>추가하기</button>
      </div>
      <div className="Working">
        <h2>Working</h2>
      </div>
      <div className="container1">
        {todos.map((todo, index) =>
          !todo.isDone ? (
            <div key={index} className="todo">
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <button onClick={() => handleToggleTodoStatus(index)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => DeleteTodo(index)}>삭제</button>
            </div>
          ) : null
        )}
      </div>
      <div className="Done">
        <h2>Done</h2>
      </div>
      <div className="container2">
        {todos.map((todo, index) =>
          todo.isDone ? (
            <div key={index} className="todo">
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <button onClick={() => handleToggleTodoStatus(index)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => DeleteTodo(index)}>삭제</button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
