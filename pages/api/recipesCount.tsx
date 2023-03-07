import type { NextApiRequest, NextApiResponse } from 'next'
import { recipes } from 'data/recipes'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const recipesCount = recipes.length
    res.status(200).json({ count: recipesCount })

}