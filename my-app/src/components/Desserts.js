import React from 'react'
import {NavLink,Routes,Route} from 'react-router-dom';
import FullRecipe from './FullRecipe';

function Desserts({articles}) {
  return (
    <div className='heading-section'>
    <h1>Desserts</h1>
    <div className='grid-section'>
        <div ><NavLink to='/desserts/strawberry-mousse' ><img src={require('../images/Strawberry-mousse.webp')} alt='strawberry-mousse' />
            <p>Strawberry mousse</p></NavLink>
        </div>
        <div><NavLink to='/desserts/tiramisu' ><img src={require('../images/tiramisu.webp')} alt='tiramisu' />
            <p>Tiramisu</p></NavLink> </div>
            <div ><NavLink to='/desserts/peach' ><img src={require('../images/white2.jpeg')} alt='strawberry-mousse' />
            <p>White Chocolate and Peach Trifle</p></NavLink>
        </div>
        <div><NavLink to='/desserts/dessert' ><img src={require('../images/rosewater_trifle_cake.png')} alt='tiramisu' />
            <p>Rosewater Trifle Cake</p></NavLink> </div>
            <div><NavLink to='/desserts/knock' ><img src={require('../images/ricotta_and_cinnamon_trifle.png')} alt='tiramisu' />
            <p>Ricotta and Cinnamon Trifle</p></NavLink> </div>
            
     
    </div>

    <Routes >
        <Route path='/:recipe' element={<FullRecipe articles={articles} />} />
    </Routes>
</div>
  )
}

export default Desserts
