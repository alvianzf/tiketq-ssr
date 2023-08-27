import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bulma/css/bulma.min.css';
import { Navbar } from './components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TiketQ',
  description: 'Online Ticketing Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body>
      <Navbar />
       <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
