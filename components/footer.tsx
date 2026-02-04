import Link from 'next/link';
import { Leaf, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const shopLinks = [
  { label: 'Vegetables', href: '/catalog?category=vegetables' },
  { label: 'Herbs & Edible Flowers', href: '/catalog?category=herbs' },
  { label: 'Tools & Supplies', href: '/catalog?category=tools' },
  { label: 'Gift Cards', href: '/gift-cards' },
];

const supportLinks = [
  { label: 'Planting Guides', href: '/guides' },
  { label: 'Shipping Info', href: '/shipping' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Contact Us', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Brand */}
        <div className="space-y-4 flex justify-center items-center flex-col">
          <div className="flex items-center  gap-2">
            <Image src="/logo.png" width={80} height={80} alt="" />
          </div>
          <p className="text-sm text-blue-900">
            Supplying high-quality, GMO-free heirloom seeds to gardeners since 2010. Dedicated to
            biodiversity and sustainable growing.
          </p>
          <Link
            href="mailto:unagriseeds@gmail.com"
            className="flex items-center gap-2 text-blue-900 hover:text-blue-800">
            <Mail size={16} />
            unagriseeds@gmail.com
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-4">
        <p className="text-center text-sm text-blue-900">
          © 2026 UN Agriseeds. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}
