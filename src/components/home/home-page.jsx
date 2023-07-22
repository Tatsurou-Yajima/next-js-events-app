import Link from "next/link"
import Image from "next/image"

export const HomePage = ({ data }) => (
    <>
        {data.map(ev => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                <Image width={200} height={150} alt={ev.title} src={ev.image} /> <h2>{ev.title}</h2><p>{ev.description}</p>
            </Link>
        ))}
    </>
)

