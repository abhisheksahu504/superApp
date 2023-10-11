import React, { useState } from "react";
import "./my-form.css";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form data in the `formData` object
    console.log("Form data submitted:", formData);
    // You can also send this data to an API or perform other actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="input-box"
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          className="input-box"
          placeholder="userName"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          className="input-box"
          placeholder="Email "
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          className="input-box"
          placeholder="Mobile No."
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
      </div>
      <p>
        <input type="checkbox" name="share" id="share" />
        Share my registration data with Superapp
      </p>

      <button type="submit">Sign Up</button>
      <p>
        By clicking on Sign up. you agree to Superapp{" "}
        <a href="#">Terms and Conditions of Use</a>
      </p>
      <p>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp <a href="#">Privacy Policy</a>
      </p>
    </form>
  );
}

export default MyForm;
