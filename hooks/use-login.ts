import { useMutation } from '@tanstack/react-query'
import { LoginRequestBody } from '@/types/login'
import { ErrorCustom } from '@/types/error'
import { createClient } from '@/api/custom-client'
import { paths } from '@/api/openapi'

export function useLogin() {
  const client = createClient<paths>({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_NEXT_URL,
  })
  return useMutation({
    mutationFn: async(body: LoginRequestBody) => {
      const { data, error } = await client.POST('/api/login', {
        body,
      })
      if (error) {
        throw new ErrorCustom(error)
      }
      return data
    },
  })
}