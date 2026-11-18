import { useEffect } from "react";
import { useState } from "react";
import IngredList from "./IngredList";
import styles from "./FoodDetails.module.css";



function FoodDetails({ foodId }) {
  
 const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;  
 const API_KEY = "c2a424e9eb2a4d01ae622178b1ff2ab0";
 const [details, setDetails] = useState({});
 useEffect(() => {
    async function fetchFoodDetails() {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await response.json();
        setDetails(data);
    }
    fetchFoodDetails();
  }, [foodId]);


  return (
    <div>
      {details.title && (    
    <div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{details.title}</h1>

      <img
         className={styles.recipeImage}
         src={details.image}
         alt={details.title}
      />

      <div className={styles.recipeDetails}>
         <span>
            <strong>Vegetarian:</strong> {details.vegetarian ? "Yes" : "No"}
         </span>

         <span>
            <strong>Vegan:</strong> {details.vegan ? "Yes" : "No"}
         </span>
      </div>


      <div>
           <strong>Price per serving:</strong> ${details.pricePerServing}
      </div>
      
         
      < IngredList ingredients={details.extendedIngredients || []} />
       
      <div className={styles.recipeInstructions}>
      <h2>Instructions:</h2>
      <ul>
        {details.analyzedInstructions?.[0]?.steps?.map((step) => (
        <li key={step.number}>{step.step}</li>
         ))}
      </ul>
      </div>
    </div>
       )} </div>
  );
}

export default FoodDetails;