import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cart.items || []);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: user?.name || '',
        email: user?.email || '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: 'India'
    });

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [orderSuccess, setOrderSuccess] = useState(null);

    const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1), 0);
    const tax = subtotal * 0.18;
    const totalAmount = subtotal + tax;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setError('');

        if (!user) {
            setError('Please login to place an order');
            return;
        }

        if (cartItems.length === 0) {
            setError('Your cart is empty');
            return;
        }

        const { fullname, email, phone, address, city, state, zip, country } = formData;
        if (!fullname || !email || !phone || !address || !city || !state || !zip || !country) {
            setError('Please fill in all shipping details');
            return;
        }

        try {
            setLoading(true);

            const itemsPayload = cartItems.map((item) => ({
                productId: item.productId || item._id,
                quantity: Number(item.quantity || 1),
                price: Number(item.price || 0)
            }));

            const orderPayload = {
                user: user._id || user.id,
                items: itemsPayload,
                address: {
                    fullname,
                    email,
                    phone: Number(phone),
                    address,
                    city,
                    state,
                    zip: Number(zip),
                    country
                },
                totalAmount: Number(totalAmount.toFixed(2)),
                paymentId: paymentMethod === 'cod' ? `COD-${Date.now()}` : `ONLINE-${Date.now()}`,
                status: 'pending'
            };

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: user.token ? `Bearer ${user.token}` : ''
                }
            };

            const res = await axios.post(`${API_BASE_URL}/api/orders`, orderPayload, config);

            if (res.status === 201 || res.data?.order) {
                dispatch(clearCart());
                setOrderSuccess(res.data.order || res.data);
            } else {
                setError(res.data?.message || 'Failed to place order');
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || err.message || 'Something went wrong while placing order');
        } finally {
            setLoading(false);
        }
    };

    if (orderSuccess) {
        return (
            <div className="mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white p-8 sm:p-12 text-center shadow-xl shadow-emerald-500/10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                        ✓
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Order Confirmed!</h2>
                    <p className="mt-3 text-slate-600">
                        Thank you for your purchase, <span className="font-semibold text-slate-900">{formData.fullname}</span>.
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                        We sent a detailed confirmation email to <span className="font-medium text-indigo-600">{formData.email}</span>.
                    </p>

                    <div className="my-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left">
                        <div className="flex flex-wrap justify-between gap-4 border-b border-slate-200 pb-4 text-sm">
                            <div>
                                <span className="text-slate-500 block">Order ID</span>
                                <span className="font-mono font-bold text-slate-900">{orderSuccess._id}</span>
                            </div>
                            <div>
                                <span className="text-slate-500 block">Payment Method</span>
                                <span className="font-semibold text-slate-900 uppercase">{paymentMethod}</span>
                            </div>
                            <div>
                                <span className="text-slate-500 block">Total Amount</span>
                                <span className="font-bold text-indigo-600">₹{orderSuccess.totalAmount || totalAmount.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Shipping To</h4>
                            <p className="mt-1 text-sm font-medium text-slate-800">
                                {formData.address}, {formData.city}, {formData.state} - {formData.zip}, {formData.country}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="mx-auto max-w-xl py-16 px-4 text-center">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
                    <div className="mb-4 text-5xl">🔒</div>
                    <h2 className="text-2xl font-bold text-slate-900">Sign in to Checkout</h2>
                    <p className="mt-2 text-slate-600">Please log in or create an account to complete your purchase safely.</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                            to="/login"
                            className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-500"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/register"
                            className="rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="mx-auto max-w-xl py-16 px-4 text-center">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
                    <div className="mb-4 text-5xl">🛒</div>
                    <h2 className="text-2xl font-bold text-slate-900">Your Cart is Empty</h2>
                    <p className="mt-2 text-slate-600">You don't have any items in your shopping cart yet.</p>
                    <Link
                        to="/"
                        className="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-500"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Checkout</h1>
                <p className="mt-2 text-slate-600">Please enter your shipping address and select a payment option</p>
            </div>

            {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                    ⚠️ {error}
                </div>
            )}

            <form onSubmit={handlePlaceOrder} className="grid gap-8 lg:grid-cols-[1fr_420px]">
                {/* Shipping & Payment Form */}
                <div className="space-y-8">
                    {/* Shipping Address */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">1</span>
                            Shipping Address
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@example.com"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="10-digit mobile number"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Street Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="House no, street name, area"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    placeholder="City"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                    placeholder="State"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Postal Code (ZIP)</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                    placeholder="6-digit ZIP code"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">2</span>
                            Payment Method
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className={`relative flex cursor-pointer rounded-2xl border p-4 transition ${paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50/30 ring-2 ring-indigo-600/20' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                    className="mt-0.5 text-indigo-600 focus:ring-indigo-500"
                                />
                                <div className="ml-3">
                                    <span className="block font-semibold text-slate-900">Cash on Delivery (COD)</span>
                                    <span className="mt-1 block text-xs text-slate-500">Pay with cash upon order delivery</span>
                                </div>
                            </label>

                            <label className={`relative flex cursor-pointer rounded-2xl border p-4 transition ${paymentMethod === 'online' ? 'border-indigo-600 bg-indigo-50/30 ring-2 ring-indigo-600/20' : 'border-slate-200 hover:border-slate-300'}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="online"
                                    checked={paymentMethod === 'online'}
                                    onChange={() => setPaymentMethod('online')}
                                    className="mt-0.5 text-indigo-600 focus:ring-indigo-500"
                                />
                                <div className="ml-3">
                                    <span className="block font-semibold text-slate-900">Online Payment / UPI</span>
                                    <span className="mt-1 block text-xs text-slate-500">Fast & secure instant online payment</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Sidebar Order Summary */}
                <div>
                    <div className="sticky top-20 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="text-xl font-bold text-slate-900">Order Items ({cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)})</h2>

                        {/* Cart items scrollable list */}
                        <div className="max-h-72 divide-y divide-slate-100 overflow-y-auto pr-1">
                            {cartItems.map((item) => (
                                <div key={item.productId || item._id} className="flex items-center gap-3 py-3">
                                    <img
                                        src={item.imageURL || item.image}
                                        alt={item.name}
                                        className="h-14 w-14 rounded-lg object-cover bg-slate-100"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="truncate text-sm font-medium text-slate-900">{item.name}</p>
                                        <p className="text-xs text-slate-500">Qty: {item.quantity || 1} × ₹{Number(item.price || 0).toFixed(2)}</p>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-900">
                                        ₹{(Number(item.price || 0) * (item.quantity || 1)).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 border-t border-b border-slate-200 py-4 text-sm">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-medium text-slate-900">₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Shipping</span>
                                <span className="font-semibold text-emerald-600">Free</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>GST Tax (18%)</span>
                                <span className="font-medium text-slate-900">₹{tax.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-slate-900">Total Payable</span>
                            <span className="text-2xl font-black text-indigo-600">₹{totalAmount.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full bg-indigo-600 py-4 text-center text-sm font-bold text-white shadow-xl shadow-indigo-500/25 transition hover:bg-indigo-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing Order...
                                </span>
                            ) : (
                                `Confirm & Place Order (₹${totalAmount.toFixed(2)})`
                            )}
                        </button>

                        <div className="space-y-2 text-center text-xs text-slate-500">
                            <p>🔒 256-bit Encrypted & Secure Checkout</p>
                            <p>📦 7-Day Replacement Guarantee</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
