import CategoryItem from "./CategoryItem"
import "../index.css"

const CategorList = ({catalog = []}) => {
  return (
    <div className="Home">

    <div className="list">
        {catalog.map(el => (
          <CategoryItem key={el.idCategory} {...el} />
        ))}
      
    </div>
    </div>
  )
}

export default CategorList
