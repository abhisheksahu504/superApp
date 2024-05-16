import "./App.css";
import Login from "./components/Login";
// import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import { Browse } from "./pages/Browse.jsx";
import { Suggestion } from "./pages/Suggestion.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
    </Router>
  );
}

export default App;
