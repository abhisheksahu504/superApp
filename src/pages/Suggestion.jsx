import React from "react";
import { List } from "../components/List";

export const Suggestion = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
        }}
      >
        <div className="container suggestion-head">
          <h1 className="super-logo">SuperApp</h1>
          <img
            src="/userLogo.png"
            width={60}
            height={60}
            className="userLogo"
            alt="Logo of user"
          />
        </div>
        <div className="container">
          <h1>Entertainment according to your choice</h1>
        </div>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}
      </div>
    </>
  );
};
