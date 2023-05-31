import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/home";
import Update from "./components/Update";
import Create from "./components/Create";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/update" Component={Update} />
          <Route exact path="/create" Component={Create} />
          <Route exact path="/read" Component={Search} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
