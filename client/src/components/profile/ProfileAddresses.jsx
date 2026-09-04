import { useState } from "react";

const initialAddresses = [
  {
    id: "addr_1",
    name: "Home",
    fullname: "Pradeep Kumar Maurya",
    phone: "+91 98765 43210",
    address: "Flat 402, Sunshine Heights, MG Road",
    city: "Bengaluru",
    state: "Karnataka",
    zip: "560001",
    country: "India",
    isDefault: true,
    tag: "home",
  },
  {
    id: "addr_2",
    name: "Office",
    fullname: "Pradeep Kumar Maurya",
    phone: "+91 98765 43210",
    address: "Tower B, Level 6, Tech Park, Whitefield",
    city: "Bengaluru",
    state: "Karnataka",
    zip: "560066",
    country: "India",
    isDefault: false,
    tag: "office",
  },
];

const ProfileAddresses = ({ onNotify }) => {
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem("userSavedAddresses");
      return saved ? JSON.parse(saved) : initialAddresses;
    } catch {
      return initialAddresses;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
    tag: "home",
    isDefault: false,
  });

  const saveToStorage = (updatedList) => {
    setAddresses(updatedList);
    try {
      localStorage.setItem("userSavedAddresses", JSON.stringify(updatedList));
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenAdd = () => {
    setEditingAddress(null);
    setFormData({
      fullname: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "India",
      tag: "home",
      isDefault: addresses.length === 0,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (addr) => {
    setEditingAddress(addr);
    setFormData({ ...addr });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updated = addresses.filter((a) => a.id !== id);
    saveToStorage(updated);
    if (onNotify) onNotify("Address deleted successfully", "info");
  };

  const handleSetDefault = (id) => {
    const updated = addresses.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }));
    saveToStorage(updated);
    if (onNotify) onNotify("Default address updated!", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.phone || !formData.address || !formData.city || !formData.zip) {
      if (onNotify) onNotify("Please fill in all mandatory address fields", "error");
      return;
    }

    if (editingAddress) {
      const updated = addresses.map((a) => {
        if (a.id === editingAddress.id) {
          return { ...formData, id: a.id };
        }
        if (formData.isDefault) {
          return { ...a, isDefault: false };
        }
        return a;
      });
      saveToStorage(updated);
      if (onNotify) onNotify("Address updated successfully!", "success");
    } else {
      const newAddr = {
        ...formData,
        id: `addr_${Date.now()}`,
      };
      let updated = [...addresses];
      if (newAddr.isDefault) {
        updated = updated.map((a) => ({ ...a, isDefault: false }));
      }
      updated.push(newAddr);
      saveToStorage(updated);
      if (onNotify) onNotify("New address added successfully!", "success");
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Saved Addresses
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Manage your delivery destinations for fast & smooth checkouts.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#e91e8c] shadow-md transition-all cursor-pointer"
        >
          <span>+ Add New Address</span>
        </button>
      </div>

      {/* Address Grid */}
      {addresses.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
            📍
          </div>
          <h3 className="text-base font-bold text-slate-900">No Addresses Saved</h3>
          <p className="text-xs text-slate-500 mt-1">
            Add a shipping address to enjoy 1-click checkout.
          </p>
          <button
            type="button"
            onClick={handleOpenAdd}
            className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white hover:bg-slate-800 transition"
          >
            Add Address Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`relative flex flex-col justify-between rounded-3xl border p-5 sm:p-6 transition-all bg-white ${
                addr.isDefault
                  ? "border-slate-900 ring-2 ring-slate-900/10 shadow-sm"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
              }`}
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {addr.tag === "office" ? "🏢 Office" : "🏠 Home"}
                  </span>
                  {addr.isDefault && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                      Default Address
                    </span>
                  )}
                </div>

                {/* Details */}
                <h3 className="text-base font-bold text-slate-900">
                  {addr.fullname}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {addr.address}
                </p>
                <p className="text-xs text-slate-600">
                  {addr.city}, {addr.state} - {addr.zip}
                </p>
                <p className="text-xs text-slate-600">{addr.country}</p>

                <div className="mt-3 text-xs text-slate-500">
                  Phone: <span className="font-semibold text-slate-800">{addr.phone}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap text-xs">
                {!addr.isDefault ? (
                  <button
                    type="button"
                    onClick={() => handleSetDefault(addr.id)}
                    className="font-bold text-[#e91e8c] hover:underline cursor-pointer"
                  >
                    Set as Default
                  </button>
                ) : (
                  <span className="text-[11px] font-medium text-slate-400">
                    Primary shipping address
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(addr)}
                    className="font-bold text-slate-700 hover:text-slate-900 cursor-pointer"
                  >
                    Edit
                  </button>
                  <span className="text-slate-200">|</span>
                  <button
                    type="button"
                    onClick={() => handleDelete(addr.id)}
                    className="font-bold text-rose-600 hover:text-rose-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Address Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              {editingAddress ? "Edit Shipping Address" : "Add New Shipping Address"}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Enter your accurate details for seamless doorstep delivery.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Street Address *</label>
                <textarea
                  rows="2"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">City *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">State *</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">PIN Code *</label>
                  <input
                    type="text"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Address Tag</label>
                  <select
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                  >
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2.5 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <span className="text-xs font-semibold text-slate-700">
                  Make this my default shipping address
                </span>
              </label>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  {editingAddress ? "Save Changes" : "Add Address"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAddresses;
