import React from 'react';
import styles from './Recipe.module.css';
import Image, { StaticImageData } from 'next/image';
import broccoli from '../../assets/broccoli.png'
import broccoliFilled from '../../assets/broccoli_filled.png'

export default function Recipe(props: {
  name: string;
  image: StaticImageData;
  difficulty: number;
  time: number;
}) {

    const totalDifficultyRating = 3;
    const difficultyArr = Array.from(Array(3))
    difficultyArr.fill(broccoliFilled, 0, props.difficulty).fill(broccoli, props.difficulty, totalDifficultyRating)
    console.log(difficultyArr)
  return (
    <li className={styles.container}>
      <Image src={props.image} alt={props.name} width={250} height={150} />
      <div className={styles.info}>
      <p>{props.name}</p>
        <div className={styles.difficulty}>Difficulté : {difficultyArr.map(item => (<Image src={item} alt="Difficulté" width={15} height={15} />))}</div>
      </div>
    </li>
  );
}
