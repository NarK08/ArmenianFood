import { ActionTypes } from "./action";

const initialState = {
  catalog: [],
  filteredCatalog: [],
  meals: [],
  recipe: {},
  value: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.setCatalog:
      return {
        ...state,
        catalog: payload
      }
    case ActionTypes.setFilteredCatalog:
      return {
        ...state,
        filteredCatalog: payload
      };
    case ActionTypes.setMeals:
      return {
        ...state,
        meals: payload,
      };
    case ActionTypes.setRecipe:
      return {
        ...state,
        recipe: payload,
      };
    case ActionTypes.setValue:
      return {
        ...state,
        value:payload,
      };
      default :
      return state;
  }
}
