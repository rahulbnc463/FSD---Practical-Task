import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "./BlogCard";

const DetailsBlog = () => {
  const { blogid } = useParams();
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);

  // ..................................geting data
  useEffect(() => {
    fetch("http://localhost:8000/blogs/" + blogid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        setBlogData(resp);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [blogid]);

  return (
    <div
      className="card"
      style={{
        width: "35rem",
        margin: "auto",
        padding: "2em",
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BlogCard
          id={blogData.id}
          title={blogData.title}
          userName={blogData.userName}
          date={blogData.date}
          description={blogData.description}
          image={blogData.image}
        />
      )}
      <Link className="btn btn-danger card-img-wrapper" to="/">
        Back to MainPage
      </Link>
    </div>
  );
};

export default DetailsBlog;
