import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

const EditPost = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-2">Edit Post</h1>
        <form action="" className="form">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              name="body"
              id="body"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPost;
