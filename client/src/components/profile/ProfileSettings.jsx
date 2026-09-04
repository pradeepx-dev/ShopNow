import { useState } from "react";

const ProfileSettings = ({ onLogout, onNotify }) => {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promoOffers: true,
    whatsappUpdates: false,
    newsletter: true,
  });

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleToggle = (key) => {
    const updated = { ...notifications, [key]: !notifications[key] };
    setNotifications(updated);
    if (onNotify) onNotify("Notification preferences updated!", "success");
  };

  const handleExportData = () => {
    if (onNotify) onNotify("Your account data archive has been queued for download.", "info");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Settings & Preferences
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Control your notification channels, security policies and privacy preferences.
        </p>
      </div>

      {/* Notifications Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Notification Preferences
        </h3>

        <div className="divide-y divide-slate-100">
          {/* Order Updates */}
          <div className="flex items-center justify-between py-4 first:pt-0">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Order & Shipping Alerts
              </h4>
              <p className="text-xs text-slate-500">
                Receive real-time notifications about dispatch, tracking, and delivery status.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("orderUpdates")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.orderUpdates ? "bg-[#e91e8c]" : "bg-slate-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  notifications.orderUpdates ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* WhatsApp / SMS Alerts */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                WhatsApp Delivery Tracking
              </h4>
              <p className="text-xs text-slate-500">
                Receive OTPs and courier delivery links right inside WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("whatsappUpdates")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.whatsappUpdates ? "bg-[#e91e8c]" : "bg-slate-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  notifications.whatsappUpdates ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Promotional Deals */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Promotional Offers & Flash Sales
              </h4>
              <p className="text-xs text-slate-500">
                Get early bird access to festive sales, discounts, and brand drops.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("promoOffers")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.promoOffers ? "bg-[#e91e8c]" : "bg-slate-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  notifications.promoOffers ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Weekly Newsletter */}
          <div className="flex items-center justify-between py-4 last:pb-0">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                ShowNow Weekly Fashion Digest
              </h4>
              <p className="text-xs text-slate-500">
                Curated style guides, celebrity lookbooks, and seasonal trends.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle("newsletter")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                notifications.newsletter ? "bg-[#e91e8c]" : "bg-slate-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  notifications.newsletter ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Account Data & Privacy */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Privacy & Account Management
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Download Account Data</h4>
            <p className="text-xs text-slate-500">
              Obtain an archive containing your orders, addresses, and account logs.
            </p>
          </div>
          <button
            type="button"
            onClick={handleExportData}
            className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            Export Data
          </button>
        </div>

        {/* Danger Zone */}
        <div className="pt-6 border-t border-rose-100">
          <h4 className="text-sm font-bold text-rose-700 mb-1">Danger Zone</h4>
          <p className="text-xs text-slate-500 mb-4">
            Once you delete your account, there is no going back. All saved wishlists and orders will be permanently erased.
          </p>

          {confirmDelete ? (
            <div className="rounded-2xl bg-rose-50 p-4 border border-rose-200 space-y-3">
              <p className="text-xs font-bold text-rose-900">
                Are you absolutely certain? This action cannot be undone.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    if (onNotify) onNotify("Account deleted successfully", "info");
                  }}
                  className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700 transition cursor-pointer"
                >
                  Yes, Delete My Account
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition cursor-pointer"
            >
              Delete Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
