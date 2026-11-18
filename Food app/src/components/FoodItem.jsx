import styles from "./FoodItem.module.css";

function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodCard}>
      <img
        src={food.image}
        alt={food.title}
        className={styles.foodImage}
      />

     <div className={styles.foodInfo}>
          <h3>{food.title}</h3>

     <div className={styles.buttonContainer}>
          <button
                className={styles.recipeButton}
                onClick={() => setFoodId(food.id)}
               >
                View Recipe
           </button>
           </div>
     </div>
    </div>
  );
}

export default FoodItem;