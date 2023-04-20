import "../index.css"
import { getAllCategories } from "../api"
import { useEffect } from "react"
import PreLoader from "../UI/PreLoader"
import CategoryList from "./CategoryList"
import Search from "./Search"
import { useSelector,useDispatch } from "react-redux"
import { setFilteredCatalog,setCatalog } from "../store/action"
import {catalog,filteredCatalog} from "../store/selector"



const Home = () => {

  const dispatch = useDispatch()
  const catalogs = useSelector(catalog)
  const filteredCatalogs = useSelector(filteredCatalog)

  const handleSearch = (str) => {
    dispatch(
      setFilteredCatalog(
        catalogs.filter((item) =>
          item.strCategory.toLowerCase().includes(str.toLowerCase())
        )
      )
    );
    

  }

  useEffect(() => {
    getAllCategories().then(data => {
  
      dispatch(setCatalog(data.categories))
      dispatch(setFilteredCatalog(data.categories))
  
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    <Search callBack={handleSearch} />
    {!catalogs.length ? (<PreLoader />):(<CategoryList catalog={filteredCatalogs} />)}
    </>
    
  )
}

export default Home