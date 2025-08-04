import { useMutation } from '@tanstack/react-query'
import { LoginRequestBody } from '@/types/login'
import { client } from '@/api'
import { ErrorCustom } from '@/types/error'

export function useLogin() {
  return useMutation({
    mutationFn: async(body: LoginRequestBody) => {
      const { data, error } = await client.POST('/auth/login', {
        body,
      })
      if (error) {
        throw new ErrorCustom(error)
      }
      return data
    },
  })
}