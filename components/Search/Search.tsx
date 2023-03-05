import React from 'react';
import styles from './Search.module.css';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['400', '600', '700'], subsets:['latin'] })

export default function Search() {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <section className={styles.search} role='search'>
      <div className={styles.searchInputs}>
      <fieldset>
        <legend>Type de recettes : </legend>

        <div>
          <input type='checkbox' id='entree' name='entree' />
          <label htmlFor='entree'>Entrée</label>
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
      <Box className={styles.time} sx={{ width: 300 }}>
        <p>Temps de recette : </p>
          <Slider
            getAriaLabel={() => 'Temps pour les recettes'}
            value={value}
            onChange={handleChange}
            min={1}
            max={60}
            valueLabelDisplay="auto"
            sx={{color:"var(--primary)"}}
            data-testid="time-slider"
          />
        </Box>
        </div>
        <div className={styles.searchButton}>
        <button className={poppins.className}>Rechercher</button>
        </div>
    </section>
  );
}
