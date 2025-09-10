'use client';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"


interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        
            {!isAdminRoute && (
                <Navbar />
            )}
        
            {isAdminRoute && (
                <header className="bg-gray-800 text-white shadow-sm mb-10">
                    <nav className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Espace Administrateur</h1>
                        <div className="space-x-4">
                            <a href="/admin" className="text-gray-300 hover:text-white">Dashboard</a>
                            <a href="/admin/projects" className="text-gray-300 hover:text-white">Projets</a>
                            <a href="/admin/users" className="text-gray-300 hover:text-white">Utilisateurs</a>
                            <a href="/" className="text-gray-300 hover:text-white">Retour au site</a>
                        </div>
                        </div>
                    </nav>
                </header>
            )}
      
            <main className="flex-1">{children}</main>

        </ThemeProvider>
    </>
  );
}