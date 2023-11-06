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
  
  // 매번 리스트에 작성되어지는 요소를 모아서 컨포넌트화했다.


   const handleToggleTodoStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };           
  
  // handleToggleTodoStatus 함수를 통해 각각의 todoList들을 완료하거나 취소할 수 있게 했다.
