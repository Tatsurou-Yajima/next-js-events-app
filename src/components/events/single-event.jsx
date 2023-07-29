import React from 'react'
import Image from 'next/image'

const SingleEvent = ({ data }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get('email')
    }

    return (
        <div className='event_single_page'>
            <h1>{data.title}</h1>
            <Image src={data.image} width={600} height={500} alt={data.title} />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className='email_registration'>
                <label>メーリングリストに登録する</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='メールアドレスを入力してください'
                />
                <button type='button'>Submit</button>
            </form>
        </div>
    )
}

export default SingleEvent
