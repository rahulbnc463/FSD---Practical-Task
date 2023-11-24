import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const { blogid } = useParams();

  // ..................................geting data
  useEffect(() => {
    fetch("http://localhost:8000/blogs/" + blogid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setTitle(resp.title);
        setUserName(resp.userName);
        setDate(resp.date);
        setDescription(resp.description);
        setImage(resp.image);
        setActive(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
        // setLoading(false);
      });
  }, [blogid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ id, title, userName, date, description, image, active });
    const blogData = { id, title, userName, date, description, image, active };

    // .............fetch all data to JSON
    fetch("http://localhost:8000/blogs/" + blogid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blogData),
    })
      .then((res) => {
        alert("Blog Created Successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Edit Existing Blog</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  {/* ..................For ID  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For Title  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For username  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>UserName</label>
                      <input
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For Date  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For Description  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For Image  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For CheckBox  */}
                  <div className="col-lg-12">
                    <div className="form-check">
                      <label className="form-check-label">Is Active</label>
                      <input
                        type="checkbox"
                        value={active}
                        onChange={(e) => setActive(e.target.value)}
                        className="form-check-input"
                      ></input>
                    </div>
                  </div>
                  {/* ..................For Save  */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
