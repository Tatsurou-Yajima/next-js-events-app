import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AllEvents = ({ data }) => {
    return (
        <div className="events_page">
            {data?.map((ev) => (
                <Link key={ev.id} href={`/events/${ev.id}`} passHref className="card">
                    <Image src={ev.image} width={300} height={300} alt={ev.title} />
                    <h2>{ev.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents
