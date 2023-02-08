import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Router/Home";
import Detail from "./Router/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/:id" element={<Detail></Detail>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
