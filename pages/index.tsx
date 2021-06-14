import Head from 'next/head'
import { MemoryGame } from '../components/memory_game'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/gottesbilder/favicon.ico" />
      </Head>

      <main className="bg-center bg-cover" style={{backgroundImage: "url(/gottesbilder/index_background_licht.jpg)"}}>
        <div className="max-w-screen-sm h-screen mx-auto flex flex-col space-y-8 p-8">
          <div className="flex-1 flex flex-col space-y-8 justify-center">
            <h1 className="text-6xl font-extrabold text-white text-opacity-80 text-center uppercase">
              Gottes<br />bilder
            </h1>

            <p className="text-center text-2xl">
              <a href="/gottesbilder/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded">Spielen</a>
            </p>
            </div>
          <div className="flex-none">
            <p className="text-center">
              <a href="/gottesbilder/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded">Impressum</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}