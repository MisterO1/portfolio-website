import type React from "react"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (    
    <>
      <header className="bg-gray-800 text-white shadow-sm mb-10">
        <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Espace Administrateur</h1>
                <div className="space-x-4 text-gray-300">
                    <Link href="/admin" className="hover:text-white">Dashboard</Link>
                    <Link href="/admin/projects" className="hover:text-white">Projets</Link>
                    <Link href="/" className="hover:text-white">Retour au site</Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
      </header>
      {children}
    </>       
  )
}
