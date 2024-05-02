import React from "react";
import { categories } from "@/data"; // path to your data.ts file

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="space-y-8 container mx-auto px-4">
      {categories.map((category) => (
        <div key={category.id} className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{category.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.meals.map((meal) => (
              <div
                key={meal.id}
                className="border border-gray-200 p-4 rounded-lg space-y-2">
                <h2 className="text-xl font-semibold text-gray-700">
                  {meal.name}
                </h2>
                <p className="text-lg font-bold text-gray-800">
                  {meal.price} kr
                </p>
                <ul className="list-none pl-0 gap-2 flex flex-wrap text-sm text-gray-600">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient},</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
