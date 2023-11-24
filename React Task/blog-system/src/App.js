import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlogListing from "./BlogListing";
import { BrowserRouter } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import DetailsBlog from "./components/DetailsBlog";
import EditBlog from "./components/EditBlog";
function App() {
  return (
    <div className="App">
      <h1>Blog System CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogListing />}></Route>
          <Route path="/blog/create" element={<CreateBlog />}></Route>
          <Route path="/blog/detail/:blogid" element={<DetailsBlog />}></Route>
          <Route path="/blog/edit/:blogid" element={<EditBlog />}></Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
