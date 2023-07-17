import Head from 'next/head'
import { HomePage } from '@/components/home/home-page'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Events App" />
      </Head>
      <HomePage data={data} />
    </div>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories,
    },
  }
}
