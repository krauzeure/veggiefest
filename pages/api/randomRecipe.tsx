import type { NextApiRequest, NextApiResponse } from 'next';
import { recipes } from 'data/recipes';
import { recipe } from 'types/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const randomNumber = Math.floor(Math.random() * recipes.length);
  let randomRecipe: recipe[] = recipes.filter(
    (el, index) => index === randomNumber
  );
  res.status(200).json({ recipe: randomRecipe[0], randomNumber: randomNumber });
}
