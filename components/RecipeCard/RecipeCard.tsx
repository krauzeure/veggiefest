import React from 'react';
import styles from './RecipeCard.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export default function RecipeCard(props: {
  name: string;
  image: StaticImageData;
  difficulty: string;
  time: number;
  id: number;
}) {
  return (
    <li className={styles.container}>
      <Link href={`/recipes/${props.id}`}>
        <Image src={props.image} alt={props.name} width={250} height={150} />
        <div className={styles.info}>
          <p>{props.name}</p>
          <p className={styles.difficulty}>{props.difficulty}</p>
        </div>
      </Link>
    </li>
  );
}
