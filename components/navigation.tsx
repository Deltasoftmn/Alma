"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navItems = language === "mn" ? [
    { name: "Бидний тухай", href: "/about" },
    { 
      name: "Үйлчилгээ", 
      href: "/services"
    },
    { 
      name: "Бүтээгдэхүүн", 
      href: "/products"
    },
    { name: "Холбоо барих", href: "/contact" },
  ] : [
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services"
    },
    { 
      name: "Products", 
      href: "/products"
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 z-50 w-full ">
      <div className="max-w-full mx-auto">
        <div className="relative flex items-center justify-between -mt-4 h-25 px-18 bg-[url('/header_background.png')] bg-cover bg-center bg-no-repeat rounded-[2rem] shadow-inner">
          {/* Logo and Tagline Area */}
          <div className="flex items-center gap-6 z-10">
            <Link href="/" className="z-10 pl-6">
              <Image src="/logo.png" alt="Khimi Consulting Logo" width={120} height={40} className="w-auto h-10 object-contain" priority />
            </Link>
            
            <div className="hidden md:block pl-12 z-10">
              <p className="text-white/90 text-sm font-medium leading-tight max-w-[300px]">
                {language === "mn" 
                  ? "Бид чанар, найдвартай байдал, үр ашгийг эрхэмлэнэ." 
                  : "We prioritize quality, reliability, and efficiency."}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 z-10">
            <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                      isActive
                        ? "bg-[#00d4ff]/10 text-[#00d4ff] shadow-md border border-[#00d4ff]/50"
                        : "text-zinc-200 hover:text-white border border-transparent hover:border-white/20"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="ml-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] font-medium hover:bg-[#00d4ff]/20 transition-colors flex items-center gap-1.5 shadow-md border border-[#00d4ff]/30"
            >
              <Globe className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-sm">{language === "mn" ? "EN" : "MN"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[1680px] mx-auto px-4 mt-3 animate-in fade-in slide-in-from-top-4 duration-200 ease-out relative z-40">
          <div className="bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-white/5 last:border-none pb-2 last:pb-0">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 font-medium rounded-xl text-sm transition-all",
                      pathname === item.href
                        ? "bg-[#00d4ff]/20 text-[#00d4ff]"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-3 border-t border-white/10 mt-2">
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#00d4ff]/10 text-[#00d4ff] font-semibold shadow-lg border border-[#00d4ff]/30"
                >
                  <Globe className="w-4 h-4 text-[#00d4ff]" />
                  <span>{language === "mn" ? "EN" : "MN"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
