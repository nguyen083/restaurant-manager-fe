import { useQuery } from '@tanstack/react-query'
import { client } from '@/api'
import { ErrorCustom } from '@/types/error'
import { Options } from './params'

export const useInfor = (opt: Options = {}) => {
  return useQuery({
    queryKey: ['userInfor'],
    queryFn: async() => {
      const { data, error } = await client.GET('/account/me', {
        sessionToken: opt?.sessionToken,
        doNotShowLoading: opt?.doNotShowLoading,
      })
      if (error) {
        throw new ErrorCustom(error)
      }
      return data
    },
  })
}
