'use client';

import React from 'react';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ShoppingCart, Minus, Plus, Phone } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useState } from 'react';
import { PrettyDescription } from '@/components/pretty-desc';
import dynamic from 'next/dynamic';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const PrettyDescription = dynamic(
    () => import('@/components/pretty-desc').then((m) => m.PrettyDescription),
    { ssr: false },
  );

  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f6f7f6]">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-foreground">Product not found</h1>
          <p className="mt-2 text-muted-foreground">
            The product you are looking for does not exist.
          </p>
          <Link href="/catalog">
            <Button className="mt-6 bg-green-500 text-white hover:bg-green-600">
              Back to Catalog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7f6]">
      <Header />

      {/* Breadcrumb */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <div className="grid gap-8 p-6 md:grid-cols-2 lg:p-8">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-foreground">{product.title}</h1>

              <p className="mt-4 text-blue-900">
                <PrettyDescription text={product.description} />
              </p>

              {/* Quantity and Add to Cart */}
              <div className="mt-8 flex items-center gap-4">
                <Button className="flex-1 h-12 bg-blue-900 text-white hover:bg-blue-800">
                  <Phone className="mr-2 size-5" />
                  Batafsil
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
