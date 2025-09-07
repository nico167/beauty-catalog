"use client";

import { useState } from "react";
import { ProductCategory } from "@/types/product";
import { categories } from "@/data/products";
import { formatPrice } from "@/utils/format";

interface FilterBarProps {
  selectedCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
  availableBrands: string[];
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
  onClearFilters: () => void;
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedBrands,
  onBrandChange,
  availableBrands,
  priceRange,
  onPriceRangeChange,
  onClearFilters,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandChange([...selectedBrands, brand]);
    }
  };

  const handleClearFilters = () => {
    // Animación de limpieza
    setIsClearing(true);
    onClearFilters();

    // Resetear la animación después de un breve tiempo
    setTimeout(() => {
      setIsClearing(false);
    }, 600);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtros rápidos de categorías */}
        <div className="flex items-center space-x-4 py-4 overflow-x-auto">
          <button
            onClick={() => onCategoryChange("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}

          {/* Botón de filtros avanzados */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center space-x-2 ml-4"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              />
            </svg>
            <span>Filtros</span>
          </button>
        </div>

        {/* Panel de filtros avanzados */}
        {isOpen && (
          <div className="border-t border-gray-200 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Marcas */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Marcas
                </h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {availableBrands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rango de precios */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Rango de Precios
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder={formatPrice(0)}
                      value={priceRange.min || ""}
                      onChange={(e) =>
                        onPriceRangeChange({
                          ...priceRange,
                          min: Number(e.target.value) || 0,
                        })
                      }
                      className="w-32 px-3 py-2 border border-gray-300 rounded-md text-sm text-black" // Aumentado a w-32 y py-2
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder={formatPrice(999999)}
                      value={priceRange.max || ""}
                      onChange={(e) =>
                        onPriceRangeChange({
                          ...priceRange,
                          max: Number(e.target.value) || 999999,
                        })
                      }
                      className="w-32 px-3 py-2 border border-gray-300 rounded-md text-sm text-black" // Aumentado a w-32 y py-2
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botón limpiar filtros con animación */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleClearFilters}
                className={`px-4 py-2 text-sm rounded-md transition-all duration-300 flex items-center space-x-2 ${
                  isClearing
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {isClearing ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>¡Filtros limpiados!</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Limpiar filtros</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
