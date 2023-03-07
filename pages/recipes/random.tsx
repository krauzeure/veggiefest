import React from 'react'
import { recipe } from 'types/types'

export default function randomRecipe({recipe, randomNumber}: {recipe: recipe, randomNumber: number}) {
  console.log(randomNumber)
  console.log(recipe)
  return (
    <div>mh</div>
  )
}

export async function getServerSideProps() {
    const data = await fetch("http://localhost:3000/api/randomRecipe")
    const result = await data.json()
    return {
        props: {
            recipe: result.recipe,
            randomNumber: result.randomNumber
        }
    }
}