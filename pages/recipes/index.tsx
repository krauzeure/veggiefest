import React from 'react';
import { useEffect, useState } from 'react';
import { recipe } from 'types/types';

export default function Recipes() {
  const [recipes, setRecipes] = useState<recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getRecipes = async () => {
    const res = await fetch(`/api/allRecipes`);
    const data = await res.json();
    setRecipes(data.recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      {!isLoading && (
        <ul>
          {recipes.map((item: recipe, index: number) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
