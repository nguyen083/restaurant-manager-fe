import { QueryClient, dehydrate } from '@tanstack/react-query'

/**
 * Create a QueryClient for server-side rendering
 * Helps prefetch data on the server to improve SEO
 */
export function createServerQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Important: do not retry on the server to avoid delays
        retry: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  })
}

export async function prefetchServerData(
  prefetchFn: (_queryClient: QueryClient) => Promise<void>,
) {
  const queryClient = createServerQueryClient()
  
  try {
    await prefetchFn(queryClient)
    return dehydrate(queryClient)
  } catch (error) {
    console.error('Error prefetching server data:', error)
    return dehydrate(queryClient)
  }
} 