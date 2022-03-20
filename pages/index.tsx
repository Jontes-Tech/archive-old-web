import type { NextPage } from 'next'
import next from 'next';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
var age =((Date.now() / 1000 - 1233516011) / 31557600).toFixed(0);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Sup, I&apos;m Jonte!</a>
        </h1>
        <p id="desc" className={styles.description}>
        I'm a {age} year old tech geek from Sweden, Europe.
        </p>

        <div className={styles.grid}>
          <a href="https://blog.jontes.page" className={styles.card}>
            <h2>Read my blog! &rarr;</h2>
            <p>Epic shit right here!</p>
          </a>

          <a href="https://github.com/Jontes-Tech" className={styles.card}>
            <h2>Check out my Git! &rarr;</h2>
            <p>Plagiarism is fine, right?!</p>
          </a>
        </div>
      </main>
    </div>
  )
}
export default Home