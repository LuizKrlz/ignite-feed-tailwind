import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray1 pt-[6.25rem]`}>
        <main className="flex min-h-screen flex-col">
          <div className="bg-gray2 fixed top-0 h-24 w-full">
            <div className="mx-auto flex h-full w-full max-w-screen-lg items-center justify-center">
              <Image
                src="/logo.svg"
                width={208}
                height={60}
                alt="Ignite Feed"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 h-10 w-full max-w-screen-lg ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
