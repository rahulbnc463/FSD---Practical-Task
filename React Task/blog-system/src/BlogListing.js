import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogListing = () => {
  const [blogData, setBlogData] = useState(null);
  const navigate = useNavigate();

  // ...........................3 major Function for EDIT, REMOVE & DETAILS
  const handleEdit = (id) => {
    navigate("/blog/edit/" + id);
  };

  const handleRemove = (id) => {
    if (window.confirm("Do you want to remove?")) {
      // .............fetch all data to JSON
      fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleDetails = (id) => {
    navigate("/blog/detail/" + id);
  };

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
      <div
        className="card"
        style={{
          boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div className="card-title">
          <h2>Blog Listing</h2>
        </div>
        <div
          className="card-body"
          style={{
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
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
                    <td>{item.userName}</td>
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
                      <a
                        href="#"
                        onClick={() => {
                          handleEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          handleDetails(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="divbtn">
            <Link to="/blog/create" className="btn btn-success">
              Add More Blogs (+)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
