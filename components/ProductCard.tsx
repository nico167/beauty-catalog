import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images.find(img => img.isMain) || product.images[0];

  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Imagen del producto */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={mainImage?.url || '/images/placeholder-product.jpg'}
            alt={mainImage?.alt || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Información del producto */}
        <div className="p-4">
          {/* Marca y categoría */}
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {product.subcategory}
            </span>
          </div>

          {/* Nombre del producto */}
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Precio y tag principal */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            
            {/* Tag principal */}
            {product.tags.length > 0 && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {product.tags[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
