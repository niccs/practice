const URL = "http://localhost:3000/";

const getNotes = async (apiEndPoint) => {
  const res = await fetch(URL + apiEndPoint, { method: "GET" });
  return await res.json();
};

const addNote = async (apiEndpoint, payload) => {
  const res = await fetch(URL + apiEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

const removeNote = async (apiEndPoint) => {
  return await fetch(URL + apiEndPoint);
};

const getOptions = () => {
  let options = {};
  if (localStorage.getItem("token")) {
    options.headers = { "x-access-token": localStorage.getItem("token") };
  }

  return options;
};

export const NotesService = {
  getNotes,
  addNote,
  removeNote,
};
