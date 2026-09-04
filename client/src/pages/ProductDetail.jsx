import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist as toggleWishlistAction } from "../redux/wishlistSlice";

const formatPrice = (value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value || 0);

const Heart = ({ filled = false }) => <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    let active = true;
    axios.get(`${API_BASE_URL}/api/products/${id}`)
      .then(({ data }) => { if (active) { setProduct(data); setSelectedSize(data.sizes?.[0] || ""); } })
      .catch(() => active && setError("We couldn't find this product."))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [id]);

  const isWishlisted = useMemo(() => {
    if (!product) return false;
    return wishlistItems.some((item) => (item._id || item.id || item.productId) === product._id);
  }, [product, wishlistItems]);

  const inCart = cartItems.some((item) => (item.productId || item._id) === product?._id);

  const addProductToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (inCart) {
      navigate("/cart");
      return;
    }

    dispatch(addToCart({
      productId: product._id,
      name: product.name,
      price: product.price,
      imageURL: product.imageURL || product.image,
      quantity: 1,
      size: selectedSize,
      brand: product.brand || "ShowNow",
    }));
  };

  const handleToggleWishlist = () => {
    if (!product) return;
    dispatch(toggleWishlistAction({
      _id: product._id,
      productId: product._id,
      name: product.name,
      brand: product.brand || "ShowNow",
      price: product.price,
      originalPrice: product.originalPrice || product.price * 1.3,
      discount: product.discount || 25,
      imageURL: product.imageURL || product.image,
      rating: product.rating || 4.5,
      numReviews: product.numReviews || 120,
      sizes: product.sizes || ["S", "M", "L", "XL"],
      inStock: true,
    }));
  };

  const gallery = useMemo(() => product ? Array.from({ length: 5 }, () => product.imageURL || product.image) : [], [product]);
  if (loading) return <div className="flex min-h-[60vh] items-center justify-center"><span className="h-9 w-9 animate-spin rounded-full border-3 border-gray-200 border-t-[#e91e8c]" /></div>;
  if (error || !product) return <div className="flex min-h-[55vh] flex-col items-center justify-center gap-4"><p className="text-xl font-semibold">{error || "Product not found"}</p><Link to="/" className="bg-[#001b33] px-5 py-3 font-semibold text-white">Continue shopping</Link></div>;

  const discount = product.discount || (product.originalPrice > product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0);
  const colors = product.colors?.length ? product.colors : ["#d7dde5"];
  const image = gallery[selectedImage];

  return (
    <main className="mx-auto max-w-[1500px] px-4 py-5 text-[#102235] sm:px-7 lg:px-10">
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
        <Link to="/" className="hover:text-[#bd1d61]">Home</Link>
        <span className="text-slate-400">›</span>
        <span>{product.gender || "Men"}</span>
        <span className="text-slate-400">›</span>
        <span>Topwear</span>
        <span className="text-slate-400">›</span>
        <span>Casual Shirts</span>
        <span className="text-slate-400">›</span>
        <span className="text-slate-700">{product.brand || "H&M"}</span>
      </nav>

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(620px,1.25fr)_minmax(420px,0.75fr)] xl:gap-12">
        <section className="grid min-w-0 grid-cols-[84px_minmax(0,1fr)] gap-4 sm:grid-cols-[90px_minmax(0,1fr)]">
          <div className="flex flex-col items-center gap-3 pt-1">
            {gallery.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-full overflow-hidden border bg-white ${selectedImage === index ? "border-[#111827]" : "border-transparent"}`}
                aria-label={`View image ${index + 1}`}
              >
                <img src={item} alt="" className="aspect-[3/4] w-full object-cover" />
              </button>
            ))}

            <div className="mt-3 flex items-center justify-center gap-3 text-slate-400">
              <button aria-label="Previous image" className="text-xl leading-none">⌃</button>
              <button aria-label="Next image" className="rotate-180 text-xl leading-none">⌃</button>
            </div>
          </div>

          <div className="flex min-h-[700px] items-center justify-center overflow-hidden bg-[#f3f3f3]">
            <img
              src={image}
              alt={product.name}
              className="h-full max-h-[700px] w-full object-cover object-center"
            />
          </div>
        </section>

        <aside className="w-full max-w-[520px] pt-2">
          <div className="border-b border-slate-300 pb-7">
            <p className="text-xs font-bold tracking-[0.18em] text-[#2b75c3] uppercase">
              {product.badge || "BESTSELLER"}
              <span className="mx-2 text-slate-400">|</span>
              OFFER
            </p>

            <h1 className="mt-5 text-[30px] font-bold leading-none text-[#1b2330]">
              {product.brand || "H&M"}
            </h1>

            <p className="mt-2 text-[21px] font-normal text-slate-600">
              {product.name}
            </p>

            <div className="mt-6 inline-flex items-center overflow-hidden border border-slate-300 bg-white">
              <span className="border-r border-slate-300 px-4 py-2.5 text-[18px] font-bold text-[#1f2937]">
                {Number(product.rating || 4.2).toFixed(1)}
                <span className="ml-2 text-[#111827]">★</span>
              </span>
              <span className="px-4 py-2.5 text-sm text-slate-500">
                Based on {product.numReviews || 792} ratings
              </span>
            </div>

            <div className="mt-7">
              <p className="text-[32px] font-bold tracking-tight text-[#1d2733]">
                {formatPrice(product.price || 1799)}
              </p>
              <p className="mt-2 text-[15px] text-slate-500">MRP Inclusive of all taxes</p>
            </div>
          </div>

          <div className="border-b border-slate-300 py-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-[23px] font-semibold text-[#1f2937]">Select Size</h2>
              <button className="text-[15px] font-semibold text-[#b12759]">Size Guide</button>
            </div>

            <div className="flex flex-wrap gap-3">
              {(product.sizes || ["XS", "S", "M", "L", "XL", "XXL"]).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[64px] rounded-full border px-4 py-2.5 text-[17px] font-medium ${
                    selectedSize === size
                      ? "border-[#1b2330] bg-[#1b2330] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                if (isWishlisted) {
                  navigate("/wishlist");
                  return;
                }
                handleToggleWishlist();
              }}
              className={`flex items-center justify-center gap-3 border px-4 py-4 text-[17px] font-semibold transition-all cursor-pointer ${
                isWishlisted
                  ? "border-[#b12759] bg-pink-50 text-[#b12759]"
                  : "border-slate-300 bg-white text-[#1f2937] hover:border-slate-500"
              }`}
            >
              <Heart filled={isWishlisted} />
              {isWishlisted ? "View in Wishlist" : "Add to Wishlist"}
            </button>

            <button
              onClick={() => {
                if (inCart) {
                  navigate("/cart");
                  return;
                }
                addProductToCart();
              }}
              className="bg-[#0d1f33] px-4 py-4 text-[17px] font-semibold text-white hover:bg-[#163454]"
            >
              {inCart ? "View Cart" : "Add to Bag"}
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ProductDetail;
