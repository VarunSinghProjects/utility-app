import { useSelector, useDispatch } from "react-redux";
import { actionsTodo, todoSelector } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() =>{
    // axios.get("http://localhost:4100/api/todos")
    //   .then(res =>{
    //     console.log(res.data);
    //     disptach(actionsTodo.setInitialState(res.data));
    //   });


    fetch("http://localhost:4100/api/todos")
     .then(res => res.json())
       .then(parsedJson =>{
        console.log(parsedJson);
        disptach(actionsTodo.setInitialState(parsedJson));
       })
  }, []);

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actionsTodo.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;