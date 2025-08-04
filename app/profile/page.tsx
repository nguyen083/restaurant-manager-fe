import { Header } from '@/components/shared/header'
import { Metadata } from 'next'
import UserInforCard from './user-infor-card'

export const metadata: Metadata = {
  title: 'Profile page',
  description: 'Profile page',
}

const MePage = async() => { 
  return (<div>
    <Header/>
    <UserInforCard/>
  </div>)
}

export default MePage