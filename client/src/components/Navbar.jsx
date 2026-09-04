import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.items || []);
  const wishlistItems = useSelector((state) => state.wishlist.items || []);
  const Navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  const handleLogout = () => {
    logout();
    Navigate("/");
    setMobileMenuOpen(false);
  };

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: "Women", to: "/women" },
    { label: "Men", to: "/men" },
    { label: "Kids", to: "/kids" },
    { label: "Home", to: "/" },
    { label: "All Brands", to: "/brands" },
  ];

  const moreLinks = [
    { label: "Beauty", to: "/beauty" },
    { label: "Accessories", to: "/accessories" },
    { label: "Sale", to: "/sale" },
  ];

  // Shared Tailwind classes
  const mobileActionCls =
    "flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2.5 px-3 text-[13px] font-medium text-gray-700 no-underline bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 transition-all duration-150 cursor-pointer";

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* ── Main bar ── */}
      <div className="max-w-[1280px] mx-auto px-5 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-1.5 shrink-0 no-underline"
          style={{ textDecoration: "none" }}
        >
          <div
            className="flex items-center justify-center w-9 h-9 rounded-lg text-white font-extrabold text-lg"
            style={{
              background: "linear-gradient(135deg, #e91e8c 0%, #ff6b35 100%)",
              boxShadow: "0 2px 8px rgba(233,30,140,0.30)",
            }}
          >
            S
          </div>
          <span className="text-xl font-extrabold tracking-tight leading-none">
            <span style={{ color: "#e91e8c" }}>Shop</span>
            <span className="text-gray-900">Now</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center list-none m-0 p-0 shrink-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}

          {/* More dropdown */}
          <li ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={moreOpen}
              className="nav-link"
            >
              More ▾
            </button>
            {moreOpen && (
              <div
                className="absolute left-0 bg-white border border-gray-200 rounded-xl overflow-hidden z-50 min-w-[160px]"
                style={{
                  top: "calc(100% + 6px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  animation: "dropdownIn 0.15s ease",
                }}
              >
                {moreLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2.5 text-[13.5px] font-medium text-gray-700 border-b border-gray-100 last:border-b-0 hover:bg-gray-100 hover:text-gray-900 transition-all duration-150"
                    style={{ textDecoration: "none" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* ── Search Bar ── */}
        <SearchBox className="hidden lg:block flex-1 min-w-0 max-w-[340px]" />

        {/* ── Desktop Action Icons ── */}
        <div className="hidden lg:flex items-center gap-0.5 shrink-0">
          {/* Account */}
          {user ? (
            <Link to="/profile" className="nav-action" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              <span className="nav-action-label">{user.name?.split(" ")[0] || "Account"}</span>
            </Link>
          ) : (
            <Link to="/login" className="nav-action" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              <span className="nav-action-label">Account</span>
            </Link>
          )}

          {/* Wishlist */}
          <Link to="/wishlist" className="nav-action" style={{ textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishlistItems.length > 0 && (
              <span
                className="absolute top-0.5 right-1 text-white font-bold flex items-center justify-center leading-none"
                style={{
                  background: "#e91e8c",
                  fontSize: "9px",
                  borderRadius: "50%",
                  minWidth: "16px",
                  height: "16px",
                  padding: "0 3px",
                }}
              >
                {wishlistItems.length}
              </span>
            )}
            <span className="nav-action-label">Wishlist</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="nav-action" style={{ textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartItems.length > 0 && (
              <span
                className="absolute top-0.5 right-1 text-white font-bold flex items-center justify-center leading-none"
                style={{
                  background: "#e91e8c",
                  fontSize: "9px",
                  borderRadius: "50%",
                  minWidth: "16px",
                  height: "16px",
                  padding: "0 3px",
                }}
              >
                {cartItems.length}
              </span>
            )}
            <span className="nav-action-label">Cart</span>
          </Link>

          {/* Admin (conditional) */}
          {user?.role === "admin" && (
            <Link to="/admin" className="nav-action" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
              <span className="nav-action-label">Admin</span>
            </Link>
          )}

          {/* Logout (conditional) */}
          {user && (
            <button onClick={handleLogout} className="nav-action">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span className="nav-action-label">Logout</span>
            </button>
          )}
        </div>

        {/* ── Hamburger (mobile / tablet) ── */}
        <button
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          className="lg:hidden flex flex-col gap-[5px] p-1.5 rounded-lg border-none bg-transparent cursor-pointer hover:bg-gray-100 transition-all duration-150 shrink-0"
        >
          <span
            className="block rounded-sm bg-gray-700 transition-all duration-300"
            style={{
              width: 22, height: 2.5,
              transform: mobileMenuOpen ? "translateY(7.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block rounded-sm bg-gray-700 transition-all duration-300"
            style={{
              width: 22, height: 2.5,
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="block rounded-sm bg-gray-700 transition-all duration-300"
            style={{
              width: 22, height: 2.5,
              transform: mobileMenuOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* ── Animated gradient accent line ── */}
      <div className="nav-accent" />

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden flex flex-col bg-white border-t border-gray-100 px-5 pb-5 pt-3 gap-1"
          style={{ animation: "slideDown 0.22s ease" }}
        >
          {/* Mobile Search */}
          <SearchBox className="mb-2" onNavigate={() => setMobileMenuOpen(false)} />

          {/* Mobile Nav Links */}
          {[...navLinks, ...moreLinks].map((link, i, arr) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-1 text-sm font-medium text-gray-700 hover:text-[#e91e8c] transition-colors duration-150"
              style={{
                textDecoration: "none",
                borderBottom: i < arr.length - 1 ? "1px solid #f0f0f0" : "none",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Action Buttons */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {user ? (
              <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className={mobileActionCls} style={{ textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                {user.name?.split(" ")[0] || "Account"}
              </Link>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className={mobileActionCls} style={{ textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </Link>
            )}

            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} className={mobileActionCls} style={{ textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
            </Link>

            <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className={mobileActionCls} style={{ textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </Link>

            {user?.role === "admin" && (
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className={mobileActionCls} style={{ textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
                Admin
              </Link>
            )}
          </div>

          {/* Mobile Logout */}
          {user && (
            <button
              onClick={handleLogout}
              className="mt-2 w-full py-2.5 text-white text-sm font-semibold rounded-xl border-none cursor-pointer transition-all duration-200"
              style={{ background: "#1a1a1a" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e91e8c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
