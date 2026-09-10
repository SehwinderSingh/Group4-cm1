function Recipe({ recipe, onDelete }) {
    return (
      <article>
        <h2>{recipe.name}</h2>
  
        <p>{recipe.description}</p>
  
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
  
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
  
        <p>
          <strong>Cook Time:</strong> {recipe.cookTime} minutes
        </p>
  
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
  
        <p>
          <strong>Allergens:</strong> {recipe.allergens || "None"}
        </p>
  
        <p>
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
  
        <button onClick={() => onDelete(recipe.id)}>
          Delete
        </button>
      </article>
    );
  }
  
  export default Recipe;