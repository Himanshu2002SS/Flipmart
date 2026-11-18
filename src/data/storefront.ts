export type Product = {
  name: string
  image: string
  price: string
  oldPrice?: string
  badge?: string
  rating?: string
  category?: string
}

export type CartItem = {
  product: Product
  quantity: number
}

export const premiumProducts: Product[] = [
  { name: 'Everyday portable speaker', image: 'photo-1608043152269-423dbba4e7e1', price: '$89.00', oldPrice: '$99.00' },
  { name: 'Marius classic watch', image: 'photo-1524805444758-089113d48a6d', price: '$155.00', oldPrice: '$199.00' },
  { name: 'Rorbi studio headphones', image: 'photo-1505740420928-5e560c06d30e', price: '$79.00' },
  { name: 'Morbi sculptural lamp', image: 'photo-1507473885765-e6ed057f782c', price: '$45.00', oldPrice: '$55.00' },
  { name: 'Fusce mini camera', image: 'photo-1526170375885-4d8ecf77b99f', price: '$99.00', oldPrice: '$100.00' },
]

export const outfits: Product[] = [
  { name: 'The sunshine linen set', image: 'photo-1496747611176-843222e1e57d', price: '$86.00', oldPrice: '$110.00' },
  { name: 'Soft days knit dress', image: 'photo-1539109136881-3be0616acf4b', price: '$72.00' },
  { name: 'The weekend edit', image: 'photo-1483985988355-763728e1935b', price: '$98.00', oldPrice: '$125.00' },
  { name: 'City lights mini', image: 'photo-1515886657613-9f3515b0c78f', price: '$64.00' },
  { name: 'Modern muse blazer', image: 'photo-1534528741775-53994a69daeb', price: '$118.00', oldPrice: '$150.00' },
  { name: 'Golden hour co-ord', image: 'photo-1524504388940-b1c1722653e1', price: '$79.00' },
]

export const mensFashion: Product[] = [
  { name: 'The modern weekend suit', image: 'photo-1507680434567-5739c80be1ac', price: '$189.00', oldPrice: '$240.00' },
  { name: 'Everyday tailored layers', image: 'photo-1519085360753-af0119f7cbe7', price: '$125.00' },
]

export const searchableProducts: Product[] = [
  ...premiumProducts.map((product) => ({ ...product, category: 'electronics premium' })),
  ...outfits.map((product) => ({ ...product, category: 'clothing girls fashion' })),
  ...mensFashion.map((product) => ({ ...product, category: "men's fashion clothing" })),
]

export const slides: { eyebrow: string; title: string; emphasis: string; copy: string; button: string; image: string; color: string }[] = [
  { eyebrow: 'THE WEEKEND EDIT', title: 'Carry a little', emphasis: 'joy.', copy: 'Fresh shapes, soft textures and sunny colors. Meet the pieces made for wherever you’re going.', button: 'Shop the edit', image: 'photo-1559563458-527698bf5295', color: 'sand' },
  { eyebrow: 'THE EVERYDAY ICONS', title: 'Small details.', emphasis: 'Big feeling.', copy: 'Good design, better prices. Meet the objects worth making room for in your daily life.', button: 'Explore bestsellers', image: 'photo-1523779917675-b6ed3a49a561', color: 'rose' },
  { eyebrow: 'A FRESH POINT OF VIEW', title: 'New season.', emphasis: 'New favorite.', copy: 'A curated mix of useful, beautiful and unexpectedly good things—up to 50% off.', button: 'Discover the new', image: 'photo-1483985988355-763728e1935b', color: 'blue' },
]
