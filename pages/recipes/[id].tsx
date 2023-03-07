import React from 'react'
import { recipe } from 'types/types'

export default function oneRecipe({recipe}: {recipe: recipe}) {
    console.log(recipe)
  return (
    <div>{recipe.name}</div>
  )
}

export async function getServerSideProps(context:any) {
    const id = context.params.id;
    const data = await fetch(`http://localhost:3000/api/oneRecipe?id=${id}`)
    const result = await data.json()

    return {
        props: {
            recipe: result.recipe
        }
    }
}
