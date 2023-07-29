import React from 'react'
import Image from 'next/image'

const SingleEvent = ({ data }) => {
    return (
        <div>
            <Image src={data.image} width={600} height={500} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <input type='email' placeholder='Email Address' />
        </div>
    )
}

export default SingleEvent
