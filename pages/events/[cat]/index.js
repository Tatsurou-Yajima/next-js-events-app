import { allEvents, events_categories } from '/data/data.json'
import Image from 'next/image'

const EventsCatPage = ({ data }) => {
    return <div>
        <h1>Events</h1>
        <div>
            {data.map(ev => (
                <a key={ev.id} href={`/event/${ev.id}`}>
                    <Image src={ev.image} width={300} height={200} alt={ev.title} />
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </a>
            ))}
        </div>
    </div>
}

export default EventsCatPage;

export async function getStaticPaths() {
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString(),
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const data = allEvents.filter(ev => ev.city === id);
    return {
        props: { data }
    }
}
