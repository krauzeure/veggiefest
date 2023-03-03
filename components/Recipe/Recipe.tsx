import React from 'react';
import styles from './Recipe.module.css';
import Image, { StaticImageData } from 'next/image';

export default function Recipe(props: {
  name: string;
  image: StaticImageData;
}) {
  return (
    <li className={styles.container}>
      <Image src={props.image} alt={props.name} width={250} height={150} />
      <p>{props.name}</p>
    </li>
  );
}
