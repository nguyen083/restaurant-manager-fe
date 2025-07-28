import { Metadata } from 'next'
import { Header } from '@/app/components/app/header'

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