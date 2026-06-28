import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Promotions } from './components/Promotions';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartModal } from './components/CartModal';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Total de items en el carrito para mostrar en el badge del header
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const addedItemIds = cartItems.map((c) => c.item.id);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null);
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderPromo = (promoTitle: string, price: number) => {
    // Creamos un MenuItem temporal para la promoción o combo
    const promoItem: MenuItem = {
      id: `promo-${promoTitle.toLowerCase().replace(/\s+/g, '-')}`,
      name: promoTitle,
      description: 'Combo u oferta especial seleccionada desde la sección de promociones.',
      price: price,
      category: 'frituras',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      badge: '🎯 Promoción'
    };
    handleAddToCart(promoItem);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-zinc-900 font-sans selection:bg-[#FF4D00] selection:text-white relative">
      {/* Encabezado con navegación y carrito */}
      <Header 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Sección principal Hero con eslogan y llamados a la acción */}
      <main className="flex-1">
        <Hero />
        
        <Promotions onOrderPromo={handleOrderPromo} />
        
        <MenuSection 
          onAddToCart={handleAddToCart}
          addedItemIds={addedItemIds}
        />
        
        <AboutSection />
      </main>

      {/* Pie de página con datos de contacto, horarios y ubicación */}
      <Footer />

      {/* Botón flotante permanente de WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal / cajón lateral del carrito de pedidos */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
