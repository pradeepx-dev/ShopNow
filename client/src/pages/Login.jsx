import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        login(res.data);
        navigate("/");
      } else {
        setError(res.data?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid credentials or server error."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-pink-50/30">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* ── Left Banner Section (Desktop) ── */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-[#e91e8c] via-[#f43f5e] to-[#ff6b35] text-white relative overflow-hidden">
          {/* Subtle background decoration circles */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          {/* Logo & Brand */}
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2.5 no-underline group">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
                S
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Show<span className="text-white/80">Now</span>
              </span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 my-auto py-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Welcome back to your style destination.
            </h2>
            <p className="text-pink-100 text-sm leading-relaxed max-w-sm">
              Discover curated fashion, exclusive offers, and effortless shopping—all in one place.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                ✨ Premium Brands
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                🚀 Express Delivery
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                🔒 Safe & Secure
              </span>
            </div>
          </div>

          {/* Footer note */}
          <div className="relative z-10 text-xs text-pink-200">
            © 2026 ShowNow. All rights reserved.
          </div>
        </div>

        {/* ── Right Form Section ── */}
        <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">

          {/* Mobile Header Logo */}
          <div className="md:hidden flex justify-center mb-6">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e91e8c] to-[#ff6b35] flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                S
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-[#e91e8c]">Show</span>
                <span className="text-gray-900">Now</span>
              </span>
            </Link>
          </div>

          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Sign In
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium flex items-start gap-2 animate-[slideDown_0.2s_ease]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50/70 border border-gray-200 rounded-xl outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Password
                </label>
                <Link to="#" className="text-xs font-medium text-[#e91e8c] hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-11 text-sm text-gray-900 bg-gray-50/70 border border-gray-200 rounded-xl outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 border-none bg-transparent cursor-pointer p-0 flex"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-[#e91e8c] border-gray-300 rounded focus:ring-[#e91e8c] accent-[#e91e8c] cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer select-none">
                Remember me on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-[#e91e8c] to-[#ff6b35] rounded-xl shadow-lg shadow-[#e91e8c]/25 hover:shadow-xl hover:shadow-[#e91e8c]/35 hover:opacity-95 active:scale-[0.99] transition-all duration-200 cursor-pointer border-none flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-8 text-center text-xs text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold text-[#e91e8c] hover:underline ml-1">
              Create an Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
