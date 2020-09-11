import React, { useState } from "react";
import { NotesService } from "./services/NotesServiceWithFetch";

const NotesAddForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const addNoteHandler = async () => {
    let payload = { title, text: noteText };
    let apiEndpoint = "notes/";
    let data = await NotesService.addNote(apiEndpoint, payload);
    console.log("addresult is    ", data);
    setTitle("");
    setNoteText("");
    dispatch({ type: "ADD_NOTE", note: data });
  };
  return (
    <div>
      <label>Enter the title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <button onClick={addNoteHandler}>Add Note</button>
    </div>
  );
};

export default NotesAddForm;
