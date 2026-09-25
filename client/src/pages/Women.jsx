import DepartmentPage from "../components/department/DepartmentPage";

const womenHeroConfig = {
  title: "WOMEN'S RUNWAY & FESTIVE",
  subtitle: "Summer & Festive Elegance",
  offerBadge: "MIN 40-70% OFF",
  description: "Exquisite handpicked silhouettes: from regal silk anarkalis and designer sarees to modern pret dresses, heels, luxury bags, and jewellery.",
  bannerImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80",
  secondaryImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  gradient: "from-rose-950/85 via-pink-950/70 to-slate-950/90",
  accentColor: "#e91e8c",
};

const womenCategoryPills = [
  { name: "Clothing", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=300&q=80", offer: "Min 50% Off" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=300&q=80", offer: "Upto 60% Off" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80", offer: "Min 40% Off" },
  { name: "Jewellery", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80", offer: "Special Deals" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=80", offer: "Upto 50% Off" },
  { name: "Tech Accessories", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80", offer: "Best Value" },
];

const womenTrendingHighlights = [
  {
    title: "Festive Anarkalis & Sarees",
    subtitle: "Farida Gupta, Libas & Charkha Tales",
    tag: "FESTIVE EDIT",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
  {
    title: "Chic Pret & Party Dresses",
    subtitle: "Twenty Dresses & Cider edits",
    tag: "PARTY READY",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
  {
    title: "Luxury Leather Handbags",
    subtitle: "Coach, Da Milano & Michael Kors",
    tag: "LUXE ACCESSORIES",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    category: "Bags",
  },
  {
    title: "Statement Heels & Stilettos",
    subtitle: "ALDO, Jimmy Choo & Catwalk",
    tag: "ICONIC FOOTWEAR",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    category: "Shoes",
  },
];

const Women = () => {
  return (
    <DepartmentPage
      department="Women"
      heroConfig={womenHeroConfig}
      categoryPills={womenCategoryPills}
      trendingHighlights={womenTrendingHighlights}
    />
  );
};

export default Women;
