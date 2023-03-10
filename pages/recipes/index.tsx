import React from 'react'
import Head from 'next/head'
import { recipe } from 'types/types'
import RecipeCard from '@/components/RecipeCard/RecipeCard'
import Search from '@/components/Search/Search'
import { useState, useEffect } from 'react'

import styles from './index.module.css'

export default function Recipes({ recipes }: { recipes: recipe[] }) {
  const [recipesList, setRecipesList] = useState<recipe[]>([])
  const [isFiltered, setIsFiltered] = useState<boolean>(false)
  const [filteredURL, setFilteredURL] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleFilters = (
    timeFilter: number[],
    difficultyFilter: string[],
    dishFilter: string[]
  ) => {
    let timeFilters: string = ''
    let difficultyFilters: string = ''
    let dishFilters: string = ''

    if (timeFilter[0] > 1 || timeFilter[1] < 60) {
      timeFilters = `time=${timeFilter[0]}-${timeFilter[1]}`
    }

    if (difficultyFilter.length === 1) {
      difficultyFilters = `&difficulty=${difficultyFilter[0]}`
    } else if (difficultyFilter.length === 2) {
      difficultyFilters = `&difficulty=${difficultyFilter[0]},${difficultyFilter[1]}`
    }

    if (dishFilter.length === 1) {
      dishFilters = `&dishes=${dishFilter[0]}`
    } else if (dishFilter.length === 2) {
      dishFilters = `&dishes=${dishFilter[0]},${dishFilter[1]}`
    }
    setFilteredURL(
      `${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/allRecipes?${timeFilters}${difficultyFilters}${dishFilters}`
    )
  }

  useEffect(() => {
    if (filteredURL != '') {
      setIsLoading(true)
      fetch(filteredURL)
        .then(function (res) {
          if (res.ok) {
            return res.json()
          }
        })
        .then(function (response) {
          setRecipesList(response.recipes)
          setIsLoading(false)
          setIsFiltered(true)
        })
    }
  }, [filteredURL])

  const arrToMap = isFiltered ? recipesList : recipes

  return (
    <>
      <Head>
        <title>Veggiefest - Recettes</title>
        <meta
          name='description'
          content='Parcourez toutes les recettes disponibles sur VeggieFest et utilisez nos filtres pour trouver des id??es de recettes facilement !'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Recettes</h1>
        <Search applyFilters={handleFilters} />
        <ul>
          {isLoading ? (
            <div className='lds-ring'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            arrToMap.map((item: recipe, index: number) => (
              <RecipeCard
                key={index}
                name={item.name}
                image={item.image}
                difficulty={item.difficulty}
                time={item.time}
                id={item.id}
              />
            ))
          )}
        </ul>
        {!isLoading && isFiltered && arrToMap.length === 0 ? (
          <p className={styles.emptyState}>
            Nous n???avons malheureusement pas de recette correspondant ?? ces crit??res ????
            <br /> Essayez de modifier vos crit??res pour d??couvrir d???autres recettes !
          </p>
        ) : null}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/allRecipes`)
  const result = await data.json()
  const recipes = result.recipes

  return {
    props: {
      recipes,
    },
  }
}
