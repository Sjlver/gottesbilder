import React, { SyntheticEvent } from 'react'

import Head from 'next/head'
import { MemoryGame } from '../components/memory_game'

export default function Game() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-center bg-cover" style={{backgroundImage: "url(/gottesbilder/index_background_licht.jpg)"}}>
        <div className="max-w-md h-screen mx-auto bg-white bg-opacity-90 flex flex-col justify-center px-1">
          <MemoryGame />

          <div className="my-8 font-medium text-lg">
            <hr />
            <BackLink />
          </div>
        </div>
      </main>
    </div>
  );
}

type BackLinkState = {
  confirming: boolean,
};

class BackLink extends React.Component<{}, BackLinkState> {
  CONFIRMATION_TIMEOUT = 5000;

  constructor(props: {}) {
    super(props);
    this.state = { confirming: false };
    this.click = this.click.bind(this);
  }

  render() {
    if (this.state.confirming) {
      return (<div><a href="/gottesbilder" className="text-blue-400">« Spiel beenden und zurück</a> zum Menu</div>);
    } else {
      return (<div><a href="/gottesbilder" className="text-blue-400" onClick={this.click}>« Zurück</a> zum Menu</div>);
    }
  }

  click(e: SyntheticEvent) {
    e.preventDefault();
    this.setState({confirming: true});
    setTimeout(() => this.setState({confirming: false}), this.CONFIRMATION_TIMEOUT)
  }
}
