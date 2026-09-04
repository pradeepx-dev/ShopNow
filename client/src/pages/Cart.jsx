import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice.js';
import { useNavigate, Link } from 'react-router-dom';

const currency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + (Number(item.price || 0) * (item.quantity || 1)), 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleQuantity = (item, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.productId || item._id, quantity }));
    } else {
      dispatch(removeFromCart(item.productId || item._id));
    }
  };

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2b75c3]">Shopping Bag</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Cart</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
          {cartItems.reduce((count, item) => count + (item.quantity || 1), 0)} item{cartItems.reduce((count, item) => count + (item.quantity || 1), 0) !== 1 ? 's' : ''}
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center shadow-inner">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm">🛒</div>
          <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mt-3 text-slate-600">Add a few favourites and come back here to complete your order.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0d1f33] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#163454]"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.7fr)_380px]">
          <section className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={item.productId || item._id}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="grid gap-5 p-4 sm:grid-cols-[140px_minmax(0,1fr)] sm:p-5">
                  <div className="overflow-hidden rounded-[18px] bg-slate-100">
                    <img
                      src={item.imageURL || item.image}
                      alt={item.name}
                      className="h-36 w-full object-cover sm:h-full sm:w-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b75c3]">{item.brand || 'ShowNow'}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{item.size ? `Size: ${item.size}` : 'Premium quality product'}</p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-2xl font-bold text-slate-900">{currency(item.price || 0)}</p>
                        <p className="text-xs text-slate-500">Inclusive of all taxes</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5">
                        <button
                          onClick={() => handleQuantity(item, (item.quantity || 1) - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-slate-900">{item.quantity || 1}</span>
                        <button
                          onClick={() => handleQuantity(item, (item.quantity || 1) + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleRemoveFromCart(item.productId || item._id)}
                          className="text-sm font-medium text-red-600 transition hover:text-red-700"
                        >
                          Remove
                        </button>
                        <span className="hidden text-slate-300 sm:inline">|</span>
                        <Link to={`/products/${item.productId || item._id}`} className="text-sm font-medium text-[#2b75c3] transition hover:text-[#1d5fa8]">
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-semibold text-slate-900">
                      {currency((Number(item.price || 0) * (item.quantity || 1)))}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="xl:pl-2">
            <div className="sticky top-24 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Summary</h2>

              <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">{currency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Estimated tax</span>
                  <span className="font-semibold text-slate-900">{currency(tax)}</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>Promo code</span>
                  <span className="text-[#2b75c3]">Apply</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#2b75c3]"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="text-lg font-semibold text-slate-900">Total</span>
                <span className="text-3xl font-black tracking-tight text-[#0d1f33]">{currency(total)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full rounded-full bg-[#0d1f33] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#163454]"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="mt-3 block w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;