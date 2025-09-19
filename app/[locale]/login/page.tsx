'use client';

import '@/lib/parseConfig';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Parse from 'parse';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await Parse.User.logIn(
        formData.get('username') as string,
        formData.get('password') as string
      );
      router.push('/admin');
    } catch (error) {
      setError('Identifiants invalides');
      console.log('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center">Connexion Admin</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              name="username"
              required
              className="mt-1 block w-full rounded border p-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 block w-full rounded border p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}