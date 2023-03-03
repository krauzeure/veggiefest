import type { NextApiRequest, NextApiResponse } from 'next'
import { recipes } from 'data/recipes'
import { recipe } from 'types/types';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const filters = req.query.difficulty;
    let filteredRecipes: recipe[];
    if(req.query.difficulty) {
        filteredRecipes = recipes.filter(el => el.difficulty === Number(req.query.difficulty))
    } else {
        filteredRecipes = recipes
    }
    if(req.query.time) {
        filteredRecipes = filteredRecipes.filter(el => el.time === Number(req.query.time))
    }
    if(req.query.recipeType) {
        filteredRecipes = filteredRecipes.filter(el => el.recipeType.toLowerCase() === req.query.recipeType)
    }
    res.status(200).json({ recipes: filteredRecipes, queries: filters })
}