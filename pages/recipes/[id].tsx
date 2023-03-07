import React from 'react'
import { recipe } from 'types/types'
import Image from 'next/image'
import styles from './[id].module.css'

export default function oneRecipe({recipe}: {recipe: recipe}) {
    console.log(recipe)
  return (
    <main>
        <Image className={styles.image} src={recipe.image} alt={recipe.name} width={800} height={400}/>
        <h1 className={styles.title}>{recipe.name}</h1>
        <section className={styles.recipeInfo}>
            <div><p>{recipe.difficulty}</p>
            </div>
            <div><p>{recipe.time}</p>
            <p>minutes</p></div>
            <div><p>{recipe.ingredients.length}</p>
            <p>ingrédients</p></div>
        </section>
    </main>
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
