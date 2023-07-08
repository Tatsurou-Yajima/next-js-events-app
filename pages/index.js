import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Events App" />
      </Head>

      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <a href=''>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2>Event In Tokyo</h2>
          </div>
        </a>
        <a href=''>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2>Event In Kyoto</h2>
          </div>
        </a>
        <a href=''>
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h2>Event In Kanagawa</h2>
          </div>
        </a>
      </main>

      <footer>
        @2023 All rights reserved
      </footer>
    </div>
  )
}
