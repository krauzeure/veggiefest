import type { NextApiRequest, NextApiResponse } from 'next';
import { recipes } from 'data/recipes';
import { recipe } from 'types/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const recipeId = req.query.id as string;
  let recipeArr: recipe[] = recipes.filter(
    (el, index) => index === Number(recipeId)
  );
  const recipe = recipeArr.shift()
  res.status(200).json({ recipe: recipe });
}
