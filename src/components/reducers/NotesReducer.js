const NotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return state.concat(action.note);
    case "REMOVE_NOTE":
      return state.filter((note) => note.id !== action.id);
    case "GET_NOTES":
      return action.notes;
    default:
      return state;
  }
};

export default NotesReducer;
