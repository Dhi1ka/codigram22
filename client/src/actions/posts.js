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

export const updatePost = (id, result) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, result);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const likePost = (id) => async (dispatch) => {};
