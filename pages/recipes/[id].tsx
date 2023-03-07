import React from 'react';
import { recipe } from 'types/types';
import Recipe from '@/components/Recipe/Recipe';

export default function oneRecipe({ recipe }: { recipe: recipe }) {
  return <Recipe recipe={recipe} />;
}

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/oneRecipe?id=${id}`
  );
  const result = await data.json();

  return {
    props: {
      recipe: result.recipe,
    },
  };
}
