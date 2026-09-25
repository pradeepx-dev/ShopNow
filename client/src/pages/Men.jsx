import DepartmentPage from "../components/department/DepartmentPage";

const menHeroConfig = {
  title: "MEN'S APPAREL & TIMEPIECES",
  subtitle: "Contemporary Tailoring & Street Luxe",
  offerBadge: "MIN 35-70% OFF",
  description: "Explore tailored linen shirts, royal silk bandhgalas, iconic streetwear sneakers, luxury automatic chronographs and performance activewear.",
  bannerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1920&q=80",
  secondaryImage: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
  gradient: "from-slate-950/90 via-sky-950/80 to-indigo-950/90",
  accentColor: "#2b75c3",
};

const menCategoryPills = [
  { name: "Clothing", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", offer: "Min 40% Off" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80", offer: "Min 50% Off" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=80", offer: "Upto 65% Off" },
  { name: "Tech Accessories", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80", offer: "Best Value" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80", offer: "Min 35% Off" },
];

const menTrendingHighlights = [
  {
    title: "Festive Bandhgalas & Kurtas",
    subtitle: "Manyavar, FabIndia & Raymond",
    tag: "ROYAL ETHNIC",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
  {
    title: "Streetwear & Retro Sneakers",
    subtitle: "Nike, Adidas Originals & Puma",
    tag: "STREET ICON",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    category: "Shoes",
  },
  {
    title: "Chronographs & Automatics",
    subtitle: "Titan, Fossil, Casio & Tissot",
    tag: "PRECISION",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    category: "Watches",
  },
  {
    title: "Everyday Casuals & Linens",
    subtitle: "H&M, Tommy Hilfiger & Levi's",
    tag: "SMART CASUAL",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
];

const Men = () => {
  return (
    <DepartmentPage
      department="Men"
      heroConfig={menHeroConfig}
      categoryPills={menCategoryPills}
      trendingHighlights={menTrendingHighlights}
    />
  );
};

export default Men;
