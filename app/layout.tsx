import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/app/theme-provider'
import { QueryProvider } from '@/components/app/query-provider'
import { Toaster } from '@/components/ui/sonner'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
