import React from 'react';
import FoodBox from './FoodBox';

const FoodBoxList = (props) => {
  const { foods, addTodaysFood } = props;
  console.log(addTodaysFood);
  return (
    <>
      {foods.length > 0 ? (
        <div className="food-list">
          {foods.map((food) => {
            return (
              <FoodBox
                key={food.name}
                name={food.name}
                calories={food.calories}
                image={food.image}
                addTodaysFood={addTodaysFood}
              />
            );
          })}
        </div>
      ) : (
        <p>No foods yet...</p>
      )}
    </>
  );
};

export default FoodBoxList;
