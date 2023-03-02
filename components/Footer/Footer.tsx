import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with &#60;3 by Cyrielle CHASLES - {new Date().getFullYear()}
        <br /><br />
        <Link href='/about'>À propos</Link>
      </p>
    </footer>
  );
}
