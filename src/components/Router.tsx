import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import Login from "pages/login";
import SignUp from "pages/signup";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
        <Route path="/posts/new" element={<PostNew />}></Route>
        <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </>
  );
}
