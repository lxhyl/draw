import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Draw } from '../components/Draw/index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Draw />
    </Layout>
  )
}

export default Home
