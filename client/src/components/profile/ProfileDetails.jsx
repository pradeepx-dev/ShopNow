import { useState } from "react";

const avatarPresets = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
];

const ProfileDetails = ({ user, onUpdateUser, onNotify }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "+91 98765 43210",
    dob: user?.dob || "1998-05-14",
    gender: user?.gender || "female",
    avatar: user?.avatar || "",
  });

  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaving(true);

    setTimeout(() => {
      const updatedUser = { ...user, ...formData };
      if (onUpdateUser) onUpdateUser(updatedUser);
      if (onNotify) onNotify("Profile details saved successfully!", "success");
      setSaving(false);
    }, 400);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      if (onNotify) onNotify("Please fill all password fields", "error");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      if (onNotify) onNotify("New passwords do not match", "error");
      return;
    }
    if (passwordData.newPassword.length < 6) {
      if (onNotify) onNotify("Password must be at least 6 characters", "error");
      return;
    }

    if (onNotify) onNotify("Password changed successfully!", "success");
    setIsChangingPassword(false);
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Personal Details
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Manage your personal identity, contact credentials and security.
        </p>
      </div>

      {/* Avatar Customization Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          Profile Avatar
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#e91e8c] to-[#ff6b35] text-white text-2xl font-black shadow-lg shadow-pink-500/20 overflow-hidden">
            {formData.avatar ? (
              <img
                src={formData.avatar}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <span>{formData.name?.[0]?.toUpperCase() || "U"}</span>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                Choose Preset Avatar
              </button>
              {formData.avatar && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, avatar: "" })}
                  className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-100 transition cursor-pointer"
                >
                  Reset to Initials
                </button>
              )}
            </div>
            <p className="text-[11px] text-slate-400">
              Pick an avatar that represents you across ShowNow community & reviews.
            </p>
          </div>
        </div>

        {/* Preset Selector */}
        {isEditingAvatar && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-700 mb-3">Choose an Avatar:</p>
            <div className="flex flex-wrap gap-3">
              {avatarPresets.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, avatar: src });
                    setIsEditingAvatar(false);
                  }}
                  className={`h-12 w-12 rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 cursor-pointer ${
                    formData.avatar === src
                      ? "border-[#e91e8c] shadow-md ring-2 ring-pink-300"
                      : "border-slate-200"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Profile Form */}
      <form
        onSubmit={handleSaveProfile}
        className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6"
      >
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Account Information
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>Email Address</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Verified
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Gender */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-slate-700 block">Gender</label>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                { id: "female", label: "Female" },
                { id: "male", label: "Male" },
                { id: "other", label: "Non-Binary / Other" },
                { id: "unspecified", label: "Prefer not to say" },
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, gender: g.id })}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                    formData.gender === g.id
                      ? "border-slate-900 bg-slate-900 text-white shadow-xs"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Action */}
        <div className="flex justify-end pt-4 border-t border-slate-100">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-[#0d1f33] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#163454] active:scale-98 transition-all cursor-pointer"
          >
            {saving ? "Saving Changes..." : "Save Profile Details"}
          </button>
        </div>
      </form>

      {/* Security & Password Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Security & Password
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Keep your account safe by updating your password regularly.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsChangingPassword(!isChangingPassword)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            {isChangingPassword ? "Cancel" : "Change Password"}
          </button>
        </div>

        {isChangingPassword && (
          <form
            onSubmit={handlePasswordSubmit}
            className="mt-6 pt-5 border-t border-slate-100 space-y-4 max-w-md"
          >
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Current Password</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, currentPassword: e.target.value })
                }
                required
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">New Password</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, newPassword: e.target.value })
                }
                required
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Confirm New Password</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                }
                required
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
