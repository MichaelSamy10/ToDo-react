import NewList from "./NewList";
import { useRef, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();

  function addTodoHandler() {
    const input = inputRef.current.value;
    const newItem = { completed: false, input };
    if (input != "") {
      setTodo([...todo, newItem]);
    }
    inputRef.current.value = "";
  }

  return (
    <div>
      <div className=" m-5">
        <h2>To Do List</h2>
        <div className="bg-secondary-subtle container border border-black rounded w-50">
          <div className="row m-5">
            <div className="input-group">
              <span className="input-group-text">
                <IoDocumentTextOutline />
              </span>
              <input
                type="text"
                placeholder="Enter item..."
                className="form-control"
                ref={inputRef}
              />
              <span className="btn btn-primary" onClick={addTodoHandler}>
                Add
              </span>
            </div>

            <NewList todo={todo} setTodo={setTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
