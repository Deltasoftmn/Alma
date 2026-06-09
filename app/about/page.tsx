"use client";

import React from "react";
import Link from "next/link";
import { Target, Eye, Handshake, ArrowRight, Award, Shield, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

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
              {language === "mn" ? "Бидний тухай" : "About Us"}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {language === "mn"
                ? "Алма Кем Трейд ХХК нь салбарын процессын онцлогт нийцсэн шийдлийг санал болгодог мэргэжлийн ханган нийлүүлэгч юм."
                : "Alma Chem Trade LLC is a professional supplier offering customized solutions tailored to specific industry processes."}
            </p>
          </div>
        </div>
      </section>

      {/* About Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                {language === "mn" ? "Бидний онцлог" : "Our Approach"}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {language === "mn"
                  ? "Бид зөвхөн ханган нийлүүлэгчийн хувиар бус, үйлдвэрлэлийн процессын онцлогт нийцсэн шийдлийг санал болгодог."
                  : "We offer customized solutions matching your production process characteristics, not just raw supply."}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {language === "mn"
                  ? "Мэргэжлийн баг хамт олны мэдлэг туршлагад тулгуурлан урвалж, бүтээгдэхүүний оновчтой хэрэглээний талаар зөвлөмж өгч, аюулгүй ажиллагааны мэдлэг мэдээллээр ханган ажилладаг."
                  : "Supported by our professional team's expertise, we provide recommendations on optimal usage of reagents, safety guidelines, and operations knowledge."}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {language === "mn"
                  ? "Бид харилцагчдын үйлдвэрлэлийн үр ашиг, процессын тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ."
                  : "We focus on creating value by optimizing processing efficiency, process stability, and cost reduction for our clients."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Mission, Vision, and Partnerships 3-Column Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Column 1: Mission Card */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {language === "mn" ? "Эрхэм зорилго" : "Our Mission"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === "mn"
                    ? "Бид улсын нэр хүндтэй их сургуулиудын хамтын ажиллагааны хүрээнд үйлдвэрлэлийн процессийн судалгааг явуулж харилцагчдын үйлдвэрлэлийн үр ашиг, тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ."
                    : "Through collaboration with reputable national universities, we conduct research on industrial processes to optimize client efficiency, operational stability, and cost reductions."}
                </p>
              </div>
            </div>

            {/* Column 2: Vision Card */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {language === "mn" ? "Алсын хараа" : "Our Vision"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === "mn"
                    ? "Монголын уул уурхайн хөгжилд чанартай, найдвартай бүтээгдэхүүн, инновацын шийдлээр хувь нэмэр оруулан, салбарын тэргүүлэх нийлүүлэгч байна."
                    : "To contribute to the development of Mongolian mining with quality, reliable products and innovative solutions, establishing ourselves as a leading industry supplier."}
                </p>
              </div>
            </div>

            {/* Column 3: Partnership Card */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-6">
                  <Handshake className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {language === "mn" ? "Хамтын ажиллагаа, түншлэл" : "Partnership & Collaboration"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {language === "mn"
                    ? "Алма Кем Трейд ХХК нь Roadway Solution, Celanese, Nouryon зэрэг олон улсын нэр хүндтэй үйлдвэрлэгчидтэй хамтын ажиллагаатай бөгөөд, зам, барилга уул уурхайн салбарт ашиглагддаг нэмэлт бүтээгдэхүүн, материал, уул уурхайн реагентуудыг дотоодын зах зээлд ханган нийлүүлж байна."
                    : "Alma Chem Trade LLC cooperates with world-renowned manufacturers like Roadway Solution, Celanese, and Nouryon, supplying road additives, building materials, and mining reagents to the domestic market."}
                </p>
          
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-12 shadow-xl border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === "mn" ? "Бүтээгдэхүүний дэлгэрэнгүйг үзэх" : "Explore Our Products"}
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
              {language === "mn" 
                ? "Уул уурхайн урвалж, замын нэмэлт болон барилгын материалын шийдлүүдийг үзнэ үү."
                : "View our full catalog of mining reagents, road additives, and construction material solutions."}
            </p>
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-[#00b4d8] transition-all shadow-md shadow-[#00d4ff]/10"
            >
              {language === "mn" ? "Бүтээгдэхүүнүүд" : "Products"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
