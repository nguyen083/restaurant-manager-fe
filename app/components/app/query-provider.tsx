'use client'

import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import { useState } from 'react'

export function QueryProvider({ 
  children,
  dehydratedState, 
}: { 
  children: React.ReactNode
  dehydratedState?: unknown 
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        retry: 3,
        // Quan trọng cho SEO: không refetch ngay lập tức nếu có cache
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
} 