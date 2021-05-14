import Head from 'next/head'
import MemoryCard from '../components/memory_card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold text-center my-8">
          Gottesbilder
        </h1>

        <p className="text-center">
          Wie siehst <em>du</em> Gott?
        </p>

        <MemoryCard></MemoryCard>
      </main>
    </div>
  )
}
