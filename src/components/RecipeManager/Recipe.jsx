function Recipe({ recipe, onDelete }) {
    return (
      <div>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Cook Time: {recipe.cookTime} minutes</p>
        <p>Servings: {recipe.servings}</p>
        <p>Allergens: {recipe.allergens}</p>
        <p>Ingredients: {recipe.ingredients}</p>
  
        <button onClick={() => onDelete(recipe.id)}>
          Delete
        </button>
      </div>
    );
  }
  
  export default Recipe;