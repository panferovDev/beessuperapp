import React, { useState } from 'react';

export default function PostCard({ card, currentUser, deleteHandler }) {
  const [change, setChange] = useState(false);

  const [cardState, setCardState] = useState({ title: card.title, body: card.body });

  const changeHandler = (e) => {
    setCardState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="col-4 mt-1">
      <div className="card">
        <div className="card-body">

          {change
            ? (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    value={cardState.title}
                    name="title"
                    onChange={changeHandler}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="body"
                    onChange={changeHandler}
                    value={cardState.body}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </>
            )
            : (
              <>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.body}</p>
              </>
            )}
          {currentUser && currentUser.id === card.user_id
          && (
          <>
            <button
              onClick={() => deleteHandler(card.id)}
              type="button"
              className="btn btn-dark card-link"
            >
              Delete
            </button>
            <button
              onClick={() => setChange((prev) => !prev)}
              type="button"
              className="btn btn-warning card-link"
            >
              Change
            </button>
            {change
            && (
            <button
              onClick={() => setChange((prev) => !prev)}
              type="button"
              className="btn btn-warning card-link"
            >
              save
            </button>
            )}
          </>
          )}
        </div>
      </div>
    </div>
  );
}
