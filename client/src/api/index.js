import axios from "axios";

const url = "http://localhost:5000/api";

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (result) => axios.post(`${url}/posts/create`, result);
