'use strict';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { Icon } from '@/components/Icon';
import { Store } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Format price in Indonesian thousand-separator notation
  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price);

  return (
    <div className="flex flex-col justify-between bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden border border-surface-container-high/70 group">
      <div>
        {/* Category & Availability Header */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-surface-container-low text-secondary">
            {product.categoryLabel || product.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            {product.status}
          </span>
        </div>

        {/* Product Image */}
        <div className="w-full h-36 bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center relative mb-3 group-hover:scale-[1.01] transition-transform">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            priority={parseInt(product.id) <= 4}
          />
        </div>

        {/* Product Title & Description */}
        <h3 className="text-sm sm:text-base font-semibold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Price & Location Section */}
      <div className="mt-4 pt-1">
        <div className="bg-surface-container-low px-3 py-1.5 rounded-lg flex items-baseline justify-between border-l-4 border-primary">
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-primary">Rp</span>
            <span className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
              {formattedPrice}
            </span>
          </div>
          <span className="text-xs text-on-surface-variant font-medium">
            {product.unit}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between text-on-surface-variant">
          <span className="text-[11px] sm:text-xs flex items-center gap-1 text-secondary font-medium truncate">
            <Icon icon={Store} className="size-[14px] shrink-0" />
            <span className="truncate">{product.location}</span>
          </span>
          <span className="text-[11px] sm:text-xs text-outline shrink-0 ml-1">
            {product.badge}
          </span>
        </div>
      </div>
    </div>
  );
};
