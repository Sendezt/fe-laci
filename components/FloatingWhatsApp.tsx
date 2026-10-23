'use strict';

import React from 'react';
import { Icon } from '@/components/Icon';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '',
  message = 'Halo Warung, mau tanya stok dan harga barang',
}) => {
  const encodedMsg = encodeURIComponent(message);
  const waUrl = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodedMsg}`
    : `https://wa.me/?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-primary text-on-primary pl-4 pr-5 py-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
        </span>
        <Icon icon={MessageCircle} className="size-5" />
        <span className="text-xs sm:text-sm font-bold">Tanya via WhatsApp</span>
      </a>
    </div>
  );
};
