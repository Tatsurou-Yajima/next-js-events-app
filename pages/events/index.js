import Link from 'next/link'
import Image from 'next/image'

export default function EventsPage({ data }) {
  return (
    <div>
      <h1>Event page</h1>
      <div>
        {data.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image src={ev.image} width={300} height={200} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories
    }
  }
}
