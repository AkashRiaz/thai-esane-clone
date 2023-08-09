import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiImage } from 'react-icons/fi';

const NashvilleMenu = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoodMenu(data));
  }, []);
  return (
    <div>
      <div>
        <h2>APPETIZERS</h2>
      </div>
      <div>{foodMenu.length}</div>
      <div className="grid md:grid-cols-2 mx-10 gap-5">
        {foodMenu.map((food) => {
          return (
            <Link to={`/foodMenu/${food.id}`}>
              <div className="card card-side bg-base-100">
                <figure>
                  <img src={food.image} alt="Movie" className="-mt-12 rounded-md" />
                </figure>
                <div className="space-y-1 ml-5">
                  <h2 className="text-xl font-semibold uppercase">{food.menuName}</h2>
                  <p>$ {food.price}</p>
                  <p className="text-sm ">{food.description}</p>
                  <div className="card-actions pt-6">
                    <FiImage></FiImage>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NashvilleMenu;
