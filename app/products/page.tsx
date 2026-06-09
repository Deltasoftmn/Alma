"use client";

import React from "react";
import Link from "next/link";
import { Beaker, Route, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();

  const categories = language === "mn" ? [
    {
      title: "Уул уурхайн флотацийн реагентууд",
      description: "Бид уул уурхайн баяжуулалтын процесст зориулан олон улсын чанарын стандартад нийцсэн химийн бодис, флотацийн хөөсрүүлэгч, флокуляцийн болон бөөгнөрүүлэх полимерүүдийг нийлүүлж байна.",
      icon: Beaker,
      href: "/products/1",
      features: ["Флотацийн хөөсрүүлэгч", "Флокуляцийн полимер", "Бөөгнөрүүлэх полимер (коагулянт)"]
    },
    {
      title: "Замын нэмэлт бүтээгдэхүүн",
      description: "Асфальт, замын хучилтын наалдац болон бат бөх чанарыг нэмэгдүүлэх зориулалттай полимер болон химийн нэмэлтүүд.",
      icon: Route,
      href: "/products/2",
      features: ["Битумын эмульгатор", "Наалдац сайжруулагч полимер", "Хуучин хучилтыг дахин боловсруулах нэмэлтүүд"]
    },
    {
      title: "Барилгын материал, түүхий эд",
      description: "Барилга болон аж үйлдвэрийн салбарын үйлдвэрлэлд ашиглагдах өндөр чанартай түүхий эд, технологийн нэмэлтүүд.",
      icon: Building2,
      href: "/products/3",
      features: ["Химийн нэмэлт бодисууд", "Барилгын суурь түүхий эд", "Бат бөх чанарыг дэмжих материалууд"]
    }
  ] : [
    {
      title: "Mining Flotation Reagents",
      description: "We supply chemical agents, flotation frothers, and flocculants and coagulating polymers meeting international quality standards for mining processing.",
      icon: Beaker,
      href: "/products/1",
      features: ["Flotation Frothers", "Flocculant Polymers", "Coagulating Polymers (Coagulants)"]
    },
    {
      title: "Road Additives",
      description: "Polymer and chemical additives designed to increase the adhesion and durability of asphalt and road pavement.",
      icon: Route,
      href: "/products/2",
      features: ["Bitumen Emulsifiers", "Adhesion-Promoting Polymers", "Recycled Pavement Additives"]
    },
    {
      title: "Building Materials & Raw Materials",
      description: "High-quality raw materials and technological additives for construction and industrial manufacturing.",
      icon: Building2,
      href: "/products/3",
      features: ["Chemical Additives", "Basic Construction Raw Materials", "Durability-Supporting Materials"]
    }
  ];

  const benefits = language === "mn" ? [
    "Баяжуулалтын процессын үр ашгийг нэмэгдүүлэх",
    "Асфальтын наалдац, бат бөх чанарыг сайжруулах",
    "Ус, чийг, температурын нөлөөллөөс хамгаалах",
    "Замын эдэлгээний хугацааг уртасгах",
    "Битумын эмульсийн тогтвортой байдлыг хангах",
    "Үйлдвэрлэлийн процессын үйл ажиллагааг сайжруулах"
  ] : [
    "Increase the efficiency of mineral processing",
    "Improve asphalt adhesion and durability",
    "Protect against water, moisture, and temperature",
    "Extend road service life",
    "Ensure the stability of bitumen emulsion",
    "Optimize industrial production processes"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {language === "mn" ? "Манай бүтээгдэхүүнүүд" : "Our Products"}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {language === "mn" 
                ? "Манай компани нь уул уурхайн флотацийн реагент, замын нэмэлт бүтээгдэхүүн, барилгын материал, түүхий эд болон боловсруулах үйлдвэрлэлийн салбарт өргөн хэрэглэгддэг химийн нэмэлт бодис, технологийн шийдлүүдийг ханган нийлүүлж байна."
                : "Our company supplies chemical additives and technological solutions widely used in mining flotation reagents, road additives, construction materials, raw materials, and processing industries."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                {language === "mn" ? "Үйлдвэрлэлийн үр ашгийг нэмэгдүүлэх шийдлүүд" : "Solutions to Increase Production Efficiency"}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {language === "mn"
                  ? "Бид дэлхийн нэр хүндтэй үйлдвэрлэгчдээс олон улсын стандартад нийцсэн баталгаат түүхий эд, бүтээгдэхүүнийг нийлүүлж байна. Манай бүтээгдэхүүнүүд нь үйлдвэрлэлийн үр ашиг, бүтээгдэхүүний чанар, ашиглалтын хугацааг сайжруулахад чиглэгддэг."
                  : "We supply guaranteed raw materials and products complying with international standards from world-renowned manufacturers. Our products are aimed at improving production efficiency, product quality, and service life."}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {language === "mn"
                  ? "Манай бүтээгдэхүүний төрөлд флотацийн хөөсрүүлэгч, флокуляцийн болон бөөгнөрүүлэх полимер, битумын эмульгатор, наалдац сайжруулагч полимер нэмэлт зэрэг олон төрлийн химийн бүтээгдэхүүнүүд багтдаг."
                  : "Our product range includes flotation frothers, flocculants and coagulating polymers, bitumen emulsifiers, and adhesion-promoting polymer additives."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {language === "mn" ? "Бүтээгдэхүүний ангилал" : "Product Categories"}
            </h2>
            <div className="w-16 h-1 bg-[#00d4ff] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.title}
                  className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#00d4ff]/40 transition-all duration-300 group"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-all">
                      <Icon className="w-7 h-7 text-[#00d4ff]" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[#00d4ff] transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-600 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={category.href}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#00d4ff] text-slate-700 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 transition-all text-sm font-medium mt-auto"
                  >
                    {language === "mn" ? "Дэлгэрэнгүй" : "Learn More"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-slate-100 -z-10 shadow-[10px_10px_20px_rgba(0,0,0,0.02)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side text */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {language === "mn" ? "Манай бүтээгдэхүүний давуу талууд" : "Our Product Advantages"}
              </h2>
              <div className="w-12 h-1 bg-[#00d4ff] rounded-full mb-8" />
              <p className="text-slate-600 leading-relaxed mb-8">
                {language === "mn"
                  ? "Бидний нийлүүлж буй технологийн шийдэл, урвалж, химийн бодисууд нь үйлдвэрлэлийн явцад бодит үр ашгийг авчирдаг бөгөөд аюулгүй ажиллагаа, чанарын өндөр түвшинд шалгагдсан байдаг."
                  : "The technological solutions, reagents, and chemicals we supply bring real efficiency during production, and are thoroughly tested for safety and high quality."}
              </p>
            </div>

            {/* Right side list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00d4ff]/20 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#00d4ff] shrink-0 stroke-[2]" />
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden border border-white/5">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === "mn" ? "Хамтран ажиллах" : "Partner with Us"}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
              {language === "mn"
                ? "Бид хэрэглэгчдийн хэрэгцээ, техникийн шаардлагад нийцсэн бүтээгдэхүүн нийлүүлж, найдвартай хамтын ажиллагаа, мэргэжлийн үйлчилгээ, чанарын стандартыг эрхэмлэн ажилладаг."
                : "We deliver products tailored to customer needs, prioritizing reliable partnership, professional service, and quality standards."}
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-slate-950 font-bold px-8 py-3.5 rounded-full hover:bg-[#00b4d8] transition-all shadow-lg shadow-[#00d4ff]/20"
            >
              {language === "mn" ? "Холбоо барих" : "Contact Us"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
