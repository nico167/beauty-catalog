import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, el producto que buscas no existe o ha sido eliminado.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al catálogo
          </Link>
        </div>
      </main>
    </div>
  );
}
