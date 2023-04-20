/* eslint-disable no-lone-blocks */
import React from "react";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Mainlout from "./componets/Router/Mainlout";

import RoutHeader from "./componets/Router/UI/RoutHeader";
import RoutFooter from "./componets/Router/UI/RoutVitFooter";
import Home from "./componets/Router/pages/Home";
import About from "./componets/Router/pages/About";
import Contact from "./componets/Router/pages/Contact";
import Category from "./componets/Router/pages/Category";
import Recipe from "./componets/Router/pages/Recipe";
import {store} from "./componets/Router/store/store"





function App() {





 return (

  <>
   <Provider store={store}>

    <BrowserRouter basename ="/arm-food">
      <RoutHeader />
      <Routes className="Rout">
        <Route path="/" element={<Mainlout />}>
          <Route index element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipe />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
      <RoutFooter />
    </BrowserRouter>
   </Provider>
  </> 




  )
}

export default App;

