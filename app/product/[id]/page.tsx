"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { mockProducts } from "@/data/products";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { formatPrice } from "@/utils/format";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const params = useParams();
  const id = params.id as string;

  const product = mockProducts.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      const mainImageIndex = product.images.findIndex((img) => img.isMain);
      const initialImageIndex = mainImageIndex !== -1 ? mainImageIndex : 0;
      setSelectedImage(initialImageIndex);
    }
  }, [product]);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Inicio
          </Link>
          <span>/</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-blue-600 capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imágenes del producto */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={
                  product.images[selectedImage]?.url ||
                  "/images/placeholder-product.jpg"
                }
                alt={product.images[selectedImage]?.alt || product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Miniaturas */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 rounded-md overflow-hidden bg-white flex-shrink-0 cursor-pointer border-2 ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium text-blue-600">
                  {product.brand}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {product.subcategory}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
            </div>

            {/* Precio */}
            <div className="border-t border-b border-gray-200 py-6">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Descripción */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Descripción
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Beneficios */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Beneficios
              </h2>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modo de uso */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Modo de uso
              </h2>
              <p className="text-gray-700 leading-relaxed">{product.usage}</p>
            </div>

            {/* Ingredientes */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Ingredientes
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Características
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Productos relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(
                (p) => p.category === product.category && p.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct) => {
                const relatedMainImage =
                  relatedProduct.images.find((img) => img.isMain) ||
                  relatedProduct.images[0];
                return (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      <div className="relative aspect-square">
                        <Image
                          src={
                            relatedMainImage?.url ||
                            "/images/placeholder-product.jpg"
                          }
                          alt={relatedMainImage?.alt || relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {relatedProduct.brand}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {formatPrice(relatedProduct.price)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}
