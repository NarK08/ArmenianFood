
import { useSelector,useDispatch } from "react-redux";
import { value } from "../store/selector";
import { setValue } from "../store/action";

const Search = ({callBack = Function.prototype}) => {
    const dispatch = useDispatch()
    const values = useSelector(value)
  

    const handleSubmit = () => {
        callBack(values)
    }
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Поиск"
          onChange={(element) => {
            dispatch(setValue(element.target.value)) ;
          }}
    
          value={values}
        />

        <button
          className="btn orange lighten-2"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleSubmit}
        >
          Поиск
        </button>
      </div>
    </div>
  );
}

export default Search
