import DepartmentPage from "../components/department/DepartmentPage";

const kidsHeroConfig = {
  title: "KIDS & TEENS FASHION STORE",
  subtitle: "Playful Prints & Festive Outfits",
  offerBadge: "FLAT 40-60% OFF",
  description: "Adorable festive kurtas, party frocks, comfy organic cotton playwear, shoes, clogs, and school essentials for boys, girls & toddlers.",
  bannerImage: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1920&q=80",
  secondaryImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  gradient: "from-amber-950/80 via-purple-950/70 to-slate-950/90",
  accentColor: "#f59e0b",
};

const kidsCategoryPills = [
  { name: "Clothing", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=300&q=80", offer: "Min 40% Off" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=300&q=80", offer: "Upto 50% Off" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80", offer: "School Edit" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=80", offer: "Kid Friendly" },
];

const kidsTrendingHighlights = [
  {
    title: "Festive Dhoti & Kurta Sets",
    subtitle: "Manyavar Kids, FabIndia & Hopscotch",
    tag: "FESTIVE READY",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
  {
    title: "Party Frocks & Princess Gowns",
    subtitle: "FirstCry, GAP & H&M Kids",
    tag: "CELEBRATIONS",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
  {
    title: "Kids Sneakers & Fun Clogs",
    subtitle: "Crocs Kids, Puma & Adidas",
    tag: "PLAYWEAR SHOES",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80",
    category: "Shoes",
  },
  {
    title: "Organic Everyday Cotton Wear",
    subtitle: "Soft breathable rompers & tees",
    tag: "DAILY COMFORT",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
];

const Kids = () => {
  return (
    <DepartmentPage
      department="Kids"
      heroConfig={kidsHeroConfig}
      categoryPills={kidsCategoryPills}
      trendingHighlights={kidsTrendingHighlights}
    />
  );
};

export default Kids;
