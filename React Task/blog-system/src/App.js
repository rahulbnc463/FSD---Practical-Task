import "./App.css";
import Authroute from "./Router/Authroute";
function App() {
  return (
    <div className="App">
      <h1
        style={{
          marginTop: "2rem",
          marginBottom: "1.5rem",
        }}
      >
        Blog System CRUD
      </h1>
      <Authroute />;
    </div>
  );
}

export default App;
