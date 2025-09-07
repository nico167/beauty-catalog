'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">💄</div>
            <span className="text-xl font-bold text-gray-900">Beauty Catalog</span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            
            {/* Dropdown de categorías */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Categorías
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span className="mr-3">{category.icon}</span>
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Botón de búsqueda */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Botón de menú móvil */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <div className="px-4 py-2 text-sm font-medium text-gray-500">Categorías</div>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
