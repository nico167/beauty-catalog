'use client';

import { useState, useMemo } from 'react';
import { ProductCategory } from '@/types/product';
import { mockProducts } from '@/data/products';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 999999 });

  // Obtener marcas disponibles
  const availableBrands = useMemo(() => {
    const brands = new Set(mockProducts.map(p => p.brand));
    return Array.from(brands).sort();
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      // Filtro por categoría
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

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
  }, [selectedCategory, selectedBrands, priceRange]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 999999 });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedBrands={selectedBrands}
        onBrandChange={setSelectedBrands}
        availableBrands={availableBrands}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        onClearFilters={clearFilters}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💄 Beauty Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra colección de productos de belleza y cuidado personal. 
            Encuentra el producto perfecto para ti.
          </p>
        </div>

        {/* Estadísticas simples */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{mockProducts.length}</div>
            <div className="text-sm text-gray-600">Productos</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">{availableBrands.length}</div>
            <div className="text-sm text-gray-600">Marcas</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">6</div>
            <div className="text-sm text-gray-600">Categorías</div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedCategory === 'all' ? 'Todos los productos' : `Productos de ${selectedCategory}`}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredProducts.length} productos encontrados
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}
