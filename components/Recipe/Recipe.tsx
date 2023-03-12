import React from 'react'
import styles from './Recipe.module.css'
import Image from 'next/image'
import { recipe } from 'types/types';

export default function Recipe(props: {recipe: recipe}) {
  return (
    <main>
        <Image className={styles.image} src={props.recipe.image} alt={props.recipe.name} 
        // width={800} height={400}
        />
        <h1 className={styles.title}>{props.recipe.name}</h1>
        <section className={styles.recipeInfo}>
            <div><p>{props.recipe.difficulty}</p>
            </div>
            <div><p>{props.recipe.time}</p>
            <p>minutes</p></div>
            <div><p>{props.recipe.ingredients.length}</p>
            <p>ingrédients</p></div>
        </section>
        <section className={styles.recipe}>
        <div className={styles.ingredients}><h2>Ingrédients</h2>
        <ul>
            {props.recipe.ingredients.map((item, index) => (
                <li key={`${index}-${item}`}>{item.name}, {item.qty}</li>
            ))}
        </ul></div>

        <div className={styles.steps}><h2>Étapes</h2>
        <ol>
            {props.recipe.steps.map((item, index) => (
                <li key={`${index}-${item}`}>{item}</li>
            ))}
        </ol></div>
        </section>
    </main>
  )
}
