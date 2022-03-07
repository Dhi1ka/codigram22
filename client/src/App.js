import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Account from "./views/Users/Account";
import NotFound from "./views/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CreatePost from "./components/Posts/CreatePost";
import EditPost from "./components/Posts/EditPost";
import PostDetail from "./components/Posts/PostDetail";
import "./main.css";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/posts/detail/:id" element={<PostDetail />} />
      <Route path="/posts/create" element={<CreatePost />} />
      <Route path="/posts/edit/:id" element={<EditPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<Account />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
