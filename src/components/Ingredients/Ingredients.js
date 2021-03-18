import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';


function Ingredients() {

  const [userIngredients, setUserIngredients] = useState([])

  const addIngredientHandler = (ingredients) => {
    // NO
    // setUserIngredients(Ingredients)
    // setUserIngredients(userIngredients.push(Ingredients))
    setUserIngredients((prevState) => [
      ...prevState,
      { id: Math.random().toString(), ...ingredients }
    ])
  }


  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
