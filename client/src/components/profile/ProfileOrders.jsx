import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);

const ProfileOrders = ({ orders = [], loading = false, onNotify }) => {
  const dispatch = useDispatch();
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const statuses = [
    { id: "all", label: "All Orders" },
    { id: "processing", label: "In Progress" },
    { id: "delivered", label: "Delivered" },
    { id: "cancelled", label: "Cancelled" },
  ];

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // Status filter
      if (activeStatus === "processing") {
        const s = (order.status || "").toLowerCase();
        if (s === "delivered" || s === "cancelled") return false;
      } else if (activeStatus === "delivered") {
        if ((order.status || "").toLowerCase() !== "delivered") return false;
      } else if (activeStatus === "cancelled") {
        if ((order.status || "").toLowerCase() !== "cancelled") return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = (order._id || "").toLowerCase().includes(q);
        const matchesItem = (order.items || []).some((it) =>
          (it.name || "").toLowerCase().includes(q)
        );
        return matchesId || matchesItem;
      }

      return true;
    });
  }, [orders, activeStatus, searchQuery]);

  const handleReorder = (order) => {
    if (!order.items || order.items.length === 0) return;
    order.items.forEach((item) => {
      dispatch(
        addToCart({
          productId: item.productId || item._id,
          _id: item.productId || item._id,
          name: item.name || "Fashion Item",
          price: item.price || 999,
          imageURL: item.imageURL || item.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=150&q=80",
          quantity: item.quantity || 1,
          size: item.size || "M",
          brand: item.brand || "ShowNow",
        })
      );
    });
    if (onNotify) onNotify(`Added ${order.items.length} items to your shopping bag!`, "success");
  };

  const getStatusBadge = (status = "Processing") => {
    const s = status.toLowerCase();
    if (s === "delivered") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Delivered
        </span>
      );
    }
    if (s === "shipped") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
          Shipped
        </span>
      );
    }
    if (s === "cancelled") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 border border-rose-200">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
          Cancelled
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
        Processing
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Order History
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            View, track, and manage all your past and active orders.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search by Order ID or item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
          />
          <svg
            className="absolute left-3 top-2.5 text-slate-400"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {statuses.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveStatus(tab.id)}
            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeStatus === tab.id
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Orders List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-44 rounded-3xl bg-slate-200/60 animate-pulse"
            />
          ))}
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
            📦
          </div>
          <h3 className="text-base font-bold text-slate-900">No Orders Found</h3>
          <p className="mt-1 text-xs text-slate-500">
            {searchQuery
              ? `No orders matching "${searchQuery}"`
              : "You do not have any orders under this category."}
          </p>
          <Link
            to="/"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-[#e91e8c] transition no-underline"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredOrders.map((order) => {
            const items = order.items || [];
            const dateStr = new Date(order.createdAt || Date.now()).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <article
                key={order._id}
                className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:border-slate-300 hover:shadow-md transition-all"
              >
                {/* Order Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70 px-5 py-4">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-600">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                        Order ID
                      </span>
                      <span className="font-mono font-bold text-slate-900">
                        #{order._id?.slice(-8) || "ORD-001"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                        Placed On
                      </span>
                      <span className="font-medium text-slate-800">{dateStr}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                        Total Amount
                      </span>
                      <span className="font-black text-slate-900 text-sm">
                        {formatPrice(order.totalAmount)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {getStatusBadge(order.status)}
                  </div>
                </div>

                {/* Items List Inside Order */}
                <div className="p-5 sm:p-6 divide-y divide-slate-100">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-18 w-18 sm:h-20 sm:w-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                          <img
                            src={
                              item.imageURL ||
                              item.image ||
                              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80"
                            }
                            alt={item.name || "Item"}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#2b75c3]">
                            {item.brand || "ShowNow"}
                          </p>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1">
                            {item.name || "Premium Fashion Product"}
                          </h4>
                          <div className="mt-1 flex items-center gap-3 text-xs text-slate-500 font-medium">
                            <span>Qty: {item.quantity || 1}</span>
                            <span>•</span>
                            <span>Size: {item.size || "M"}</span>
                            <span>•</span>
                            <span className="font-bold text-slate-800">
                              {formatPrice(item.price || 999)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:justify-end">
                        <Link
                          to={`/products/${item.productId || item._id || ''}`}
                          className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition no-underline"
                        >
                          View Item
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/40 px-5 py-3.5">
                  <div className="text-xs text-slate-500">
                    Shipping to:{" "}
                    <strong className="text-slate-800">
                      {order.address?.fullname || "Home Address"}
                    </strong>
                    {order.address?.city && ` (${order.address.city})`}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleReorder(order)}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
                    >
                      Buy Again
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedOrder(order)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition shadow-2xs cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedOrder(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#e91e8c]">
                Order Details
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Order #{selectedOrder._id}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Placed on {new Date(selectedOrder.createdAt || Date.now()).toLocaleString("en-IN")}
              </p>
            </div>

            {/* Tracking Progress Bar */}
            <div className="my-6 rounded-2xl bg-slate-50 p-5 border border-slate-100">
              <div className="flex items-center justify-between mb-3 text-xs font-bold">
                <span className="text-slate-700">Delivery Status</span>
                <span className="text-emerald-600 font-extrabold">{selectedOrder.status || "In Transit"}</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                <div className="h-2 rounded-full bg-emerald-500" />
                <div className="h-2 rounded-full bg-emerald-500" />
                <div className={`h-2 rounded-full ${selectedOrder.status === 'delivered' ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                <div className={`h-2 rounded-full ${selectedOrder.status === 'delivered' ? 'bg-emerald-500' : 'bg-slate-200'}`} />
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-bold text-slate-500">
                <span className="text-emerald-700">✓ Confirmed</span>
                <span className="text-emerald-700">✓ Packed</span>
                <span>Shipped</span>
                <span>Delivered</span>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-3 border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Items in this package ({selectedOrder.items?.length || 1})
              </h4>
              <div className="divide-y divide-slate-100">
                {(selectedOrder.items || []).map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={it.imageURL || it.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=100&q=80"}
                        alt=""
                        className="h-12 w-12 rounded-lg object-cover bg-slate-100"
                      />
                      <div>
                        <p className="font-bold text-slate-800">{it.name || "Item"}</p>
                        <p className="text-slate-500">Qty: {it.quantity || 1} • Size: {it.size || "M"}</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">
                      {formatPrice((it.price || 999) * (it.quantity || 1))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address & Summary */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-5 text-xs">
              <div className="rounded-2xl bg-slate-50 p-4">
                <h5 className="font-bold text-slate-800 mb-1.5 uppercase text-[10px] tracking-wider text-slate-400">
                  Shipping Address
                </h5>
                <p className="font-bold text-slate-900">{selectedOrder.address?.fullname || "Customer"}</p>
                <p className="text-slate-600 mt-0.5">
                  {selectedOrder.address?.address}, {selectedOrder.address?.city}
                </p>
                <p className="text-slate-600">
                  {selectedOrder.address?.state} - {selectedOrder.address?.zip}
                </p>
                <p className="text-slate-500 mt-1">Phone: {selectedOrder.address?.phone || "N/A"}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 space-y-1.5">
                <h5 className="font-bold text-slate-800 mb-1.5 uppercase text-[10px] tracking-wider text-slate-400">
                  Payment Breakdown
                </h5>
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(selectedOrder.totalAmount ? selectedOrder.totalAmount * 0.82 : 1000)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax (GST 18%)</span>
                  <span>{formatPrice(selectedOrder.totalAmount ? selectedOrder.totalAmount * 0.18 : 180)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between font-black text-sm text-slate-900 border-t border-slate-200 pt-2 mt-2">
                  <span>Total Paid</span>
                  <span className="text-[#0d1f33]">{formatPrice(selectedOrder.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                🖨 Print Invoice
              </button>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileOrders;
