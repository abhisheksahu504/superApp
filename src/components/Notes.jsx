import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
export const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div className="notes-container">
      <p style={{ fontSize: "2rem" }}>All Notes</p>
      <textarea
        style={{
          background: "transparent",
          border: "none",
          height: "44vh",
          width: "30vw",
          outline: 0,
          margin: "auto",
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <FaPen
        style={{
          height: "30px",
          width: "30px",
          position: "absolute",
          bottom: "17px",
          right: "10px",
          backgroundColor: "black",
          borderRadius: "50%",
          color: "white",
          padding: "10px",
        }}
      />
    </div>
  );
};
