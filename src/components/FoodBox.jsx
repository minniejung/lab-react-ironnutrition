import React, { useState } from 'react';

const FoodBox = (props) => {
  const { image, calories, name, addTodaysFood } = props;
  const [quantity, setQuantity] = useState(0);
  // console.log(addTodaysFood);
  const food = {name, calories};

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(Number(e.target.value));
                }}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={(e) => addTodaysFood(food, quantity)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
