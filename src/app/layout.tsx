import './globals.css'
import type { Metadata } from 'next'
import localFont from '@next/font/local'
const font = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto-Bold.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Roboto-Regular.ttf',
      weight: '700'
    }
  ],
  variable: '--myfont'
})


export const metadata: Metadata = {
  title: 'Newsletter Signup',
  description: 'Newsletter Signup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <body className={`${font.variable} font-sans`}>{children}</body>
    </html>
  )
}
