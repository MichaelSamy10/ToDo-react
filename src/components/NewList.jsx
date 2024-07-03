import { RiDeleteBin6Line } from "react-icons/ri";
import classes from "./NewList.module.css";
function NewList(props) {
  function removeListHandler(index) {
    const newList = [...props.todo];
    newList.splice(index, 1);
    props.setTodo(newList);
    console.log(newList);
  }

  function ItemDoneHandler(index) {
    const newList = [...props.todo];
    newList[index].completed = !newList[index].completed;
    props.setTodo(newList);
  }
  return (
    <div>
      {/* TODO List  */}
      <div className="p-5">
        <ul className="list-group">
          {props.todo.map((item, index) => {
            return (
              <div className=" border rounded-3 shadow-sm d-flex justify-content-between align-items-center m-2 bg-secondary-subtle">
                <li
                  key={index}
                  className={`list-unstyled cursor-text ps-3
                    ${item.completed ? classes.done : ""}
                    `}
                  onClick={() => ItemDoneHandler(index)}
                  style={{ cursor: "pointer" }}
                >
                  {item.input}
                </li>
                <button
                  href="#"
                  className="btn"
                  onClick={() => {
                    removeListHandler(index);
                  }}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewList;
