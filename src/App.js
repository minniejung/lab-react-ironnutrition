import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBoxList from './components/FoodBoxList';
import FoodForm from './components/FoodForm';
import Search from './components/Search';
import TodaysFoodList from './components/TodaysFoodList';

function App() {
  const [foods, setAddNewFood] = useState(foodsList);
  const [showForm, setShowForm] = useState(false);
  const [searchedString, setSearchedString] = useState('');
  const [todaysFoods, setTodaysFoods] = useState('');

  const addNewFood = (newFood) => {
    // console.log(newFood);
    setAddNewFood([...foods, newFood]);
  };

  // console.log(foods);

  let searchedFood = null;
  if (searchedString !== '') {
    console.log(searchedString);
    searchedFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
    console.log(searchedFood);
  } else {
    searchedFood = foods;
  }

  const addTodaysFood = (newFood, quantity) => {
    newFood.quantity = quantity;
    newFood.calories = newFood.calories * quantity;
    setTodaysFoods([...todaysFoods, newFood]);
  };

  let totalCals;
  if (todaysFoods.length !== 0) {
    console.log(todaysFoods);
    totalCals = todaysFoods.map((el) => el.calories).reduce((a, b) => a + b);
  }

  return (
    <div className="App">
      <Search searchedFood={searchedFood} callbackSearch={setSearchedString} />
      <hr />
      <h1>
        <b>Add a new food!</b>
      </h1>
      <button
        onClick={(e) => {
          setShowForm(!showForm);
        }}
        className="button"
      >
        Add New Food
      </button>
      {showForm && <FoodForm addNewFood={addNewFood} />}
      <hr />
      {/* <FoodBoxList foods={searchedFood} /> */}

      {/* Display all foods
      {foods.map((food) => (
        <FoodBox {...food} />
      ))} */}

      <div class="columns">
        <div class="column">
          <FoodBoxList foods={searchedFood} addTodaysFood={addTodaysFood} />
        </div>
        <div class="column">
          <b>Today's Foods</b>
          <TodaysFoodList todaysFoods={todaysFoods} />
          {totalCals && <p>Total Cal : {totalCals}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
