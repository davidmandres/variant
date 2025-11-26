"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/track-record", label: "Track Record" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "header",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-4"
          : "bg-background border-transparent py-6"
      )}
    >
      <div className="computer-menu">
        <Link href="/" className="logo-box group">
          <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center text-xl font-medium group-hover:scale-105 transition-transform">
            V
          </div>
          <span className="text-xl font-bold tracking-wide text-foreground">
            VARIANT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-foreground transition-colors",
                pathname === link.href
                  ? "text-foreground underline underline-offset-4"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/login">Member Login</Link>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg animate-in fade-in-20 slide-in-from-top-4">
          {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-left text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link href="/login">Member Login</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
