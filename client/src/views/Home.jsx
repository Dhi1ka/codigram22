import React from "react";

import Navbar from "../components/Navbar";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer";

const Home = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <div className="container">
        <Posts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
