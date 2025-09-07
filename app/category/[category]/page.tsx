'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import { ProductCategory } from '@/types/product';
import { mockProducts, categories } from '@/data/products';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import ProductGrid from '@/components/ProductGrid';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Nota: En un componente real, necesitarías usar useParams() de next/navigation
  // Para este ejemplo, simularemos que tenemos acceso a los params
  const [category] = useState<string>('skincare'); // Esto debería venir de params
  
  const categoryInfo = categories.find(c => c.id === category);
  
  if (!categoryInfo) {
    notFound();
  }

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 999999 });

  // Productos de la categoría
  const categoryProducts = mockProducts.filter(p => p.category === category);

  // Obtener marcas disponibles en esta categoría
  const availableBrands = useMemo(() => {
    const brands = new Set(categoryProducts.map(p => p.brand));
    return Array.from(brands).sort();
  }, [categoryProducts]);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
      // Filtro por marca
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Filtro por precio
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }

      return true;
    });
  }, [categoryProducts, selectedBrands, priceRange]);

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 999999 });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero de la categoría */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">{categoryInfo.icon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Filtros simplificados para categoría */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
                
                {/* Marcas */}
                <select
                  value=""
                  onChange={(e) => {
                    if (e.target.value && !selectedBrands.includes(e.target.value)) {
                      setSelectedBrands([...selectedBrands, e.target.value]);
                    }
                  }}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1"
                >
                  <option value="">Seleccionar marca</option>
                  {availableBrands.filter(brand => !selectedBrands.includes(brand)).map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>

              </div>

              {selectedBrands.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            {/* Marcas seleccionadas */}
            {selectedBrands.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedBrands.map(brand => (
                  <span
                    key={brand}
                    className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {brand}
                    <button
                      onClick={() => setSelectedBrands(selectedBrands.filter(b => b !== brand))}
                      className="ml-2 text-blue-500 hover:text-blue-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estadísticas de la categoría */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{categoryProducts.length}</div>
            <div className="text-sm text-gray-600">Productos</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">{availableBrands.length}</div>
            <div className="text-sm text-gray-600">Marcas</div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Productos encontrados
            </h2>
            <div className="text-sm text-gray-600">
              {filteredProducts.length} de {categoryProducts.length} productos
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}
