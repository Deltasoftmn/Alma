"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();

  const benefits = language === "mn" ? [
    "Баяжуулалтын процессын үр ашгийг нэмэгдүүлэх",
    "Асфальтын наалдац, бат бөх чанарыг сайжруулах",
    "Ус, чийг, температурын нөлөөллөөс хамгаалах",
    "Замын эдэлгээний хугацааг уртасгах",
    "Битумын эмульсийн тогтвортой байдлыг хангах",
    "Үйлдвэрлэлийн процессын үйл ажиллагааг сайжруулах"
  ] : [
    "Increasing the efficiency of mineral processing",
    "Improving asphalt adhesion and strength",
    "Protecting against water, moisture, and temperature",
    "Extending road service life",
    "Ensuring the stability of bitumen emulsion",
    "Improving industrial process operations"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {language === "mn" ? "Бүтээгдэхүүн" : "Products"}
          </h1>
          <div className="w-16 h-1 bg-[#00d4ff] mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 leading-relaxed text-base md:text-lg text-justify">
            <p>
              {language === "mn"
                ? "Манай компани нь уул уурхайн флотацийн реагент, замын нэмэлт бүтээгдэхүүн, барилгын материал, түүхий эд болон боловсруулах үйлдвэрлэлийн салбарт өргөн хэрэглэгддэг химийн нэмэлт бодис, технологийн шийдлүүдийг нэвтрүүлэн, үйлдвэрлэлийн үр ашиг, бүтээгдэхүүний чанар, ашиглалтын хугацааг сайжруулахад чиглэсэн өндөр чанартай бүтээгдэхүүнүүдийг хэрэглэгчдэдээ санал болгож байна."
                : "Our company offers high-quality products aimed at improving production efficiency, product quality, and service life by introducing chemical additives and technological solutions widely used in mining flotation reagents, road additives, building materials, raw materials, and processing industries."}
            </p>

            <p>
              {language === "mn"
                ? "Манай бүтээгдэхүүний төрөлд флотацийн хөөсрүүлэгч, флокуляцийн болон бөөгнөрүүлэх полимер, битумын эмульгатор, наалдац сайжруулагч полимер нэмэлт, зэрэг олон төрлийн химийн бүтээгдэхүүнүүд багтдаг."
                : "Our product range includes various chemical products such as flotation frothers, flocculant and coagulant polymers, bitumen emulsifiers, and adhesion-promoting polymer additives."}
            </p>

            {/* Benefits List */}
            <div className="py-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                {language === "mn" ? "Манай бүтээгдэхүүнүүд нь:" : "Our products have many advantages, including:"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#00d4ff]/20 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm md:text-base leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 mt-6 text-sm italic">
                {language === "mn" ? "зэрэг олон давуу талтай." : ""}
              </p>
            </div>

            {/* Closing Outro Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-8 border border-slate-200/60 shadow-sm mt-8">
              <p className="text-slate-800 font-medium text-center text-sm md:text-base">
                {language === "mn"
                  ? "Бид хэрэглэгчдийн хэрэгцээ, техникийн шаардлагад нийцсэн бүтээгдэхүүн нийлүүлж, найдвартай хамтын ажиллагаа, мэргэжлийн үйлчилгээ, чанарын стандартыг эрхэмлэн ажилладаг."
                  : "We deliver products tailored to customer needs and technical specifications, prioritizing reliable partnership, professional service, and quality standards."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
