import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const { data } = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: data });
  };
};
