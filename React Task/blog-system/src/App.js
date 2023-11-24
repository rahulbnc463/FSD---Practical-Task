import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlogListing from "./BlogListing";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Blog System CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogListing />}></Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
