import React, { useContext } from "react";
import NotesContext from "./contexts/NotesContext";

import Note from "./Note";

const NotesList = ({ dispatch }) => {
  const { notes } = useContext(NotesContext);
  console.log("notes", notes);

  const renderNotes = notes.map((note, idx) => {
    return <Note key={idx} note={note} />;
  });

  return <div>{renderNotes}</div>;
};

export default NotesList;
