"use client";

import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-neutral-200 py-4"
          : "bg-white border-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-xl font-medium group-hover:scale-105 transition-transform">
            <Link href={"/"}>V</Link>
          </div>
          <span className="text-xl font-bold tracking-wide">VARIANT</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Button btnType="btn-text">
            <Link href={"/research"}>Research</Link>
          </Button>
          <Button btnType="btn-text">
            <Link href={"/track-record"}>Track Record</Link>
          </Button>
          <Button btnType="btn-text">
            <Link href={"/pricing"}>Pricing</Link>
          </Button>
          <Button btnType="btn-text">
            <Link href={"/about"}>About</Link>
          </Button>
          <Button btnType="btn-text">
            <Link href={"/login"}>Member Login</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-lg">
          <button className="text-lg font-medium text-left">
            <Link href={"/research"}>Research</Link>
          </button>
          <button className="text-lg font-medium text-left">
            <Link href={"/track-record"}>Track Record</Link>
          </button>
          <button className="text-lg font-medium text-left">
            <Link href={"/pricing"}>Pricing</Link>
          </button>
          <button className="text-lg font-medium text-left">
            <Link href={"/about"}>About</Link>
          </button>
          <button className="text-lg font-medium text-left">
            <Link href={"/contact"}>Contact</Link>
          </button>
          <button className="w-full py-3 bg-black text-white font-medium">
            <Link href={"/login"}>Member Login</Link>
          </button>
        </div>
      )}
    </nav>
  );
}
