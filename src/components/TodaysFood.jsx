import React from 'react';

const TodaysFood = ({food}) => {
  return (
    <div>
      {food.name}
      {food.quantity}
    </div>
  );
};

export default TodaysFood;
