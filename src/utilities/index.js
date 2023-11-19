export async function fetchRecipes(filter) {
  const query = filter;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.recipe;
}
