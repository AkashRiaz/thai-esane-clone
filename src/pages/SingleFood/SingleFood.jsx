import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleFood = () => {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = React.useState(null);

  useEffect(() => {
    fetch('/food.json')
      .then(response => response.json())
      .then(data => setFoodDetails(data));
  }, []);

  if (!foodDetails) {
    return <div>Loading...</div>;
  }

  const selectedFood = foodDetails.find(item => item.id === Number(id));

  if (!selectedFood) {
    return <div>Food not found</div>;
  }

  return (
    <div>
      <h2>{selectedFood.menuName}</h2>
      <p>{selectedFood.description}</p>
      <p>Price: ${selectedFood.price.toFixed(2)}</p>
      <img src={selectedFood.image} alt={selectedFood.menuName} />
    </div>
  );
};

export default SingleFood;
