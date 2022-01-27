import React, { useState } from 'react';

const FoodForm = ({ addNewFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(name);
    // console.log(calories);
    // console.log(image);
    addNewFood({ name, calories, image });
    setName('');
    setImage('');
    setCalories(0);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className="input"
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="Food Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="image">Image</label>
      <input
        className="input"
        type="text"
        name="image"
        id="image"
        value={image}
        placeholder="Image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <label htmlFor="calories">Calories</label>
      <input
        className="input"
        type="text"
        name="calories"
        id="calories"
        value={calories}
        placeholder="Calories"
        onChange={(e) => {
          setCalories(Number(e.target.value));
        }}/>

      <button className="button">Submit</button>
    </form>
  );
};

export default FoodForm;
