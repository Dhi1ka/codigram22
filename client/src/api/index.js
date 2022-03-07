import axios from "axios";

const url = "http://localhost:5000/api";

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (result) => axios.post(`${url}/posts/create`, result);
export const updatePost = (id, result) =>
  axios.put(`${url}/posts/edit/${id}`, result);
export const deletePost = (id) => axios.delete(`${url}/posts/delete/${id}`);
