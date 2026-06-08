"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Бидний тухай", href: "/about" },
    { 
      name: "Үйлчилгээ", 
      href: "/services",
      submenu: [
        { name: "Химийн бодисын худалдаа ", href: "/services/1" },
        { name: "Химийн бодисын аюулгүй хэрэглээ, хадгалалт, агуулахын менежментийн зөвлөгөө", href: "/services/2" },
      ] 
    },
    { 
      name: "Бүтээгдэхүүн", 
      href: "/products",
      submenu: [
        { name: "Уул уурхайн флотацийн реагентууд", href: "/products/1" },
        { name: "Замын нэмэлт бүтээгдэхүүн ", href: "/products/2" },
        { name: "Барилгын материал, түүхий эд", href: "/products/3" }
      ]
    },
    { name: "Харилцагчид", 
      href: "/clients" ,
      submenu: [
        { name: "Уул уурхайн компаниуд", href: "/clients/1" },
        { name: "Боловсруулах үйлдвэрүүд", href: "/clients/2" },
        { name: "Зам , барилгын компани", href: "/clients/2" }
      ]
    },
    { name: "Мэдээ, нийтлэл", 
      href: "/news",
      submenu: [
        { name: "Олон улсын зах зээлийн чиг хандлага", href: "/news/1" },
        { name: "Байгаль орчны болон аюулгүй ажиллагааны мэдээлэл", href: "/news/2" },
        { name: "Компанийн үйл ажиллагаа", href: "/news/3" },
        
      ]
     },
    { name: "Ажлын байр", href: "/jobs",
      submenu: [
        { name: "Нээлттэй ажлын байр", href: "/jobs/1" },
        { name: "Хүний нөөцийн бодлого", href: "/jobs/2" }
        
      ]
     },
    { name: "Холбоо барих", href: "/contact" },
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
                Монголын уул уурхай, аж үйлдвэрийн салбар дахь 
                найдвартай ханган нийлүүлэгч 
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 z-10">
            <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/10">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => pathname === sub.href));
                
                if (item.submenu) {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        className={cn(
                          "px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 whitespace-nowrap",
                          isActive
                            ? "bg-[#00d4ff]/10 text-[#00d4ff] shadow-md border border-[#00d4ff]/50"
                            : "text-zinc-200 hover:text-white border border-transparent hover:border-white/20"
                        )}
                      >
                        {item.name}
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Absolute Dropdown */}
                      <div className="absolute left-1/2 -translate-x-1/2 pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-slate-950/95 border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 border border-transparent rounded-xl transition-all mb-1 last:mb-0"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

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
            <button className="ml-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] font-medium hover:bg-[#00d4ff]/20 transition-colors flex items-center gap-1.5 shadow-md border border-[#00d4ff]/30">
              <Globe className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-sm">МН/EN</span>
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
                  {item.submenu ? (
                    <div>
                      <span className="block font-semibold text-[#00d4ff] px-4 py-1.5 text-sm">
                        {item.name}
                      </span>
                      <div className="flex flex-col gap-1 pl-4 mt-1 border-l-2 border-[#00d4ff]/20 ml-4 mb-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-zinc-400 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 rounded-lg transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
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
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-3 border-t border-white/10 mt-2">
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#00d4ff]/10 text-[#00d4ff] font-semibold shadow-lg border border-[#00d4ff]/30">
                  <Globe className="w-4 h-4 text-[#00d4ff]" />
                  <span>МН/EN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
