// Mock API service for confectionery products

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  availability: boolean;
  rating?: number;
  reviews?: number;
}

// Mock product data
const mockProducts: Product[] = [
  // CAKES (15 total)
  {
    id: '1',
    name: 'Chocolate Truffle Cake',
    category: 'cakes',
    price: 24.99,
    image: 'src/assets/chocolate-cake.jpg',
    description: 'Rich chocolate cake with decadent truffle filling and smooth ganache.',
    availability: true,
    rating: 4.8,
    reviews: 152
  },
  {
    id: '4',
    name: 'Red Velvet Cupcakes',
    category: 'cakes',
    price: 16.99,
    image: 'src/assets/chocolate-cake.jpg',
    description: 'Classic red velvet cupcakes with cream cheese frosting.',
    availability: true,
    rating: 4.7,
    reviews: 124
  },
  {
    id: '7',
    name: 'Vanilla Birthday Cake',
    category: 'cakes',
    price: 22.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Classic vanilla sponge cake with buttercream frosting and colorful sprinkles.',
    availability: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: '8',
    name: 'New York Cheesecake',
    category: 'cakes',
    price: 26.99,
    image: 'src/assets/cheesecake.jpg',
    description: 'Creamy New York style cheesecake with fresh berry compote.',
    availability: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '9',
    name: 'Chocolate Lava Cake',
    category: 'cakes',
    price: 18.99,
    image: 'src/assets/lava-cake.jpg',
    description: 'Warm chocolate cake with molten chocolate center, served with vanilla ice cream.',
    availability: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: '10',
    name: 'Tiramisu Cake',
    category: 'cakes',
    price: 24.99,
    image: 'src/assets/tiramisu.jpg',
    description: 'Italian-inspired tiramisu cake with coffee-soaked layers and mascarpone.',
    availability: true,
    rating: 4.7,
    reviews: 145
  },
  {
    id: '11',
    name: 'Strawberry Shortcake',
    category: 'cakes',
    price: 20.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Light sponge cake layered with fresh strawberries and whipped cream.',
    availability: true,
    rating: 4.5,
    reviews: 112
  },
  {
    id: '12',
    name: 'Black Forest Cake',
    category: 'cakes',
    price: 27.99,
    image: 'src/assets/chocolate-cake.jpg',
    description: 'Traditional German cake with chocolate, cherries, and whipped cream.',
    availability: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '13',
    name: 'Carrot Cake',
    category: 'cakes',
    price: 21.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Moist carrot cake with cream cheese frosting and walnut pieces.',
    availability: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: '14',
    name: 'Lemon Drizzle Cake',
    category: 'cakes',
    price: 19.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Zesty lemon sponge cake with tangy lemon glaze.',
    availability: true,
    rating: 4.4,
    reviews: 98
  },
  {
    id: '15',
    name: 'Funfetti Cake',
    category: 'cakes',
    price: 18.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Colorful vanilla cake with rainbow sprinkles and vanilla buttercream.',
    availability: true,
    rating: 4.5,
    reviews: 176
  },
  {
    id: '16',
    name: 'Opera Cake',
    category: 'cakes',
    price: 29.99,
    image: 'src/assets/chocolate-cake.jpg',
    description: 'French layered cake with chocolate ganache, coffee buttercream, and gold leaf.',
    availability: true,
    rating: 4.9,
    reviews: 87
  },
  {
    id: '17',
    name: 'Coconut Cake',
    category: 'cakes',
    price: 23.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Tropical coconut cake with coconut cream filling and toasted coconut flakes.',
    availability: true,
    rating: 4.6,
    reviews: 121
  },
  {
    id: '18',
    name: 'Tres Leches Cake',
    category: 'cakes',
    price: 22.99,
    image: 'src/assets/vanilla-cake.jpg',
    description: 'Latin American sponge cake soaked in three types of milk with cinnamon.',
    availability: true,
    rating: 4.7,
    reviews: 143
  },
  {
    id: '19',
    name: 'German Chocolate Cake',
    category: 'cakes',
    price: 25.99,
    image: 'src/assets/chocolate-cake.jpg',
    description: 'Rich chocolate cake with coconut-pecan frosting and chocolate ganache.',
    availability: true,
    rating: 4.8,
    reviews: 165
  },

  // COOKIES (keeping existing)
  {
    id: '2',
    name: 'Strawberry Macarons',
    category: 'cookies',
    price: 18.50,
    image: 'src/assets/macarons.jpg',
    description: 'Delicate French macarons with fresh strawberry buttercream.',
    availability: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '5',
    name: 'Chocolate Chip Cookies',
    category: 'cookies',
    price: 14.99,
    image: 'src/assets/macarons.jpg',
    description: 'Soft-baked cookies loaded with premium chocolate chips.',
    availability: true,
    rating: 4.5,
    reviews: 276
  },

  // CANDIES (8 total)
  {
    id: '3',
    name: 'Artisan Gummy Bears',
    category: 'candies',
    price: 12.99,
    image: 'src/assets/gummy-bears.jpg',
    description: 'Premium handcrafted gummy bears with natural fruit flavors.',
    availability: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '6',
    name: 'Dark Chocolate Truffles',
    category: 'candies',
    price: 22.99,
    image: 'src/assets/gummy-bears.jpg',
    description: 'Luxury dark chocolate truffles dusted with cocoa powder.',
    availability: true,
    rating: 4.9,
    reviews: 95
  },
  {
    id: '20',
    name: 'Fruit Hard Candies',
    category: 'candies',
    price: 9.99,
    image: 'src/assets/hard-candies.jpg',
    description: 'Classic hard candies in assorted fruit flavors with natural extracts.',
    availability: true,
    rating: 4.3,
    reviews: 187
  },
  {
    id: '21',
    name: 'Chocolate Bonbons',
    category: 'candies',
    price: 28.99,
    image: 'src/assets/bonbons.jpg',
    description: 'Exquisite handcrafted chocolate bonbons with various premium fillings.',
    availability: true,
    rating: 4.9,
    reviews: 142
  },
  {
    id: '22',
    name: 'Caramel Chews',
    category: 'candies',
    price: 11.99,
    image: 'src/assets/hard-candies.jpg',
    description: 'Soft and chewy caramel candies made with real butter and cream.',
    availability: true,
    rating: 4.4,
    reviews: 156
  },
  {
    id: '23',
    name: 'Peppermint Bark',
    category: 'candies',
    price: 15.99,
    image: 'src/assets/bonbons.jpg',
    description: 'Dark chocolate bark topped with white chocolate and crushed peppermint.',
    availability: true,
    rating: 4.6,
    reviews: 124
  },
  {
    id: '24',
    name: 'Sour Patch Gummies',
    category: 'candies',
    price: 10.99,
    image: 'src/assets/gummy-bears.jpg',
    description: 'Tangy sour gummies with a sweet finish in assorted flavors.',
    availability: true,
    rating: 4.2,
    reviews: 234
  },
  {
    id: '25',
    name: 'Chocolate Covered Pretzels',
    category: 'candies',
    price: 13.99,
    image: 'src/assets/bonbons.jpg',
    description: 'Crunchy pretzels covered in premium milk and dark chocolate.',
    availability: true,
    rating: 4.5,
    reviews: 178
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'cakes', name: 'Cakes' },
  { id: 'cookies', name: 'Cookies' },
  { id: 'candies', name: 'Candies' }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Get all products
  getProducts: async (): Promise<Product[]> => {
    await delay(300);
    return mockProducts;
  },

  // Get products by category
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await delay(300);
    if (category === 'all') return mockProducts;
    return mockProducts.filter(product => product.category === category);
  },

  // Get single product by ID
  getProduct: async (id: string): Promise<Product | null> => {
    await delay(200);
    return mockProducts.find(product => product.id === id) || null;
  },

  // Get featured products
  getFeaturedProducts: async (): Promise<Product[]> => {
    await delay(200);
    return mockProducts.slice(0, 3);
  },

  // Search products
  searchProducts: async (query: string): Promise<Product[]> => {
    await delay(300);
    return mockProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};