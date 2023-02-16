import React from 'react';

export default function AppNavBar({ currentUser, setCurrentUser }) {
  const logoutHandler = () => {
    fetch('/api/auth/logout', { method: 'POST' })
      .then((response) => {
        if (response.ok) {
          setCurrentUser(null);
        }
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/post">Posts</a>
            </li>
          </ul>
        </div>
        {currentUser
          ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">
                  Hello,
                  {' '}
                  {currentUser.name}
                </span>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  onClick={logoutHandler}
                  className="btn btn-warning nav-link"
                >
                  logout
                </button>
              </li>
            </ul>
          )
          : (
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/signup">SignUp</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/signin">Signin</a>
                </li>
              </ul>
            </div>
          )}
      </div>
    </nav>
  );
}
