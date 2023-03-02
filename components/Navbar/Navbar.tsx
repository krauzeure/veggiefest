import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href="/">Accueil</Link>
        <Link href="/recipes">Recettes</Link>
        <Link href="/recipes/random">Recette au hasard</Link>
    </nav>
  )
}