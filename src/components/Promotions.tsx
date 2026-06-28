import React from 'react';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { PROMOTIONS, BUSINESS_INFO } from '../data/restaurantData';

interface PromotionsProps {
  onOrderPromo: (promoTitle: string, price: number) => void;
}

export const Promotions: React.FC<PromotionsProps> = ({ onOrderPromo }) => {
  return (
    <section id="promociones" className="py-16 bg-gradient-to-b from-amber-50 to-orange-50/50 font-sans border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ofertas Exclusivas de la 375</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 tracking-tight">
            COMBOS ESTRELLA & AHORRO
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Aprovecha nuestros paquetes contundentes diseñados para compartir con amigos, pareja o saciar el apetito feroz.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMOTIONS.map((promo) => (
            <div 
              key={promo.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-amber-900/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-amber-100 flex flex-col group transform hover:-translate-y-1"
            >
              
              {/* Promo Image Frame */}
              <div className="relative h-56 overflow-hidden bg-zinc-900">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white font-black text-xs uppercase px-3 py-1.5 rounded-xl shadow-md">
                  {promo.tag}
                </div>
              </div>

              {/* Promo Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl text-zinc-900 group-hover:text-red-600 transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {promo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 line-through font-semibold block">
                      Antes S/ {promo.originalPrice.toFixed(2)}
                    </span>
                    <span className="font-display font-black text-2xl text-red-600">
                      S/ {promo.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => onOrderPromo(promo.title, promo.price)}
                    className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold px-5 py-3 rounded-2xl shadow-md active:scale-95 transition-all text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Pedir Combo</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA to WhatsApp */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold text-zinc-500">
            ¿Quieres armar un combo personalizado para tu grupo o evento?{' '}
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Escríbenos directamente por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
