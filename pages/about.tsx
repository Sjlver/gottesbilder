import React, { SyntheticEvent } from 'react'

import Head from 'next/head'
import { cards } from '../public/cards/cards'

export default function About() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-center bg-cover" style={{backgroundImage: "url(/gottesbilder/index_background_licht.jpg)"}}>
        <div className="max-w-screen-sm h-screen mx-auto bg-white bg-opacity-90 flex flex-col justify-center px-1">
          <div className="overflow-auto space-y-2">
            <p>Ein Spiel, das einen klitzekleinen Ausschnitt davon zeigt, wie vielseitig Gott sein kann.</p>
            <p>Design: <a href="https://www.refbejuso.ch/strukturen/katechetik/team/katharina-wagner/" target="_blank" className="font-medium text-blue-400">Katharina Wagner</a></p>
            <p>Implementation: <a href="https://blog.purpureus.net/about/" target="_blank" className="font-medium text-blue-400">Jonas Wagner</a></p>
            <details>
              <summary>Bilder</summary>
              <ul>
                {Object.values(cards).map(CreditsLink)}
              </ul>
            </details>
          </div>

          <div className="my-8 font-medium text-lg">
            <hr />
            <div><a href="/gottesbilder" className="text-blue-400">« Zurück</a> zum Menu</div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CreditsLink(card: {"front": string, "credits": {"author": string, "url": string|null}}) {
  if (card.credits.url !== null) {
    return (<li>{card.front}: <a href={card.credits.url} target="_blank" className="text-blue-400">{card.credits.author}</a></li>);
  } else {
    return (<li>{card.front}: {card.credits.author}</li>);
  }
}
