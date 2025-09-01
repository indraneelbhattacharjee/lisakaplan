import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
import "./Header.css";

/** Workaround for older @types/react so react-icons compile cleanly */
const HeartIcon = FaHeart as unknown as React.ElementType;
const BarsIcon  = FaBars  as unknown as React.ElementType;
const TimesIcon = FaTimes as unknown as React.ElementType;

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT LISA" },
  { to: "/district", label: "DISTRICT 1" },
  { to: "/action", label: "ACTION FOR DISTRICT 1" },
  { to: "/get-involved", label: "GET INVOLVED" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => setOpen(false), [location.pathname]);

  const handleDonate = () =>
    window.open(
      "https://www.efundraisingconnections.com/c/LisaKaplan2026/",
      "_blank",
      "noopener,noreferrer"
    );

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          {/* Left: Brand */}
          <Link to="/" className="brand" aria-label="Lisa Kaplan home">
            <img 
              src="/navbarlogo.png" 
              alt="Lisa Kaplan Campaign Logo" 
              className="brand-logo"
            />
          </Link>

          {/* Center: Desktop navigation */}
          <nav className="nav" aria-label="Primary">
            <ul className="nav-list">
              {NAV.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`nav-link ${active ? "is-active" : ""}`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Center: BetterTogether hashtag */}
          <div className="bettertogether-tag">
            #BETTERTOGETHER
          </div>

          {/* Right: Donate (locks to extreme right) */}
          <button
            className="donate-btn"
            onClick={handleDonate}
            aria-label="Donate"
          >
            <HeartIcon aria-hidden="true" />
            <span>Donate</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <BarsIcon aria-hidden="true" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`drawer ${open ? "drawer-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button className="drawer-close" onClick={() => setOpen(false)}>
          <TimesIcon aria-hidden="true" />
          <span className="sr-only">Close menu</span>
        </button>

        <ul className="drawer-list">
          {NAV.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="drawer-link">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button className="drawer-donate" onClick={handleDonate}>
              <HeartIcon aria-hidden="true" />
              <span>Donate</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {open && (
        <button
          className="backdrop"
          onClick={() => setOpen(false)}
          aria-label="Close menu backdrop"
        />
      )}
    </>
  );
}
