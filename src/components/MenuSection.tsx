import React, { useState } from 'react';
import { Search, Plus, Check, Leaf, Flame, Coffee, UtensilsCrossed, Sparkles } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { CategoryId, MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  addedItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, addedItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Leaf': return <Leaf className="w-4 h-4" />;
      default: return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  return (
    <section id="menu" className="py-20 bg-white font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-wider uppercase">
            <UtensilsCrossed className="w-3.5 h-3.5 text-orange-600" />
            <span>Carta Oficial • Frescura y Sabor</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight">
            NUESTRO MENÚ DELICIOSO
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Desde los tradicionales sándwiches de chicharrón de la mañana hasta las hamburguesas y salchipapas más crocantes de la noche.
          </p>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-zinc-50 p-4 rounded-3xl border border-zinc-200 shadow-sm">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryId)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-orange-500/20 scale-105'
                      : 'bg-white text-zinc-700 hover:bg-zinc-200 border border-zinc-200/80'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar plato o ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-11 pr-4 py-3 rounded-2xl text-sm border border-zinc-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-zinc-900 placeholder-zinc-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-600"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Current Filter Info Banner */}
        <div className="mb-8 flex items-center justify-between text-xs text-zinc-500 px-2">
          <span>Mostrando <strong>{filteredItems.length}</strong> opciones deliciosas</span>
          {activeCategory === 'desayunos' && (
            <span className="text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 font-bold">
              ⏰ Horario de desayunos: 7:00 AM a 11:30 AM
            </span>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-zinc-200/80 flex flex-col group relative transform hover:-translate-y-1"
                >
                  
                  {/* Item Image Top */}
                  <div className="relative h-60 overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top Left Badge */}
                    {item.badge && (
                      <span className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur text-amber-400 border border-amber-500/40 font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-lg">
                        {item.badge}
                      </span>
                    )}

                    {/* Veggie Indicator */}
                    {item.isVeggie && (
                      <span className="absolute top-4 right-4 bg-emerald-600 text-white font-bold text-xs px-2.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1" title="Opción Vegetariana">
                        <Leaf className="w-3.5 h-3.5 fill-white" />
                        <span>Veggie</span>
                      </span>
                    )}

                  </div>

                  {/* Item Description Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-bold text-xl text-zinc-900 group-hover:text-red-600 transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Add Button */}
                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                          PRECIO
                        </span>
                        <span className="font-display font-black text-2xl text-zinc-900">
                          S/ {item.price.toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => onAddToCart(item)}
                        className={`flex items-center gap-2 font-display font-bold px-5 py-3 rounded-2xl text-sm transition-all shadow-md active:scale-95 ${
                          isAdded
                            ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                            : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4 animate-bounce" />
                            <span>¡Agregado!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Pedir esto</span>
                          </>
                        )}
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-50 rounded-3xl border border-dashed border-zinc-300">
            <Sparkles className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-zinc-800">No encontramos platos con "{searchQuery}"</h3>
            <p className="text-zinc-500 text-sm mt-1">Intenta buscar con otras palabras como salchipapa, chicharrón, queso o lentejas.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('todos'); }}
              className="mt-4 px-6 py-2.5 bg-zinc-900 text-white font-bold text-xs rounded-xl hover:bg-zinc-800"
            >
              Ver todo el menú
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
