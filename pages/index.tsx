import Head from 'next/head';
import styles from '@/pages/index.module.css';
import Image from 'next/image';
import image1 from '../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
import image2 from '../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import image3 from '../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg';

import { Yeseva_One } from 'next/font/google'
const yeseva = Yeseva_One({ weight: '400', subsets:['latin'] })

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
        <section className={styles.headSection}>
          <div>
            <h1 className={`${styles.title} ${yeseva.className}`}><span className={styles.titleKeyword}>Veggiefest</span>, le site réservé aux recettes végétariennes</h1>
          </div>
          <div className={styles.image}>
            <div>
              <Image
                src={image1}
                alt='Image de nourriture'
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src={image2}
                alt='Image de nourriture'
                width={200}
                height={200}
              />
              <Image
                src={image3}
                alt='Image de nourriture'
                width={150}
                height={150}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
