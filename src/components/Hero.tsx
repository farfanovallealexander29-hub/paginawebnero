import React from 'react';
import { ArrowRight, Flame, Clock, Leaf, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-zinc-950 text-white overflow-hidden font-sans">
      
      {/* Background Glows & Patterns */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide">
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>CALLE TULLU MAYU N° 375 • PERÚ</span>
          </div>

          {/* Main Slogan Title */}
          <h1 className="font-display font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
            SABOR RÁPIDO, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">DELICIOSO</span> Y PARA TODOS
          </h1>

          {/* Subtitle Description */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
            {BUSINESS_INFO.subSlogan} Desayunos energéticos por la mañana y las salchipapas, hamburguesas y broasters más crujientes por la noche.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-display font-bold px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 text-base sm:text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ver Nuestro Menú</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-emerald-400 border border-emerald-500/40 font-display font-bold px-8 py-4 rounded-2xl shadow-lg text-base sm:text-lg transition-all"
            >
              <span>Ordena por WhatsApp</span>
            </a>

          </div>

          {/* Key Value Props / Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 w-full">
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-red-500/10 text-red-400">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Desayunos 7 AM</p>
                <p className="text-zinc-400">Cafés & Chicharrón</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">100% Vegetariano</p>
                <p className="text-zinc-400">Burgers & Salchipapas</p>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Pagos Digitales</p>
                <p className="text-zinc-400">Yape, Plin & Tarjetas</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Hero Image Collage */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Hero Circle Frame */}
          <div className="relative w-72 sm:w-96 lg:w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-amber-500 to-red-600 p-2 shadow-2xl shadow-orange-500/20">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-900 bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80" 
                alt="Hamburguesa Monster Nero 375" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-white/95 backdrop-blur-md text-zinc-900 p-3.5 rounded-2xl shadow-2xl border border-amber-100 flex items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-lg">
                4.8★
              </div>
              <div className="text-xs">
                <p className="font-extrabold text-zinc-900">"¡Buenísimo sabor!"</p>
                <p className="text-zinc-500 truncate">+340 clientes felices</p>
              </div>
            </div>

            {/* Floating Price Tag */}
            <div className="absolute top-4 -right-2 sm:top-8 sm:-right-6 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-2xl shadow-xl font-display font-black transform rotate-3 animate-pulse">
              <span className="text-xs block opacity-90">DESDE</span>
              <span className="text-xl">S/ 10.00</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
