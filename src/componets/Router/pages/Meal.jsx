import { Link } from "react-router-dom";
import "../index.css"

const Meal = (props) => {
    const {strMeal,strMealThumb,idMeal} = props
  return (
    <div className="card">
      <div className="cardHeight2">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
          <span className="card-title">{strMeal}</span>
        </div>
      </div>
      <div className="card-content">
        <Link to={`/meal/${idMeal}`} className="btn">
          Посмотреть рецепт
        </Link>
      </div>
    </div>
  );
}

export default Meal
