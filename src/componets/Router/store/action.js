export const ActionTypes = {
  setCatalog: "setCatalog",
  setFilteredCatalog: "setFilteredCatalog",
  setMeals: "setMeals",
  setRecipe: "setRecipe",
  setValue: "setValue"
};

export const setCatalog = (catalog) => ({
  type: ActionTypes.setCatalog,
  payload: catalog,
});
export const setFilteredCatalog = (filter) => ({
  type: ActionTypes.setFilteredCatalog,
  payload: filter,
});
export const setMeals = (meals) => ({
  type: ActionTypes.setMeals,
  payload: meals,
});
export const setRecipe = (recipe) => ({
  type: ActionTypes.setRecipe,
  payload: recipe,
});
export const setValue = (value) => ({
  type: ActionTypes.setValue,
  payload: value,
});