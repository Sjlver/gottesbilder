import React from "react";

import Head from "next/head";

import { MemoryGame } from "../components/memory_game";
import BackLink from "../components/back_link";

export default function Game() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="bg-center bg-cover"
        style={{
          backgroundImage: "url(/gottesbilder/index_background_licht.jpg)",
        }}
      >
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
