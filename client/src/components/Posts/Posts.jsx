import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../actions/posts";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts(posts));
  }, [dispatch]);

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="card mt-2">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p>{post.user}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
