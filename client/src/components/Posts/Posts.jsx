import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";

import { deletePost, getPosts } from "../../actions/posts";

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
          <div className="card mt-3" key={post.id}>
            <img src={post.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p>{post.user}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <Link
                to={`/posts/detail/${post.id}`}
                className="btn btn-sm btn-transparent"
              >
                <BsFillEyeFill />
              </Link>
              <Link
                to={`/posts/edit/${post.id}`}
                className="btn btn-sm btn-transparent"
              >
                <BiEdit />
              </Link>
              <button
                onClick={() => dispatch(deletePost(post.id))}
                className="btn btn-sm btn-transparent"
              >
                <BiTrash />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
