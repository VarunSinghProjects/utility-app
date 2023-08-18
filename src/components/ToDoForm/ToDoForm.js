import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsTodo } from "../../redux/reducers/todoReducer";
import "./ToDoForm.css";
import { nortificationSelector, resetNortification } from "../../redux/reducers/nortificationReducer";


function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(nortificationSelector);

  if(message){
    setTimeout(()=>{
       disptach(resetNortification());
    },2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(actionsTodo.add(todoText));
  };

  return (
    <div className="container">
      {
        message && 
         <div className="alert alert-success" role="alert">
           {message}
         </div>
      }
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;