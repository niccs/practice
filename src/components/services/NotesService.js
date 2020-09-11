import axios from "axios";

const URL = "http://localhost:3000/";

const getNotes = async (apiEndPoint) => {
  const res = await axios.get(URL + apiEndPoint);
  return res.data;
};

const addNote = async (apiEndpoint, payload) => {
  const res = await axios.post(URL + apiEndpoint, payload, getOptions());

  return res.data;
};

const removeNote = (apiEndPoint) => {
  return axios.delete(URL + apiEndPoint, getOptions());
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
