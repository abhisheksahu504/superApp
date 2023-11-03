import React, { useState } from "react";

const CategorySelection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      // If the category is already selected, deselect it
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // If the category is not selected, select it
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = () => {
    if (selectedCategories.length < 3) {
      setError("Please select at least 3 categories.");
    } else {
      setError("");
      // Perform further actions or submit the selected categories
    }
  };

  return (
    <div className="category-selection">
      <div className="category-list">
        <ul>
          <li
            onClick={() => handleCategorySelect("Category 1")}
            className={
              selectedCategories.includes("Category 1") ? "selected" : ""
            }
          >
            Category 1
          </li>
          <li
            onClick={() => handleCategorySelect("Category 2")}
            className={
              selectedCategories.includes("Category 2") ? "selected" : ""
            }
          >
            Category 2
          </li>
          <li
            onClick={() => handleCategorySelect("Category 3")}
            className={
              selectedCategories.includes("Category 3") ? "selected" : ""
            }
          >
            Category 3
          </li>
          {/* Add the rest of your categories */}
        </ul>
      </div>

      <div className="selected-category">
        {selectedCategories.map((category) => (
          <div key={category}>
            <span>{category}</span>
            <span
              className="deselect-icon"
              onClick={() => handleCategorySelect(category)}
            >
              &#x2716;
            </span>
          </div>
        ))}
      </div>

      {error && <div className="error">{error}</div>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CategorySelection;
