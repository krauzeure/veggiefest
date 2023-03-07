import type { NextApiRequest, NextApiResponse } from 'next'
import { recipes } from 'data/recipes'
import { recipe } from 'types/types';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const difficultyFilters = req.query.difficulty as string
    const timeFilters = req.query.time as string
    const dishFilters = req.query.dishes as string
    let filteredRecipes: recipe[];
    if(req.query.difficulty) {
        // let difficultyFilterString = difficultyFilters.replace('facile', '1').replace('moyen', '2').replace('difficile', '3')
        let difficultyFilterArr = difficultyFilters.split(",")
        filteredRecipes = recipes.filter(el => el.difficulty === difficultyFilterArr[0] || el.difficulty === difficultyFilterArr[1])
    } else {
        filteredRecipes = recipes
    }
    if(req.query.time) {
        let timeFilterArr = timeFilters.split("-")
        filteredRecipes = filteredRecipes.filter(el => el.time >= Number(timeFilterArr[0]) && el.time <= Number(timeFilterArr[1]))
    }
    if(req.query.dishes) {
        let typeFilterArr = dishFilters.split(",")
        filteredRecipes = filteredRecipes.filter(el => el.recipeType.toLowerCase() === typeFilterArr[0] || el.recipeType.toLowerCase() === typeFilterArr[1])
    }
    res.status(200).json({ recipes: filteredRecipes })
}