import { useState } from "react";
import Recipe from "./Recipe";
import "./RecipeManager.css";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cuisine: "",
    difficulty: "Easy",
    cookTime: "",
    servings: "",
    allergens: "",
    ingredients: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),
      ...formData,
    };

    setRecipes([...recipes, newRecipe]);

    setFormData({
      name: "",
      description: "",
      cuisine: "",
      difficulty: "Easy",
      cookTime: "",
      servings: "",
      allergens: "",
      ingredients: "",
    });
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>

      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          name="name"
          placeholder="Recipe name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          type="number"
          name="cookTime"
          placeholder="Cook time (minutes)"
          value={formData.cookTime}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="servings"
          placeholder="Servings"
          value={formData.servings}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="allergens"
          placeholder="Allergens"
          value={formData.allergens}
          onChange={handleChange}
        />

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Recipe</button>
      </form>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeManager;