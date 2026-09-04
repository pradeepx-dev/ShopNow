import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ProfileOverview from "../components/profile/ProfileOverview";
import ProfileOrders from "../components/profile/ProfileOrders";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfileAddresses from "../components/profile/ProfileAddresses";
import ProfilePayments from "../components/profile/ProfilePayments";
import ProfileSettings from "../components/profile/ProfileSettings";

const sampleDemoOrders = [
  {
    _id: "6648dfa29b41829e01",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    totalAmount: 3298,
    status: "processing",
    paymentId: "ONLINE-492819",
    address: {
      fullname: "Pradeep Kumar Maurya",
      phone: 9876543210,
      address: "Flat 402, Sunshine Heights, MG Road",
      city: "Bengaluru",
      state: "Karnataka",
      zip: 560001,
      country: "India",
    },
    items: [
      {
        productId: "p_101",
        name: "Classic Regular Fit Indigo Linen Shirt",
        brand: "H&M",
        price: 1499,
        quantity: 1,
        size: "L",
        imageURL: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      },
      {
        productId: "p_102",
        name: "Vintage Noir Structured Corset Blouse",
        brand: "Twenty Dresses",
        price: 1799,
        quantity: 1,
        size: "M",
        imageURL: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    _id: "6639dfb11c92018a44",
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    totalAmount: 2499,
    status: "delivered",
    paymentId: "COD-918231",
    address: {
      fullname: "Pradeep Kumar Maurya",
      phone: 9876543210,
      address: "Flat 402, Sunshine Heights, MG Road",
      city: "Bengaluru",
      state: "Karnataka",
      zip: 560001,
      country: "India",
    },
    items: [
      {
        productId: "p_103",
        name: "Embroidered Silk Anarkali Set with Dupatta",
        brand: "Libas",
        price: 2499,
        quantity: 1,
        size: "M",
        imageURL: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

const Profile = () => {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const wishlistItems = useSelector((state) => state.wishlist.items || []);

  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "overview");
  const [orders, setOrders] = useState(sampleDemoOrders);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync tab with URL search parameter
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auto dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showNotification = (message, type = "success") => {
    setToast({ message, type });
  };

  // Fetch real orders from backend if user is logged in
  useEffect(() => {
    if (!user?._id && !user?.id) return;
    const userId = user._id || user.id;

    let active = true;
    setOrdersLoading(true);

    const config = {
      headers: {
        Authorization: user.token ? `Bearer ${user.token}` : "",
      },
    };

    axios
      .get(`${API_BASE_URL}/api/orders/myorders/${userId}`, config)
      .then((res) => {
        if (active && res.data?.orders) {
          if (res.data.orders.length > 0) {
            setOrders(res.data.orders);
          } else {
            setOrders(sampleDemoOrders);
          }
        }
      })
      .catch(() => {
        // Fallback to sample orders gracefully
        if (active) setOrders(sampleDemoOrders);
      })
      .finally(() => {
        if (active) setOrdersLoading(false);
      });

    return () => {
      active = false;
    };
  }, [user]);

  const handleUpdateUser = (updatedUser) => {
    login(updatedUser);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Guest State Presentation
  if (!user) {
    return (
      <main className="min-h-[80vh] bg-slate-50/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#e91e8c] to-[#ff6b35] text-3xl text-white shadow-xl shadow-pink-500/20">
              👤
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Unlock Your ShowNow Account
            </h1>
            <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Sign in to view your orders, save multiple delivery addresses, track packages live, and access tailored offers.
            </p>

            {/* Feature Perks */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="text-xl">📦</span>
                <p className="font-bold text-xs text-slate-900 mt-2">Live Order Tracking</p>
                <p className="text-[11px] text-slate-500">Real-time delivery milestones.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="text-xl">💖</span>
                <p className="font-bold text-xs text-slate-900 mt-2">Synced Wishlist</p>
                <p className="text-[11px] text-slate-500">Save items across all devices.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="text-xl">⚡</span>
                <p className="font-bold text-xs text-slate-900 mt-2">Express Checkout</p>
                <p className="text-[11px] text-slate-500">1-click order placement.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/login"
                className="w-full sm:w-auto rounded-full bg-slate-900 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-slate-900/15 hover:bg-[#e91e8c] transition-all no-underline"
              >
                Sign In to Account
              </Link>
              <Link
                to="/register"
                className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all no-underline"
              >
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[85vh] bg-slate-50/60 py-8 sm:py-12">
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
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
          <Link to="/" className="hover:text-slate-900 transition-colors no-underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Account Profile</span>
          <span>/</span>
          <span className="text-[#e91e8c] font-bold capitalize">{activeTab}</span>
        </nav>

        {/* Main Grid: Sidebar + Active Tab Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <ProfileSidebar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            user={user}
            onLogout={handleLogout}
            orderCount={orders.length}
            wishlistCount={wishlistItems.length}
          />

          {/* Tab Content Panel */}
          <div className="min-w-0 flex-1 w-full">
            {activeTab === "overview" && (
              <ProfileOverview
                user={user}
                orders={orders}
                wishlistCount={wishlistItems.length}
                addressCount={2}
                onNavigateTab={handleTabChange}
              />
            )}

            {activeTab === "orders" && (
              <ProfileOrders
                orders={orders}
                loading={ordersLoading}
                onNotify={showNotification}
              />
            )}

            {activeTab === "details" && (
              <ProfileDetails
                user={user}
                onUpdateUser={handleUpdateUser}
                onNotify={showNotification}
              />
            )}

            {activeTab === "addresses" && (
              <ProfileAddresses onNotify={showNotification} />
            )}

            {activeTab === "payments" && (
              <ProfilePayments onNotify={showNotification} />
            )}

            {activeTab === "settings" && (
              <ProfileSettings
                onLogout={handleLogout}
                onNotify={showNotification}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
