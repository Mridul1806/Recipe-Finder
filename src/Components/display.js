import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./display.css";

const Display = ({ ingredients }) => {
  return ingredients.length ? (
    <div id="container" keys={ingredients[0].idMeal}>
      <div id="header">
        <h1>{ingredients[0].strMeal}</h1>
        <FontAwesomeIcon
          icon={faHeart}
          className="headerIcon"
        />
      </div>
      <div id="container1">
        <div id="image">
          <img src={ingredients[0].strMealThumb} alt="not found" />
        </div>
        <div id="contents">
          <div id="categories">
            <p>Category of meal - {ingredients[0].strCategory}</p>
            <p>Area of meal - {ingredients[0].strArea}</p>
            <br></br>
          </div>
          <p style={{ textAlign: "left" }}>Ingredients</p>

          <div id="ingredients">
            <p>
              {ingredients[0].strIngredient1}----{ingredients[0].strMeasure1}
            </p>
            <p>
              {ingredients[0].strIngredient2}----{ingredients[0].strMeasure2}
            </p>
            <p>
              {ingredients[0].strIngredient3}----{ingredients[0].strMeasure3}
            </p>
            <p>
              {ingredients[0].strIngredient4}----{ingredients[0].strMeasure4}
            </p>
            <p>
              {ingredients[0].strIngredient5}----{ingredients[0].strMeasure5}
            </p>
            <p>
              {ingredients[0].strIngredient6}----{ingredients[0].strMeasure6}
            </p>
            <p>
              {ingredients[0].strIngredient7}----{ingredients[0].strMeasure7}
            </p>
            <p>
              {ingredients[0].strIngredient8}----{ingredients[0].strMeasure8}
            </p>
          </div>
          <br></br>
          <p style={{ textAlign: "center" }}>Recipes</p>
          <p style={{ textAlign: "left" }}>{ingredients[0].strInstructions}</p>
        </div>
      </div>
    </div>
  ) : (
    <h2>Type a Dish Name to Search for it's ingredient</h2>
  );
};

export default Display;
// .header_icon_red{
//   font-size: 1.5em;
// position: absolute;
// left: 90%;
// }
// .header_icon:hover{
//   cursor: pointer;
//   color: red;
// }  