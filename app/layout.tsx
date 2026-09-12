import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navbar'
import SideNav from '@/components/side-nav'
import Footer from '@/components/footer'
import SearchMenu from '@/components/search-menu'
import { ThemeProvider } from '@/components/theme-provider'
import { SupabaseDataProvider } from '@/components/supabase-provider'
import SpaceTimeFabric from '@/components/space-time-fabric'

export const metadata: Metadata = {
  title: {
    default: 'Neural Manacle',
    template: '%s | neural manacle'
  },
  description: 'in a synthetic dream',
  metadataBase: new URL('https://neuralmanacle.blog'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'neural manacle',
    description: 'An exploration of art, tech, and spirituality.',
    url: 'https://neuralmanacle.blog',
    siteName: 'neural manacle',
    locale: 'en_US',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'neural manacle',
    description: 'An exploration of art, tech, and spirituality.',
    images: ['/logo.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
        <style>{`
:root {
  --font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
html { font-family: var(--font-mono); }
        `}</style>
      </head>
      <body className="min-h-dvh bg-white text-black dark:bg-black dark:text-white antialiased" suppressHydrationWarning={true}>
        <SupabaseDataProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SpaceTimeFabric />
            <Navbar />
            <SideNav />
            {/* Mirrored right-side border for desktop symmetry */}
            <div className="fixed right-0 top-0 h-screen w-14 z-40 hidden md:block pointer-events-none bg-gradient-to-l from-white/25 dark:from-black/20 to-transparent backdrop-blur-[1px] border-l border-neutral-200/40 dark:border-neutral-800/40" />
            {children}
            <Footer />
            <SearchMenu />
          </ThemeProvider>
        </SupabaseDataProvider>
      </body>
    </html>
  )
}