import { MenuItem, DealItem, ExtraTopping, GalleryItem, Testimonial } from '../types';
import donPizzaAmbienceImg from '../assets/images/don_pizza_ambience_1785840765828.jpg';
import softDrinkBottleImg from '../assets/images/soft_drink_bottle_1785841027598.jpg';
import mineralWaterBottleImg from '../assets/images/mineral_water_bottle_1785841049454.jpg';
import crispyFriesImg from '../assets/images/crispy_french_fries_1785841350057.jpg';
import donSpecialBurgerImg from '../assets/images/don_special_burger_1785844999346.jpg';
import donCuricksPastaImg from '../assets/images/don_curicks_pasta_1785845263345.jpg';
import petiBurgerPhotoImg from '../assets/images/peti_burger_photo_1785921325188.jpg';
import classicPetiBurgerImg from '../assets/images/classic_peti_burger_1785921346697.jpg';
import zingerBurgerMenuImg from '../assets/images/zinger_burger_menu_1785921746842.jpg';
import wrapChickenMenuImg from '../assets/images/wrap_chicken_menu_1785921764178.jpg';
import hotWingsMenuImg from '../assets/images/hot_wings_menu_1785921782870.jpg';
import pizzaSandwichMenuImg from '../assets/images/pizza_sandwich_menu_1785921799887.jpg';
import crownCrustPizzaImg from '../assets/images/crown_crust_pizza_1785921817223.jpg';
import squareSpecialPizzaImg from '../assets/images/square_special_pizza_1785921834920.jpg';
import chickenSpinRollImg from '../assets/images/chicken_spin_roll_1785921854793.jpg';
import nuggetsPlatterImg from '../assets/images/nuggets_platter_1785921870992.jpg';
import chickenSupremePizzaImg from '../assets/images/chicken_supreme_pizza_1785922184746.jpg';
import chickenTandooriPizzaImg from '../assets/images/chicken_tandoori_pizza_1785922454776.jpg';
import chickenTikkaPizzaImg from '../assets/images/chicken_tikka_pizza_1785922470667.jpg';
import chickenFajitaPizzaImg from '../assets/images/chicken_fajita_pizza_1785922482725.jpg';
import mayoGarlicPizzaImg from '../assets/images/mayo_garlic_pizza_1785922355084.jpg';
import donSpecialPizzaImg from '../assets/images/don_special_pizza_1785922370572.jpg';
import malaiBotiPizzaImg from '../assets/images/malai_boti_pizza_1785922385784.jpg';
import behariKababPizzaImg from '../assets/images/behari_kabab_pizza_1785922401452.jpg';
import kababStufferPizzaImg from '../assets/images/kabab_stuffer_pizza_1785922416152.jpg';
import jalapenoBurgerMenuImg from '../assets/images/jalapeno_burger_menu_1785922760726.jpg';
import chipotleBurgerMenuImg from '../assets/images/chipotle_burger_menu_1785922783869.jpg';
import donSpecialBurgerCardImg from '../assets/images/don_special_burger_card_1785922800852.jpg';
import crispyBoneless2pcsImg from '../assets/images/crispy_boneless_2pcs_1785922997368.jpg';
import wrapChickenGrillImg from '../assets/images/wrap_chicken_grill_1785923148806.jpg';
import wrapCrispyZingerImg from '../assets/images/wrap_crispy_zinger_1785923230431.jpg';
import bakedCheesyPastaImg from '../assets/images/baked_cheesy_pasta_1785923449106.jpg';
import donSpecialPlatter900Img from '../assets/images/don_special_platter_900_1785923626736.jpg';
import pizzaSandwichCardImg from '../assets/images/pizza_sandwich_card_1785923640707.jpg';
import chickenSpinRollCardImg from '../assets/images/chicken_spin_roll_card_1785923883580.jpg';
import malaiBotiRollCardImg from '../assets/images/malai_boti_roll_card_1785924038346.jpg';
import deal1ComboImg from '../assets/images/deal_1_combo_1785924947544.jpg';
import deal2ComboImg from '../assets/images/deal_2_combo_1785925416085.jpg';

export const PIZZA_ITEMS: MenuItem[] = [
  {
    id: 'p1',
    name: 'Chicken Tandoori',
    category: 'pizza',
    description: 'Tender chicken marinated in traditional Pakistani tandoori spices, topped with red onions and mozzarella cheese.',
    image: chickenTandooriPizzaImg,
    badge: 'Classic Favorite',
    prices: [
      { size: 'Small (8")', amount: 400 },
      { size: 'Medium (11")', amount: 900 },
      { size: 'Large (14")', amount: 1200 },
    ],
  },
  {
    id: 'p2',
    name: 'Chicken Tikka',
    category: 'pizza',
    description: 'Smoky chicken tikka chunks with crunchy bell peppers, diced onions, and rich melting cheese.',
    image: chickenTikkaPizzaImg,
    badge: 'Best Seller',
    prices: [
      { size: 'Small (8")', amount: 400 },
      { size: 'Medium (11")', amount: 900 },
      { size: 'Large (14")', amount: 1200 },
    ],
  },
  {
    id: 'p3',
    name: 'Chicken Fajita',
    category: 'pizza',
    description: 'Mexican-style spicy fajita chicken, green peppers, sweet corn, onions, and jalapenos.',
    image: chickenFajitaPizzaImg,
    prices: [
      { size: 'Small (8")', amount: 400 },
      { size: 'Medium (11")', amount: 900 },
      { size: 'Large (14")', amount: 1200 },
    ],
  },
  {
    id: 'p4',
    name: 'Chicken Supreme',
    category: 'pizza',
    description: 'Loaded with chicken tikka, spicy fajita chicken, black olives, mushrooms, peppers, and double cheese.',
    image: chickenSupremePizzaImg,
    badge: 'Chef Special',
    prices: [
      { size: 'Small (8")', amount: 400 },
      { size: 'Medium (11")', amount: 900 },
      { size: 'Large (14")', amount: 1200 },
    ],
  },
  {
    id: 'p5',
    name: 'Mayo Garlic',
    category: 'pizza',
    description: 'Infused with roasted garlic butter, creamy garlic sauce base, smoked chicken, mushrooms, and herbs.',
    image: mayoGarlicPizzaImg,
    prices: [
      { size: 'Small (8")', amount: 450 },
      { size: 'Medium (11")', amount: 950 },
      { size: 'Large (14")', amount: 1350 },
    ],
  },
  {
    id: 'p6',
    name: 'Don Special',
    category: 'pizza',
    description: 'Our signature masterwork loaded with double chicken, seekh kabab chunks, jalapenos, secret sauce & crown cheese.',
    image: donSpecialPizzaImg,
    badge: 'House Signature',
    prices: [
      { size: 'Small (8")', amount: 450 },
      { size: 'Medium (11")', amount: 950 },
      { size: 'Large (14")', amount: 1350 },
    ],
  },
  {
    id: 'p7',
    name: 'Malai Boti',
    category: 'pizza',
    description: 'Melt-in-your-mouth creamy malai chicken boti, topped with bell peppers, green onions and garlic cream cheese sauce.',
    image: malaiBotiPizzaImg,
    prices: [
      { size: 'Small (8")', amount: 450 },
      { size: 'Medium (11")', amount: 950 },
      { size: 'Large (14")', amount: 1350 },
    ],
  },
  {
    id: 'p8',
    name: 'Behari Kabab',
    category: 'pizza',
    description: 'Authentic spiced Behari chicken kabab chunks with pickled onions, mint cream drizzle, and extra mozzarella.',
    image: behariKababPizzaImg,
    prices: [
      { size: 'Small (8")', amount: 450 },
      { size: 'Medium (11")', amount: 950 },
      { size: 'Large (14")', amount: 1400 },
    ],
  },
  {
    id: 'p9',
    name: 'Kabab Stuffer Special',
    category: 'pizza',
    description: 'Crust stuffed with savory juicy chicken seekh kababs and liquid cheddar cheese, topped with spicy chicken Supreme.',
    image: kababStufferPizzaImg,
    badge: 'Stuffed Crust',
    prices: [
      { size: 'Medium (11")', amount: 1100 },
      { size: 'Large (14")', amount: 1550 },
    ],
  },
  {
    id: 'p10',
    name: 'Crown Crust Special',
    category: 'pizza',
    description: 'Hand-shaped crown crust pockets filled with melted garlic cream cheese, topped with tandoori & tikka chicken.',
    image: crownCrustPizzaImg,
    badge: 'Crown Special',
    prices: [
      { size: 'Medium (11")', amount: 1100 },
      { size: 'Large (14")', amount: 1550 },
    ],
  },
  {
    id: 'p11',
    name: 'Square Special',
    category: 'pizza',
    description: 'Deep-dish artisanal square cut pizza packed with quadruple cheese, loaded meat feast, and thick garlic crust.',
    image: squareSpecialPizzaImg,
    badge: 'Grand Square',
    prices: [
      { size: 'Medium (11")', amount: 1200 },
      { size: 'Large (14")', amount: 1700 },
    ],
  },
];

export const OTHER_MENU_ITEMS: MenuItem[] = [
  // BURGERS
  {
    id: 'b1',
    name: 'Peti Burger',
    category: 'burgers',
    description: 'Crispy fried chicken patty topped with fresh lettuce, mayo, and classic tangy burger sauce in a toasted sesame bun.',
    image: classicPetiBurgerImg,
    prices: [{ size: 'Standard', amount: 280 }],
  },
  {
    id: 'b2',
    name: 'Zinger Burger',
    category: 'burgers',
    description: 'Extra crispy spicy double-crush chicken thigh fillet with iceberg lettuce, special Don zinger sauce & cheese.',
    image: zingerBurgerMenuImg,
    badge: 'Customer Favorite',
    prices: [{ size: 'Standard', amount: 350 }],
  },
  {
    id: 'b3',
    name: 'Jalapeno Burger',
    category: 'burgers',
    description: 'Juicy crispy zinger fillet topped with fire-roasted jalapenos, spicy pepperjack sauce, and melted cheese slice.',
    image: jalapenoBurgerMenuImg,
    prices: [{ size: 'Standard', amount: 400 }],
  },
  {
    id: 'b4',
    name: 'Chipotle Burger',
    category: 'burgers',
    description: 'Smoky Chipotle sauce over hand-breaded crispy chicken fillet, crispy onions, melted cheese, and fresh greens.',
    image: chipotleBurgerMenuImg,
    prices: [{ size: 'Standard', amount: 420 }],
  },
  {
    id: 'b5',
    name: 'Don Special Burger',
    category: 'burgers',
    description: 'Double crispy zinger fillet stacked with egg, cheese, turkey bacon bits, jalapenos, and Don secret relish.',
    image: donSpecialBurgerCardImg,
    badge: 'Monster Feast',
    prices: [{ size: 'Standard', amount: 650 }],
  },
  {
    id: 'b6',
    name: 'Crispy Chicken Boneless',
    category: 'burgers',
    description: 'Golden tender boneless chicken strips fried to perfection, served with garlic mayo dip and seasoned fries.',
    image: crispyBoneless2pcsImg,
    prices: [{ size: 'Standard', amount: 550 }],
  },

  // WRAPS & ROLLS
  {
    id: 'w1',
    name: 'Wrap Chicken',
    category: 'wraps',
    description: 'Crispy fried chicken strip rolled in a warm toasted tortilla with shredded lettuce, tomatoes, and garlic mayo.',
    image: wrapChickenGrillImg,
    prices: [{ size: 'Standard', amount: 300 }],
  },
  {
    id: 'w2',
    name: 'Wrap Crispy',
    category: 'wraps',
    description: 'Savory crispy zinger boneless chicken strip, crunchy iceberg, and signature spicy dip wrapped in a toasted tortilla.',
    image: wrapCrispyZingerImg,
    prices: [{ size: 'Standard', amount: 350 }],
  },
  {
    id: 'r1',
    name: 'Chicken Spin Roll',
    category: 'rolls',
    description: 'Stuffed flaky roll with spinach, grilled seasoned chicken, melted mozzarella cheese, and garlic cream sauce.',
    image: chickenSpinRollCardImg,
    prices: [{ size: 'Standard', amount: 490 }],
  },
  {
    id: 'r2',
    name: 'Malai Boti Roll',
    category: 'rolls',
    description: 'Creamy charcoal-grilled malai boti chicken cubes rolled with mint chutney, ring onions in a flaky paratha.',
    image: malaiBotiRollCardImg,
    badge: 'Popular Roll',
    prices: [{ size: 'Standard', amount: 550 }],
  },

  // PASTA
  {
    id: 'pa1',
    name: 'Special Pasta',
    category: 'pasta',
    description: 'Penne pasta tossed in rich red & white mixed sauce with sauteed chicken tikka, black olives, bell peppers and baked cheese.',
    image: bakedCheesyPastaImg,
    prices: [
      { size: 'Single', amount: 410 },
      { size: 'Family', amount: 750 },
    ],
  },
  {
    id: 'pa2',
    name: 'Macaroni Pasta',
    category: 'pasta',
    description: 'Elbow macaroni baked in rich cheddar cheese sauce, topped with seasoned minced chicken and crispy herbs.',
    image: bakedCheesyPastaImg,
    prices: [
      { size: 'Single', amount: 350 },
      { size: 'Family', amount: 750 },
    ],
  },
  {
    id: 'pa3',
    name: 'Don Curicks Pasta',
    category: 'pasta',
    description: 'Our signature spicy Alfredo cream pasta loaded with grilled Cajun chicken, mushrooms, parmesan, and garlic bread.',
    image: bakedCheesyPastaImg,
    badge: 'Don Signature',
    prices: [
      { size: 'Single', amount: 450 },
      { size: 'Family', amount: 750 },
    ],
  },

  // PLATTERS & FRIES
  {
    id: 'pl1',
    name: 'Don Special Platter',
    category: 'platters',
    description: 'Combination feast: 2 Mini Zinger Burgers, 3 Hot Wings, Fries, Garlic Dip, and 2 Spin Rolls served sizzling.',
    image: donSpecialPlatter900Img,
    badge: 'Ultimate Feast',
    prices: [{ size: 'Full Platter', amount: 900 }],
  },
  {
    id: 'pl2',
    name: 'Pizza Sandwich',
    category: 'platters',
    description: 'Crispy toasted pan bread stuffed with pizza sauce, melted double mozzarella, spicy chicken tikka, olives & corn.',
    image: pizzaSandwichCardImg,
    prices: [{ size: 'Standard', amount: 700 }],
  },
  {
    id: 'fr1',
    name: 'Crispy Fries',
    category: 'fries',
    description: 'Golden, crispy hand-cut fries sprinkled with Don special peri-peri seasoning and served with garlic mayo dip.',
    image: crispyFriesImg,
    prices: [{ size: 'Regular Serving', amount: 250 }],
  },

  // NUGGETS & HOT WINGS
  {
    id: 'n1',
    name: 'Crispy Chicken Nuggets',
    category: 'nuggets',
    description: 'Tender 100% white meat chicken nuggets breaded in crunchy golden crumbs with honey mustard dip.',
    image: nuggetsPlatterImg,
    prices: [
      { size: '6 Pieces', amount: 350 },
      { size: '12 Pieces', amount: 650 },
    ],
  },
  {
    id: 'w1_wings',
    name: 'Hot Wings',
    category: 'wings',
    description: 'Fiery crispy chicken wings coated in signature spicy chili glaze or classic buffalo crunch.',
    image: hotWingsMenuImg,
    badge: 'Spicy Kick',
    prices: [
      { size: '5 Pieces', amount: 350 },
      { size: '10 Pieces', amount: 600 },
    ],
  },

  // BEVERAGES
  {
    id: 'dr1',
    name: 'Chilled Soft Drink (1.5 Liter)',
    category: 'drinks',
    description: 'Ice cold refreshing bottle (Pepsi, 7UP, Mirinda, or Mountain Dew).',
    image: softDrinkBottleImg,
    prices: [{ size: '1.5 Liter', amount: 220 }],
  },
  {
    id: 'dr2',
    name: 'Chilled Soft Drink (1 Liter)',
    category: 'drinks',
    description: 'Chilled refreshing bottle for family meals.',
    image: softDrinkBottleImg,
    prices: [{ size: '1 Liter', amount: 180 }],
  },
  {
    id: 'dr3',
    name: 'Chilled Soft Drink (500 ml)',
    category: 'drinks',
    description: 'Personal size cold drink bottle.',
    image: softDrinkBottleImg,
    prices: [{ size: '500 ml', amount: 120 }],
  },
  {
    id: 'dr4',
    name: 'Chilled Soft Drink (345 ml)',
    category: 'drinks',
    description: 'Quick refreshment single bottle.',
    image: softDrinkBottleImg,
    prices: [{ size: '345 ml', amount: 100 }],
  },
  {
    id: 'dr5',
    name: 'Mineral Water (Large)',
    category: 'drinks',
    description: 'Pure purified mineral drinking water 1.5L bottle.',
    image: mineralWaterBottleImg,
    prices: [{ size: '1.5 Liter Water', amount: 100 }],
  },
  {
    id: 'dr6',
    name: 'Mineral Water (Small)',
    category: 'drinks',
    description: 'Pure purified mineral drinking water 500ml bottle.',
    image: mineralWaterBottleImg,
    prices: [{ size: '500ml Water', amount: 70 }],
  },
];

export const DEALS: DealItem[] = [
  {
    id: 'deal-1',
    dealNumber: 1,
    title: 'Solo Zinger & Pizza Deal',
    items: ['1 Zinger Burger', '1 Small Pizza', '500ml Drink'],
    price: 800,
    badge: 'Value Saver',
    image: deal1ComboImg,
  },
  {
    id: 'deal-2',
    dealNumber: 2,
    title: 'Double Burger Combo',
    items: ['1 Zinger Burger', '1 Patty Burger', '500ml Drink'],
    price: 700,
    image: deal2ComboImg,
  },
  {
    id: 'deal-3',
    dealNumber: 3,
    title: 'Burger & Wrap Express',
    items: ['1 Zinger Burger', '1 Crispy Wrap', '500ml Drink'],
    price: 770,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-4',
    dealNumber: 4,
    title: 'Wrap & Wings Fiesta',
    items: ['1 Crispy Wrap', '5 Hot Wings', '500ml Drink'],
    price: 750,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-5',
    dealNumber: 5,
    title: 'Wrap Squad Box (4 Wraps)',
    items: ['4 Crispy Wraps', '1 Liter Drink'],
    price: 1450,
    badge: 'Group Deal',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-6',
    dealNumber: 6,
    title: 'Zinger Feast (4 Burgers)',
    items: ['4 Zinger Burgers', '1 Liter Drink'],
    price: 1500,
    badge: 'Super Saver',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-7',
    dealNumber: 7,
    title: 'Twin Small Pizza Deal',
    items: ['2 Small Pizzas', '500ml Drink'],
    price: { tf: 860, sf: 950 },
    badge: 'Dual Flavor',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-8',
    dealNumber: 8,
    title: 'Twin Large Pizza Deal',
    items: ['2 Large Pizzas', '1.5 Liter Drink'],
    price: { tf: 2450, sf: 2650 },
    badge: 'Party Special',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-9',
    dealNumber: 9,
    title: 'Large & Medium Family Deal',
    items: ['1 Large Pizza', '1 Medium Pizza', '1.5 Liter Drink'],
    price: { tf: 2050, sf: 2200 },
    badge: 'Family Special',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-10',
    dealNumber: 10,
    title: 'Grand Pasta & Wings Feast',
    items: ['Special Pasta', '10 Hot Wings', '1 Crispy Wrap', '1.5 Liter Drink'],
    price: 1700,
    badge: 'Variety Combo',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-11',
    dealNumber: 11,
    title: 'Don Mega Family Party',
    items: ['1 Large Pizza', '2 Zinger Burgers', '2 Crispy Wraps', '2 Liter Drink'],
    price: 2600,
    badge: 'Ultimate Party',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-12',
    dealNumber: 12,
    title: 'Pizza Sandwich & Pasta Combo',
    items: ['Pizza Sandwich', 'Pasta F1', '500ml Drink'],
    price: 1050,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-13',
    dealNumber: 13,
    title: 'Spin Rolls & Fries Meal',
    items: ['2 Spin Rolls', 'Crispy Fries', '1 Liter Drink'],
    price: 1250,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-14',
    dealNumber: 14,
    title: '6 Zinger Burgers Jumbo Pack',
    items: ['6 Zinger Burgers', '2 Liter Drink'],
    price: 2150,
    badge: 'Bumper Saver',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deal-15',
    dealNumber: 15,
    title: '6 Crispy Wraps Mega Pack',
    items: ['6 Crispy Wraps', '2 Liter Drink'],
    price: 2150,
    badge: 'Bumper Saver',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
  },
];

export const EXTRA_TOPPINGS: ExtraTopping[] = [
  {
    id: 't-chicken',
    name: 'Extra Chicken',
    price: 150,
    icon: '🍗',
    description: 'Generous serving of marinated spicy grilled chicken pieces.',
  },
  {
    id: 't-cheese',
    name: 'Extra Cheese',
    price: 150,
    icon: '🧀',
    description: '100% real imported double mozzarella cheese layer.',
  },
  {
    id: 't-sauce',
    name: 'Extra Sauce',
    price: 80,
    icon: '🥫',
    description: 'Signature garlic mayonnaise or spicy chili dip sauce cup.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Woodfired Don Special Pizza',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    caption: 'Freshly baked pizza straight out of our high-temperature ovens with melted mozzarella pull.',
  },
  {
    id: 'g2',
    title: 'Monster Don Zinger Burger',
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    caption: 'Double stacked golden crisp zinger fillet with fresh iceberg lettuce and house relish.',
  },
  {
    id: 'g3',
    title: 'Crispy Tortilla Wrap',
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    caption: 'Toasted wrap filled with crunchy boneless tenders and secret garlic dip.',
  },
  {
    id: 'g4',
    title: 'Fiery Buffalo Hot Wings',
    category: 'wings',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    caption: 'Hand-battered juicy wings tossed in spicy pepper coating.',
  },
  {
    id: 'g5',
    title: 'Peri Peri Seasoned Fries',
    category: 'fries',
    image: crispyFriesImg,
    caption: 'Golden hand-cut crispy french fries sprinkled with paprika salt.',
  },
  {
    id: 'g6',
    title: 'Baked Creamy Alfredo Pasta',
    category: 'pasta',
    image: donCuricksPastaImg,
    caption: 'Hot baked penne pasta bubbling with double cheese and grilled tikka.',
  },
  {
    id: 'g7',
    title: 'Hygienic Modern Kitchen',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    caption: 'Strict hygiene protocols and clean food prep stations for 100% fresh meals.',
  },
  {
    id: 'g8',
    title: 'DON PIZZA Restaurant Ambience',
    category: 'restaurant',
    image: donPizzaAmbienceImg,
    caption: 'Comfortable family seating area with warm ambient lighting, floral partitions, and wood finish decor at DON PIZZA Faisalabad.',
  },
  {
    id: 'g9',
    title: 'Happy Customers Dining In',
    category: 'customers',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    caption: 'Families and food lovers enjoying hot pizzas and deals at DON PIZZA.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Muhammad Hammad',
    rating: 5,
    comment: 'The Crown Crust Special and Don Special Burger are out of this world! The crust is super fresh, cheese is rich and authentic, and delivery reached us hot in 25 minutes. Best pizza spot in Faisalabad!',
    date: '2 days ago',
  },
  {
    id: 't2',
    name: 'Fatima Tariq',
    rating: 5,
    comment: 'DON PIZZA deals are incredible value for money. We ordered Deal #11 for a family gathering and everyone was amazed by the pizza crust softness and zinger burgers flavor.',
    date: '1 week ago',
  },
  {
    id: 't3',
    name: 'Ali Raza Khan',
    rating: 5,
    comment: 'Authentic taste! The Malai Boti Pizza and Chicken Spin Rolls are my personal favorites. Very hygienic kitchen and super polite staff.',
    date: '2 weeks ago',
  },
  {
    id: 't4',
    name: 'Usman Ghani',
    rating: 5,
    comment: 'Their Jalapeno Burger & Hot Wings combo hit the spot! Quick service, crisp fries, and generous toppings. 10/10 recommendation.',
    date: '3 weeks ago',
  },
];
