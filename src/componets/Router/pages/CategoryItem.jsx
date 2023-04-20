import "../index.css"
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
    const {
      strCategory,
      strCategoryDescription,
      strCategoryThumb,
    } = props;



  return (
    <div className="card">
      <div className="cardHeight">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className="card-content">
          <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 120)}...</p>
        </div>
      </div>
      <div className="card-content">
        <Link  to={`/category/${strCategory}`} className="btn">
          Смотреть
        </Link>
      </div>
    </div>
  ); 
}

export default CategoryItem
