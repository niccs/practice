import React from "react";

import Note from "./Note";

const NotesList = ({ notes, dispatch }) => {
  console.log("notes", notes);

  const renderNotes = notes.map((note, idx) => {
    return <Note key={idx} note={note} dispatch={dispatch} />;
  });

  return <div>{renderNotes}</div>;
};

export default NotesList;
