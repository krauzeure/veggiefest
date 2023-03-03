import React from 'react'
import styles from './Search.module.css'

export default function Search() {
  return (
    <section className={styles.search} role='search'>
        <fieldset>
          <legend>Type de recettes : </legend>

          <div>
            <input type='checkbox' id='entree' name='entree' />
            <label htmlFor='entree'>Entrées</label>
          </div>

          <div>
            <input type='checkbox' id='main' name='main' />
            <label htmlFor='main'>Plat</label>
          </div>
          <div>
            <input type='checkbox' id='dessert' name='dessert' />
            <label htmlFor='dessert'>Dessert</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Difficulté : </legend>

          <div>
            <input type='checkbox' id='easy' name='easy' />
            <label htmlFor='easy'>Facile</label>
          </div>

          <div>
            <input type='checkbox' id='medium' name='medium' />
            <label htmlFor='medium'>Moyen</label>
          </div>
          <div>
            <input type='checkbox' id='hard' name='hard' />
            <label htmlFor='hard'>Difficile</label>
          </div>
        </fieldset>
      </section>
  )
}
