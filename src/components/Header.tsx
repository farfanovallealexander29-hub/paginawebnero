import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, MapPin, Phone, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Combos & Promos', href: '#promociones' },
    { name: 'Menú', href: '#menu' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Métodos de Pago', href: '#pagos' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      {/* Top Announcements Bar */}
      <div className="bg-zinc-900 text-amber-400 text-xs py-2 px-4 font-sans border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white animate-pulse">
              ● ABIERTO HOY
            </span>
            <span className="hidden sm:inline">Desayunos desde las 7:00 AM | Fast Food & Frituras hasta 11:00 PM</span>
            <span className="sm:hidden">Calle Tullu Mayu 375</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <a href="#ubicacion" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Calle Tullu Mayu, Perú</span>
            </a>
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 font-sans ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-amber-100' 
          : 'bg-white py-4 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-md text-white font-display font-black text-xl group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 fill-amber-300 text-amber-200" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black tracking-tight text-2xl text-zinc-900 uppercase">
                  NERO
                </span>
                <span className="font-display font-black text-xl text-red-600">
                  375
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 -mt-1">
                Fast Food & Desayunos
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-700 hover:text-red-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Cart */}
          <div className="flex items-center gap-3">
            
            {/* Quick WhatsApp CTA Button */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-emerald-500/20 active:scale-95 transition-all text-sm"
            >
              <span>Pedir Ahora</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Ver pedido"
              className="relative p-2.5 bg-amber-50 hover:bg-amber-100 active:bg-amber-200 text-amber-900 rounded-xl transition-all border border-amber-200 flex items-center justify-center group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-700 hover:text-red-600 hover:bg-zinc-100 rounded-xl transition-colors"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200 px-4 pt-3 pb-6 mt-3">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-bold text-zinc-800 hover:text-red-600 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-100">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-4 py-3 rounded-xl shadow-lg shadow-emerald-600/20 text-center"
                >
                  <span>Pedir Directo por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
