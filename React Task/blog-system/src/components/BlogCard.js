import React from "react";

const BlogCard = ({ id, title, userName, date, description, image }) => {
  return (
    <div
      className="card mb-4"
      style={{
        margin: "auto",
        width: "80%",
        maxWidth: "100%",
        maxHeight: "80%",
        backgroundColor: "#ffff",
        minHeight: "100px",
        objectFit: "cover",
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          margin: "auto",
          maxWidth: "100%",
          minHeight: "100px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">User: {userName}</li>
          <li className="list-group-item">Date: {date}</li>
        </ul>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
