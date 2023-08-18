import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { actionsNote, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
    const notes= useSelector(noteSelector);
    const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
                    onClick={()=> dispatch(actionsNote.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
