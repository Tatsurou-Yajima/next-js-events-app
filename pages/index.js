import Head from 'next/head'
import { events_categories } from '/data/data.json'
import Image from 'next/image'

export default function Home({ data }) {
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
        {data.map(ev => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={200} height={150} alt={ev.title} src={ev.image} /> <h2>{ev.title}</h2><p>{ev.description}</p>
          </a>
        ))}
      </main>

      <footer>
        @2023 All rights reserved
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      data: events_categories,
    },
  }
}
