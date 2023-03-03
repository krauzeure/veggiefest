import React from 'react';
import { useEffect, useState } from 'react';
import { recipe } from 'types/types';

import styles from './index.module.css'

export default function Recipes() {
  const [recipes, setRecipes] = useState<recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getRecipes = async () => {
    const res = await fetch(`/api/allRecipes?time=60&difficulty=1&recipeType=plat`);
    const data = await res.json();
    setRecipes(data.recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Recettes</h1>
      {!isLoading && (
        <ul>
          {recipes.map((item: recipe, index: number) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
