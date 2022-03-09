import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonte</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Sup, I&apos;m Jonte!</a>
        </h1>
        <p className={styles.description}>
          I&apos;m a 13 year old tech geek from Sweden, Europe.
        </p>

        <div className={styles.grid}>
          <a href="https://blog.jontes.page" className={styles.card}>
            <h2>Read my blog! &rarr;</h2>
            <p>Epic shit right here!</p>
          </a>

          <a href="https://github.com/Jontes-Tech" className={styles.card}>
            <h2>Check out my Git&rarr;</h2>
            <p>Plagiarism is fine, right?!</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
          Build with (very little) ❤️ by Jonte - Licensed under GPL 3
      </footer>
    </div>
  )
}
export default Home