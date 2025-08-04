import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/app/theme-provider'
import { QueryProvider } from '@/components/app/query-provider'
import { Toaster } from '@/components/ui/sonner'
import AppProvider from '@/components/app/app-provider'
import { cookies } from 'next/headers'

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Next App',
    default: 'Next App',
  },
  description: 'Next App',

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('sessionToken')
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.className} antialiased`}
      > 
        <Toaster position="top-center" richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <AppProvider initialSessionToken={sessionToken?.value || ''}>
              {children}
            </AppProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
