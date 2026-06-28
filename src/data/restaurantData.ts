import { Category, MenuItem, PaymentInfo, Review } from '../types';

export const BUSINESS_INFO = {
  name: "Nero de la 375",
  slogan: "Sabor rápido, delicioso y para todos en la 375",
  subSlogan: "La mejor comida rápida, desayunos contundentes y frituras crocantes con opciones 100% vegetarianas en el corazón de Tullumayu.",
  address: "Calle Tullu Mayu N° 375, Cusco - Perú",
  whatsappNumber: "51999999999",
  whatsappUrl: "https://wa.me/51999999999?text=Hola,%20quiero%20hacer%20un%20pedido%20en%20Nero%20de%20la%20375",
  hours: {
    breakfast: "7:00 AM - 11:30 AM",
    fastfood: "11:30 AM - 11:00 PM",
    days: "Lunes a Domingo"
  },
  deliveryTime: "20 - 35 min",
  minOrder: "S/ 10.00",
  rating: 4.8,
  totalReviews: 340
};

export const CATEGORIES: Category[] = [
  {
    id: 'todos',
    name: 'Todos los Platos',
    icon: 'UtensilsCrossed',
    description: 'Explora nuestro menú completo'
  },
  {
    id: 'desayunos',
    name: 'Desayunos',
    icon: 'Coffee',
    description: 'Energía cusqueña para arrancar el día (7am - 11:30am)'
  },
  {
    id: 'frituras',
    name: 'Frituras & Fast Food',
    icon: 'Flame',
    description: 'Crocantes, jugosas y contundentes'
  },
  {
    id: 'vegetariana',
    name: 'Comida Vegetariana',
    icon: 'Leaf',
    description: 'Sabor callejero 100% libre de carne'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- DESAYUNOS ---
  {
    id: 'des-1',
    name: 'Sándwich de Chicharrón "El 375"',
    description: 'Jugoso chicharrón de cerdo cusqueño, camote frito crocante y sarsa criolla con hierbabuena en pan artesanal crujiente.',
    price: 14.00,
    category: 'desayunos',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    badge: '★ Estrella',
    popular: true
  },
  {
    id: 'des-2',
    name: 'Desayuno Contundente Tullumayu',
    description: 'Dos huevos fritos o revueltos, tamalito cusqueño, porción de queso fresco serrano, pan de la casa y café pasado u hoyo natural.',
    price: 16.50,
    category: 'desayunos',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    badge: 'Recomendado'
  },
  {
    id: 'des-3',
    name: 'Tostada de Palta & Huevos Campestres',
    description: 'Pan campesino tostado con generosa palta fuerte machacada, tomate cherry, semillas de ajonjolí y huevos revueltos cremosos.',
    price: 13.00,
    category: 'desayunos',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80',
    isVeggie: true,
    badge: 'Opción Veggie'
  },
  {
    id: 'des-4',
    name: 'Jugo Especial de Frutas de Altura',
    description: 'Fresa, papaya, plátano de la selva, leche evaporada y un toque de miel de abeja o algarrobina cusqueña.',
    price: 8.00,
    category: 'desayunos',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80',
    isVeggie: true
  },
  {
    id: 'des-5',
    name: 'Café Pasado Orgánico de Quillabamba',
    description: 'Café 100% arábica de convención cusqueña recién molido e infusionado al momento. Intenso y aromático.',
    price: 6.00,
    category: 'desayunos',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    isVeggie: true
  },

  // --- FRITURAS & FAST FOOD ---
  {
    id: 'fri-1',
    name: 'Salchipapa Royal "Nero Extrema"',
    description: 'Crocantes papas nativas e industrias fritos en doble cocción, frankfurter ahumado, huevo montado frito, queso derretido y todas las cremas artesanas.',
    price: 18.00,
    category: 'frituras',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 Más Vendido',
    popular: true
  },
  {
    id: 'fri-2',
    name: 'Hamburguesa Monster Nero 375',
    description: '200g de carne artesanal de res jugosa, doble queso cheddar fundido, tocino crujiente, cebolla caramelizada, pepinillos y salsa secreta Nero.',
    price: 21.00,
    category: 'frituras',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Contundente',
    popular: true
  },
  {
    id: 'fri-3',
    name: 'Alitas Broaster Crocantes (8 pzs)',
    description: 'Alitas marinadas en especias andinas con empanizado ultra crujiente. Bañadas en tu salsa favorita: BBQ Ahumada, Buffalo Picante o Maracuyá.',
    price: 22.50,
    category: 'frituras',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    badge: '¡Super Crocante!'
  },
  {
    id: 'fri-4',
    name: 'Piqueo Friturero "Amigos de la 375"',
    description: 'Para compartir: Tequeños rellenos de queso, trozos de pollo broaster, papas fritas onduladas, aros de cebolla y 4 salsas de la casa.',
    price: 32.00,
    category: 'frituras',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: 'Para Compartir'
  },
  {
    id: 'fri-5',
    name: 'Choripán Artesanal Chimichurri Andino',
    description: 'Chorizo finas hierbas a la parrilla abierto en mariposa, aderezado con chimichurri cusqueño de huacatay y papas al hilo.',
    price: 15.00,
    category: 'frituras',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80'
  },

  // --- COMIDA VEGETARIANA ---
  {
    id: 'veg-1',
    name: 'Burger Veggie de Lentejas & Champiñones',
    description: 'Medallón artesanal proteico de lentejas pardas y champiñones salteados, queso mozzarella fundido, lechuga orgánica, tomate y mayonesa de palta.',
    price: 17.50,
    category: 'vegetariana',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80',
    badge: '🌱 100% Veggie',
    isVeggie: true,
    popular: true
  },
  {
    id: 'veg-2',
    name: 'Salchipapa Veggie "Pacha Verde"',
    description: 'Papas nativas crocantes de la región acompañadas de salchicha vegetal a base de soya y especias, champiñones al ajillo y cremas veganas.',
    price: 16.00,
    category: 'vegetariana',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80',
    badge: '¡Novedad!',
    isVeggie: true
  },
  {
    id: 'veg-3',
    name: 'Tequeños Crocantes de Queso & Guacamole (6 pzs)',
    description: 'Masa wonton doradita rellena de abundante queso andino derretido. Servidos con guacamole fresco casero y ají de pollería vegetariano.',
    price: 14.50,
    category: 'vegetariana',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isVeggie: true
  },
  {
    id: 'veg-4',
    name: 'Wrap Supremo Falafel & Hummus',
    description: 'Tortilla de trigo tostada rellena de croquetas de garbanzo frito (falafel), hummus cremoso, pepino fresco, cebolla morada y salsa de yogurt.',
    price: 16.00,
    category: 'vegetariana',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    badge: 'Saludable',
    isVeggie: true
  }
];

export const PROMOTIONS = [
  {
    id: 'promo-1',
    title: 'Combo Dúo Nero 375',
    description: '2 Hamburguesas Monster + 2 Papas grandes + 2 Bebidas o Chicha morada artesanal.',
    price: 42.00,
    originalPrice: 52.00,
    tag: 'Ahorras S/ 10.00',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'promo-2',
    title: 'Desayuno Pareja Tullumayu',
    description: '2 Sándwiches de Chicharrón + 2 Jugos de fruta grandes + 2 Cafés pasados.',
    price: 36.00,
    originalPrice: 44.00,
    tag: '¡Desayuno Perfecto!',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'promo-3',
    title: 'Combo Veggie Friends',
    description: '1 Burger Veggie + 1 Salchipapa Veggie + Tequeños de queso + 2 Bebidas naturales.',
    price: 39.00,
    originalPrice: 48.00,
    tag: 'Opción Libre de Carne',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
  }
];

export const PAYMENT_METHODS: PaymentInfo[] = [
  {
    id: 'yape',
    name: 'Yape',
    color: 'from-purple-600 to-violet-800 text-white',
    description: 'Escanea nuestro QR o yapea directo al número de Nero.',
    accountNumber: '999 999 999',
    ownerName: 'Nero de la 375 E.I.R.L.'
  },
  {
    id: 'plin',
    name: 'Plin',
    color: 'from-cyan-500 to-blue-600 text-white',
    description: 'Paga al instante sin comisiones desde Scotiabank, Interbank, BBVA o BanBif.',
    accountNumber: '999 999 999',
    ownerName: 'Nero de la 375 E.I.R.L.'
  },
  {
    id: 'tarjeta',
    name: 'Tarjetas Débito y Crédito',
    color: 'from-slate-800 to-zinc-900 text-white',
    description: 'Aceptamos Visa, Mastercard, American Express y Diners Club con POS inalámbrico en delivery o local.'
  },
  {
    id: 'efectivo',
    name: 'Efectivo S/',
    color: 'from-amber-500 to-orange-600 text-white',
    description: 'Paga contraentrega o en caja. Si necesitas vuelto para billetes grandes, avísanos en tu pedido.'
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    name: 'Carlos Mendoza',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: '¡La Salchipapa Royal Nero es increíble! Las papas nativas crocantes y las salsas marcan la diferencia. Pedí por WhatsApp y llegó caliente a San Blas en 20 minutos.',
    favoriteDish: 'Salchipapa Royal "Nero Extrema"',
    timeAgo: 'Hace 2 días'
  },
  {
    id: 'rev-2',
    name: 'Lucía Fernández (Turista)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Me hospedé en Tullu Mayu y encontrar opciones vegetarianas rápidas y ricas fue un salvavidas. La hamburguesa de lentejas y champiñones es un 10/10.',
    favoriteDish: 'Burger Veggie de Lentejas',
    timeAgo: 'Hace 1 semana'
  },
  {
    id: 'rev-3',
    name: 'Mateo Quispe',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'El pan con chicharrón del desayuno es contundente, crocante y con el camotito dulce exacto. Excelente atención en el local de la calle 375.',
    favoriteDish: 'Sándwich de Chicharrón',
    timeAgo: 'Hace 3 días'
  }
];
