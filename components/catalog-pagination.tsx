'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CatalogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CatalogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CatalogPaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="size-10 rounded-lg bg-transparent"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}>
        <ChevronLeft className="size-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {pages.map((page, index) => (
        <span key={index}>
          {page === '...' ? (
            <span className="px-2 text-muted-foreground">...</span>
          ) : (
            <Button
              variant={page === currentPage ? 'default' : 'outline'}
              size="icon"
              className={`size-10 rounded-lg ${
                page === currentPage ? 'bg-blue-900 text-white hover:bg-blue-800' : ''
              }`}
              onClick={() => onPageChange(page as number)}>
              {page}
            </Button>
          )}
        </span>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="size-10 rounded-lg bg-transparent"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}>
        <ChevronRight className="size-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}
