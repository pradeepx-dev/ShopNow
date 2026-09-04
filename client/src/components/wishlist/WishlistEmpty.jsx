import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/wishlistSlice";

const trendingCategories = [
  { name: "Partywear", link: "/search?category=partywear", icon: "✨" },
  { name: "Ethnic Wear", link: "/search?category=ethnicwear", icon: "🥻" },
  { name: "Men's Trend", link: "/search?category=men", icon: "👔" },
  { name: "Sneakers", link: "/search?category=sneakers", icon: "👟" },
  { name: "Lingerie", link: "/search?category=lingerie", icon: "🌸" },
  { name: "Accessories", link: "/search?category=accessories", icon: "👜" },
];

const sampleRecommendations = [
  {
    _id: "rec_1",
    name: "Embroidered Silk Anarkali Set",
    brand: "Libas",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.6,
    numReviews: 320,
    imageURL: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    _id: "rec_2",
    name: "Classic Indigo Linen Shirt",
    brand: "H&M",
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.4,
    numReviews: 180,
    imageURL: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    _id: "rec_3",
    name: "Retro Chunky Sole Street Sneakers",
    brand: "Adidas",
    price: 3799,
    originalPrice: 5999,
    discount: 37,
    rating: 4.8,
    numReviews: 540,
    imageURL: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
  {
    _id: "rec_4",
    name: "Vintage Noir Corset Blouse",
    brand: "Twenty Dresses",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.5,
    numReviews: 215,
    imageURL: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
    inStock: true,
  },
];

const WishlistEmpty = ({ onNotify }) => {
  const dispatch = useDispatch();

  const handleAddSample = (product) => {
    dispatch(addToWishlist(product));
    if (onNotify) {
      onNotify(`Added "${product.name}" to your wishlist!`, "success");
    }
  };

  return (
    <div className="space-y-12">
      {/* Empty Hero Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-pink-50/30 px-6 py-14 sm:py-20 text-center shadow-xs">
        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-pink-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative z-10 max-w-lg mx-auto">
          {/* Animated Heart Icon Badge */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl shadow-pink-500/10 border border-pink-100/60">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#e91e8c] to-[#ff6b35] text-white text-3xl shadow-inner">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Your Wishlist is Empty
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore our curated collections, discover new arrivals, and save your favourite styles by clicking the heart icon.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 hover:bg-[#e91e8c] transition-all duration-200 no-underline"
            >
              Start Exploring
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/search"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all no-underline"
            >
              Search Catalog
            </Link>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="relative z-10 mt-12 pt-10 border-t border-slate-200/60 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-4">
            Popular Categories to Explore
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {trendingCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.link}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900 hover:bg-white transition-all shadow-2xs no-underline"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended for You Section */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e91e8c]">
              Trending Picks
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Recommended For Your Wardrobe
            </h3>
          </div>
          <Link
            to="/search"
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#e91e8c] transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sampleRecommendations.map((prod) => (
            <div
              key={prod._id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src={prod.imageURL}
                  alt={prod.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => handleAddSample(prod)}
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#e91e8c] shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  title="Add to Wishlist"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {prod.brand}
                </p>
                <h4 className="mt-1 text-sm font-semibold text-slate-900 line-clamp-1">
                  {prod.name}
                </h4>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-slate-900">
                    ₹{prod.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ₹{prod.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-rose-600">
                    {prod.discount}% off
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistEmpty;
