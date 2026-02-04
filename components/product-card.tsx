'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="relative block aspect-4/3 overflow-hidden">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price Row */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-foreground transition-colors hover:text-blue-600">
              {product.title}
            </h3>
          </Link>
        </div>

        {/* Add to Cart Button */}
        <Link href={`/product/${product.id}`}>
          <Button
            className="cursor-pointer h-10 w-full rounded-lg bg-blue-50 text-blue-900 hover:bg-blue-100"
            variant="ghost">
            <Eye className="mr-2 size-4" />
            Batafsil
          </Button>
        </Link>
      </div>
    </div>
  );
}
