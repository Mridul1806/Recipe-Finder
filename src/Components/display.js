import React from "react"
import './display.css'
const Display = ({ ingredients }) => {
  return ingredients.length? (
        <div id="container" keys={ingredients[0].idMeal}>
          <div id="header">
            <h1>{ingredients[0].strMeal}</h1>
          </div>
        <div id="container1">
          <div id="image">
            <img src={ingredients[0].strMealThumb} alt="not found" />
          </div>

          <div id="contents">
            <div id="categories">
              <p>{ingredients[0].strCategory}</p>
              <p>{ingredients[0].strArea}</p>
            </div>

            <div id="ingredients">
              <p>
                {ingredients[0].strIngredient1}--{ingredients[0].strMeasure1}
              </p>
              <p>
                {ingredients[0].strIngredient2}--{ingredients[0].strMeasure2}
              </p>
              <p>
                {ingredients[0].strIngredient3}--{ingredients[0].strMeasure3}
              </p>
              <p>
                {ingredients[0].strIngredient4}--{ingredients[0].strMeasure4}
              </p>
              <p>
                {ingredients[0].strIngredient5}--{ingredients[0].strMeasure5}
              </p>
              <p>
                {ingredients[0].strIngredient6}--{ingredients[0].strMeasure6}
              </p>
              <p>
                {ingredients[0].strIngredient7}--{ingredients[0].strMeasure7}
              </p>
              <p>
                {ingredients[0].strIngredient8}--{ingredients[0].strMeasure8}
              </p>
            </div>

            <div id="recipes">
              <p>{ingredients[0].strInstructions}</p>
            </div>
         </div>   
        </div>
    </div>
      )
   : (
     <h2>hello</h2>
    );
};

export default Display;
