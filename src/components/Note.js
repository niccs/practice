import React from "react";
import { NotesService } from "./services/NotesServiceWithFetch";
const Note = ({ note, dispatch }) => {
  const onRemove = async (id) => {
    console.log("Note to be removed", id);

    let apiEndpoint = "notes/" + id;
    await NotesService.removeNote(apiEndpoint);
    dispatch({ type: "REMOVE_NOTE", id });
  };
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.note}</p>
      <button onClick={() => onRemove(note.id)}> Remove</button>
    </div>
  );
};

export default Note;
