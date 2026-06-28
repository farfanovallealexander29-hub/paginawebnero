import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-green-600/40 border-2 border-white transition-all transform hover:scale-105 group"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-display font-black text-sm sm:text-base leading-none tracking-tight">
            ¡PIDE POR WHATSAPP!
          </span>
          <span className="text-[10px] font-bold opacity-90 tracking-wider uppercase mt-0.5">
            Atención Inmediata
          </span>
        </div>
      </a>
    </div>
  );
};
