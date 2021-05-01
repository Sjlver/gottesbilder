import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gottesbilder
        </h1>

        <p className={styles.description}>
          Wie siehst <em>du</em> Gott?
        </p>
      </main>
    </div>
  )
}
