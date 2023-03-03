import React from 'react';
import { recipe } from 'types/types';
import Recipe from '@/components/Recipe/Recipe';
import Search from '@/components/Search/Search';

import styles from './index.module.css';

export default function Recipes({ recipes }: { recipes: [] }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Recettes</h1>
      <Search />
      <ul>
        {recipes.map((item: recipe, index: number) => (
          <Recipe
            key={index}
            name={item.name}
            image={item.image}
            difficulty={item.difficulty}
            time={item.time}
          />
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/allRecipes');
  const result = await data.json();
  const recipes = result.recipes;

  return {
    props: {
      recipes,
    },
  };
}
