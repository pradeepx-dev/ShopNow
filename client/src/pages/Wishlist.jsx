import { useState, useMemo, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { addToCart } from "../redux/cartSlice";
import { clearWishlist, setWishlist } from "../redux/wishlistSlice";
import WishlistItemCard from "../components/wishlist/WishlistItemCard";
import WishlistToolbar from "../components/wishlist/WishlistToolbar";
import WishlistEmpty from "../components/wishlist/WishlistEmpty";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items || []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [toast, setToast] = useState(null);

  // Auto dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showNotification = (message, type = "success") => {
    setToast({ message, type });
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return wishlistItems.filter((item) => {
      if (activeFilter === "inStock") return item.inStock !== false;
      if (activeFilter === "onSale") {
        const p = Number(item.price || 0);
        const op = Number(item.originalPrice || 0);
        return item.discount > 0 || op > p;
      }
      return true;
    });
  }, [wishlistItems, activeFilter]);

  // Sort items
  const sortedItems = useMemo(() => {
    const list = [...filteredItems];
    if (sortBy === "priceLowHigh") {
      return list.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    }
    if (sortBy === "priceHighLow") {
      return list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    }
    if (sortBy === "discount") {
      const getDisc = (x) =>
        x.discount || (x.originalPrice ? Math.round(((x.originalPrice - x.price) / x.originalPrice) * 100) : 0);
      return list.sort((a, b) => getDisc(b) - getDisc(a));
    }
    return list; // default 'newest'
  }, [filteredItems, sortBy]);

  // Bulk actions
  const handleMoveAllToBag = () => {
    if (wishlistItems.length === 0) return;

    if (!user) {
      showNotification("Please login to add items to your cart", "error");
      navigate("/login");
      return;
    }

    let count = 0;
    wishlistItems.forEach((item) => {
      const id = item._id || item.id || item.productId;
      const img = item.imageURL || item.image;
      dispatch(
        addToCart({
          productId: id,
          _id: id,
          name: item.name,
          price: item.price,
          imageURL: img,
          image: img,
          quantity: 1,
          size: item.sizes?.[0] || item.size || "M",
          brand: item.brand || "ShowNow",
        })
      );
      count++;
    });

    dispatch(clearWishlist());
    showNotification(`Moved all ${count} item${count > 1 ? "s" : ""} to your shopping bag!`, "success");
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
    showNotification("Wishlist cleared", "info");
  };

  const handleShareWishlist = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showNotification("Wishlist link copied to clipboard!", "success");
    } else {
      showNotification("Wishlist link ready to share!", "info");
    }
  };

  return (
    <main className="min-h-[80vh] bg-slate-50/50 py-8 sm:py-12">
      {/* Toast Notification Container */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3.5 text-white shadow-2xl transition-all duration-300 animate-bounce-short">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
              toast.type === "success"
                ? "bg-emerald-500 text-white"
                : toast.type === "error"
                ? "bg-rose-500 text-white"
                : "bg-indigo-500 text-white"
            }`}
          >
            {toast.type === "success" ? "✓" : "ℹ"}
          </span>
          <p className="text-sm font-semibold">{toast.message}</p>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="ml-2 text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
          <Link to="/" className="hover:text-slate-900 transition-colors no-underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Wishlist</span>
        </nav>

        {/* Header Title Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                My Wishlist
              </h1>
              {wishlistItems.length > 0 && (
                <span className="inline-flex items-center justify-center rounded-full bg-[#e91e8c]/10 text-[#e91e8c] px-3 py-0.5 text-sm font-extrabold">
                  {wishlistItems.length}
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-slate-500">
              {wishlistItems.length > 0
                ? "Manage your saved products and seamlessly transfer them into your bag."
                : "Save the items you love in one place and buy them anytime."}
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#e91e8c] transition-colors"
            >
              <span>Go to Shopping Bag</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Content Area */}
        {wishlistItems.length === 0 ? (
          <WishlistEmpty onNotify={showNotification} />
        ) : (
          <div>
            {/* Toolbar for Filtering, Sorting, and Bulk Actions */}
            <WishlistToolbar
              itemCount={wishlistItems.length}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onMoveAllToBag={handleMoveAllToBag}
              onClearWishlist={handleClearWishlist}
              onShareWishlist={handleShareWishlist}
            />

            {/* Empty filter result state */}
            {sortedItems.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
                <p className="text-base font-semibold text-slate-700">
                  No items match the selected filter.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className="mt-3 text-xs sm:text-sm font-bold text-[#e91e8c] hover:underline"
                >
                  Show all wishlist items
                </button>
              </div>
            ) : (
              /* Product Responsive Grid: 1 col on mobile, 2 col sm, 3 col md/lg, 4 col xl */
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-6">
                {sortedItems.map((item) => (
                  <WishlistItemCard
                    key={item._id || item.id || item.productId}
                    product={item}
                    onNotify={showNotification}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
