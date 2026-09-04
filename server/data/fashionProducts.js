const fashionProducts = [
  {
    name: 'Men Blue Regular Fit Oxford Shirt',
    price: 1799, originalPrice: 3599, description: 'Classic oxford cotton shirt with a regular fit and button-down collar.',
    imageURL: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'H&M', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#1e3a5f', '#ffffff', '#c4a574'],
    badge: 'BESTSELLER', rating: 4.5, numReviews: 312, stock: 40
  },
  {
    name: 'Men White Slim Fit Formal Shirt',
    price: 1499, originalPrice: 2499, description: 'Crisp white formal shirt in a slim fit for office and occasions.',
    imageURL: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'PURYS', gender: 'Men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#ffffff', '#e8e8e8'],
    badge: 'LATEST STYLE', rating: 4.3, numReviews: 188, stock: 28
  },
  {
    name: 'Men Black Checked Casual Shirt',
    price: 1299, originalPrice: 2598, description: 'Soft cotton casual shirt with a black check pattern.',
    imageURL: 'https://images.unsplash.com/photo-1594938291221-94d3e46c2587?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'Roadster', gender: 'Men', sizes: ['M', 'L', 'XL'], colors: ['#111111', '#4b5563'],
    badge: '', rating: 4.1, numReviews: 96, stock: 33
  },
  {
    name: 'Women Oversized Linen Shirt',
    price: 1899, originalPrice: 3299, description: 'Breathable oversized linen shirt for everyday layering.',
    imageURL: 'https://images.unsplash.com/photo-1485968579580-b6d095937a1d?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'H&M', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#f5e6c8', '#ffffff', '#1f2937'],
    badge: 'BESTSELLER', rating: 4.6, numReviews: 241, stock: 22
  },
  {
    name: 'Women Pink Satin Shirt',
    price: 2199, originalPrice: 3999, description: 'Smooth satin shirt with a relaxed drape and concealed placket.',
    imageURL: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'Zara', gender: 'Women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#f9a8d4', '#ffffff'],
    badge: 'LATEST STYLE', rating: 4.4, numReviews: 77, stock: 19
  },
  {
    name: 'Kids Printed Cotton Shirt',
    price: 799, originalPrice: 1299, description: 'Playful printed cotton shirt for everyday school and play.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'Max Kids', gender: 'Kids', sizes: ['XS', 'S', 'M'], colors: ['#60a5fa', '#fde68a'],
    badge: '', rating: 4.2, numReviews: 54, stock: 45
  },
  {
    name: 'Men Navy Cotton T-Shirt',
    price: 599, originalPrice: 999, description: 'Soft jersey crew-neck t-shirt in navy cotton.',
    imageURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    category: 'T-Shirts', brand: 'H&M', gender: 'Men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#1e3a8a', '#000000', '#ffffff'],
    badge: '', rating: 4.0, numReviews: 410, stock: 80
  },
  {
    name: 'Women Graphic Print T-Shirt',
    price: 699, originalPrice: 1398, description: 'Relaxed-fit graphic t-shirt in breathable cotton.',
    imageURL: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    category: 'T-Shirts', brand: 'Zara', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#111111', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.3, numReviews: 201, stock: 36
  },
  {
    name: 'Women Floral Midi Dress',
    price: 2499, originalPrice: 4999, description: 'Flowy midi dress with an all-over floral print.',
    imageURL: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    category: 'Dresses', brand: 'PURYS', gender: 'Women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#f472b6', '#fef3c7'],
    badge: 'LATEST STYLE', rating: 4.7, numReviews: 165, stock: 16
  },
  {
    name: 'Men Slim Fit Stretch Jeans',
    price: 1999, originalPrice: 3499, description: 'Dark wash stretch jeans with a modern slim fit.',
    imageURL: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    category: 'Jeans', brand: 'Levis', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#1e3a5f', '#000000'],
    badge: 'BESTSELLER', rating: 4.5, numReviews: 520, stock: 50
  },
  {
    name: 'Women High-Rise Blue Jeans',
    price: 2299, originalPrice: 3999, description: 'High-rise straight jeans in medium blue denim.',
    imageURL: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    category: 'Jeans', brand: 'H&M', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#3b82f6', '#1e3a8a'],
    badge: '', rating: 4.4, numReviews: 233, stock: 27
  },
  {
    name: 'Everyday Running Shoes',
    price: 3299, originalPrice: 5499, description: 'Lightweight running shoes with breathable mesh and cushioning.',
    imageURL: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    category: 'Footwear', brand: 'Stride', gender: 'Unisex', sizes: ['S', 'M', 'L', 'XL'], colors: ['#ef4444', '#000000'],
    badge: 'BESTSELLER', rating: 4.5, numReviews: 94, stock: 27
  },
  {
    name: 'Women Block Heel Sandals',
    price: 1599, originalPrice: 2799, description: 'Comfortable block-heel sandals for day-to-evening wear.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Footwear', brand: 'Zara', gender: 'Women', sizes: ['S', 'M', 'L'], colors: ['#78350f', '#111111'],
    badge: '', rating: 4.1, numReviews: 68, stock: 21
  },
  {
    name: 'Minimalist Cotton Hoodie',
    price: 1499, originalPrice: 2499, description: 'Comfortable regular-fit hoodie made from soft cotton fleece.',
    imageURL: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    category: 'Hoodies', brand: 'Northline', gender: 'Unisex', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#6b7280', '#111111'],
    badge: '', rating: 4.3, numReviews: 57, stock: 48
  },
  {
    name: 'Kids Denim Jacket',
    price: 1299, originalPrice: 2199, description: 'Classic denim jacket sized for kids with easy snap buttons.',
    imageURL: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets', brand: 'Max Kids', gender: 'Kids', sizes: ['XS', 'S', 'M', 'L'], colors: ['#3b82f6'],
    badge: 'LATEST STYLE', rating: 4.2, numReviews: 41, stock: 18
  },
  {
    name: 'Men Linen Resort Shirt',
    price: 1699, originalPrice: 2999, description: 'Short-sleeve linen resort shirt for warm-weather dressing.',
    imageURL: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'Zara', gender: 'Men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['#e7e5e4', '#86efac'],
    badge: '', rating: 4.0, numReviews: 73, stock: 24
  },
  {
    name: 'Women Striped Oxford Shirt',
    price: 1399, originalPrice: 2798, description: 'Classic striped oxford shirt tailored for a feminine fit.',
    imageURL: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'Roadster', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#93c5fd', '#ffffff'],
    badge: '', rating: 4.2, numReviews: 119, stock: 31
  },
  {
    name: 'Men Olive Cargo Shirt Jacket',
    price: 2099, originalPrice: 4198, description: 'Utility shirt jacket with cargo pockets in olive cotton.',
    imageURL: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts', brand: 'Levis', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#4d5c3a', '#1f2937'],
    badge: 'BESTSELLER', rating: 4.4, numReviews: 88, stock: 15
  },
  {
    name: 'Wireless Noise Cancelling Headphones',
    price: 4999, originalPrice: 7999, description: 'Over-ear Bluetooth headphones with active noise cancellation.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories', brand: 'SoundWave', gender: 'Unisex', sizes: [], colors: ['#111111'],
    badge: '', rating: 4.6, numReviews: 128, stock: 35
  },
  {
    name: 'Smart Watch Series 5',
    price: 6999, originalPrice: 8999, description: 'Fitness tracking smart watch with heart-rate monitoring and GPS.',
    imageURL: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories', brand: 'Pulse', gender: 'Unisex', sizes: [], colors: ['#111111', '#d4d4d4'],
    badge: '', rating: 4.4, numReviews: 86, stock: 22
  }
]

module.exports = fashionProducts
