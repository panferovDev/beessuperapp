import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppNavBar from './AppNavBar';
import MainPage from './MainPage';
import PostPage from './PostPage';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function App({ user, allPosts }) {
  const [currentUser, setCurrentUser] = useState(user || null);

  return (
    <div className="container">
      <AppNavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<PostPage currentUser={currentUser} allPosts={allPosts} />} />
        <Route path="/auth/signup" element={<SignUpForm />} />
        <Route path="/auth/signin" element={<SignInForm />} />
      </Routes>
    </div>
  );
}
