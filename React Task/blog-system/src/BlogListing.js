import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogListing = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setBlogData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Blog Listing</h2>
        </div>
        <div className="card-body">
          <div>
            <Link className="btn btn-success">Add More Blogs (+)</Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td className="text-white bg-dark">ID</td>
                <td className="text-white bg-dark">Title</td>
                <td className="text-white bg-dark">UserName</td>
                <td className="text-white bg-dark">Date</td>
                <td className="text-white bg-dark">Description</td>
                <td className="text-white bg-dark">Image</td>
                <td className="text-white bg-dark">Action</td>
              </tr>
            </thead>
            <tbody>
              {blogData &&
                blogData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.username}</td>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    </td>
                    <td>
                      <a className="btn btn-success">Edit</a>
                      <a className="btn btn-danger">Remove</a>
                      <a className="btn btn-primary">Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
