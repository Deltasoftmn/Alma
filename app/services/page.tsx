"use client";

import React from "react";
import Link from "next/link";
import { Package, ShieldCheck, FlaskConical, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();

  const services = language === "mn" ? [
    {
      title: "Химийн бодисын худалдаа",
      description: "Бид олон улсын стандартад нийцсэн өндөр чанартай химийн бодис, урвалжийг уул уурхай, барилга, аж үйлдвэрийн салбарт ханган нийлүүлж байна.",
      icon: Package,
      features: [
        "Уул уурхайн флотацийн реагентууд",
        "Зам, барилгын полимер нэмэлтүүд",
        "Үйлдвэрлэлийн химийн бодисууд"
      ]
    },
    {
      title: "Химийн бодисын аюулгүй хэрэглээ, хадгалалт, агуулахын менежментийн зөвлөгөө",
      description: "Химийн бодисыг зөв ашиглах, аюулгүй хадгалах болон агуулахын үр ашигтай менежментийн чиглэлээр мэргэжлийн зөвлөх үйлчилгээ үзүүлнэ.",
      icon: ShieldCheck,
      features: [
        "Аюулгүй ажиллагааны зөвлөгөө",
        "Агуулахын аюулгүй байдлын аудит",
        "Бүтээгдэхүүний оновчтой хэрэглээ"
      ]
    },
    {
      title: "Уул уурхайн үйлдвэрлэлийн технологийн чиглэлээр лабораторийн судалгаа, шинжилгээг зохион байгуулах",
      description: "Бид уул уурхай, баяжуулалтын технологийн процессыг сайжруулах, зардлыг бууруулах зорилгоор лабораторийн нарийвчилсан судалгаа, туршилт шинжилгээг зохион байгуулж ажилладаг.",
      icon: FlaskConical,
      features: [
        "Их сургуулиудтай хамтарсан судалгаа",
        "Технологийн процессын туршилтууд",
        "Үр ашгийг дээшлүүлэх шинжилгээ"
      ]
    }
  ] : [
    {
      title: "Chemical Trading",
      description: "We supply high-quality chemicals and reagents complying with international standards to the mining, construction, and industrial sectors.",
      icon: Package,
      features: [
        "Mining flotation reagents",
        "Road & construction polymer additives",
        "Industrial chemicals"
      ]
    },
    {
      title: "Chemical Safety, Storage & Warehouse Advisory",
      description: "Providing professional advisory services and guidelines on chemical safe usage, appropriate storage, and secure warehouse management.",
      icon: ShieldCheck,
      features: [
        "Safety operations consultation",
        "Warehouse safety audit",
        "Optimal product usage guidelines"
      ]
    },
    {
      title: "Mining Production Technology Lab Research & Analysis",
      description: "We organize laboratory research, testing, and process analysis designed to improve mineral processing efficiency and reduce operational costs.",
      icon: FlaskConical,
      features: [
        "Collaborative research with universities",
        "Processing technology test runs",
        "Efficiency optimization analysis"
      ]
    }
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
              {language === "mn" ? "Манай үйлчилгээ" : "Our Services"}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {language === "mn"
                ? "Бид харилцагчдынхаа үйлдвэрлэлийн процессыг сайжруулах, аюулгүй байдлыг хангах, үр ашгийг нэмэгдүүлэх чиглэлээр мэргэжлийн цогц үйлчилгээ үзүүлж байна."
                : "We provide comprehensive professional services aimed at improving our clients' industrial processes, ensuring safety, and maximizing efficiency."}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300 group"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-all">
                      <Icon className="w-7 h-7 text-[#00d4ff]" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[#00d4ff] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
                          <span className="text-slate-600 text-xs font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-12 shadow-xl border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === "mn" ? "Мэргэжлийн зөвлөгөө авах" : "Get Professional Consultation"}
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
              {language === "mn"
                ? "Бид таны үйлдвэрлэлийн процессын онцлогт нийцсэн шийдлийг санал болгоход бэлэн байна."
                : "We are ready to offer customized solutions matching the specific characteristics of your production processes."}
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00d4ff] text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-[#00b4d8] transition-all shadow-md shadow-[#00d4ff]/10"
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
