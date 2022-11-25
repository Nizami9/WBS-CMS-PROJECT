import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import Breakfast from "./Breakfast";
import MainDishes from "./MainDishes";
import Soup from "./Soup";
import Salads from "./Salads";
import Desserts from "./Desserts";
import FullRecipe from "./FullRecipe";
import Main from "./Main";
import JsonRecipe from "./JsonRecipe";
function Navbar({articles}) {
console.log("artcle in nav",articles)
  return (
    <div>
      <ul className="links-section">
        <li>
          <NavLink className="left-link" to="/home">
            Home{" "}
          </NavLink>
        </li>
        <div className="right-link">
          <li>
            <NavLink className="link" to="/breakfast">
              Breakfast{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/mainDishes">
              Main Dishes{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/soups">
              Soup
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/salads">
              Salads{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/desserts">
              Desserts
            </NavLink>
          </li>
        </div>
      </ul>

      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Main articles={articles}/>} />
        <Route path="/breakfast" element={<Breakfast articles={articles}/>} />
        <Route path="/mainDishes" element={<MainDishes articles={articles}/>} />
        <Route path="/soups" element={<Soup articles={articles}/>} />
        <Route path="/salads" element={<Salads articles={articles}/>} />
        <Route path="/desserts" element={<Desserts articles={articles}/>} />
        {/* <Route path='/breakfast/:recipe' element={<FullRecipe articles={articles}/>} />
        <Route path='/mainDishes/:recipe' element={<FullRecipe articles={articles}/>} />
        <Route path='/soups/:recipe' element={<FullRecipe articles={articles}/>} />
        <Route path='/salads/:recipe' element={<FullRecipe articles={articles}/>} />
        <Route path='/desserts/:recipe' element={<FullRecipe articles={articles}/>} /> */}
        <Route path='/breakfast/:recipe' element={<JsonRecipe articles={articles}/>} />
        <Route path='/mainDishes/:recipe' element={<JsonRecipe articles={articles}/>} />
        <Route path='/soups/:recipe' element={<JsonRecipe articles={articles}/>} />
        <Route path='/salads/:recipe' element={<JsonRecipe articles={articles}/>} />
        <Route path='/desserts/:recipe' element={<JsonRecipe articles={articles}/>} />
      </Routes>
    </div>
  );
}

export default Navbar;
