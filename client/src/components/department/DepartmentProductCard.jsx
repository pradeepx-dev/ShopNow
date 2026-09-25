import { useState, useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { addToCart } from "../../redux/cartSlice";
import { toggleWishlist } from "../../redux/wishlistSlice";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const DepartmentProductCard = ({ product, onNotify }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || "M"
  );
  const [isAdding, setIsAdding] = useState(false);

  const id = product._id || product.id || product.productId;
  const image = product.imageURL || product.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80";
  const price = Number(product.price || 0);
  const originalPrice = Number(product.originalPrice || price * 1.35);
  const discount = product.discount || (originalPrice > price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);
  const sizes = product.sizes && product.sizes.length > 0 ? product.sizes : ["S", "M", "L", "XL"];

  const isWishlisted = useMemo(() => {
    return wishlistItems.some((item) => (item._id || item.id || item.productId) === id);
  }, [wishlistItems, id]);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      toggleWishlist({
        _id: id,
        productId: id,
        name: product.name,
        brand: product.brand || "ShowNow",
        price: price,
        originalPrice: originalPrice,
        discount: discount,
        imageURL: image,
        image: image,
        rating: product.rating || 4.5,
        numReviews: product.numReviews || 80,
        sizes: sizes,
        inStock: product.stock !== 0,
      })
    );

    if (onNotify) {
      onNotify(
        isWishlisted
          ? `Removed "${product.name || 'Item'}" from wishlist`
          : `Added "${product.name || 'Item'}" to your wishlist!`,
        isWishlisted ? "info" : "success"
      );
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      if (onNotify) onNotify("Please login to add items to your cart", "error");
      navigate("/login");
      return;
    }

    setIsAdding(true);
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

    if (onNotify) {
      onNotify(`Added "${product.name || 'Item'}" (${selectedSize}) to Bag!`, "success");
    }

    setTimeout(() => {
      setIsAdding(false);
    }, 400);
  };

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      {/* Top Image Box */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <Link to={`/products/${id}`} className="block h-full w-full">
          <img
            src={image}
            alt={product.name || "Product"}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Overlay gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Discount & Badge */}
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

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow-md backdrop-blur-md transition-all duration-200 cursor-pointer ${
            isWishlisted
              ? "bg-rose-50 text-rose-600 scale-105"
              : "bg-white/90 text-slate-500 hover:bg-rose-50 hover:text-rose-600 hover:scale-110 active:scale-95"
          }`}
          title={isWishlisted ? "Wishlisted" : "Add to Wishlist"}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Floating rating badge */}
        {product.rating > 0 && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-xs font-bold text-gray-800 shadow-sm backdrop-blur-sm">
            <span>{Number(product.rating).toFixed(1)}</span>
            <span className="text-amber-500 text-xs">★</span>
            {product.numReviews > 0 && (
              <span className="text-[10px] text-gray-400 font-normal">
                | {product.numReviews}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Product Content Body */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 truncate">
              {product.brand || "ShowNow"}
            </span>
            {product.gender && (
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                {product.gender}
              </span>
            )}
          </div>

          <Link
            to={`/products/${id}`}
            className="mt-1.5 block text-sm sm:text-[15px] font-bold text-slate-900 line-clamp-1 hover:text-[#e91e8c] transition-colors no-underline"
            title={product.name}
          >
            {product.name}
          </Link>

          <p className="mt-1 text-xs text-slate-500 line-clamp-1">
            {product.description || "Premium quality curated fashion"}
          </p>

          <div className="mt-2.5 flex items-baseline gap-2 flex-wrap">
            <span className="text-base sm:text-lg font-black text-slate-900">
              {formatPrice(price)}
            </span>
            {originalPrice > price && (
              <span className="text-xs text-slate-400 line-through font-medium">
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

        {/* Size Selection & Quick Add */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
          {sizes.length > 0 && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-slate-400">Size:</span>
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {sizes.slice(0, 4).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(s);
                    }}
                    className={`h-6 min-w-[22px] px-1.5 text-[10px] font-bold rounded border transition-all cursor-pointer ${
                      selectedSize === s
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[#e91e8c] active:scale-98 transition-all cursor-pointer shadow-xs"
          >
            <svg
              width="14"
              height="14"
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
            <span>{isAdding ? "Adding..." : "Add to Bag"}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default DepartmentProductCard;
