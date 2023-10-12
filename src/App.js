import React from "react";
import "./style.scss";
import { Routes, Route } from "react-router-dom";
import Malumotlar from "./Components/Malumotlar";
import Home from "./Components/Home";
import Qabul from "./Components/Qabul";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/qabul" element={<Qabul />} />

        <Route path="/malumotlar" element={<Malumotlar/>} />
      </Routes>
    </div>
  );
}

export default App;
