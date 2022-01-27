import React from 'react';
import TodaysFood from './TodaysFood';

const TodaysFoodList = (props) => {
  const { todaysFoods } = props;
  return (
    <div>
      {todaysFoods.length > 0
        ? todaysFoods.map((el) => {
            return <TodaysFood key={el.name} food={el} />;
          })
        : ''}
    </div>
  );
};

export default TodaysFoodList;
