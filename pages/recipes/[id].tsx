import React from 'react'
import Head from 'next/head'
import { recipe } from 'types/types'
import Recipe from '@/components/Recipe/Recipe'

export default function oneRecipe({ recipe }: { recipe: recipe }) {
  return (
    <>
      <Head>
        <title>Veggiefest - {recipe.name}</title>
        <meta
          name='description'
          content={`${recipe.name}, découvrez cette recette 100% végétarienne sur VeggieFest !`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Recipe recipe={recipe} />;
    </>
  )
}

export async function getServerSideProps(context: any) {
  const id = context.params.id
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/oneRecipe?id=${id}`)
  const result = await data.json()

  return {
    props: {
      recipe: result.recipe,
    },
  }
}
