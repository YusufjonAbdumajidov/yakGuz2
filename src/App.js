
import React from "react";
import "./style.scss";
import { Routes, Route } from "react-router-dom";
import Malumotlar from "./Components/Malumotlar";
import Home from "./Components/Home";
import Qabul from "./Components/Qabul";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/qabul" element={<Qabul />} />

        <Route path="/malumotlar" element={<Malumotlar/>} />
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
