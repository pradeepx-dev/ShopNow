import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import { addToCart } from "../../redux/cartSlice";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const WishlistItemCard = ({ product, onNotify }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || product.size || "M"
  );
  const [isMoving, setIsMoving] = useState(false);

  const id = product._id || product.id || product.productId;
  const image = product.imageURL || product.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80";
  const price = Number(product.price || 0);
  const originalPrice = Number(product.originalPrice || price * 1.4);
  const discount = product.discount || (originalPrice > price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);
  const inStock = product.inStock !== false;
  const sizes = product.sizes || ["S", "M", "L", "XL"];

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromWishlist(id));
    if (onNotify) onNotify(`Removed "${product.name || 'Item'}" from wishlist`, "info");
  };

  const handleMoveToBag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      if (onNotify) onNotify("Please login to add items to your cart", "error");
      navigate("/login");
      return;
    }

    if (!inStock) return;

    setIsMoving(true);

    dispatch(
      addToCart({
        productId: id,
        _id: id,
        name: product.name,
        price: price,
        imageURL: image,
        image: image,
        quantity: 1,
        size: selectedSize,
        brand: product.brand || "ShowNow",
      })
    );

    dispatch(removeFromWishlist(id));

    if (onNotify) {
      onNotify(`Moved "${product.name || 'Item'}" (${selectedSize}) to Bag!`, "success");
    }

    setTimeout(() => {
      setIsMoving(false);
    }, 400);
  };

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.12)]">
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <Link to={`/products/${id}`} className="block h-full w-full">
          <img
            src={image}
            alt={product.name || "Product"}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Gradient Overlay for subtle text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {discount > 0 && (
            <span className="inline-flex items-center rounded-md bg-rose-600 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white shadow-sm">
              {discount}% OFF
            </span>
          )}
          {product.badge && (
            <span className="inline-flex items-center rounded-md bg-slate-900/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Delete / Remove Action Button */}
        <button
          onClick={handleRemove}
          aria-label="Remove from Wishlist"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-md backdrop-blur-md transition-all duration-200 hover:bg-rose-50 hover:text-rose-600 hover:scale-110 active:scale-95"
          title="Remove from Wishlist"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Rating Floating Pill */}
        {product.rating && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-xs font-bold text-gray-800 shadow-sm backdrop-blur-sm">
            <span>{Number(product.rating).toFixed(1)}</span>
            <span className="text-amber-500 text-xs">★</span>
            {product.numReviews && (
              <span className="text-[10px] text-gray-400 font-normal">
                | {product.numReviews}
              </span>
            )}
          </div>
        )}

        {/* Stock status overlay if out of stock */}
        {!inStock && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/60 backdrop-blur-[2px]">
            <span className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Information Body */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 truncate">
              {product.brand || "ShowNow"}
            </span>
            <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
              {inStock ? "In Stock" : "Unavailable"}
            </span>
          </div>

          {/* Title */}
          <Link
            to={`/products/${id}`}
            className="mt-1.5 block text-sm sm:text-[15px] font-semibold text-slate-900 line-clamp-1 hover:text-[#e91e8c] transition-colors no-underline"
            title={product.name}
          >
            {product.name || "Premium Fashion Item"}
          </Link>

          {/* Pricing */}
          <div className="mt-2.5 flex items-baseline gap-2 flex-wrap">
            <span className="text-base sm:text-lg font-black text-slate-900">
              {formatPrice(price)}
            </span>
            {originalPrice > price && (
              <span className="text-xs sm:text-sm text-slate-400 line-through font-medium">
                {formatPrice(originalPrice)}
              </span>
            )}
            {discount > 0 && (
              <span className="text-xs font-bold text-rose-600">
                ({discount}% off)
              </span>
            )}
          </div>
        </div>

        {/* Actions & Size Selector */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
          {/* Size Pills */}
          {sizes.length > 0 && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-slate-500">Size:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {sizes.slice(0, 4).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-6 min-w-[24px] px-1.5 text-[11px] font-bold rounded border transition-all ${
                      selectedSize === size
                        ? "border-slate-900 bg-slate-900 text-white shadow-xs"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Move to Bag Button */}
          <button
            type="button"
            onClick={handleMoveToBag}
            disabled={!inStock || isMoving}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
              !inStock
                ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                : "bg-slate-900 text-white hover:bg-[#e91e8c] hover:shadow-md hover:shadow-pink-500/20 active:scale-[0.98] cursor-pointer"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {isMoving ? "Moving..." : "Move to Bag"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default WishlistItemCard;
