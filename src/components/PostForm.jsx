import axios from 'axios';
import React from 'react';

export default function PostForm({ setCurrentPosts }) {
  const submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    if (data.title.trim() && data.body.trim()) {
      axios.post('/api/', data)
        .then((res) => {
          setCurrentPosts((prev) => [...prev,
            {
              id: res.data.id, title: data.title, body: data.body, user_id: res.data.user_id,
            },
          ]);
          e.target.reset();
        });
    }
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Body</label>
            <input
              name="body"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-success">Success</button>
        </form>
      </div>
    </div>
  );
}
