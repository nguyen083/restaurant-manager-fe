'use client'

import { QueryClient, QueryClientProvider, HydrationBoundary, QueryCache, MutationCache } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

declare module '@tanstack/react-query'{
    // eslint-disable-next-line no-unused-vars
    interface Register{
        mutationMeta:{
            doNotShowToast?: boolean
        }
        queryMeta:{
            doNotShowToast?: boolean
        }
    }
} 

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
    queryCache: new QueryCache({
      onError: (error, query) => {
        if(!query.meta?.doNotShowToast){
          toast.error(error.message)
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error, _variables, _context, mutation) => {
        if(!mutation.meta?.doNotShowToast){
          toast.error(error.message)
        }
      },
    }),
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
} 