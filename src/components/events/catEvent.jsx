import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CatEvent = ({ data, pageName }) => {
    return (
        <div className='cat_events'>
            <h1>Events in {pageName}</h1>
            <div className='content'>
                {data.map((ev) => (
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <span className="card">
                            <Image src={ev.image} width={300} height={300} alt={ev.title} />
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CatEvent
