import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frontend Developer | Olivier KOUASSI",
  description: "Frontend Developer specializing in Next & React & tailwindCSS",
  icons: {
    icon: [{ url: "/images/dev.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ConditionalLayout>
        {children}
      </ConditionalLayout>
      </body>
    </html>
  )
}
