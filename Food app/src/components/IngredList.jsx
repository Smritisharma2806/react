import Ingred from "./Ingred";

function IngredList({ ingredients }) {
  return (
    <div>
      <h2>Ingredients:</h2>

      {ingredients?.map((item) => (
        <Ingred key={item.id} item={item} />
      ))}
    </div>
  );
}

export default IngredList;