import React from 'react'
import Head from 'next/head'
import { recipe } from 'types/types'
import Recipe from '@/components/Recipe/Recipe'

export default function randomRecipe({ recipe }: { recipe: recipe }) {
  return (
    <>
      <Head>
        <title>Veggiefest - Recette au hasard</title>
        <meta
          name='description'
          content='Affichez une recette au hasard parmi toutes les recettes disponibles sur VeggieFest !'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Recipe recipe={recipe} />
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/randomRecipe`)
  const result = await data.json()
  return {
    props: {
      recipe: result.recipe,
    },
  }
}
