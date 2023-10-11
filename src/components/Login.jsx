import React from "react";
import "./Login.css";
import MyForm from "./MyForm";

function Login() {
  return (
    <div className="container">
      <div className="left-half">
        <div className="heading">
          <h1>Discover new things on Superapp</h1>
        </div>
      </div>
      <div className="right-half">
        <div className="form">
          <h1>Super app</h1>
          <h3>Create your new account</h3>
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
