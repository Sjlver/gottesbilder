import Head from 'next/head'
import { MemoryGame } from '../components/memory_game'

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

        <div className="max-w-screen-sm mx-auto">
          <MemoryGame />
        </div>
      </main>
    </div>
  );
}