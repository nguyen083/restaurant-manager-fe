import { Metadata } from 'next'
import { Header } from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page',
}

const HomePage = () => {
  return <div>
    <Header/>
    HomePage
  </div>
}

export default HomePage