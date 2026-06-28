import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ShieldCheck, MapPin, User, MessageSquare } from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO, PAYMENT_METHODS } from '../data/restaurantData';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Yape');
  const [extraNotes, setExtraNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, cItem) => acc + cItem.item.price * cItem.quantity, 0);
  const deliveryFee = address.toLowerCase().includes('local') || address.toLowerCase().includes('mesa') ? 0 : 3.50;
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map((c) => `▪ ${c.quantity}x ${c.item.name} (S/ ${(c.item.price * c.quantity).toFixed(2)})`)
      .join('\n');

    let msg = `*¡Hola Nero de la 375! Quiero realizar el siguiente pedido:*\n\n` +
      `${itemsText}\n\n` +
      `*Subtotal:* S/ ${subtotal.toFixed(2)}\n` +
      `*Delivery:* ${deliveryFee === 0 ? 'Recojo en local / Mesa S/ 0.00' : `S/ ${deliveryFee.toFixed(2)}`}\n` +
      `*TOTAL A PAGAR:* *S/ ${total.toFixed(2)}*\n\n` +
      `*Método de pago:* ${paymentMethod}\n` +
      `*Nombre:* ${customerName || 'Cliente local'}\n` +
      `*Dirección / Mesa:* ${address || 'Por confirmar por chat'}\n` +
      `${extraNotes ? `*Notas adicionales:* ${extraNotes}` : ''}`;

    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMsg}`;

    window.open(url, '_blank');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer / Modal Container */}
      <div className="flex min-h-full items-end justify-center sm:items-center p-0 sm:p-4">
        <div className="relative w-full max-w-xl bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          
          {/* Modal Header */}
          <div className="bg-zinc-900 text-white p-5 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-600 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl tracking-tight">Tu Pedido en Nero</h3>
                <p className="text-xs text-amber-400">Calle Tullu Mayu 375 • Fast & Tasty</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            
            {/* Cart Items List */}
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-extrabold text-zinc-400 uppercase tracking-wider">
                  <span>Platos seleccionados</span>
                  <button 
                    onClick={onClearCart}
                    className="text-red-600 hover:underline flex items-center gap-1 font-bold"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Vaciar pedido</span>
                  </button>
                </div>

                <div className="divide-y divide-zinc-100 border border-zinc-200 rounded-2xl p-2 sm:p-4 bg-zinc-50/50">
                  {cartItems.map((cItem) => (
                    <div key={cItem.item.id} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img 
                          src={cItem.item.image} 
                          alt={cItem.item.name} 
                          className="w-12 h-12 rounded-xl object-cover border border-zinc-200 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-display font-bold text-sm text-zinc-900 truncate">
                            {cItem.item.name}
                          </h4>
                          <p className="text-xs text-red-600 font-extrabold">
                            S/ {cItem.item.price.toFixed(2)} unit.
                          </p>
                        </div>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-white border border-zinc-300 rounded-xl p-1 shadow-sm">
                        <button
                          onClick={() => onUpdateQuantity(cItem.item.id, -1)}
                          className="p-1 hover:bg-zinc-100 rounded text-zinc-600"
                          title="Quitar uno"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-display font-black text-sm px-2 text-zinc-800">
                          {cItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cItem.item.id, 1)}
                          className="p-1 hover:bg-zinc-100 rounded text-zinc-600"
                          title="Añadir otro"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => onRemoveItem(cItem.item.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 space-y-3">
                <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto" />
                <p className="font-display font-bold text-lg text-zinc-700">Tu pedido está vacío</p>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  Agrega salchipapas, chicharrón o hamburguesas desde nuestro menú para comenzar.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-red-600 text-white font-bold text-xs rounded-xl shadow-md hover:bg-red-700"
                >
                  Ir al menú
                </button>
              </div>
            )}

            {/* Customer Details Form */}
            {cartItems.length > 0 && (
              <div className="space-y-4 pt-2">
                <h4 className="font-display font-black text-sm text-zinc-800 uppercase tracking-wider">
                  Datos para tu entrega inmediata
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Tu Nombre Apellido..."
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-zinc-50 pl-10 pr-3 py-2.5 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Dirección exacta o 'Mesa #'"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-zinc-50 pl-10 pr-3 py-2.5 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                  <textarea
                    rows={2}
                    placeholder="¿Alguna crema extra? ¿Pocas papas? ¿Billetes de S/100 para vuelto?"
                    value={extraNotes}
                    onChange={(e) => setExtraNotes(e.target.value)}
                    className="w-full bg-zinc-50 pl-10 pr-3 py-2 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider block">
                    Elige cómo vas a pagar:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {PAYMENT_METHODS.map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.name)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === pm.name
                            ? 'border-red-600 bg-red-50 text-red-700 font-extrabold shadow-sm ring-1 ring-red-600'
                            : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-semibold text-xs'
                        }`}
                      >
                        <span className="block text-xs">{pm.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Modal Footer with Total & CTA */}
          {cartItems.length > 0 && (
            <div className="bg-zinc-50 p-6 border-t border-zinc-200 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span className="font-bold">S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Delivery estimado</span>
                  <span className="font-bold">{deliveryFee === 0 ? '¡Gratis (Local)' : `S/ ${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-black text-zinc-900 pt-2 border-t border-zinc-200">
                  <span>Total a Pagar</span>
                  <span className="text-red-600 font-display text-2xl">S/ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-display font-black text-lg py-4 rounded-2xl shadow-xl shadow-emerald-600/30 active:scale-98 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" />
                <span>Confirmar Pedido por WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Te responderemos al instante para coordinar tu entrega</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
