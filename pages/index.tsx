import Head from 'next/head';
import styles from '@/pages/index.module.css';
import Image from 'next/image';
import image1 from '../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
import image2 from '../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import image3 from '../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg';
import Link from 'next/link';

import { Yeseva_One } from 'next/font/google';
const yeseva = Yeseva_One({ weight: '400', subsets: ['latin'] });

export default function Home({ recipesCount }: { recipesCount: number }) {
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

      <main className={styles.main}>
        <section className={styles.headSection}>
          <div>
            <h1 className={`${styles.title} ${yeseva.className}`}>
              <span className={styles.titleKeyword}>Veggiefest</span>, le site
              réservé aux recettes végétariennes
            </h1>
          </div>
          <div className={styles.image}>
            <div>
              <Image
                src={image1}
                alt='Image de nourriture'
                // width={400}
                // height={300}
              />
            </div>
            <div>
              <Image
                src={image2}
                alt='Image de nourriture'
                // width={200}
                // height={200}
              />
              <Image
                src={image3}
                alt='Image de nourriture'
                // width={150}
                // height={150}
              />
            </div>
          </div>
        </section>
        <section className={styles.ctaSection}>
          <p>
            Toutes les recettes sur le site sont{' '}
            <strong>entièrement végétariennes</strong>. Plus besoin de passer à
            la loupe tous les ingrédients d‘une recette pour vous assurer de ne
            pas rater un aliment animal. Cuisinez tranquille !
          </p>
          <Link href='/recipes'>Découvrir les recettes</Link>
        </section>
        <section className={styles.stats}>
          <div className={styles.bar}></div>
          <div>
            <p className={yeseva.className}>{recipesCount}</p>
            <p>recettes disponibles</p>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/recipesCount`
  );
  const result = await data.json();
  const recipesCount = result.count;
  return {
    props: {
      recipesCount,
    },
  };
}
