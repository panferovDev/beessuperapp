import axios from 'axios';
import React, { useState } from 'react';
import PostCard from './PostCard';
import PostForm from './PostForm';

function PostPage({ currentUser, allPosts }) {
  const [currentPosts, setCurrentPosts] = useState(allPosts || []);

  const deleteHandler = (id) => {
    axios.delete(`/api/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setCurrentPosts((prev) => prev.filter((el) => el.id !== id));
        }
      });
  };

  const changePostHandler = ({ id, title, body }) => {
    axios.patch(`/api/${id}`, { id, title, body })
      .then((res) => {
        if (res.status === 200) {
          setCurrentPosts((prev) => {
            prev.map((el) => {
              if (el.id !== id) return el;
              return { ...el, title, body };
            });
          });
        }
      });
  };
  return (
    <>
      <h3>add new post</h3>
      {currentUser && <PostForm setCurrentPosts={setCurrentPosts} />}
      <div className="row mt-5">
        {currentPosts.map((el) => (
          <PostCard
            key={el.id}
            card={el}
            currentUser={currentUser}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}

export default PostPage;
