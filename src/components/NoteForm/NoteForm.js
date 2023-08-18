import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
import { actionsNote } from "../../redux/reducers/noteReducer";
import { nortificationSelector, resetNortification } from "../../redux/reducers/nortificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(nortificationSelector);

  if(message){
    setTimeout(() =>{
      dispatch(resetNortification());
    },2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionsNote.add(noteText));
    setNoteText("");
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
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
