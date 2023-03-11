import React from 'react'
import Head from 'next/head'
import styles from './about.module.css'
import { recipeResources, photoResources } from 'types/types'

export default function About(props: { recipes: recipeResources[]; photos: photoResources[] }) {
  return (
    <>
      <Head>
        <title>Veggiefest - À propos</title>
        <meta
          name='description'
          content='Plus d‘informations sur le site VeggieFest, les ressources utilisées et le concept du site.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>À propos</h1>
        <p>
          VeggieFest a été créé dans le cadre d‘un projet de développement. L‘application n‘a pas
          vocation a être utilisée.
        </p>
        <p>J‘ai utilisé plusieurs ressources pour créer le site :</p>
        <ul>
          <li>
            Des recettes sur le site{' '}
            <a href='https://www.marmiton.org/' target='_blank'>
              Marmiton
            </a>
          </li>
          <li>
            Des photos sur le site{' '}
            <a href='' target='_blank'>
              Unsplash
            </a>
          </li>
        </ul>
        <section className={styles.resources}>
          <div>
            <h2>Les ressources recettes</h2>
            <ul>
              {props.recipes.map((item, index) => (
                <li key={`${index}-${item}`}>
                  <a href={item.link} target='_blank'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Les ressources photos</h2>
            <ul>
              {props.photos.map((item, index) => (
                <li key={`${index}-${item}`}>
                  <a href={item.link} target='_blank'>
                    {item.name}
                  </a>
                  , par {item.artist}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = await import(`../data/resources`)
  const recipes = data.recipesResources
  const photos = data.photoResources
  return {
    props: {
      recipes,
      photos,
    },
  }
}
