'use client'

import { useAppContext } from '@/components/app/app-provider'
import { useInfor } from '@/hooks/use-infor'
    
const UserInforCard = () => {
  const { sessionToken } = useAppContext()
  const { data: user } = useInfor({ sessionToken, doNotShowLoading: true })
  return <div className='p-2 border border-gray-300 rounded-md'>Name: {user?.data?.name}</div>
}

export default UserInforCard