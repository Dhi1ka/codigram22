import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Account from "./views/Users/Account";
import NotFound from "./views/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "./main.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<Account />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
