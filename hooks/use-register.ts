import { useMutation } from '@tanstack/react-query'
import { client } from '@/api'
import { RegisterRequestBody } from '@/types/register'

export function useRegister() {
  return useMutation({
    mutationFn: async(body: RegisterRequestBody) => {
      const { data, error } = await client.POST('/auth/register', {
        body,
      })
      if (error) {
        throw error
      }
      return data
    },
  })
}