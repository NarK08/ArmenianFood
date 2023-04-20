import { useParams } from "react-router-dom"
import { getFilterCategory } from "../api"
import { useEffect } from "react"
import PreLoader from "../UI/PreLoader"
import MealList from "./MealList"
import { useSelector, useDispatch } from "react-redux";
import { meals } from "../store/selector"
import { setMeals } from "../store/action"

const Category = () => {
  const dispatch = useDispatch()
  const meal = useSelector(meals)

    const {name} = useParams()


    useEffect(() => {

       getFilterCategory(name).then((data )=> dispatch(setMeals(data.meals)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name])
  return (
    <>
      {!meal.length ? <PreLoader /> : <MealList meals={meal} />}
    </>
  )
}

export default Category
