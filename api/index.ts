import type { Middleware } from 'openapi-fetch'
import type { paths } from '@/api/openapi'
import { createNProgress } from '@/lib/nprogress'
import { createClient } from './custom-client'

const nprogress = createNProgress()

const baseURL = process.env.NEXT_PUBLIC_USE_PROXY
  ? '/api'
  : process.env.NEXT_PUBLIC_API_URL

const client = createClient<paths>({
  baseUrl: baseURL,
})

const middleware: Middleware = {
  async onRequest({ request }) {
    if (!request.doNotShowLoading) {
      nprogress.start()
    }
    return request
  },

  async onResponse({ response }) {
    nprogress.done()

    if (response.status >= 500) {
      throw new Error('Internal Server Error')
    }
    
    return response
  },

  async onError({ error }) {
    nprogress.done()
    console.error(error)
  },
}

client.use(middleware)

export { client }
