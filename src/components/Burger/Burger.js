import React from 'react'
import '../../styles/burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger =(props)=>{
    return (
        <div className='burger'>
            <BurgerIngredient/>
        </div>
    );
}

export default Burger;