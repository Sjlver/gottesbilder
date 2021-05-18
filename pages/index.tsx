import Head from 'next/head'
import { MemoryCardState, MemoryCard } from '../components/memory_card'
import { cards } from '../public/cards/cards'

let gameCards: MemoryCardState[] = [];

export default function Home() {
  if (gameCards.length == 0) {
    shuffleCards()
  }

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

        <div className="grid grid-cols-3">
          {gameCards.map(c => <MemoryCard cardName={c.cardName} state={c.state}></MemoryCard>)}
        </div>
      </main>
    </div>
  );
}

function shuffleCards() {
  let shuffled = Object.keys(cards);
  for (let i = 0; i < 6; ++i) {
    const randIndex = i + Math.floor(Math.random() * (shuffled.length - i));
    [shuffled[i], shuffled[randIndex]] = [shuffled[randIndex], shuffled[i]];
  }
  gameCards = [];
  for (let i = 0; i < 6; ++i) {
    gameCards.push({ cardName: shuffled[i], state: "photo" });
    gameCards.push({ cardName: shuffled[i], state: "verse" });
  }
  for (let i = 0; i < 12; ++i) {
    const randIndex = i + Math.floor(Math.random() * (gameCards.length - i));
    [gameCards[i], gameCards[randIndex]] = [gameCards[randIndex], gameCards[i]];
  }
}