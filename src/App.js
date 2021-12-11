import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { NavItems } from "./components/Navbar/nav-data.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="art-gallery-body">
      <Navbar />
      <Routes>
        {NavItems.map((item, index) => {
          return <Route path={item.url} element={item.component} key={index}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default App;
