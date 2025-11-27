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
        <Link href="/" className="logo-box">
          <div className="logo-v">V</div>
          <span className="logo-name">VARIANT</span>
        </Link>

        <nav className="nav">
          {navLinks.map((link) => (
            <button className="btn-text">
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
            </button>
          ))}
          <div>|</div>
          <button className="btn">
            <Link href="/login">Member Login</Link>
          </button>
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
