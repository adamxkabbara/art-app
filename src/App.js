import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { NavItems } from "./components/Navbar/nav-data.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {NavItems.map((item) => {
          return <Route path={item.url} element={item.component}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default App;
