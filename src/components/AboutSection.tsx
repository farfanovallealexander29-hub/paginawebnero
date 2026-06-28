import React from 'react';
import { MapPin, Clock, ShieldCheck, Heart, Award, Flame, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, PAYMENT_METHODS, TESTIMONIALS } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#FFF8F0] font-sans border-t border-orange-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* --- SOBRE NOSOTROS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" 
                alt="Nero de la 375 Restaurante" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Badge Flotante */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 z-20 bg-[#FF4D00] text-white p-6 rounded-3xl shadow-xl border-4 border-[#FFF8F0] max-w-xs transform rotate-2">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 shrink-0 text-yellow-300" />
                <div>
                  <p className="font-display font-black text-xl leading-none">100% CUSQUEÑO</p>
                  <p className="text-xs opacity-90 mt-1 font-medium">Sabor auténtico en Tullumayu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] text-xs font-black tracking-widest uppercase">
              <Heart className="w-4 h-4 fill-[#FF4D00]" />
              <span>Nuestra Pasión Callejera</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#1A1A1A] tracking-tight leading-[1.05]">
              EL CORAZÓN DEL SABOR RÁPIDO EN <span className="text-[#FF4D00]">LA CALLE 375</span>
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              Nacimos con una idea clara en la histórica <strong>Calle Tullu Mayu N° 375</strong>: demostrar que la comida rápida puede ser contundente, elaborada al momento con papas nativas reales y accesible para todos los gustos.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Ya sea que busques el clásico sándwich de chicharrón cusqueño con café pasado por la mañana, una hamburguesa monstruosa de carne artesanal al mediodía o opciones 100% vegetarianas libres de carne, en Nero tenemos mesa y sazón para ti.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white shadow-sm border border-orange-100">
                <CheckCircle2 className="w-5 h-5 text-[#FF4D00] shrink-0" />
                <span className="text-sm font-bold text-zinc-800">Insumos locales frescos del día</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white shadow-sm border border-orange-100">
                <CheckCircle2 className="w-5 h-5 text-[#FF4D00] shrink-0" />
                <span className="text-sm font-bold text-zinc-800">Salsas artesanales secretas</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white shadow-sm border border-orange-100">
                <CheckCircle2 className="w-5 h-5 text-[#FF4D00] shrink-0" />
                <span className="text-sm font-bold text-zinc-800">Menú especial vegetariano</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white shadow-sm border border-orange-100">
                <CheckCircle2 className="w-5 h-5 text-[#FF4D00] shrink-0" />
                <span className="text-sm font-bold text-zinc-800">Atención veloz por WhatsApp</span>
              </div>
            </div>

          </div>

        </div>

        {/* --- MÉTODOS DE PAGO --- */}
        <div id="pagos" className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-orange-100 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs uppercase font-black tracking-widest text-[#FF4D00]">Facilidad Total</span>
            <h3 className="font-display font-black text-3xl text-[#1A1A1A]">MÉTODOS DE PAGO ACEPTADOS</h3>
            <p className="text-zinc-600 text-sm">Paga sin complicaciones tanto en nuestro local de Tullumayu como en pedidos con delivery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAYMENT_METHODS.map((method) => (
              <div 
                key={method.id}
                className="p-6 rounded-2xl bg-[#FFF8F0] border-2 border-orange-100/80 hover:border-[#FF4D00] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className={`inline-block px-4 py-2 rounded-xl font-display font-black text-lg shadow-sm mb-4 bg-gradient-to-r ${method.color}`}>
                    {method.name}
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                    {method.description}
                  </p>
                </div>

                {method.accountNumber && (
                  <div className="mt-4 pt-3 border-t border-orange-200/60">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold block">Número oficial</span>
                    <span className="font-mono font-black text-sm text-[#1A1A1A]">{method.accountNumber}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-zinc-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-sm">¿Pedidos corporativos o pagos mixtos?</h4>
                <p className="text-xs text-zinc-400">Coordinamos transferencias interbancarias directas por WhatsApp con boleta o factura.</p>
              </div>
            </div>
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#FF4D00] hover:bg-[#E64600] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap"
            >
              Consultar Pagos
            </a>
          </div>
        </div>

        {/* --- UBICACIÓN & HORARIOS --- */}
        <div id="ubicacion" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-24">
          
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D00] text-white text-xs font-black uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ubicación Estratégica</span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                VISÍTANOS EN CUSCO
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Estamos ubicados en una de las calles más transitadas y accesibles del centro histórico. Ideal para comer aquí o recoger tu pedido al paso.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 border-b border-zinc-800 pb-4">
                  <MapPin className="w-5 h-5 text-[#FF4D00] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Dirección Exacta</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Calle Tullu Mayu N° 375, Cusco - Perú</p>
                    <p className="text-[11px] text-amber-400 font-semibold mt-1">A media cuadra de la avenida principal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-2">
                  <Clock className="w-5 h-5 text-[#FF4D00] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm">Horarios de Atención</p>
                    <div className="text-xs text-zinc-400 mt-1 space-y-1">
                      <p>☕ <strong>Desayunos:</strong> 7:00 AM - 11:30 AM</p>
                      <p>🍔 <strong>Fast Food & Frituras:</strong> 11:30 AM - 11:00 PM</p>
                      <p className="text-emerald-400 font-bold pt-1">Abierto todos los días (Lunes a Domingo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Calle+Tullumayu+375+Cusco+Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-white hover:bg-zinc-100 text-[#1A1A1A] text-center font-display font-black text-sm rounded-2xl uppercase tracking-wider transition-all block shadow-lg"
            >
              Abrir en Google Maps
            </a>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border-2 border-orange-100 min-h-[360px] bg-zinc-200 relative">
            {/* Embedded Google Maps Reference */}
            <iframe
              title="Mapa de Ubicación Nero de la 375"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.3512345!2d-71.975!3d-13.518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d000000001%3A0x0!2sCalle%20Tullumayu%2C%20Cusco%2008002!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* --- TESTIMONIALS / CLIENTES --- */}
        <div className="space-y-10 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">LO QUE DICEN NUESTROS VECINOS</h3>
            <p className="text-zinc-600 text-sm">Sabor respaldado por cientos de comensales locales y viajeros en Cusco.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white p-6 rounded-3xl shadow-md border border-orange-100 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="text-xs">
                    <p className="font-bold text-zinc-900">{rev.name}</p>
                    <p className="text-[#FF4D00] font-semibold">Favorito: {rev.favoriteDish}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
