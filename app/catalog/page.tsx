'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { CatalogPagination } from '@/components/catalog-pagination';
import { products } from '@/data/products';

const ITEMS_PER_PAGE = 8;

export default function CatalogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f7f6]">
      <Header />

      {/* Breadcrumb */}
      {/* <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-green-600 hover:text-green-700">
              Home
            </Link>
            <ChevronRight className="size-4 text-muted-foreground" />
            <Link href="/catalog" className="text-green-600 hover:text-green-700">
              Catalog
            </Link>
            <ChevronRight className="size-4 text-muted-foreground" />
            <span className="text-foreground">Vegetable Seeds</span>
          </nav>
        </div>
      </div> */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Header Row */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-blue-900">
                <span className="font-semibold text-foreground">{products.length}</span> ta nav
                ko'rsatilgan
              </p>
            </div>

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl border bg-white">
                <p className="text-muted-foreground">
                  No products match your filters. Try adjusting your criteria.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8">
                <CatalogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
