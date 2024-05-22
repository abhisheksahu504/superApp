import React from "react";

export const Suggestion = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <>
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
    </>
  );
};
