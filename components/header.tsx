'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Leaf } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navLinks = [
  { label: 'Vegetables', href: '/catalog?category=vegetables' },
  { label: 'Fruits', href: '/catalog?category=fruits' },
  { label: 'Herbs', href: '/catalog?category=herbs' },
  { label: 'Flowers', href: '/catalog?category=flowers' },
  { label: 'Specials', href: '/catalog?category=specials', special: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white py-2">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={80} height={80} alt="" />
        </Link>
      </div>
    </header>
  );
}
