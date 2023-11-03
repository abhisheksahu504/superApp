import "./App.css";
import Login from "./components/Login";
// import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
