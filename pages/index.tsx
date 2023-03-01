import Head from 'next/head';
import styles from '@/pages/index.module.css';
import Image from 'next/image';
import image1 from '../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
import image2 from '../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import image3 from '../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'

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
            <h1 className={styles.title}>Bienvenue sur Veggiefest !</h1>
            <h2 className={styles.subtitle}>
              Le site de recettes dédié aux plats végétariens
            </h2>
          </div>
          <div className={styles.image}>
            <Image src={image1} alt='Image de nourriture' width={300} height={300} />
            <Image src={image2} alt='Image de nourriture' width={250} height={250} />
            <Image src={image3} alt='Image de nourriture' width={350} height={350} />
          </div>
        </section>
      </main>
    </>
  );
}
