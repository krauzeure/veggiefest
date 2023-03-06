import React from 'react';
import styles from './Search.module.css';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Search(props: { applyFilters: () => void }) {

  const [timeFilter, setTimeFilter] = useState<number[]>([1, 60]);
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);
  const [dishFilter, setDishFilter] = useState<string[]>([]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === 'entree' ||
      e.target.name === 'plat' ||
      e.target.name === 'dessert'
    ) {
      let dishArr = [...dishFilter];
      if (e.target.checked) {
        dishArr.push(e.target.name);
      } else {
        dishArr = dishArr.filter((el) => el != e.target.name);
      }
      setDishFilter(dishArr);
    } else {
      let difficultyArr = [...difficultyFilter];
      if (e.target.checked) {
        difficultyArr.push(e.target.name);
      } else {
        difficultyArr = difficultyArr.filter((el) => el != e.target.name);
      }
      setDifficultyFilter(difficultyArr);
    }

  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setTimeFilter(newValue as number[]);
  };

  return (
    <section className={styles.search} role='search'>
      <div className={styles.searchInputs}>
        <fieldset>
          <legend>Type de recettes : </legend>

          <div>
            <input
              type='checkbox'
              id='entree'
              name='entree'
              onChange={handleCheck}
            />
            <label htmlFor='entree'>Entrée</label>
          </div>

          <div>
            <input
              type='checkbox'
              id='plat'
              name='plat'
              onChange={handleCheck}
            />
            <label htmlFor='main'>Plat</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='dessert'
              name='dessert'
              onChange={handleCheck}
            />
            <label htmlFor='dessert'>Dessert</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Difficulté : </legend>

          <div>
            <input
              type='checkbox'
              id='facile'
              name='facile'
              onChange={handleCheck}
            />
            <label htmlFor='easy'>Facile</label>
          </div>

          <div>
            <input
              type='checkbox'
              id='moyen'
              name='moyen'
              onChange={handleCheck}
            />
            <label htmlFor='medium'>Moyen</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='difficile'
              name='difficile'
              onChange={handleCheck}
            />
            <label htmlFor='hard'>Difficile</label>
          </div>
        </fieldset>
        <Box className={styles.time} sx={{ width: 300 }}>
          <p>Temps de recette : </p>
          <Slider
            getAriaLabel={() => 'Temps pour les recettes'}
            value={timeFilter}
            onChange={handleChange}
            min={1}
            max={60}
            valueLabelDisplay='auto'
            sx={{ color: 'var(--primary)' }}
            data-testid='time-slider'
          />
        </Box>
      </div>
      <div className={styles.searchButton}>
        <button className={poppins.className}>Rechercher</button>
      </div>
    </section>
  );
}
