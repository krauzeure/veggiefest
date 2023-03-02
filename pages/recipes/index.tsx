import React from 'react';
import { useEffect } from 'react';

export default function Recipes() {
  const getRecipes = async () => {
    const res = await fetch(`/api/allRecipes`);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return <div>Recipes</div>;
}
