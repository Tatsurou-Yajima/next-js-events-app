import Head from 'next/head'
import { events_categories } from '/data/data.json'
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

export function getServerSideProps() {
  return {
    props: {
      data: events_categories,
    },
  }
}
