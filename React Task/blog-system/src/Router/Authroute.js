import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogListing from "../BlogListing";
import CreateBlog from "../components/CreateBlog";
import DetailsBlog from "../components/DetailsBlog";
import EditBlog from "../components/EditBlog";

const Authroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogListing />}></Route>
        <Route path="/blog/create" element={<CreateBlog />}></Route>
        <Route path="/blog/detail/:blogid" element={<DetailsBlog />}></Route>
        <Route path="/blog/edit/:blogid" element={<EditBlog />}></Route>
      </Routes>
    </div>
  );
};

export default Authroute;
