# 🛍️ Beauty Catalog

Beauty Catalog es una aplicación web de catálogo en línea para una tienda de productos de belleza y cuidado personal. El objetivo del proyecto es ofrecer a los usuarios un espacio para explorar, visualizar y descubrir productos, sin necesidad de registro ni funcionalidades de compra.

## 🎯 Objetivo

Brindar un catálogo moderno, rápido y visualmente atractivo donde los clientes puedan navegar por los productos, filtrarlos por categorías y acceder a la información detallada de cada uno (ingredientes, beneficios, recomendaciones de uso, etc.).

## ✨ Características principales

- 📂 **Exploración de productos** con imágenes, nombres, descripciones y precios de referencia
- 🔍 **Filtros y búsqueda** por categorías, tipo de producto o marca
- 📄 **Página de detalle** para cada producto con información ampliada
- 📱 **Diseño responsive** para una experiencia óptima en dispositivos móviles y de escritorio
- ⚡ **Rápido y ligero**, sin necesidad de login ni registro
- 🎨 **Interfaz moderna** con animaciones suaves y diseño atractivo

## 🛠️ Tecnologías utilizadas

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Para tipado estático y mejor desarrollo
- **Tailwind CSS 4** - Para estilos utilitarios y diseño responsive
- **React 19** - Biblioteca de interfaz de usuario

## 🏗️ Estructura del proyecto

```
beauty-catalog/
├── app/                    # App Router de Next.js
│   ├── category/          # Páginas de categorías
│   ├── product/           # Páginas de detalle de productos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   ├── FilterBar.tsx      # Barra de filtros
│   ├── Header.tsx         # Encabezado de navegación
│   ├── ProductCard.tsx    # Tarjeta de producto
│   └── ProductGrid.tsx    # Grilla de productos
├── data/                  # Datos mock
│   └── products.ts        # Productos de ejemplo
├── types/                 # Definiciones de tipos TypeScript
│   └── product.ts         # Tipos de productos
└── public/                # Archivos estáticos
    └── images/            # Imágenes organizadas por categoría
```

## 🚀 Instalación y desarrollo

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/beauty-catalog.git
   cd beauty-catalog
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en** [http://localhost:3000](http://localhost:3000)

## 📊 Gestión de datos

### Versión actual
- **Archivo JSON local** con productos mockeados en `data/products.ts`
- **Imágenes estáticas** organizadas por categorías en `public/images/products/`

### Futuro
- **Integración con CMS headless** (ej: Strapi, Sanity) o una API backend
- **CDN para imágenes** (Cloudinary, AWS S3 + CloudFront, o Vercel Blob)

## 🎨 Manejo de imágenes

### Estrategia actual
- **Carpeta local**: `public/images/products/` organizadas por categorías
- **Next.js Image component**: Optimización automática y lazy loading
- **Placeholder**: Imagen SVG generada automáticamente para productos sin imagen

### Estructura recomendada
```
public/images/products/
├── skincare/
├── makeup/
├── haircare/
├── bodycare/
├── fragrance/
└── tools/
```

### Formatos recomendados
- **WebP/AVIF** para mejor compresión
- **Múltiples tamaños**: thumbnail (300x300), detail (800x800)
- **Placeholder blur** para mejor UX durante carga

## 🔧 Comandos disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con Turbopack

# Producción
npm run build        # Construir para producción
npm run start        # Ejecutar build de producción

# Otros
npm run lint         # Ejecutar linter
npm run type-check   # Verificar tipos TypeScript
```

## 🌐 Despliegue

Este proyecto está optimizado para desplegarse en **Vercel**:

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno** si es necesario
3. **Despliega automáticamente** con cada push a la rama principal

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/beauty-catalog)

## 📝 Próximas funcionalidades

- [ ] Búsqueda por texto
- [ ] Comparador de productos
- [ ] Lista de favoritos (localStorage)
- [ ] Integración con CMS
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro
- [ ] Multiidioma (i18n)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre** - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

Proyecto Link: [https://github.com/tu-usuario/beauty-catalog](https://github.com/tu-usuario/beauty-catalog)
