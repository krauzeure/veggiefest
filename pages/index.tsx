import Head from 'next/head';
import styles from '@/pages/index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Veggiefest</title>
        <meta
          name='description'
          content='Veggiefest, votre ressource de recettes végétariennes !'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>Hello world</h1>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
