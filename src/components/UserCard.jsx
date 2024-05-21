import React from "react";
import Chips from "../global/Chips";

export const UserCard = () => {
  const info = JSON.parse(window.localStorage.getItem("userData"));
  const genre = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <>
      <section className=" user-card-container">
        <img
          src="/userCardlogo.png"
          style={{ height: "32vh", width: "10vw" }}
          alt="users logo"
        />
        <div>
          <h1>{info.name}</h1>
          <h1>{info.email}</h1>
          <h1>{info.username}</h1>
          <Chips categories={genre} color={"#9F94FF"} />
        </div>
      </section>
    </>
  );
};
