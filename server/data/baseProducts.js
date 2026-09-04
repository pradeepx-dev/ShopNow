const clothingProducts = [
  // ==========================================
  // MEN CLOTHES - INDIAN WEAR
  // ==========================================
  {
    name: 'Manyavar Raw Silk Embroidered Kurta Set with Churidar',
    price: 4999, originalPrice: 7999, discount: 38,
    description: 'Exquisite ivory raw silk kurta featuring delicate zari thread embroidery on the mandarin collar and placket. Paired with a comfortable silk-blend churidar.',
    imageURL: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Manyavar', gender: 'Men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#fef08a', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 432, stock: 45
  },
  {
    name: 'FabIndia Men Handblock Printed Cotton Kurta',
    price: 1890, originalPrice: 2490, discount: 24,
    description: 'Crafted from 100% breathable pure cotton with traditional Rajasthani indigo handblock prints. Features a knee-length straight cut and side slits.',
    imageURL: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'FabIndia', gender: 'Men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['#1e3a8a', '#ffffff'],
    badge: 'TRENDING', rating: 4.6, numReviews: 289, stock: 60
  },
  {
    name: 'Raymond Ethnix Woven Silk Nehru Jacket',
    price: 3499, originalPrice: 5999, discount: 42,
    description: 'Sleek sleeveless bundi Nehru jacket crafted from textured banarasi silk blend with metallic buttons and welt pockets. Perfect for festive layering.',
    imageURL: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Raymond', gender: 'Men', sizes: ['38', '40', '42', '44'], colors: ['#7f1d1d', '#1e293b'],
    badge: 'HOT DEAL', rating: 4.7, numReviews: 178, stock: 35
  },
  {
    name: 'Manyavar Royal Embroidered Sherwani with Stole',
    price: 14999, originalPrice: 22999, discount: 35,
    description: 'Grand royal wedding sherwani woven with intricate zardozi craftsmanship, jacquard weave patterns, structured shoulders, and an ornate matching organza stole.',
    imageURL: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Manyavar', gender: 'Men', sizes: ['38', '40', '42', '44'], colors: ['#fef3c7', '#d97706'],
    badge: 'LUXURY', rating: 4.9, numReviews: 112, stock: 18
  },
  {
    name: 'Tasva by Tarun Tahiliani Printed Silk Festive Kurta',
    price: 4299, originalPrice: 6599, discount: 35,
    description: 'Designer contemporary printed silk kurta blending Indian heritage motifs with a modern relaxed silhouette and concealed button placket.',
    imageURL: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Tasva', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#047857', '#065f46'],
    badge: 'NEW ARRIVAL', rating: 4.8, numReviews: 86, stock: 25
  },
  {
    name: 'Sojanya Jacquard Silk Kurta and Dhoti Pant Set',
    price: 2999, originalPrice: 4999, discount: 40,
    description: 'Traditional celebration outfit with a gold self-design jacquard kurta and pre-stitched ready-to-wear pleated dhoti pants with elasticated waistband.',
    imageURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Sojanya', gender: 'Men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['#fef08a', '#b45309'],
    badge: '', rating: 4.4, numReviews: 142, stock: 40
  },
  {
    name: 'Peter England Bandhgala Festive Suit Jacket',
    price: 5499, originalPrice: 8999, discount: 39,
    description: 'Structured formal bandhgala jodhpuri jacket in textured poly-viscose suiting fabric with antique brass crest buttons.',
    imageURL: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Peter England', gender: 'Men', sizes: ['38', '40', '42', '44'], colors: ['#0f172a', '#1e293b'],
    badge: '', rating: 4.5, numReviews: 97, stock: 30
  },
  {
    name: 'WLS Pure Linen Pastel Short Kurta',
    price: 2199, originalPrice: 3499, discount: 37,
    description: 'Casual short linen kurta with button tab roll-up sleeves and curved hemline. Perfect for summer brunches and festive casual gatherings.',
    imageURL: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'WLS', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#bfdbfe', '#ffffff'],
    badge: '', rating: 4.5, numReviews: 165, stock: 50
  },

  // ==========================================
  // MEN CLOTHES - WESTERN & FORMAL WEAR
  // ==========================================
  {
    name: 'Raymond Slim Fit Wool-Blend 2-Piece Formal Suit',
    price: 8999, originalPrice: 14999, discount: 40,
    description: 'Tailored two-piece formal suit crafted from fine Australian merino wool blend with notch lapels, double back vents, and matching flat-front trousers.',
    imageURL: 'https://images.unsplash.com/photo-1594938291221-94d3e46c2587?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Raymond', gender: 'Men', sizes: ['38', '40', '42', '44', '46'], colors: ['#1e293b', '#0f172a'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 320, stock: 28
  },
  {
    name: 'Louis Philippe Textured Navy Single-Breasted Blazer',
    price: 6499, originalPrice: 9999, discount: 35,
    description: 'Sophisticated navy blazer featuring subtle micro-houndstooth weave, notch collar, inner silk-touch lining, and horn buttons.',
    imageURL: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Louis Philippe', gender: 'Men', sizes: ['38', '40', '42', '44'], colors: ['#1e3a8a', '#172554'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 210, stock: 32
  },
  {
    name: 'Van Heusen Ultra-Slim Fit Easy Care Formal Shirt',
    price: 1899, originalPrice: 2799, discount: 32,
    description: 'Crisp 100% Egyptian cotton formal shirt with wrinkle-free finish, semi-cutaway collar, and French cuffs for the modern executive.',
    imageURL: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Van Heusen', gender: 'Men', sizes: ['39', '40', '42', '44'], colors: ['#ffffff', '#bae6fd'],
    badge: 'BESTSELLER', rating: 4.6, numReviews: 540, stock: 85
  },
  {
    name: 'Arrow Manhattan Slim Fit Cotton Formal Trousers',
    price: 2199, originalPrice: 3299, discount: 33,
    description: 'Flat front formal trousers with autofocus stretch technology for all-day comfort. Features slash pockets and tailored waistband.',
    imageURL: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Arrow', gender: 'Men', sizes: ['30', '32', '34', '36', '38'], colors: ['#334155', '#111827'],
    badge: '', rating: 4.5, numReviews: 275, stock: 70
  },
  {
    name: 'Blackberrys Tech-Stretch Structured Tuxedo Blazer',
    price: 7999, originalPrice: 12999, discount: 38,
    description: 'Black satin shawl collar evening tuxedo blazer with premium stretch fabric for freedom of movement during galas and black-tie events.',
    imageURL: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Blackberrys', gender: 'Men', sizes: ['38', '40', '42', '44'], colors: ['#000000'],
    badge: 'LUXURY', rating: 4.8, numReviews: 94, stock: 20
  },
  {
    name: 'Park Avenue Cotton Stretch Chinos',
    price: 1999, originalPrice: 2999, discount: 33,
    description: 'Smart casual stretch twill chinos with mid-rise waist, slim tapered leg profile, and refined coin pocket detail.',
    imageURL: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Park Avenue', gender: 'Men', sizes: ['30', '32', '34', '36'], colors: ['#d4a373', '#64748b', '#0f172a'],
    badge: '', rating: 4.4, numReviews: 310, stock: 65
  },

  // ==========================================
  // MEN CLOTHES - INNERWEAR
  // ==========================================
  {
    name: 'Jockey Modern Classic Cotton Ribbed Briefs (Pack of 3)',
    price: 699, originalPrice: 899, discount: 22,
    description: 'Super combed 100% cotton ribbed briefs featuring ultrasoft waistband, double layered contoured pouch, and seamless leg openings.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Jockey', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#000000', '#1e3a8a', '#64748b'],
    badge: 'ESSENTIAL', rating: 4.7, numReviews: 1240, stock: 150
  },
  {
    name: 'Calvin Klein Modern Cotton Stretch Trunks (Pack of 2)',
    price: 2499, originalPrice: 3499, discount: 29,
    description: 'Iconic Calvin Klein repeating logo elastic waistband with modal-cotton stretch jersey fabric for superior breathability and body-hugging fit.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Calvin Klein', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#000000', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 870, stock: 95
  },
  {
    name: 'Damensch Deo-Soft Anti-Odour Micro Modal Boxers',
    price: 899, originalPrice: 1199, discount: 25,
    description: 'Ultra-soft micro modal stretch boxer shorts engineered with bacteriostatic anti-microbial finish and moisture management yarn.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Damensch', gender: 'Men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['#0f172a', '#334155'],
    badge: 'TRENDING', rating: 4.7, numReviews: 450, stock: 80
  },
  {
    name: 'US Polo Assn Combed Cotton Square-Cut Undershirt Vest (Pack of 3)',
    price: 749, originalPrice: 999, discount: 25,
    description: 'Premium combed cotton square neck athletic undershirt vests with reinforced flatlock stitching to eliminate chafing.',
    imageURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'US Polo Assn', gender: 'Men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['#ffffff'],
    badge: 'ESSENTIAL', rating: 4.6, numReviews: 610, stock: 120
  },
  {
    name: 'XYXX Bamboo Cotton Lounge Boxers',
    price: 649, originalPrice: 899, discount: 28,
    description: 'Naturally antibacterial and temperature-regulating bamboo cotton innerwear boxer shorts with button fly and concealed key pocket.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'XYXX', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#0d9488', '#1e293b'],
    badge: '', rating: 4.5, numReviews: 330, stock: 90
  },

  // ==========================================
  // MEN CLOTHES - CASUALS & SHORTS
  // ==========================================
  {
    name: "Levi's 511 Slim Fit Stretch Denim Jeans",
    price: 3199, originalPrice: 4799, discount: 33,
    description: 'The definitive modern slim jean with room to move. Woven with Levi’s Flex advanced stretch technology for maximum flex and optimum recovery.',
    imageURL: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: "Levi's", gender: 'Men', sizes: ['30', '32', '34', '36', '38'], colors: ['#1e3a5f', '#0f172a'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 1890, stock: 110
  },
  {
    name: 'Zara Men Relaxed Fit Heavyweight Oversized Hoodie',
    price: 2990, originalPrice: 3990, discount: 25,
    description: 'Heavy 420 GSM brushed fleece relaxed hoodie featuring dropped shoulders, ribbed hems, kangaroo pocket, and double-layered drawstring hood.',
    imageURL: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Zara', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#475569', '#000000', '#f1f5f9'],
    badge: 'TRENDING', rating: 4.7, numReviews: 412, stock: 55
  },
  {
    name: 'Tommy Hilfiger Classic Pique Regular Fit Polo',
    price: 3499, originalPrice: 5499, discount: 36,
    description: 'Pure organic cotton pique polo shirt with signature embroidered flag chest logo, two-button ribbed placket, and tennis tail side vents.',
    imageURL: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Tommy Hilfiger', gender: 'Men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#1e3a8a', '#ffffff', '#dc2626'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 680, stock: 75
  },
  {
    name: 'H&M Relaxed Fit Pure Linen Casual Shirt',
    price: 2299, originalPrice: 3299, discount: 30,
    description: 'Airy woven linen shirt in a relaxed cut with camp resort collar, French front button closure, and curved split hem.',
    imageURL: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'H&M', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#fef3c7', '#38bdf8', '#ffffff'],
    badge: 'LATEST STYLE', rating: 4.5, numReviews: 320, stock: 65
  },
  {
    name: 'Jack & Jones Washed Vintage Denim Trucker Jacket',
    price: 3799, originalPrice: 5999, discount: 37,
    description: 'Authentic 100% cotton denim trucker jacket with vintage stonewashed fading, shank buttons, buttoned flap chest pockets, and waist adjusters.',
    imageURL: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Jack & Jones', gender: 'Men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['#3b82f6'],
    badge: '', rating: 4.6, numReviews: 240, stock: 40
  },
  {
    name: 'Puma ESS Small Logo Crewneck Fleece Sweatshirt',
    price: 1999, originalPrice: 2999, discount: 33,
    description: 'Cotton-poly blend everyday fleece pullover with understated Puma archive cat branding on the left chest.',
    imageURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Puma', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#1e293b', '#64748b'],
    badge: '', rating: 4.4, numReviews: 510, stock: 80
  },
  {
    name: 'Nike Dri-FIT Challenger 7-Inch Running Shorts',
    price: 2195, originalPrice: 2795, discount: 21,
    description: 'Engineered for running and high-intensity training with moisture-wicking Dri-FIT fabric, mesh side panels, and snap back phone pocket.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Nike', gender: 'Men', sizes: ['S', 'M', 'L', 'XL'], colors: ['#000000', '#1e3a8a'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 920, stock: 90
  },
  {
    name: 'Adidas Aeroready Essentials Chelsea 3-Stripes Shorts',
    price: 1699, originalPrice: 2299, discount: 26,
    description: 'Lightweight recycled polyester woven shorts with iconic 3-Stripes along the sides and inner breathable mesh briefs.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Adidas', gender: 'Men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#0f172a', '#ffffff'],
    badge: 'HOT DEAL', rating: 4.6, numReviews: 440, stock: 85
  },
  {
    name: "Levi's 405 Standard Denim Bermuda Shorts",
    price: 2299, originalPrice: 3499, discount: 34,
    description: 'Classic 5-pocket denim cut-off shorts hitting right above the knee with raw fray hem and vintage medium indigo wash.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: "Levi's", gender: 'Men', sizes: ['30', '32', '34', '36'], colors: ['#3b82f6'],
    badge: '', rating: 4.5, numReviews: 180, stock: 45
  },
  {
    name: 'Under Armour Tech Graphic Training Gym Shorts',
    price: 1799, originalPrice: 2499, discount: 28,
    description: 'UA Tech ultra-quick drying fabric with 4-way stretch construction, anti-odor technology, and encapsulated elastic waistband.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Under Armour', gender: 'Men', sizes: ['M', 'L', 'XL'], colors: ['#334155', '#dc2626'],
    badge: '', rating: 4.7, numReviews: 310, stock: 60
  },
  {
    name: 'Decathlon Quechua Hiking Multi-Pocket Cargo Shorts',
    price: 1299, originalPrice: 1799, discount: 28,
    description: 'Rugged ripstop fabric outdoor cargo shorts with 5 secure pockets including two zipped thigh pockets for trail and travel adventures.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Decathlon', gender: 'Men', sizes: ['30', '32', '34', '36', '38'], colors: ['#713f12', '#475569'],
    badge: '', rating: 4.6, numReviews: 530, stock: 70
  },
  {
    name: 'GAP 9-Inch Modern Khaki Stretch Chino Shorts',
    price: 1899, originalPrice: 2799, discount: 32,
    description: 'Clean front tailored chino shorts crafted from smooth stretch twill with button closure and rear welt pockets.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'GAP', gender: 'Men', sizes: ['30', '32', '34', '36'], colors: ['#d4a373', '#1e293b'],
    badge: '', rating: 4.5, numReviews: 215, stock: 50
  },

  // ==========================================
  // WOMEN CLOTHES - INDIAN & ETHNIC WEAR
  // ==========================================
  {
    name: 'Sabyasachi Heritage Floral Georgette Festive Saree',
    price: 18999, originalPrice: 28999, discount: 34,
    description: 'Opulent designer lightweight georgette saree featuring intricate hand-painted floral motifs, gold sequin border, and an unstitched raw silk blouse piece.',
    imageURL: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Sabyasachi', gender: 'Women', sizes: ['Free Size'], colors: ['#f43f5e', '#fef08a'],
    badge: 'LUXURY', rating: 4.9, numReviews: 310, stock: 15
  },
  {
    name: 'Ritu Kumar Silk Embroidered Anarkali Kurta Set',
    price: 11999, originalPrice: 17999, discount: 33,
    description: 'Floor-length flared silk anarkali kurta adorned with gold gota patti work and resham embroidery. Comes with matching churidar and scalloped chiffon dupatta.',
    imageURL: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Ritu Kumar', gender: 'Women', sizes: ['S', 'M', 'L', 'XL'], colors: ['#047857', '#fbbf24'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 195, stock: 22
  },
  {
    name: 'BIBA Velvet Festive Straight Kurta with Palazzo & Dupatta',
    price: 3999, originalPrice: 6999, discount: 43,
    description: 'Royal emerald green velvet straight-cut kurta with gold metallic thread accents, coordinating wide-leg palazzos, and woven banarasi dupatta.',
    imageURL: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'BIBA', gender: 'Women', sizes: ['32', '34', '36', '38', '40'], colors: ['#065f46', '#831843'],
    badge: 'TRENDING', rating: 4.7, numReviews: 480, stock: 45
  },
  {
    name: 'Kalki Fashion Pastel Pink Embroidered Semi-Stitched Lehenga',
    price: 12499, originalPrice: 19999, discount: 38,
    description: 'Glamorous wedding lehenga choli embellished with mirror work, 3D sequins, and thread embroidery over flowing georgette fabric with heavy can-can lining.',
    imageURL: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Kalki Fashion', gender: 'Women', sizes: ['S', 'M', 'L', 'XL'], colors: ['#f472b6', '#ffffff'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 160, stock: 16
  },
  {
    name: 'W for Woman Gold Print A-Line Festive Kurta',
    price: 1799, originalPrice: 2999, discount: 40,
    description: 'A-line festive kurta with Mandarin collar, keyhole neckline, and metallic gold foil prints on soft viscose fabric with side slits.',
    imageURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'W for Woman', gender: 'Women', sizes: ['8', '10', '12', '14', '16'], colors: ['#991b1b', '#d97706'],
    badge: '', rating: 4.5, numReviews: 320, stock: 55
  },
  {
    name: 'Aurelia Cotton Floral Festive Straight Kurti',
    price: 1299, originalPrice: 1999, discount: 35,
    description: 'Daily elegance pure cotton straight kurti featuring botanical floral prints, 3/4 sleeves with contrast border, and round neck.',
    imageURL: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Aurelia', gender: 'Women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#0284c7', '#ffffff'],
    badge: '', rating: 4.4, numReviews: 410, stock: 70
  },
  {
    name: 'Global Desi Fusion Printed Jumpsuit with Ethnic Shrug',
    price: 2699, originalPrice: 4299, discount: 37,
    description: 'Bohemian Indo-Western fusion printed sleeveless jumpsuit layered with a sheer printed floor-length shrug and fabric belt.',
    imageURL: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Global Desi', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#ea580c', '#fbbf24'],
    badge: 'LATEST STYLE', rating: 4.6, numReviews: 175, stock: 35
  },
  {
    name: 'Fabindia Chanderi Silk Handcrafted Saree',
    price: 4990, originalPrice: 6990, discount: 29,
    description: 'Handwoven Chanderi silk saree with zari border and delicate butis, reflecting centuries-old Indian handloom mastery.',
    imageURL: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Fabindia', gender: 'Women', sizes: ['Free Size'], colors: ['#f59e0b', '#dc2626'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 290, stock: 30
  },

  // ==========================================
  // WOMEN CLOTHES - WESTERN WEAR & DRESSES
  // ==========================================
  {
    name: 'Zara Satin Jacquard Slip Midi Evening Dress',
    price: 3590, originalPrice: 4990, discount: 28,
    description: 'Fluid satin slip dress featuring cowl neckline, delicate adjustable spaghetti straps, side slit, and subtle leopard jacquard weave.',
    imageURL: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Zara', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#1e1b4b', '#be123c'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 530, stock: 40
  },
  {
    name: 'H&M Tailored Double-Breasted Power Blazer',
    price: 3999, originalPrice: 5999, discount: 33,
    description: 'Oversized structured silhouette blazer with peaked lapels, padded shoulders, tortoiseshell buttons, and front flap pockets.',
    imageURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'H&M', gender: 'Women', sizes: ['34', '36', '38', '40', '42'], colors: ['#f5f5f4', '#18181b'],
    badge: 'TRENDING', rating: 4.7, numReviews: 380, stock: 50
  },
  {
    name: 'Mango Flowy Pleated Floral Midi Skirt',
    price: 2490, originalPrice: 3990, discount: 38,
    description: 'High-waisted accordion pleated midi skirt in recycled fabric with an elastic waistband and vintage ditsy floral print.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Mango', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#f43f5e', '#fde047'],
    badge: '', rating: 4.6, numReviews: 210, stock: 45
  },
  {
    name: 'Forever New Belted Linen-Blend Wrap Dress',
    price: 4400, originalPrice: 6500, discount: 32,
    description: 'Breezy wrap midi dress with flutter sleeves, V-neckline, self-tie fabric waist belt, and asymmetrical ruffle hem.',
    imageURL: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Forever New', gender: 'Women', sizes: ['6', '8', '10', '12', '14'], colors: ['#bae6fd', '#ffffff'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 170, stock: 30
  },
  {
    name: 'Vero Moda Wide-Leg High-Rise Tailored Trousers',
    price: 2299, originalPrice: 3499, discount: 34,
    description: 'Chic wide-leg pleated trousers with high-rise waist, concealed hook-and-bar zip fastening, and side slant pockets.',
    imageURL: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Vero Moda', gender: 'Women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#d6d3d1', '#0f172a'],
    badge: '', rating: 4.5, numReviews: 310, stock: 60
  },
  {
    name: 'ONLY Satin Cowl Neck Sleeveless Party Top',
    price: 1499, originalPrice: 2299, discount: 35,
    description: 'Lustrous champagne satin party top with draped cowl neck and cross-back spaghetti straps for evening glam.',
    imageURL: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'ONLY', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#fef08a', '#111827'],
    badge: '', rating: 4.4, numReviews: 195, stock: 55
  },

  // ==========================================
  // WOMEN CLOTHES - INNERWEAR & LINGERIE
  // ==========================================
  {
    name: "Victoria's Secret Dream Angels Floral Lace Bralette",
    price: 3299, originalPrice: 4799, discount: 31,
    description: 'Romantic sheer floral lace unlined bralette with plunging V-neckline, scalloped edges, and gold hardware back strap closure.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: "Victoria's Secret", gender: 'Women', sizes: ['32B', '34B', '34C', '36C', '38D'], colors: ['#f472b6', '#000000'],
    badge: 'LUXURY', rating: 4.9, numReviews: 640, stock: 45
  },
  {
    name: 'Triumph Maximizer Wireless Push-Up Bra',
    price: 1999, originalPrice: 2799, discount: 29,
    description: 'Wireless seamless push-up bra engineered with memory foam cups for natural cleavage uplift and all-day smooth support.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Triumph', gender: 'Women', sizes: ['32C', '34B', '34C', '36B', '36C'], colors: ['#fcd34d', '#000000'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 480, stock: 65
  },
  {
    name: 'Enamor Seamless Laser-Cut Hipster Panties (Pack of 3)',
    price: 899, originalPrice: 1299, discount: 31,
    description: 'Zero panty-line invisible laser cut hipsters made from buttery soft polyamide-elastane blend with 100% cotton gusset.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Enamor', gender: 'Women', sizes: ['S', 'M', 'L', 'XL'], colors: ['#fce7f3', '#000000', '#f5d0fe'],
    badge: 'ESSENTIAL', rating: 4.7, numReviews: 890, stock: 120
  },
  {
    name: 'Zivame High-Waist Tummy Trimmer Shapewear',
    price: 1299, originalPrice: 1999, discount: 35,
    description: 'Targeted medium-compression high-waist shaping shorts that smoothen tummy and thighs with silicone grip anti-roll waistband.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Zivame', gender: 'Women', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['#e2e8f0', '#000000'],
    badge: 'TRENDING', rating: 4.6, numReviews: 530, stock: 75
  },
  {
    name: 'Marks & Spencer Cotton Rich Secret Support Camisole',
    price: 1199, originalPrice: 1699, discount: 29,
    description: 'Soft Supima cotton layering camisole featuring integrated secret shelf support and adjustable delicate straps.',
    imageURL: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Marks & Spencer', gender: 'Women', sizes: ['8', '10', '12', '14', '16'], colors: ['#ffffff', '#000000'],
    badge: '', rating: 4.6, numReviews: 340, stock: 80
  },
  {
    name: 'Clovia Satin Lace Trim Nightwear Robe & Slip Set',
    price: 1599, originalPrice: 2499, discount: 36,
    description: 'Silky smooth two-piece nightwear set including a spaghetti slip nightdress and matching belted kimono robe with lace trim cuffs.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Clovia', gender: 'Women', sizes: ['S', 'M', 'L', 'XL'], colors: ['#fda4af', '#7e22ce'],
    badge: 'HOT DEAL', rating: 4.5, numReviews: 290, stock: 50
  },

  // ==========================================
  // WOMEN CLOTHES - CASUALS & SHORTS
  // ==========================================
  {
    name: "Levi's 711 High Rise Skinny Jeans",
    price: 2999, originalPrice: 4299, discount: 30,
    description: 'Ultimate figure-flattering high rise skinny jean crafted with Levi’s Sculpt Hyperstretch fabric for holding and lifting without bagging out.',
    imageURL: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: "Levi's", gender: 'Women', sizes: ['26', '28', '30', '32', '34'], colors: ['#1e3a5f', '#000000'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 1420, stock: 90
  },
  {
    name: 'Zara Ribbed Knit Cropped Cardigan',
    price: 1990, originalPrice: 2990, discount: 33,
    description: 'Chic cropped fine-knit cardigan with V-neckline, contrast front pearl buttons, and long ribbed fitted sleeves.',
    imageURL: 'https://images.unsplash.com/photo-1485968579580-b6d095937a1d?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Zara', gender: 'Women', sizes: ['S', 'M', 'L'], colors: ['#dcfce7', '#fdf2f8'],
    badge: 'TRENDING', rating: 4.7, numReviews: 410, stock: 55
  },
  {
    name: 'Nike Sportswear Club Fleece Women Joggers',
    price: 2795, originalPrice: 3495, discount: 20,
    description: 'Cozy semi-brushed fleece sweatpants with high-waist ribbed drawcord waistband, tapered fit, and embroidered Futura logo.',
    imageURL: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Nike', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#64748b', '#000000'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 610, stock: 65
  },
  {
    name: "Levi's 501 Original High-Rise Denim Shorts",
    price: 2499, originalPrice: 3699, discount: 32,
    description: 'The iconic 501 vintage denim shorts with high-rise waist, classic button fly, and signature raw destructed cutoff hem.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: "Levi's", gender: 'Women', sizes: ['26', '28', '30', '32'], colors: ['#60a5fa', '#93c5fd'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 980, stock: 70
  },
  {
    name: 'Nike One Dri-FIT High-Waisted 7-Inch Bike Shorts',
    price: 1995, originalPrice: 2495, discount: 20,
    description: 'Non-sheer buttery-soft compression fabric bike shorts with seamless sides, contoured V-shaped back yoke, and two hidden waistband pockets.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Nike', gender: 'Women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['#000000', '#475569'],
    badge: 'TRENDING', rating: 4.8, numReviews: 810, stock: 85
  },
  {
    name: 'Puma Classics French Terry Relaxed Shorts',
    price: 1499, originalPrice: 2199, discount: 32,
    description: 'Comfortable casual loungewear shorts made from sustainable French terry cotton with side slit hem details and elastic drawcord.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Puma', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#fbcfe8', '#334155'],
    badge: '', rating: 4.5, numReviews: 240, stock: 60
  },
  {
    name: 'Zara High-Waist Linen Blend Bermuda Shorts',
    price: 1890, originalPrice: 2790, discount: 32,
    description: 'Smart city shorts crafted from breezy linen-viscose blend with pleated front, belt loops, and folded turn-up cuffs.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Zara', gender: 'Women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#fef3c7', '#0f172a'],
    badge: 'LATEST STYLE', rating: 4.6, numReviews: 180, stock: 45
  },

  // ==========================================
  // CHILD CLOTHES - INDIAN, WESTERN, INNERWEAR & CASUALS
  // ==========================================
  {
    name: 'Manyavar Kids Boys Silk Kurta Churidar & Jacket Set',
    price: 3499, originalPrice: 5299, discount: 34,
    description: 'Festive 3-piece traditional attire for boys including a brocade nehru jacket, comfortable silk blend kurta, and soft elastic churidar.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Manyavar', gender: 'Kids', sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'], colors: ['#f59e0b', '#dc2626'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 260, stock: 40
  },
  {
    name: 'BIBA Girls Embroidered Festive Anarkali Dress with Dupatta',
    price: 2499, originalPrice: 3999, discount: 38,
    description: 'Delightful tiered party anarkali dress with foil prints, delicate gota border trims, cotton inner lining, and matching netted dupatta.',
    imageURL: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'BIBA', gender: 'Kids', sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'], colors: ['#ec4899', '#fef08a'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 310, stock: 35
  },
  {
    name: 'Hopscotch Boys Floral Print Blazer, Shirt & Trousers Set',
    price: 2199, originalPrice: 3499, discount: 37,
    description: 'Smart 3-piece formal party outfit featuring a tailored houndstooth blazer jacket, crisp cotton shirt, bow-tie, and elasticated chinos.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Hopscotch', gender: 'Kids', sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'], colors: ['#1e293b', '#ffffff'],
    badge: 'TRENDING', rating: 4.6, numReviews: 190, stock: 45
  },
  {
    name: 'FirstCry Baby Girl Layered Ruffle Princess Tulle Gown',
    price: 1799, originalPrice: 2899, discount: 38,
    description: 'Dreamy birthday celebration gown with sparkling sequin embroidered bodice, layered fluffy tulle flare, and cotton breathable lining.',
    imageURL: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'FirstCry', gender: 'Kids', sizes: ['1-2Y', '2-3Y', '3-4Y', '4-5Y'], colors: ['#fbcfe8', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.7, numReviews: 420, stock: 50
  },
  {
    name: 'H&M Kids Party Sparkly Tulle Dress',
    price: 1499, originalPrice: 2299, discount: 35,
    description: 'Sleeveless party dress with metallic glitter dots, gathered satin waist ribbon, and voluminous tiered tulle skirt for celebrations.',
    imageURL: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'H&M', gender: 'Kids', sizes: ['2-4Y', '4-6Y', '6-8Y', '8-10Y'], colors: ['#e0e7ff', '#fce7f3'],
    badge: '', rating: 4.6, numReviews: 180, stock: 55
  },
  {
    name: 'GAP Kids Classic Denim Bib Overalls Dungarees',
    price: 2299, originalPrice: 3299, discount: 30,
    description: 'Durable authentic denim overalls dungarees with adjustable metal buckle straps, chest kangaroo pocket, and snap button inner leg inseam.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'GAP', gender: 'Kids', sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'], colors: ['#3b82f6'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 240, stock: 40
  },
  {
    name: 'Jockey Junior Pure Cotton Printed Vests (Pack of 3)',
    price: 499, originalPrice: 699, discount: 29,
    description: '100% super combed breathable cotton vests for kids with soft neck binding and label-free comfort for itch-free all-day wear.',
    imageURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Jockey', gender: 'Kids', sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'], colors: ['#ffffff', '#bae6fd', '#fef08a'],
    badge: 'ESSENTIAL', rating: 4.8, numReviews: 760, stock: 110
  },
  {
    name: 'Mothercare Boys Organic Cotton Boxer Briefs (Pack of 5)',
    price: 799, originalPrice: 1199, discount: 33,
    description: 'Pack of 5 super soft GOTS-certified organic cotton briefs with fun animal prints and gentle non-pinching elastic waistband.',
    imageURL: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Mothercare', gender: 'Kids', sizes: ['2-3Y', '3-4Y', '5-6Y', '7-8Y'], colors: ['#38bdf8', '#fb7185', '#34d399'],
    badge: '', rating: 4.7, numReviews: 310, stock: 95
  },
  {
    name: 'Puma Kids Graphic Crewneck Tee & Shorts Active Set',
    price: 1399, originalPrice: 1999, discount: 30,
    description: 'Coordinating 2-piece sportswear set featuring dynamic colorblock graphic t-shirt and breathable elasticated french terry shorts.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Puma', gender: 'Kids', sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'], colors: ['#ef4444', '#0f172a'],
    badge: 'BESTSELLER', rating: 4.7, numReviews: 380, stock: 65
  },
  {
    name: 'Levi’s Kids 510 Skinny Fit Stretch Denim Jeans',
    price: 1699, originalPrice: 2499, discount: 32,
    description: 'Durable performance denim jeans for active boys with adjustable inner button waistband and 5-pocket styling.',
    imageURL: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: "Levi's", gender: 'Kids', sizes: ['4-5Y', '6-7Y', '8-9Y', '10-12Y'], colors: ['#1e3a5f'],
    badge: '', rating: 4.6, numReviews: 290, stock: 50
  },
  {
    name: 'Adidas Kids Tiro Essential Tracksuit Full Set',
    price: 2499, originalPrice: 3499, discount: 29,
    description: 'Iconic 3-Stripes zip jacket and tapered training pants set made with recycled Primegreen performance knit fabric.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Adidas', gender: 'Kids', sizes: ['4-5Y', '6-7Y', '8-9Y', '10-12Y'], colors: ['#1e3a8a', '#000000'],
    badge: 'TRENDING', rating: 4.8, numReviews: 410, stock: 55
  },
  {
    name: 'Max Kids Cotton Dinosaur Print T-Shirt (Pack of 3)',
    price: 799, originalPrice: 1199, discount: 33,
    description: 'Fun Jurassic dinosaur graphic tees in vibrant hues made from 100% breathable single jersey cotton for everyday adventures.',
    imageURL: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Max Kids', gender: 'Kids', sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'], colors: ['#22c55e', '#3b82f6', '#eab308'],
    badge: 'HOT DEAL', rating: 4.5, numReviews: 520, stock: 85
  },
  {
    name: 'Nike Kids Dri-FIT Trophy Training Shorts',
    price: 1195, originalPrice: 1495, discount: 20,
    description: 'Lightweight sweat-wicking athletic shorts with mesh side inserts and stretchy waistband designed for playground and sports games.',
    imageURL: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing', brand: 'Nike', gender: 'Kids', sizes: ['S', 'M', 'L', 'XL'], colors: ['#000000', '#dc2626'],
    badge: '', rating: 4.7, numReviews: 210, stock: 60
  }
];

const shoesProducts = [
  // ==========================================
  // MEN SHOES & SLIPPERS
  // ==========================================
  {
    name: 'Nike Air Jordan 1 Low Retro OG Sneaker',
    price: 8995, originalPrice: 11495, discount: 22,
    description: 'Iconic low-top basketball sneaker built with premium genuine leather upper, encapsulated Air-Sole cushioning unit, and durable solid rubber outsole.',
    imageURL: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Nike', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], colors: ['#dc2626', '#000000', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 1850, stock: 45
  },
  {
    name: 'Adidas Ultraboost Light Running Shoes',
    price: 11999, originalPrice: 17999, discount: 33,
    description: 'Next-generation lightest-ever Boost cushioning foam paired with Primeknit+ adaptive upper and Continental rubber outsole for phenomenal energy return.',
    imageURL: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Adidas', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'], colors: ['#0f172a', '#ffffff'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 920, stock: 35
  },
  {
    name: 'Puma RS-X Reinvention Chunky Sneakers',
    price: 5499, originalPrice: 8999, discount: 39,
    description: 'Bold retro-futuristic aesthetic with bulky silhouette, mesh and textile upper with leather overlays, and signature RS running system cushioning.',
    imageURL: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Puma', gender: 'Men', sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'], colors: ['#3b82f6', '#ffffff', '#ef4444'],
    badge: 'TRENDING', rating: 4.7, numReviews: 610, stock: 50
  },
  {
    name: 'Woodland Camel Genuine Leather Rugged Trekking Boots',
    price: 4795, originalPrice: 6495, discount: 26,
    description: 'Heavy-duty high-ankle nubuck leather outdoor boots with deep cleated rubber lug sole for superior grip on rugged and slippery terrains.',
    imageURL: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Woodland', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], colors: ['#d97706', '#78350f'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 1420, stock: 60
  },
  {
    name: 'Clarks Tilden Cap Leather Oxford Formal Shoes',
    price: 5999, originalPrice: 8999, discount: 33,
    description: 'Handcrafted full-grain polished black leather cap-toe Oxfords featuring OrthoLite footbed and subtle elastic gore inserts for executive comfort.',
    imageURL: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Clarks', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], colors: ['#000000', '#78350f'],
    badge: 'LUXURY', rating: 4.8, numReviews: 470, stock: 40
  },
  {
    name: 'Bata Men Polished Leather Classic Derby Shoes',
    price: 1899, originalPrice: 2499, discount: 24,
    description: 'Timeless formal lace-up Derby shoes with cushioned collar, breathable synthetic lining, and flexible anti-skid TPR sole.',
    imageURL: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Bata', gender: 'Men', sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'], colors: ['#000000', '#451a03'],
    badge: 'ESSENTIAL', rating: 4.4, numReviews: 830, stock: 90
  },
  {
    name: 'Crocs Classic Clogs with Pivoting Heel Strap',
    price: 2495, originalPrice: 3495, discount: 29,
    description: 'Incredibly light and fun to wear water-friendly clogs made with proprietary Croslite foam cushioning and ventilation ports for breathability.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Crocs', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], colors: ['#0284c7', '#0f172a', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 2450, stock: 120
  },
  {
    name: 'Birkenstock Arizona EVA Waterproof Double Strap Slides',
    price: 3990, originalPrice: 4990, discount: 20,
    description: 'Ultra-lightweight and waterproof two-strap sandals modeled on the legendary cork original with anatomically shaped EVA footbed.',
    imageURL: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Birkenstock', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'], colors: ['#000000', '#64748b', '#ffffff'],
    badge: 'TRENDING', rating: 4.7, numReviews: 780, stock: 65
  },
  {
    name: 'Skechers Go Walk 6 Slip-Ins Walking Shoes',
    price: 4499, originalPrice: 6299, discount: 29,
    description: 'Hands-free slip-in technology with Heel Pillow, responsive Ultra GO cushioning, and high-rebound Hyper Pillar Technology.',
    imageURL: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Skechers', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'], colors: ['#1e293b', '#475569'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 630, stock: 55
  },
  {
    name: 'Red Tape Suede Leather Penny Loafers',
    price: 2199, originalPrice: 4999, discount: 56,
    description: 'Sophisticated moc-toe suede leather slip-on penny loafers with memory foam insole and gripped driving sole.',
    imageURL: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Red Tape', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'], colors: ['#78350f', '#0f172a'],
    badge: 'HOT DEAL', rating: 4.5, numReviews: 410, stock: 70
  },
  {
    name: 'Havaianas Brasil Logo Comfort Flip-Flop Slippers',
    price: 1199, originalPrice: 1599, discount: 25,
    description: 'Authentic Brazilian rubber thong flip-flops featuring iconic flag emblem on the strap and textured rice-pattern non-slip footbed.',
    imageURL: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Havaianas', gender: 'Men', sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'], colors: ['#1e3a8a', '#16a34a', '#000000'],
    badge: '', rating: 4.6, numReviews: 340, stock: 100
  },

  // ==========================================
  // WOMEN SHOES & HEELS
  // ==========================================
  {
    name: 'Jimmy Choo Romy 85 Pointed-Toe Glitter Stiletto Pumps',
    price: 29999, originalPrice: 45000, discount: 33,
    description: 'Showstopping Italian luxury 85mm stiletto heels finished in platinum dégradé coarse glitter fabric with soft leather lining and leather sole.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Jimmy Choo', gender: 'Women', sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#fef08a', '#cbd5e1'],
    badge: 'LUXURY', rating: 4.9, numReviews: 210, stock: 15
  },
  {
    name: 'Steve Madden Stecy Ankle-Strap Heeled Sandals',
    price: 4999, originalPrice: 7999, discount: 38,
    description: 'Minimalist barely-there high stiletto heel sandals with delicate buckled ankle strap and sleek single toe band.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Steve Madden', gender: 'Women', sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#000000', '#f472b6', '#d4a373'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 540, stock: 40
  },
  {
    name: 'ALDO Cassedy Classic Pointed Block Heel Pumps',
    price: 4499, originalPrice: 6999, discount: 36,
    description: 'Chic tailored 3-inch block heel office pumps engineered with Pillow Walk dual-density foam technology for supreme walking ease.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'ALDO', gender: 'Women', sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#0f172a', '#d4a373'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 390, stock: 45
  },
  {
    name: 'Catwalk Strappy Platform Wedge Sandals',
    price: 1999, originalPrice: 3299, discount: 39,
    description: 'Criss-cross braided metallic faux leather straps resting on a lightweight cork-finish platform wedge heel with cushioned footbed.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Catwalk', gender: 'Women', sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#fbbf24', '#f43f5e'],
    badge: 'TRENDING', rating: 4.6, numReviews: 480, stock: 60
  },
  {
    name: 'Zara Metallic Slingback Kitten Heels',
    price: 2990, originalPrice: 3990, discount: 25,
    description: 'Pointed toe court shoes with sculptural 5cm kitten heels, mirror-shine silver faux leather finish, and elastic slingback heel strap.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Zara', gender: 'Women', sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#e2e8f0'],
    badge: 'LATEST STYLE', rating: 4.7, numReviews: 260, stock: 35
  },
  {
    name: 'Nike Air Force 1 07 Essential Women Sneakers',
    price: 7495, originalPrice: 9695, discount: 23,
    description: 'The basketball legend in a sleek women silhouette featuring crisp stitched leather overlays, Nike Air unit, and clean rubber cupsole.',
    imageURL: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Nike', gender: 'Women', sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#ffffff', '#fbcfe8'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 2100, stock: 70
  },
  {
    name: 'Puma Carina 2.0 Retro Platform Sneakers',
    price: 2999, originalPrice: 4999, discount: 40,
    description: 'California 80s beach-inspired leather sneaker updated with elevated platform sole, SoftFoam+ comfort sockliner, and contrast Formstrip.',
    imageURL: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Puma', gender: 'Women', sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#ffffff', '#000000'],
    badge: 'HOT DEAL', rating: 4.7, numReviews: 730, stock: 80
  },
  {
    name: 'Metro Genuine Leather Embellished Kolhapuri Flats',
    price: 1690, originalPrice: 2490, discount: 32,
    description: 'Handmade ethnic Kolhapuri toe-ring sandals in rich tan leather adorned with golden zardozi embroidery and anti-slip ribbed sole.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Metro', gender: 'Women', sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#d97706', '#991b1b'],
    badge: '', rating: 4.5, numReviews: 310, stock: 65
  },
  {
    name: 'Crocs Brooklyn Low Wedge Comfort Sandals',
    price: 3795, originalPrice: 4995, discount: 24,
    description: 'Effortless style with revolutionary LiteRide foam footbeds inside for all-day comfort, paired with two-strap Matlite upper.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Crocs', gender: 'Women', sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7'], colors: ['#000000', '#f5ebe0'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 540, stock: 50
  },

  // ==========================================
  // CHILD SHOES & SLIPPERS
  // ==========================================
  {
    name: 'Skechers Kids S-Lights Magna-Lights Light-Up Sneakers',
    price: 2499, originalPrice: 3499, discount: 29,
    description: 'Fun sporty sneakers featuring light-up sculpted midsole pods that blink with every step, hook-and-loop velcro strap, and stretch laces.',
    imageURL: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Skechers', gender: 'Kids', sizes: ['UK 10C', 'UK 11C', 'UK 12C', 'UK 13C', 'UK 1', 'UK 2'], colors: ['#3b82f6', '#ef4444', '#000000'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 680, stock: 60
  },
  {
    name: 'Nike Flex Runner 2 Slip-On Kids Running Shoes',
    price: 2495, originalPrice: 3295, discount: 24,
    description: 'Lace-free slip-on design with stretchy breathable fabric and leather sides that secure small feet during active recess play.',
    imageURL: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Nike', gender: 'Kids', sizes: ['UK 11C', 'UK 12C', 'UK 13C', 'UK 1', 'UK 2', 'UK 3'], colors: ['#000000', '#ffffff', '#ec4899'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 530, stock: 55
  },
  {
    name: 'Crocs Kids Classic Clogs with Customizable Jibbitz Ports',
    price: 1795, originalPrice: 2295, discount: 22,
    description: 'Croslite foam lightweight slip-on clogs with pivoting heel straps and holes for personalizing with cute Jibbitz charms.',
    imageURL: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Crocs', gender: 'Kids', sizes: ['UK 8C', 'UK 9C', 'UK 10C', 'UK 11C', 'UK 12C', 'UK 13C'], colors: ['#f43f5e', '#38bdf8', '#fbbf24'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 1210, stock: 90
  },
  {
    name: 'Adidas Kids Tensaur Hook-and-Loop Sports Shoes',
    price: 1999, originalPrice: 2799, discount: 29,
    description: 'Durable synthetic leather sneakers with double hook-and-loop strap closure and non-marking rubber cupsole for school courts.',
    imageURL: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Adidas', gender: 'Kids', sizes: ['UK 10C', 'UK 11C', 'UK 12C', 'UK 13C', 'UK 1', 'UK 2'], colors: ['#000000', '#ffffff'],
    badge: '', rating: 4.6, numReviews: 390, stock: 75
  },
  {
    name: 'Bata Bubblegummers Leather School Uniform Shoes',
    price: 999, originalPrice: 1299, discount: 23,
    description: 'Sturdy black school shoes with easy velcro strap, padded ankle collar, and antibacterial bubble-scented cushioned insole.',
    imageURL: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Bata', gender: 'Kids', sizes: ['UK 9C', 'UK 10C', 'UK 11C', 'UK 12C', 'UK 13C', 'UK 1'], colors: ['#000000'],
    badge: 'ESSENTIAL', rating: 4.5, numReviews: 890, stock: 120
  },
  {
    name: 'Puma Kids Smash v2 Glitz Glam Velcro Sneakers',
    price: 1899, originalPrice: 2799, discount: 32,
    description: 'Sparkly all-over glitter upper tennis sneaker for girls with soft textile lining and dual velcro strap security.',
    imageURL: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes', brand: 'Puma', gender: 'Kids', sizes: ['UK 10C', 'UK 11C', 'UK 12C', 'UK 13C', 'UK 1'], colors: ['#f472b6', '#cbd5e1'],
    badge: 'HOT DEAL', rating: 4.7, numReviews: 280, stock: 50
  }
];

const watchesProducts = [
  // ==========================================
  // MEN WATCHES
  // ==========================================
  {
    name: 'Fossil Grant Chronograph Brown Leather Men Watch',
    price: 8995, originalPrice: 13995, discount: 36,
    description: 'Timeless roman numeral dial with three chronograph sub-dials, stainless steel 44mm case, and supple brown genuine leather interchangeable strap.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Fossil', gender: 'Men', sizes: ['44mm'], colors: ['#78350f', '#1e293b'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 1240, stock: 45
  },
  {
    name: 'Titan Octane Active Analog Blue Dial Men Watch',
    price: 6495, originalPrice: 9495, discount: 32,
    description: 'Sporty chronograph watch with textured deep sea blue dial, mineral glass crystal, date window, and solid stainless steel linked bracelet.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Titan', gender: 'Men', sizes: ['43mm'], colors: ['#1e3a8a', '#94a3b8'],
    badge: 'TOP RATED', rating: 4.7, numReviews: 890, stock: 55
  },
  {
    name: 'Casio G-Shock GA-2100 "CasiOak" Octagonal Carbon Watch',
    price: 7995, originalPrice: 9995, discount: 20,
    description: 'Ultra-durable Carbon Core Guard shock-resistant structure in a sleek 11.8mm thin octagonal bezel with 200m water resistance and double LED illumination.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Casio', gender: 'Men', sizes: ['45mm'], colors: ['#000000', '#111827'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 2600, stock: 70
  },
  {
    name: 'Seiko 5 Sports Automatic Black Dial Stainless Steel Watch',
    price: 19500, originalPrice: 25000, discount: 22,
    description: 'Renowned Japanese 4R36 caliber automatic movement with 41-hour power reserve, LumiBrite hands, exhibition case back, and uni-directional rotating bezel.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Seiko', gender: 'Men', sizes: ['42.5mm'], colors: ['#000000', '#cbd5e1'],
    badge: 'LUXURY', rating: 4.9, numReviews: 530, stock: 25
  },
  {
    name: 'Tissot PRX Powermatic 80 Blue Dial Watch',
    price: 54500, originalPrice: 65000, discount: 16,
    description: 'Swiss-made luxury integrated bracelet watch featuring a waffle-patterned dial, sapphire crystal, and 80 hours power reserve with Nivachron balance spring.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Tissot', gender: 'Men', sizes: ['40mm'], colors: ['#1e3a8a', '#e2e8f0'],
    badge: 'LUXURY', rating: 5.0, numReviews: 310, stock: 18
  },
  {
    name: 'Tommy Hilfiger Decker Multi-Function Navy Dial Watch',
    price: 9500, originalPrice: 14500, discount: 34,
    description: 'Bold iconic styling with blue sunray multi-function dial, tachymeter bezel, red/white/blue flag accent, and comfortable blue silicone strap.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Tommy Hilfiger', gender: 'Men', sizes: ['46mm'], colors: ['#1e3a8a', '#dc2626'],
    badge: 'TRENDING', rating: 4.6, numReviews: 420, stock: 40
  },
  {
    name: 'Armani Exchange Blackout Minimalist Mesh Men Watch',
    price: 8495, originalPrice: 12995, discount: 35,
    description: 'Monochrome sleek all-black stainless steel watch with brushed logo dial and slim stainless steel Milanese mesh magnetic strap.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Armani Exchange', gender: 'Men', sizes: ['44mm'], colors: ['#000000'],
    badge: '', rating: 4.7, numReviews: 280, stock: 35
  },
  {
    name: 'Timex Expedition Scout 40mm Field Watch',
    price: 3495, originalPrice: 4995, discount: 30,
    description: 'Classic outdoor military field watch equipped with INDIGLO night-light dial, quickdate window, and rugged green ballistic nylon strap.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Timex', gender: 'Men', sizes: ['40mm'], colors: ['#14532d', '#111827'],
    badge: 'ESSENTIAL', rating: 4.6, numReviews: 760, stock: 65
  },

  // ==========================================
  // WOMEN WATCHES
  // ==========================================
  {
    name: 'Michael Kors Parker Rose Gold Crystal Pave Watch',
    price: 14995, originalPrice: 22995, discount: 35,
    description: 'Dazzling feminine timepiece with double row crystal-set bezel, mother of pearl chronograph dial, and blush acetate-accented stainless steel bracelet.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Michael Kors', gender: 'Women', sizes: ['39mm'], colors: ['#fb7185', '#fde047'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 890, stock: 35
  },
  {
    name: 'Titan Raga Viva Rose Gold Analog Women Watch',
    price: 4995, originalPrice: 6995, discount: 29,
    description: 'Inspired by modern Indian elegance, featuring sunray rose gold dial with Swarovski crystal hour markers and sculpted jewellery-style metal strap.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Titan', gender: 'Women', sizes: ['30mm'], colors: ['#fb7185', '#d97706'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 1120, stock: 55
  },
  {
    name: 'Fossil Jacqueline Slim Nude Leather Women Watch',
    price: 6995, originalPrice: 10495, discount: 33,
    description: 'Classic art-deco inspired slim circular case with roman numerals, date aperture, and soft nude genuine leather strap with buckle.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Fossil', gender: 'Women', sizes: ['36mm'], colors: ['#fce7f3', '#fef08a'],
    badge: 'TRENDING', rating: 4.7, numReviews: 670, stock: 40
  },
  {
    name: 'Daniel Wellington Petite Melrose Rose Gold Mesh Watch',
    price: 11999, originalPrice: 15999, discount: 25,
    description: 'Minimalist Scandinavian design with an eggshell white dial, ultra-thin 6mm casing, and delicate rose gold Milanese mesh bracelet.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Daniel Wellington', gender: 'Women', sizes: ['28mm', '32mm'], colors: ['#f472b6', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 940, stock: 50
  },
  {
    name: 'Guess Sparkler Glitz Bezel Stainless Steel Watch',
    price: 8900, originalPrice: 13500, discount: 34,
    description: 'Statement glamour watch with crystal-encrusted triangle logo dial, polished silver-tone case, and self-adjustable jewellery clasp.',
    imageURL: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Guess', gender: 'Women', sizes: ['38mm'], colors: ['#e2e8f0'],
    badge: '', rating: 4.6, numReviews: 310, stock: 30
  },
  {
    name: 'Casio Sheen Swarovski Crystal Analog Ceramic Watch',
    price: 7495, originalPrice: 10995, discount: 32,
    description: 'Pure white scratch-resistant ceramic bezel studded with authentic Swarovski crystals, sapphire crystal glass, and date display.',
    imageURL: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Watches', brand: 'Casio', gender: 'Women', sizes: ['34mm'], colors: ['#ffffff', '#fb7185'],
    badge: '', rating: 4.7, numReviews: 450, stock: 40
  }
];

const bagsAndJewelleryProducts = [
  // ==========================================
  // WOMEN BAGS
  // ==========================================
  {
    name: 'Michael Kors Jet Set Travel Medium Saffiano Leather Tote',
    price: 16999, originalPrice: 26999, discount: 37,
    description: 'Signature scratch-resistant Saffiano leather tote with top zip closure, polished gold MK charm medallion, laptop compartment, and dual top handles.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Michael Kors', gender: 'Women', sizes: ['Medium'], colors: ['#111827', '#92400e', '#fbcfe8'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 950, stock: 35
  },
  {
    name: 'Coach Tabby 26 Polished Pebble Leather Shoulder Bag',
    price: 34500, originalPrice: 48000, discount: 28,
    description: 'Modern take on an archival 1970s Coach design in supple pebble leather with iconic C hardware and two detachable straps for shoulder or crossbody carry.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Coach', gender: 'Women', sizes: ['One Size'], colors: ['#fef3c7', '#000000'],
    badge: 'LUXURY', rating: 5.0, numReviews: 420, stock: 15
  },
  {
    name: 'Lavie Betula Medium Dome Structured Satchel Handbag',
    price: 1999, originalPrice: 4299, discount: 53,
    description: 'Elegant textured faux leather dome satchel with dual rolled handles, detachable long shoulder strap, and multi-utility zipper compartments.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Lavie', gender: 'Women', sizes: ['Medium'], colors: ['#dc2626', '#1e293b', '#d4a373'],
    badge: 'HOT DEAL', rating: 4.6, numReviews: 1280, stock: 80
  },
  {
    name: 'Caprese Faux Leather Structured Top-Handle Bag',
    price: 2499, originalPrice: 4999, discount: 50,
    description: 'Geometric structured formal handbag with high-grade faux leather body, embossed brand monogram, metal foot studs, and spacious lined interior.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Caprese', gender: 'Women', sizes: ['One Size'], colors: ['#047857', '#000000'],
    badge: 'TRENDING', rating: 4.5, numReviews: 530, stock: 65
  },
  {
    name: 'Baggit Flap Crossbody Sling Bag with Chain Accent',
    price: 1490, originalPrice: 2490, discount: 40,
    description: 'Cruelty-free vegan leather compact sling bag with magnetic snap flap closure, interior card slots, and an adjustable chain-woven crossbody strap.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Baggit', gender: 'Women', sizes: ['Small'], colors: ['#d97706', '#0f172a'],
    badge: 'ESSENTIAL', rating: 4.4, numReviews: 810, stock: 90
  },
  {
    name: 'Da Milano Genuine Italian Leather Slouchy Hobo Bag',
    price: 9999, originalPrice: 14999, discount: 33,
    description: 'Crafted from premium full-grain Italian leather with a buttery soft slouchy profile, top zip closure, and brushed antique gold fittings.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Da Milano', gender: 'Women', sizes: ['Large'], colors: ['#78350f', '#000000'],
    badge: 'LUXURY', rating: 4.8, numReviews: 240, stock: 25
  },
  {
    name: 'Kate Spade Knott Medium Pebbled Crossbody Bag',
    price: 18500, originalPrice: 26000, discount: 29,
    description: 'Chic cinched knotted sides with textured pebbled leather, multiple divider pockets, magnetic snap closure, and gold spade pinmount logo.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Kate Spade', gender: 'Women', sizes: ['Medium'], colors: ['#38bdf8', '#fbcfe8'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 310, stock: 20
  },
  {
    name: 'Sabyasachi Royal Embroidered Velvet Festive Potli Bag',
    price: 7999, originalPrice: 12000, discount: 33,
    description: 'Traditional wedding potli pouch crafted in lush silk velvet with antique zardozi thread embroidery, beaded fringe tassels, and braided wristlet drawstring.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'Sabyasachi', gender: 'Women', sizes: ['One Size'], colors: ['#831843', '#1e1b4b'],
    badge: 'LUXURY', rating: 4.9, numReviews: 180, stock: 20
  },
  {
    name: 'ALDO Legoiri Quilted Crossbody Bag with Turnlock',
    price: 3999, originalPrice: 5999, discount: 33,
    description: 'Diamond quilted structured envelope crossbody bag featuring polished turnlock hardware and sliding convertible chain shoulder strap.',
    imageURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Bags', brand: 'ALDO', gender: 'Women', sizes: ['Small'], colors: ['#000000', '#f5f5f4'],
    badge: 'TRENDING', rating: 4.7, numReviews: 460, stock: 50
  },

  // ==========================================
  // JEWELLERY
  // ==========================================
  {
    name: 'Tanishq 18K Yellow Gold Floral Diamond Stud Earrings',
    price: 24999, originalPrice: 32999, discount: 24,
    description: 'Certified 0.25 carat GH-SI sparkling round brilliant cut diamonds set in 18K hallmarked yellow gold floral blossom silhouette with screw back.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Tanishq', gender: 'Women', sizes: ['One Size'], colors: ['#fbbf24'],
    badge: 'LUXURY', rating: 4.9, numReviews: 610, stock: 25
  },
  {
    name: 'Mia by Tanishq 14K Gold Minimalist Solitaire Pendant with Chain',
    price: 11999, originalPrice: 15999, discount: 25,
    description: 'Elegant everyday fine jewellery featuring a genuine round diamond suspended from an authentic 14 karat yellow gold adjustable cable chain.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Mia by Tanishq', gender: 'Women', sizes: ['16-18 Inch'], colors: ['#fbbf24'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 430, stock: 35
  },
  {
    name: 'GIVA 925 Sterling Silver Classic Solitaire Ring with Certificate',
    price: 1799, originalPrice: 2999, discount: 40,
    description: 'Rhodium-plated 925 pure silver band crowned with a brilliant AAA+ grade cubic zirconia solitaire, accompanied by authenticity certificate.',
    imageURL: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'GIVA', gender: 'Women', sizes: ['12', '14', '16', '18'], colors: ['#e2e8f0'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 1890, stock: 110
  },
  {
    name: 'Swarovski Infinity Crystal Rhodium-Plated Pendant Necklace',
    price: 7990, originalPrice: 11000, discount: 27,
    description: 'Dazzling infinity symbol interwoven with a shimmering Swarovski crystal heart, suspended on a polished rhodium-plated linked chain.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Swarovski', gender: 'Women', sizes: ['38cm'], colors: ['#cbd5e1'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 720, stock: 40
  },
  {
    name: 'Sukkhi Traditional 24K Gold Plated Kundan Choker Necklace Set',
    price: 1299, originalPrice: 4999, discount: 74,
    description: 'Bridal handcrafted kundan choker necklace adorned with hanging cluster pearls, paired with matching statement jhumkas and maang tikka.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Sukkhi', gender: 'Women', sizes: ['Free Size'], colors: ['#f59e0b', '#047857', '#991b1b'],
    badge: 'HOT DEAL', rating: 4.5, numReviews: 2400, stock: 150
  },
  {
    name: 'Voylla Oxidised 925 Silver Peacock Jhumka Earrings',
    price: 899, originalPrice: 1599, discount: 44,
    description: 'Intricately carved tribal peacock dome jhumkis with antique oxidised silver patina finish and musical tiny hanging ghungroo beads.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Voylla', gender: 'Women', sizes: ['One Size'], colors: ['#94a3b8'],
    badge: 'TRENDING', rating: 4.6, numReviews: 890, stock: 95
  },
  {
    name: 'Zaveri Pearls Green Meenakari & Pearl Royal Choker Set',
    price: 1499, originalPrice: 3499, discount: 57,
    description: 'Regal Rajputana style choker necklace adorned with intricate green meenakari enamel work, faux emeralds, and hand-strung pearl drops.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Zaveri Pearls', gender: 'Women', sizes: ['Free Size'], colors: ['#065f46', '#fef08a'],
    badge: '', rating: 4.4, numReviews: 610, stock: 80
  },
  {
    name: 'GIVA 925 Sterling Silver Zircon Tennis Bracelet',
    price: 2799, originalPrice: 4299, discount: 35,
    description: 'Dazzling continuous line of bezel-set Swiss cubic zirconia stones in anti-tarnish rhodium plated 925 sterling silver with double safety box clasp.',
    imageURL: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'GIVA', gender: 'Women', sizes: ['6.5 Inch', '7 Inch'], colors: ['#e2e8f0'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 930, stock: 60
  },
  {
    name: 'Kalyan Jewellers 22K Yellow Gold Filigree Bangles (Set of 2)',
    price: 58999, originalPrice: 72000, discount: 18,
    description: 'Hallmarked 22 karat yellow gold handcrafted bangles showcasing exquisite Indian filigree openwork artistry with secure screw lock.',
    imageURL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'Jewellery', brand: 'Kalyan Jewellers', gender: 'Women', sizes: ['2.4', '2.6', '2.8'], colors: ['#f59e0b'],
    badge: 'LUXURY', rating: 5.0, numReviews: 140, stock: 12
  }
];

const techAccessoriesProducts = [
  // ==========================================
  // MOBILE PHONES
  // ==========================================
  {
    name: 'Apple iPhone 16 Pro (256GB - Desert Titanium)',
    price: 129900, originalPrice: 139900, discount: 7,
    description: 'Features Grade 5 Titanium design, A18 Pro chip, 48MP Fusion camera system with Camera Control button, and stunning 6.3-inch Super Retina XDR display with ProMotion.',
    imageURL: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['128GB', '256GB', '512GB', '1TB'], colors: ['#d4af37', '#111827', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 2310, stock: 40
  },
  {
    name: 'Samsung Galaxy S24 Ultra 5G (512GB - Titanium Gray)',
    price: 129999, originalPrice: 144999, discount: 10,
    description: 'Galaxy AI smartphone powered by Snapdragon 8 Gen 3 for Galaxy, built-in S Pen, 200MP Quad Telephoto camera with 100x Space Zoom, and 6.8-inch QHD+ Dynamic AMOLED 2X.',
    imageURL: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Samsung', gender: 'Unisex', sizes: ['256GB', '512GB', '1TB'], colors: ['#64748b', '#000000', '#fef08a'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 1840, stock: 35
  },
  {
    name: 'Google Pixel 9 Pro 5G (256GB - Obsidian)',
    price: 99999, originalPrice: 109999, discount: 9,
    description: 'Supercharged by Google Tensor G4 with Gemini AI natively integrated, triple pro camera system with 30x Super Res Zoom, and 24-hour battery with Extreme Battery Saver.',
    imageURL: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Google', gender: 'Unisex', sizes: ['128GB', '256GB', '512GB'], colors: ['#0f172a', '#f8fafc', '#fbcfe8'],
    badge: 'TRENDING', rating: 4.8, numReviews: 920, stock: 30
  },
  {
    name: 'OnePlus 12 5G (256GB - Flowy Emerald)',
    price: 64999, originalPrice: 69999, discount: 7,
    description: 'Snapdragon 8 Gen 3 flagship with 4th Gen Hasselblad Camera system, 2K 120Hz ProXDR display, 5400mAh battery, and lightning-fast 100W SUPERVOOC charging.',
    imageURL: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'OnePlus', gender: 'Unisex', sizes: ['256GB', '512GB'], colors: ['#047857', '#000000'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 1490, stock: 50
  },
  {
    name: 'Xiaomi 14 Ultra 5G (512GB - Leica Quad Camera)',
    price: 89999, originalPrice: 99999, discount: 10,
    description: 'Photography titan with Leica 1-inch variable aperture main sensor, titanium frame, WQHD+ AMOLED display, and 90W HyperCharge wired + 80W wireless.',
    imageURL: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Xiaomi', gender: 'Unisex', sizes: ['512GB'], colors: ['#000000', '#ffffff'],
    badge: 'HOT DEAL', rating: 4.7, numReviews: 620, stock: 25
  },
  {
    name: 'Nothing Phone (2) 5G (256GB - Dark Grey)',
    price: 36999, originalPrice: 44999, discount: 18,
    description: 'Futuristic transparent back with customizable Glyph Interface LED lighting, Snapdragon 8+ Gen 1 processor, dual 50MP Sony sensors, and Clean Nothing OS.',
    imageURL: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Nothing', gender: 'Unisex', sizes: ['128GB', '256GB', '512GB'], colors: ['#334155', '#ffffff'],
    badge: 'TRENDING', rating: 4.6, numReviews: 870, stock: 45
  },
  {
    name: 'Samsung Galaxy Z Flip6 5G (256GB - Mint)',
    price: 89999, originalPrice: 109999, discount: 18,
    description: 'Pocket-sized foldable icon featuring FlexWindow outer display with Galaxy AI auto-framing, upgraded 50MP camera, and Armor Aluminum frame with IP48 water resistance.',
    imageURL: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Samsung', gender: 'Unisex', sizes: ['256GB', '512GB'], colors: ['#a7f3d0', '#fbcfe8', '#334155'],
    badge: 'LATEST STYLE', rating: 4.7, numReviews: 440, stock: 25
  },
  {
    name: 'Apple iPhone 15 (128GB - Blue)',
    price: 65900, originalPrice: 79900, discount: 18,
    description: 'Dynamic Island interactive alerts, powerful 48MP main camera with 2x telephoto optical zoom, color-infused back glass, and universal USB-C charging.',
    imageURL: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['128GB', '256GB', '512GB'], colors: ['#bae6fd', '#fce7f3', '#000000'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 3100, stock: 65
  },

  // ==========================================
  // LAPTOPS
  // ==========================================
  {
    name: 'Apple MacBook Pro 16" (M3 Max Chip, 36GB RAM, 1TB SSD)',
    price: 349900, originalPrice: 399900, discount: 13,
    description: 'Unprecedented computing power for creators with 14-core CPU, 30-core GPU, Liquid Retina XDR display with 1600 nits peak brightness, and up to 22 hours battery life.',
    imageURL: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['1TB SSD', '2TB SSD'], colors: ['#1e293b', '#cbd5e1'],
    badge: 'LUXURY', rating: 5.0, numReviews: 490, stock: 20
  },
  {
    name: 'Dell XPS 15 OLED (Intel Core i9 13th Gen, 32GB RAM, 1TB SSD, RTX 4070)',
    price: 249990, originalPrice: 289990, discount: 14,
    description: 'Stunning 3.5K OLED InfinityEdge touch display with 100% DCI-P3 color gamut, CNC machined aluminum chassis with carbon fiber palm rest, and NVIDIA RTX graphics.',
    imageURL: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Dell', gender: 'Unisex', sizes: ['1TB SSD'], colors: ['#94a3b8'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 380, stock: 22
  },
  {
    name: 'Lenovo ThinkPad X1 Carbon Gen 11 (Intel Core i7, 16GB, 512GB SSD)',
    price: 164990, originalPrice: 199990, discount: 18,
    description: 'The premier business ultrabook engineered with ultralight carbon fiber body, legendary ergonomic spill-resistant keyboard, TrackPoint, and MIL-SPEC durability.',
    imageURL: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Lenovo', gender: 'Unisex', sizes: ['512GB SSD', '1TB SSD'], colors: ['#000000'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 510, stock: 30
  },
  {
    name: 'ASUS ROG Zephyrus G14 Gaming Laptop (Ryzen 9, RTX 4070, 32GB RAM, 1TB SSD)',
    price: 189990, originalPrice: 219990, discount: 14,
    description: 'Ultra-portable 14-inch gaming powerhouse with 3K 120Hz ROG Nebula OLED display, vapor chamber thermal cooling, AniMe Matrix lid, and Dolby Atmos audio.',
    imageURL: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'ASUS', gender: 'Unisex', sizes: ['1TB SSD'], colors: ['#ffffff', '#0f172a'],
    badge: 'TRENDING', rating: 4.9, numReviews: 670, stock: 25
  },
  {
    name: 'Apple MacBook Air 15" (M3 Chip, 16GB Unified Memory, 512GB SSD)',
    price: 144900, originalPrice: 154900, discount: 6,
    description: 'Impossibly thin 11.5mm fanless silent design with expansive 15.3-inch Liquid Retina display, 1080p FaceTime HD camera, and MagSafe 3 charging.',
    imageURL: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['256GB SSD', '512GB SSD'], colors: ['#0f172a', '#fef3c7', '#cbd5e1'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 1420, stock: 45
  },
  {
    name: 'HP Spectre x360 2-in-1 Convertible Laptop (Intel Core Ultra 7, OLED Touch)',
    price: 159990, originalPrice: 189990, discount: 16,
    description: 'Gem-cut 360-degree convertible luxury laptop with 2.8K 120Hz OLED touchscreen, AI intelligent camera with auto-framing, and included rechargeable tilt pen.',
    imageURL: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'HP', gender: 'Unisex', sizes: ['512GB SSD', '1TB SSD'], colors: ['#1e293b', '#000000'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 320, stock: 25
  },
  {
    name: 'Razer Blade 16 Gaming Laptop (Intel Core i9 14th Gen, RTX 4080)',
    price: 329999, originalPrice: 379999, discount: 13,
    description: 'World’s first Dual-Mode Mini-LED display switching between UHD+ 120Hz and FHD+ 240Hz, solid CNC anodized aluminum unibody, and per-key Razer Chroma RGB.',
    imageURL: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Razer', gender: 'Unisex', sizes: ['1TB SSD', '2TB SSD'], colors: ['#000000'],
    badge: 'LUXURY', rating: 4.9, numReviews: 210, stock: 15
  },

  // ==========================================
  // CHARGERS & ADAPTERS
  // ==========================================
  {
    name: 'Anker 735 Charger (GaNPrime 65W 3-Port Fast Wall Charger)',
    price: 3999, originalPrice: 5999, discount: 33,
    description: 'Simultaneously charge 3 devices including laptops, tablets, and phones with GaNPrime technology, PowerIQ 4.0 dynamic power distribution, and ActiveShield 2.0 temperature monitoring.',
    imageURL: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Anker', gender: 'Unisex', sizes: ['65W'], colors: ['#000000', '#ffffff'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 1650, stock: 90
  },
  {
    name: 'Apple 20W USB-C Fast Power Adapter',
    price: 1899, originalPrice: 1900, discount: 1,
    description: 'Original Apple fast-charging power adapter offering rapid, efficient charging at home, in the office, or on the go. Compatible with iPhone, iPad, and Apple Watch.',
    imageURL: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['20W'], colors: ['#ffffff'],
    badge: 'ESSENTIAL', rating: 4.8, numReviews: 3890, stock: 140
  },
  {
    name: 'Samsung 45W Super Fast Charging 2.0 Power Adapter with 5A Cable',
    price: 2799, originalPrice: 3999, discount: 30,
    description: 'Official Samsung Power Delivery 3.0 PPS 45W charger engineered to rapidly juice up Galaxy S24 Ultra and laptops with 5A braided USB-C to USB-C cable included.',
    imageURL: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Samsung', gender: 'Unisex', sizes: ['45W'], colors: ['#000000', '#ffffff'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 1220, stock: 85
  },
  {
    name: 'Belkin BoostCharge Pro 3-in-1 Wireless MagSafe Charging Stand (15W)',
    price: 11999, originalPrice: 14999, discount: 20,
    description: 'Official Made for MagSafe 15W ultra-fast wireless charging stand for iPhone, Apple Watch fast charging, and dedicated wireless AirPods charging pad.',
    imageURL: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Belkin', gender: 'Unisex', sizes: ['15W Qi'], colors: ['#ffffff', '#000000'],
    badge: 'LUXURY', rating: 4.9, numReviews: 540, stock: 35
  },
  {
    name: 'Spigen ArcStation Pro 45W Dual USB-C GaN Wall Charger',
    price: 2499, originalPrice: 3499, discount: 29,
    description: 'Compact foldable prongs dual Type-C GaN fast wall charger with intelligent power sharing for iPhone, iPad, and MacBook Air.',
    imageURL: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Spigen', gender: 'Unisex', sizes: ['45W'], colors: ['#000000', '#ffffff'],
    badge: 'TRENDING', rating: 4.7, numReviews: 610, stock: 65
  },
  {
    name: 'Portronics 65W GaN Multi-Port Type-C Laptop Hub Adapter',
    price: 2199, originalPrice: 3999, discount: 45,
    description: 'All-in-one charging solution equipped with 2 Type-C Power Delivery ports and 1 QC 3.0 USB port with overheat surge protection.',
    imageURL: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Portronics', gender: 'Unisex', sizes: ['65W'], colors: ['#0f172a'],
    badge: 'HOT DEAL', rating: 4.5, numReviews: 780, stock: 80
  },

  // ==========================================
  // POWERBANKS
  // ==========================================
  {
    name: 'Anker 737 Power Bank (PowerCore 24K, 140W Two-Way Fast Charging)',
    price: 9999, originalPrice: 14999, discount: 33,
    description: 'Ultra-powerful 24,000mAh portable charger with smart digital display showing battery health and output power, 140W max output capable of fast charging a 16" MacBook Pro.',
    imageURL: 'https://images.unsplash.com/photo-1609592424388-7561b369c0d3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Anker', gender: 'Unisex', sizes: ['24000mAh'], colors: ['#000000'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 1140, stock: 40
  },
  {
    name: 'Mi 50W 20000mAh Power Bank with Triple Output & Laptop Charging',
    price: 3499, originalPrice: 4999, discount: 30,
    description: 'High capacity 20,000mAh power bank supporting 50W MAX Type-C two-way fast charging for laptops, Nintendo Switch, and smartphones.',
    imageURL: 'https://images.unsplash.com/photo-1609592424388-7561b369c0d3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Xiaomi', gender: 'Unisex', sizes: ['20000mAh'], colors: ['#000000'],
    badge: 'BESTSELLER', rating: 4.8, numReviews: 2430, stock: 95
  },
  {
    name: 'Ambrane 20000mAh 65W Fast Charging Power Bank with LED Indicator',
    price: 2999, originalPrice: 4499, discount: 33,
    description: 'Power-packed 65W Power Delivery output portable charger with rugged metallic casing, 12 layers of circuit protection, and airline approved capacity.',
    imageURL: 'https://images.unsplash.com/photo-1609592424388-7561b369c0d3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Ambrane', gender: 'Unisex', sizes: ['20000mAh'], colors: ['#1e293b', '#16a34a'],
    badge: 'HOT DEAL', rating: 4.6, numReviews: 890, stock: 75
  },
  {
    name: 'Baseus Blade 100W Ultra-Thin Laptop Power Bank (20000mAh)',
    price: 5999, originalPrice: 8999, discount: 33,
    description: 'Impossibly slim 18mm flat design with dual 100W USB-C ports, dual USB-A ports, real-time status LED display, and full laptop charging compatibility.',
    imageURL: 'https://images.unsplash.com/photo-1609592424388-7561b369c0d3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Baseus', gender: 'Unisex', sizes: ['20000mAh'], colors: ['#111827'],
    badge: 'TRENDING', rating: 4.8, numReviews: 470, stock: 45
  },
  {
    name: 'URBN 20000mAh 22.5W Ultra Compact Pocket Power Bank',
    price: 1499, originalPrice: 2499, discount: 40,
    description: 'Made in India pocket-sized high density lithium-polymer power bank with 22.5W Super Fast charging support for all smartphones.',
    imageURL: 'https://images.unsplash.com/photo-1609592424388-7561b369c0d3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'URBN', gender: 'Unisex', sizes: ['20000mAh'], colors: ['#475569', '#0284c7'],
    badge: '', rating: 4.5, numReviews: 1620, stock: 120
  },

  // ==========================================
  // EARBUDS (TWS)
  // ==========================================
  {
    name: 'Apple AirPods Pro (2nd Gen with USB-C MagSafe Case)',
    price: 21990, originalPrice: 24900, discount: 12,
    description: 'Up to 2x more Active Noise Cancellation, Adaptive Audio that tailors noise control to your environment, Personalized Spatial Audio with dynamic head tracking, and IP54 dust/water resistance.',
    imageURL: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['One Size'], colors: ['#ffffff'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 4210, stock: 80
  },
  {
    name: 'Sony WF-1000XM5 Truly Wireless Noise Canceling Earbuds',
    price: 21990, originalPrice: 29990, discount: 27,
    description: 'Industry-leading noise cancellation powered by dual proprietary processors and Dynamic Driver X, LDAC High-Resolution Audio Wireless, AI-based noise reduction for crystal clear calls.',
    imageURL: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Sony', gender: 'Unisex', sizes: ['One Size'], colors: ['#000000', '#e2e8f0'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 1890, stock: 55
  },
  {
    name: 'Samsung Galaxy Buds2 Pro with 24-bit Hi-Fi Sound',
    price: 11999, originalPrice: 19999, discount: 40,
    description: 'Intelligent 360 Audio with direct multi-channel support, ergonomic compact fit, 3 high-SNR microphones for active noise cancelling, and IPX7 water resistance.',
    imageURL: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Samsung', gender: 'Unisex', sizes: ['One Size'], colors: ['#c084fc', '#000000', '#ffffff'],
    badge: 'HOT DEAL', rating: 4.8, numReviews: 1420, stock: 60
  },
  {
    name: 'Bose QuietComfort Ultra True Wireless Earbuds',
    price: 24900, originalPrice: 29900, discount: 17,
    description: 'Breakthrough Bose Immersive Audio spatializes what you hear, CustomTune technology tailors sound to your ear shape, and world-class quiet noise cancellation.',
    imageURL: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Bose', gender: 'Unisex', sizes: ['One Size'], colors: ['#000000', '#f5f5f4'],
    badge: 'LUXURY', rating: 4.9, numReviews: 870, stock: 40
  },
  {
    name: 'OnePlus Buds Pro 3 with Dual Drivers & Dynaudio Tuning',
    price: 11999, originalPrice: 13999, discount: 14,
    description: 'Co-created with Dynaudio featuring dual drivers (11mm woofer + 6mm tweeter), 50dB Adaptive Noise Cancellation, and up to 43 hours of battery life with fast warp charge.',
    imageURL: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'OnePlus', gender: 'Unisex', sizes: ['One Size'], colors: ['#111827', '#e2e8f0'],
    badge: 'TRENDING', rating: 4.8, numReviews: 690, stock: 50
  },
  {
    name: 'boAt Airdopes 800 TWS Earbuds with Dolby Audio & 40H Playtime',
    price: 1999, originalPrice: 4990, discount: 60,
    description: 'Cinema-grade sound tuned by Dolby Audio, AI ENx quad-mic technology for noise-free voice calling, Beast Mode 50ms low latency for gaming, and ASAP charge.',
    imageURL: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'boAt', gender: 'Unisex', sizes: ['One Size'], colors: ['#0284c7', '#000000'],
    badge: 'HOT DEAL', rating: 4.5, numReviews: 3200, stock: 150
  },
  {
    name: 'Nothing Ear (2024) Hi-Res Wireless Audio Earbuds with ChatGPT Integration',
    price: 9999, originalPrice: 12999, discount: 23,
    description: 'Iconic transparent acoustic casing with custom 11mm ceramic drivers, LDAC & LHDC 5.0 Hi-Res audio certification, 45dB Smart ANC, and integrated ChatGPT pinch-to-speak.',
    imageURL: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Nothing', gender: 'Unisex', sizes: ['One Size'], colors: ['#ffffff', '#000000'],
    badge: 'LATEST STYLE', rating: 4.7, numReviews: 580, stock: 45
  },

  // ==========================================
  // HEADPHONES
  // ==========================================
  {
    name: 'Sony WH-1000XM5 Wireless Industry-Leading Noise-Canceling Headphones',
    price: 26990, originalPrice: 34990, discount: 23,
    description: 'Two processors and 8 microphones deliver unprecedented noise cancellation. Features Auto NC Optimizer, 30mm precision carbon driver units, crystal-clear beamforming mics, and 30h battery.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Sony', gender: 'Unisex', sizes: ['Over-Ear'], colors: ['#000000', '#e2e8f0'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 3410, stock: 50
  },
  {
    name: 'Bose QuietComfort 45 Bluetooth Wireless Headphones',
    price: 21900, originalPrice: 29900, discount: 27,
    description: 'Iconic world-renowned acoustic noise cancelling with Quiet and Aware modes, plush synthetic leather ear cushions, TriPort acoustic architecture, and 24 hours of playtime.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Bose', gender: 'Unisex', sizes: ['Over-Ear'], colors: ['#000000', '#ffffff'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 2120, stock: 40
  },
  {
    name: 'Apple AirPods Max Over-Ear Headphones (Space Grey)',
    price: 54900, originalPrice: 59900, discount: 8,
    description: 'High-fidelity audio with custom dynamic driver, computational audio powered by Apple H1 chip in each ear cup, active noise cancellation with transparency mode, and breathable knit mesh canopy.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['Over-Ear'], colors: ['#334155', '#cbd5e1', '#fbcfe8'],
    badge: 'LUXURY', rating: 4.9, numReviews: 1280, stock: 25
  },
  {
    name: 'Sennheiser Momentum 4 Wireless Audiophile Headphones (60H Battery)',
    price: 27990, originalPrice: 34990, discount: 20,
    description: 'Audiophile-inspired 42mm transducer system delivering signature Sennheiser acoustics, Adaptive Noise Cancellation, customized sound profiles, and massive 60-hour battery life.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Sennheiser', gender: 'Unisex', sizes: ['Over-Ear'], colors: ['#000000', '#ffffff'],
    badge: 'TOP RATED', rating: 4.8, numReviews: 890, stock: 35
  },
  {
    name: 'Marshall Major IV On-Ear Wireless Bluetooth Headphones',
    price: 11999, originalPrice: 14999, discount: 20,
    description: 'Iconic vintage Marshall guitar amplifier styling with 80+ solid hours of wireless playtime, custom-tuned dynamic drivers for booming bass, and multi-directional control knob.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Marshall', gender: 'Unisex', sizes: ['On-Ear'], colors: ['#78350f', '#000000'],
    badge: 'TRENDING', rating: 4.8, numReviews: 1140, stock: 45
  },
  {
    name: 'JBL Live 770NC Adaptive Noise Cancelling Wireless Headphones',
    price: 10999, originalPrice: 14999, discount: 27,
    description: 'True Adaptive Noise Cancelling with Smart Ambient, immersive JBL Signature Sound with 40mm drivers, and up to 65 hours of battery with speed charge.',
    imageURL: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'JBL', gender: 'Unisex', sizes: ['Over-Ear'], colors: ['#0284c7', '#000000', '#ffffff'],
    badge: 'HOT DEAL', rating: 4.7, numReviews: 1650, stock: 60
  },

  // ==========================================
  // KEYBOARD & MOUSE
  // ==========================================
  {
    name: 'Logitech MX Master 3S Advanced Wireless Performance Mouse',
    price: 8995, originalPrice: 10995, discount: 18,
    description: 'Quiet Click technology with 90% less click noise, 8000 DPI Darkfield sensor tracking on any surface including glass, MagSpeed electromagnetic scroll wheel, and ergonomic thumb rest.',
    imageURL: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Logitech', gender: 'Unisex', sizes: ['One Size'], colors: ['#1e293b', '#e2e8f0'],
    badge: 'BESTSELLER', rating: 4.9, numReviews: 3890, stock: 85
  },
  {
    name: 'Logitech MX Keys S Advanced Wireless Illuminated Keyboard',
    price: 9995, originalPrice: 12995, discount: 23,
    description: 'Fluid, ultra-precise typing with spherically-dished Perfect Stroke keys shaped for your fingertips, smart proximity backlighting, and Smart Actions macro automation.',
    imageURL: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Logitech', gender: 'Unisex', sizes: ['Full Size'], colors: ['#0f172a', '#e2e8f0'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 2450, stock: 70
  },
  {
    name: 'Keychron K2 Wireless Mechanical Keyboard (RGB Backlit, Hot-Swappable)',
    price: 7999, originalPrice: 9999, discount: 20,
    description: '75% compact mechanical keyboard with Mac & Windows layout support, hot-swappable Gateron G Pro mechanical switches, wireless Bluetooth 5.1 & wired Type-C connectivity.',
    imageURL: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Keychron', gender: 'Unisex', sizes: ['75% Compact'], colors: ['#334155', '#dc2626'],
    badge: 'TRENDING', rating: 4.8, numReviews: 1290, stock: 50
  },
  {
    name: 'Razer DeathAdder V3 Pro Ultra-Lightweight Wireless Esports Mouse',
    price: 11999, originalPrice: 14999, discount: 20,
    description: 'Refined 63g ultra-lightweight ergonomic shape designed with top esports pros, Focus Pro 30K optical sensor, Gen-3 optical mouse switches, and Razer HyperSpeed wireless.',
    imageURL: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Razer', gender: 'Unisex', sizes: ['One Size'], colors: ['#000000', '#ffffff'],
    badge: 'TOP RATED', rating: 4.9, numReviews: 980, stock: 40
  },
  {
    name: 'Apple Magic Mouse (Multi-Touch Surface - Black)',
    price: 8900, originalPrice: 9500, discount: 6,
    description: 'Wireless and rechargeable mouse with an optimized foot design that tracks smoothly across your desk. The Multi-Touch surface lets you perform simple gestures like swiping between web pages.',
    imageURL: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Apple', gender: 'Unisex', sizes: ['One Size'], colors: ['#000000', '#ffffff'],
    badge: 'ESSENTIAL', rating: 4.7, numReviews: 2100, stock: 65
  },
  {
    name: 'Corsair K70 RGB PRO Mechanical Gaming Keyboard (Cherry MX Red)',
    price: 13999, originalPrice: 17999, discount: 22,
    description: 'Iconic aluminum frame with hyper-processing AXON technology delivering 8,000Hz polling rate, genuine Cherry MX mechanical switches, magnetic detachable palm rest, and PBT double-shot keycaps.',
    imageURL: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Corsair', gender: 'Unisex', sizes: ['Full Size'], colors: ['#000000'],
    badge: '', rating: 4.8, numReviews: 870, stock: 35
  },
  {
    name: 'Logitech POP Keys Wireless Mechanical Emoji Keyboard',
    price: 7495, originalPrice: 9995, discount: 25,
    description: 'Retro typewriter-style mechanical keyboard featuring 8 swappable emoji keys, multi-device Easy-Switch pairing across 3 devices, and up to 3 years battery life.',
    imageURL: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    category: 'Tech Accessories', brand: 'Logitech', gender: 'Unisex', sizes: ['Compact'], colors: ['#f472b6', '#a855f7', '#fde047'],
    badge: 'TRENDING', rating: 4.7, numReviews: 940, stock: 60
  }
];

module.exports = {
  clothingProducts,
  shoesProducts,
  watchesProducts,
  bagsAndJewelleryProducts,
  techAccessoriesProducts
};
