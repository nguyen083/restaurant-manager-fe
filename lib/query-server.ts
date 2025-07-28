import { QueryClient, dehydrate } from '@tanstack/react-query'

/**
 * Tạo QueryClient cho server-side rendering
 * Giúp prefetch data trên server để cải thiện SEO
 */
export function createServerQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Quan trọng: không retry trên server để tránh chậm
        retry: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  })
}

export async function prefetchServerData(
  prefetchFn: (queryClient: QueryClient) => Promise<void>,
) {
  const queryClient = createServerQueryClient()
  
  try {
    await prefetchFn(queryClient)
    return dehydrate(queryClient)
  } catch (error) {
    console.error('Error prefetching server data:', error)
    // Trả về state rỗng thay vì throw error để trang vẫn render được
    return dehydrate(queryClient)
  }
} 