import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const todoList = () => {
    let newTodo = {
      id: todos.length === 0 ? todos.length : todos[todos.length - 1].id + 1,
      title,
      content,
      isDone,
    };
    if (title === "") {
      alert("제목을 입력해주세요.");
    } else if (content === "") {
      alert("내용을 입력해주세요.");
    } else {
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
      setIsDone(false);
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
        <button onClick={todoList}>추가하기</button>
      </div>
      <div className="WorkingBox">
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
      </div>
      <div className="DoneBox">
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
    </div>
  );
}

export default App;
