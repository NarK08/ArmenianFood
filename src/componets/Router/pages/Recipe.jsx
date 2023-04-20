import { useParams, useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { getMealByID } from "../api";
import PreLoader from "../UI/PreLoader";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { recipe } from "../store/selector";
import { setRecipe } from "../store/action";

const Recipe = () => {
  const { id } = useParams();

  const dispatch = useDispatch()
  const recipes = useSelector(recipe)

  const navigate = useNavigate();
  useEffect(() => {

     getMealByID(id).then((data) => dispatch(setRecipe(data.meals[0])) );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  return (
    <>
      {!recipes.idMeal ? (
        <PreLoader />
      ) : (
        <div className="orange lighten-4">
          <img
            className="recipeImg"
            src={recipes.strMealThumb}
            alt={recipes.strMeal}
          />
          <h1>{recipes.strMeal}</h1>
          <h5>Category: {recipes.strCategory}</h5>
          {recipes.strArea ? <h5>Area: {recipes.strArea}</h5> : null}
          <p>{recipes.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipes).map((key) => {
                if (key.includes("Ingredient") && recipes[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipes[key]}</td>
                      <td>{recipes[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipes.strYoutube ? (
            <div className="row">
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipes.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
 
      <button className="btn" onClick={() => navigate(-1)}>
        Назад
      </button>
    </>
  );
};

export default Recipe;
