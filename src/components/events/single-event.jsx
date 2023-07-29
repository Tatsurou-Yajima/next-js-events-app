import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Image from 'next/image'

const SingleEvent = ({ data }) => {
    const inputEmail = useRef()
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        try {
            const response = await fetch(
                '/api/email-registration',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: emailValue,
                        eventId: eventId,
                    })
                }
            )
            if (!response.ok) {
                throw new Error(`エラー: ${response.status}`)
            }
            const data = await response.json()
            console.log(data, 'data')
        } catch (e) {
            console.log(e, 'error')
        }
    }

    return (
        <div className='event_single_page'>
            <h1>{data.title}</h1>
            <Image src={data.image} width={600} height={500} alt={data.title} />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className='email_registration'>
                <label>メーリングリストに登録する</label>
                <input
                    ref={inputEmail}
                    type='email'
                    id='email'
                    name='email'
                    placeholder='メールアドレスを入力してください'
                />
                <button>登録</button>
            </form>
        </div>
    )
}

export default SingleEvent
