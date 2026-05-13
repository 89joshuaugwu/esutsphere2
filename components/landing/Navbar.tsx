"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Bell, Menu, X, Home, BookOpen, Users, MessageSquare, Info, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Library", href: "/library", icon: BookOpen },
    { label: "Community", href: "/explore", icon: Users },
    { label: "Blog", href: "/blog", icon: MessageSquare },
    { label: "About", href: "/about", icon: Info },
  ];

  return (
    <>
      <div className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-[1100px] bg-[#16162a]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-2">
            <Image src="/logo.png" alt="ESUTSphere Logo" width={28} height={28} className="rounded-full" />
            <span className="font-display text-xl text-white tracking-wide">
              ESUTSphere
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-medium transition-all ${
                    isActive
                      ? "bg-brand/20 text-brand-light"
                      : "text-text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3 pr-1">
            <button aria-label="Search" className="text-text-muted hover:text-white transition-colors w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Notifications" className="text-text-muted hover:text-white transition-colors relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5">
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute top-2 right-2 w-[6px] h-[6px] bg-brand-light rounded-full shadow-[0_0_8px_#A855F7]"></span>
            </button>
            <div className="w-[1px] h-6 bg-white/10 mx-1" />
            <Link
              href="/login"
              className="flex items-center gap-2 bg-brand hover:bg-brand-light text-white text-sm font-semibold py-2 px-5 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all"
            >
              <LogIn className="w-[18px] h-[18px]" />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 pr-1">
            <button aria-label="Notifications" className="text-text-muted hover:text-white transition-colors relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-light rounded-full shadow-[0_0_8px_#A855F7]"></span>
            </button>
            <button
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="text-text-muted hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[88px] inset-x-4 z-40 flex justify-center lg:hidden pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-[400px] bg-[#16162a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl p-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
                      isActive
                        ? "bg-brand/20 text-brand-light"
                        : "text-text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                );
              })}
              <div className="h-[1px] bg-white/10 my-2" />
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand text-white text-[15px] font-semibold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:bg-brand-light transition-colors"
              >
                <LogIn className="w-5 h-5" />
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
