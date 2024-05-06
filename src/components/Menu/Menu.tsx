"use client";
import React, { useState } from "react";
import { categories } from "@/data";
import { Button } from "../ui/button";
type Props = {};

const Menu = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <>
      <div className="space-y-8 container mx-auto px-4 mt-4 bg-gradient">
        <div className="flex gap-3 flex-wrap items-center justify-center p-4 rounded-md">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              onClick={() => setSelectedCategory(category.id)}
              className="uppercase">
              {category.title}
            </Button>
          ))}
          <Button variant="outline" onClick={() => setSelectedCategory(null)}>
            VISA ALLA
          </Button>
        </div>

        {categories
          .filter(
            (category) => !selectedCategory || selectedCategory === category.id
          )
          .map((category) => (
            <div key={category.id} className="space-y-4">
              <h2 className="text-2xl font-bold uppercase ">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.meals.map((meal) => (
                  <div
                    key={meal.id}
                    className="border p-4 rounded-lg space-y-2">
                    <h3 className="text-xl font-semibold">{meal.name}</h3>
                    <p className="text-lg font-bold ">{meal.price} kr</p>
                    <ul className="list-none pl-0 gap-1 flex flex-wrap text-sm ">
                      {meal.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}, </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Menu;
