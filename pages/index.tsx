import Head from 'next/head'
import { MemoryGame } from '../components/memory_game'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/gottesbilder/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold text-center my-8">
          Gottesbilder
        </h1>

        <div className="grid items-center bg-white">
          <a href="/gottesbilder/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded">Spielen</a>
        </div>
      </main>
    </div>
  );
}