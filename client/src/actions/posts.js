import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = (result) => async (dispatch) => {
  try {
    const { data } = await api.createPost(result);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.error(error);
  }
};
