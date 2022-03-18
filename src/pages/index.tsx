import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Sup, I'm Jonte!</a>
        </h1>
        <p className={styles.description}>
          I'm a 13 year old tech geek from Sweden, Europe.
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
export { Home }