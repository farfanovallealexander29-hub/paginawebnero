import React from 'react';
import { Flame, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-12 font-sans border-t-8 border-[#FF4D00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF4D00] rounded-full flex items-center justify-center font-display font-black text-2xl text-white">
                N
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                NERO DE LA 375
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pr-4">
              Restaurante cusqueño de comida rápida, desayunos contundentes y frituras con opciones 100% vegetarianas. Calidad y sabor al instante en Tullu Mayu.
            </p>
            <div className="pt-2">
              <a 
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#1ebd59] transition-colors shadow-md"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Pedidos: 999 999 999</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-black text-sm uppercase tracking-widest text-[#FF4D00]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-bold text-zinc-300">
              <li><a href="#hero" className="hover:text-[#FF4D00] transition-colors">Inicio & Promociones</a></li>
              <li><a href="#menu" className="hover:text-[#FF4D00] transition-colors">Carta Completa (Desayunos & Frituras)</a></li>
              <li><a href="#nosotros" className="hover:text-[#FF4D00] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#pagos" className="hover:text-[#FF4D00] transition-colors">Métodos de Pago (Yape / Plin)</a></li>
              <li><a href="#ubicacion" className="hover:text-[#FF4D00] transition-colors">Ubicación en Cusco</a></li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-display font-black text-sm uppercase tracking-widest text-[#FF4D00]">
              Datos de Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                <span>Calle Tullu Mayu N° 375, Cusco - Perú</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                <span>WhatsApp Delivery: <strong>+51 999 999 999</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                <div>
                  <p>Lunes a Domingo:</p>
                  <p className="text-zinc-400">Desayunos: 7am - 11:30am | Fast Food: 11:30am - 11pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} Nero de la 375 E.I.R.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1 normal-case text-zinc-400 font-normal">
            <span>Optimizado para clientes locales con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>en Perú</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
