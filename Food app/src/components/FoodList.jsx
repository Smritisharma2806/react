import FoodItem from "./FoodItem";


function FoodList({ foodData = [], setFoodId }) {
  return (
   <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    padding: "20px 40px",
  }}

>
      {foodData.map((food) => (
       <FoodItem
  key={food.id}
  food={food}
  setFoodId={setFoodId}
/>
      ))}
    </div>
  );
}

export default FoodList;