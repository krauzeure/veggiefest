import React from 'react'
import { recipe } from 'types/types'
import Recipe from '@/components/Recipe/Recipe'

export default function randomRecipe({recipe}: {recipe: recipe}) {
  return (
    <Recipe recipe={recipe} />
  )
}

export async function getServerSideProps() {
    const data = await fetch("http://localhost:3000/api/randomRecipe")
    const result = await data.json()
    return {
        props: {
            recipe: result.recipe
        }
    }
}