import { Link } from "react-router-dom";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const ProfileOverview = ({
  user,
  orders = [],
  wishlistCount = 0,
  addressCount = 0,
  onNavigateTab,
}) => {
  const latestOrder = orders.length > 0 ? orders[0] : null;

  const statCards = [
    {
      label: "Total Orders",
      value: orders.length,
      unit: "placed",
      color: "from-blue-500/10 to-indigo-500/10",
      textColor: "text-blue-700",
      borderColor: "border-blue-200/60",
      action: () => onNavigateTab("orders"),
      icon: "📦",
    },
    {
      label: "Wishlist Items",
      value: wishlistCount,
      unit: "saved",
      color: "from-pink-500/10 to-rose-500/10",
      textColor: "text-pink-700",
      borderColor: "border-pink-200/60",
      link: "/wishlist",
      icon: "💖",
    },
    {
      label: "Saved Addresses",
      value: addressCount,
      unit: "locations",
      color: "from-emerald-500/10 to-teal-500/10",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200/60",
      action: () => onNavigateTab("addresses"),
      icon: "📍",
    },
    {
      label: "Reward Coins",
      value: 650,
      unit: "pts available",
      color: "from-amber-500/10 to-yellow-500/10",
      textColor: "text-amber-700",
      borderColor: "border-amber-200/60",
      action: () => {},
      icon: "✨",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0d1f33] via-[#1a2f4c] to-[#2b1f3d] p-6 sm:p-8 text-white shadow-lg shadow-slate-900/10">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#e91e8c]/20 blur-2xl" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                Welcome Back
              </span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Hello, {user?.name?.split(" ")[0] || "Shopper"}! 👋
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-md">
              Here is what is happening with your ShowNow account and latest orders.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onNavigateTab("details")}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              <span>Edit Profile</span>
            </button>
            <Link
              to="/search"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#e91e8c] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#d8157f] transition-all no-underline"
            >
              <span>Shop Deals</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stat Metric Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map((stat) => {
          const Content = (
            <div
              className={`rounded-2xl border ${stat.borderColor} bg-gradient-to-br ${stat.color} bg-white p-4 sm:p-5 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl">{stat.icon}</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  View
                </span>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-600 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {stat.unit}
                </div>
              </div>
            </div>
          );

          if (stat.link) {
            return (
              <Link key={stat.label} to={stat.link} className="no-underline block">
                {Content}
              </Link>
            );
          }

          return (
            <div key={stat.label} onClick={stat.action}>
              {Content}
            </div>
          );
        })}
      </div>

      {/* Latest Order Preview */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Recent Order
            </h2>
            <p className="text-xs text-slate-500">
              Track delivery and review your latest purchase
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab("orders")}
            className="text-xs sm:text-sm font-bold text-[#e91e8c] hover:underline cursor-pointer"
          >
            All Orders ({orders.length}) →
          </button>
        </div>

        {latestOrder ? (
          <div className="mt-5 space-y-5">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-900">
                  #{latestOrder._id?.slice(-8) || "ORD-94829"}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">
                  {new Date(latestOrder.createdAt || Date.now()).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 font-bold uppercase tracking-wider text-[10px] border border-emerald-200/60">
                  {latestOrder.status || "Confirmed"}
                </span>
                <span className="font-extrabold text-sm text-slate-900">
                  {formatPrice(latestOrder.totalAmount || 1899)}
                </span>
              </div>
            </div>

            {/* Delivery Progress Bar */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                <span>Estimated Delivery: <strong className="text-slate-900">3 - 5 Days</strong></span>
                <span className="text-emerald-600">On Track</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 w-[65%]" />
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-semibold text-slate-400">
                <span className="text-slate-900">Order Placed</span>
                <span className="text-slate-900">Processing</span>
                <span className="text-slate-900">Shipped</span>
                <span>Delivered</span>
              </div>
            </div>

            {/* Items Thumbnails */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {(latestOrder.items || [1, 2]).map((item, idx) => (
                  <div
                    key={idx}
                    className="h-14 w-14 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0"
                  >
                    <img
                      src={
                        item.imageURL ||
                        item.image ||
                        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=150&q=80"
                      }
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onNavigateTab("orders")}
                className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
              >
                Track Shipment
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center">
            <p className="text-sm font-semibold text-slate-700">
              You haven&apos;t placed any orders yet.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Start shopping today to discover trendy fashion at unbeatable prices!
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-[#e91e8c] transition no-underline"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Quick Access Grid */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400 mb-3">
          Quick Account Actions
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => onNavigateTab("addresses")}
            className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:border-slate-300 hover:shadow-sm transition cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-lg">
              📍
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                Manage Addresses
              </div>
              <div className="text-[11px] text-slate-500">
                Add or edit delivery spots
              </div>
            </div>
          </button>

          <Link
            to="/wishlist"
            className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:border-slate-300 hover:shadow-sm transition no-underline"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600 text-lg">
              💖
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                Wishlist Items
              </div>
              <div className="text-[11px] text-slate-500">
                {wishlistCount} items saved for later
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => onNavigateTab("settings")}
            className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:border-slate-300 hover:shadow-sm transition cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-lg">
              🔒
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                Account Security
              </div>
              <div className="text-[11px] text-slate-500">
                Password & Preferences
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
