import data from '/data/data.json'
import Link from 'next/link'
import Image from 'next/image'

const EventsCatPage = ({ data, pageName }) => {
    return <div>
        <h1>Events in {pageName}</h1>
        <div>
            {data.map(ev => (
                <Link key={ev.id} href={`/event/${ev.id}`} passHref>
                    <Image src={ev.image} width={300} height={200} alt={ev.title} />
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </Link>
            ))}
        </div>
    </div>
}

export default EventsCatPage;

export async function getStaticPaths() {
    const allPaths = data.events_categories.map(ev => {
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
    const json_data = await import('/data/data.json');
    const data = json_data.allEvents.filter(ev => ev.city === id);
    return {
        props: { data, pageName: id }
    }
}
