import React, { useState } from "react";
import "./my-form.css";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    const newErrors = {};

    if (formData.username === "") {
      newErrors.username = "Username is required";
    }

    if (formData.email === "") {
      newErrors.email = "Email is required";
    }
    if (formData.name === "") {
      newErrors.name = "Name is required";
    }

    if (formData.mobile === "") {
      newErrors.mobile = "Phone is required";
    }
    if (formData.mobile === "") {
      newErrors.check = "Check this box if you want to proceed";
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set them in state
      setErrors(newErrors);
    } else {
      // Submit the form if there are no errors
      // Your form submission logic here
    }
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
        {errors.name && <div className="error-message">{errors.name}</div>}
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
        {errors.username && (
          <div className="error-message">{errors.username}</div>
        )}
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
        {errors.email && <div className="error-message">{errors.email}</div>}
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
        {errors.mobile && <div className="error-message">{errors.mobile}</div>}
      </div>
      <p>
        <input
          type="checkbox"
          name="share"
          id="share"
          value={formData.check}
          onChange={handleInputChange}
        />
        Share my registration data with Superapp
      </p>
      {errors.check && <div className="error-message">{errors.check}</div>}

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
