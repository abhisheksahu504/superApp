import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./category.css";
// import CategorySelection from "./CategorySelection";
import CategoryBox from "./CategoryBox";
import Action from "../assets/Action.png";
import drama from "../assets/Drama.png";
import fantasy from "../assets/Fantasy.png";
import fiction from "../assets/Fiction.png";
import horror from "../assets/Horror.png";
import music from "../assets/Music.png";
import romance from "../assets/Romance.png";
import thriller from "../assets/Thriller.png";
import western from "../assets/Western.png";

export class Category extends Component {
  render() {
    // const [categories, setCategories] = useState([]);
    // const [lengthError, setLengthError] = useState(false);
    // const navigate = useNavigate();
    // const handleSignUp = () => {
    //   if (categories.length < 3) {
    //     setLengthError(true);
    //     return;
    //   } else {
    //     setLengthError(false);
    //     window.localStorage.setItem("genres", JSON.stringify([...categories]));
    //     navigate("/browse");
    //   }
    // };
    return (
      <div className="container">
        <div className="left-side">
          <h1>Super app</h1>
          <h3>Choose your entertainment category</h3>
        </div>
        <div className="right-side">
          {/* <CategorySelection /> */}
          <div className="right-container">
            <CategoryBox categoryname="Action" img={Action} color="#FF5209" />
            <CategoryBox categoryname="Drama" img={drama} color="#D7A4FF" />
            <CategoryBox categoryname="Romance" img={romance} color="green" />
            <CategoryBox
              categoryname="Thriller"
              img={thriller}
              color="skyblue"
            />
            <CategoryBox categoryname="Western" img={western} color="brown" />
            <CategoryBox categoryname="Horror" img={horror} color="#7358FF" />
            <CategoryBox categoryname="Fantasy" img={fantasy} color="purple" />
            <CategoryBox categoryname="Music" img={music} color="red" />
            <CategoryBox
              categoryname="Fiction"
              img={fiction}
              color="lightgreen"
            />
          </div>
          <div className="btn-container">
            <button class="next-button" onClick={handleSignUp}>
              Next Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
