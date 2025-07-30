import { useMutation } from '@tanstack/react-query'
import { LoginRequestBody } from '@/types/login'
import { client } from '@/api'

export function useLogin() {
  return useMutation({
    mutationFn: async(body: LoginRequestBody) => {
      const { data, error } = await client.POST('/auth/login', {
        body: body,
      })
      if (error) {
        throw error
      }
      return data
    },
  })
}