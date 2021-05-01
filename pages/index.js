import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gottesbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 class="text-2xl font-bold text-center my-8">
          Gottesbilder
        </h1>

        <p class="text-center">
          Wie siehst <em>du</em> Gott?
        </p>
      </main>
    </div>
  )
}
