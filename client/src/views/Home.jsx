import React from "react";

import Navbar from "../components/Navbar";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
