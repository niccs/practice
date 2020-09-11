import React, { useEffect, useReducer } from "react";
import NotesList from "./NotesList";
import NotesAddForm from "./NotesAddForm";
import NotesReducer from "./reducers/NotesReducer";
import { NotesService } from "./services/NotesServiceWithFetch";

const NotesApp = ({ initialCount }) => {
  const [notes, dispatch] = useReducer(NotesReducer, []);
  // const [notes, setNotes] = useState([]);
  // const [count, setCount] = useState(initialCount);
  // if (initialCount !== count) setCount(initialCount);

  useEffect(() => {
    let apiEndpoint = "notes/";

    const getNotes = async () => {
      const data = await NotesService.getNotes(apiEndpoint);
      console.log(data);
      dispatch({ type: "GET_NOTES", notes: data });
    };

    getNotes();
  }, []);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <p> The count is {count}</p> */}

      <NotesList notes={notes} dispatch={dispatch} />
      <NotesAddForm dispatch={dispatch} />
    </div>
  );
};

NotesApp.defaultProps = {
  initialCount: 10,
};

export default NotesApp;
