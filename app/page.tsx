"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Target, Award, Users, Globe, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  
  // State for image slider
  const slides = ["/hero-bg.jpg", "/hero-bg.jpg", "/hero-bg.jpg"];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAnimating(true);
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAnimating(true);
  };
  
  // Swipe-in animation effect
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => sec.classList.add("swipe-in"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".swipe-in");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Reset animation flag after each slide change
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [current, isAnimating]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 swipe-in zoom-in">
          {/* Image Slider */}
          <div className="relative w-full h-full">
            {/* Slider Images */}
            <Image
              src={slides[current]}
              alt="Industrial factory with silver pipes"
              fill
              key={current}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${isAnimating ? "animate-zoom-in" : ""}`}
            />
            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 rounded-full p-2 hover:bg-black/50">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 rounded-full p-2 hover:bg-black/50">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          {/* Custom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {language === "mn" 
                ? "Бид чанар, найдвартай байдал, үр ашгийг эрхэмлэнэ."
                : "We prioritize quality, reliability, and efficiency."}
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              {language === "mn"
                ? "Алма Кем Трейд ХХК нь уул уурхай, баяжуулалт, зам, барилга, аж үйлдвэрийн салбарт зориулсан химийн бодис, урвалж болон бусад төрлийн бүтээгдэхүүнүүдийг ханган нийлүүлэгч компани юм."
                : "Alma Chem Trade LLC is a supplier of chemical substances, reagents, and other products for mining, mineral processing, roads, construction, and industrial sectors."}
            </p>

            <Link href="/about" className="inline-flex items-center gap-3 group">
              <span className="text-[#00d4ff] text-2xl font-semibold tracking-wide group-hover:text-[#00b4d8] transition-colors">
                {language === "mn" ? "Танилцуулга" : "About Us"}
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-[#00d4ff] flex items-center justify-center group-hover:bg-[#00d4ff]/10 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#00d4ff]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="relative mb-8">
                <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] -z-10" />
                <h2 className="text-4xl font-bold text-slate-800">
                  {language === "mn" ? "Бидний тухай" : "About Us"}
                </h2>
                <div className="w-12 h-1.5 bg-[#00d4ff] rounded-full mt-4" />
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  {language === "mn"
                    ? "Бид зөвхөн ханган нийлүүлэгчийн хувиар бус, үйлдвэрлэлийн процессын онцлогт нийцсэн шийдлийг санал болгодог. Мэргэжлийн баг хамт олны мэдлэг туршлагад тулгуурлан урвалж, бүтээгдэхүүний оновчтой хэрэглээний талаар зөвлөмж өгч, аюулгүй ажиллагааны мэдлэг мэдээллээр ханган ажилладаг."
                    : "We offer customized solutions matching your production process characteristics, not just raw supply. Supported by our professional team's expertise, we provide recommendations on optimal usage of reagents, safety guidelines, and operations knowledge."}
                </p>
                <p>
                  {language === "mn"
                    ? "Бид харилцагчдын үйлдвэрлэлийн үр ашиг, процессын тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ."
                    : "We focus on creating value by optimizing processing efficiency, process stability, and cost reduction for our clients."}
                </p>
              </div>
            </div>

            {/* Right Content - Our Mission Card */}
            <div className="relative">
              <div className="absolute -left-6 top-2/3 w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] z-10" />
              <div className="absolute -right-10 top-10 w-20 h-20 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] -z-10" />
              
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-[1.5rem] p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-6 right-6 w-8 h-1.5 bg-[#00d4ff] rounded-full opacity-60" />
                
                <div className="w-16 h-16 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#00d4ff] opacity-20" />
                  <div className="absolute inset-2 rounded-full border-2 border-[#00d4ff] opacity-50" />
                  <div className="absolute inset-4 rounded-full border-2 border-[#00d4ff]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff]" />
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  {language === "mn" ? "Эрхэм зорилго" : "Our Mission"}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {language === "mn"
                    ? "Бид Улсын нэр хүндтэй их сургуулиудын хамтын ажиллагааны хүрээнд үйлдвэрлэлийн процессийн судалгааг явуулж харилцагчдын үйлдвэрлэлийн үр ашиг, тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ."
                    : "Through collaboration with reputable national universities, we conduct research on industrial processes to optimize client efficiency, operational stability, and cost reductions."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-600">
              {language === "mn" ? "Манай компанийн давуу талууд" : "Key Advantages of Our Company"}
            </h2>
            <div className="flex items-center flex-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] mr-1.5" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] relative z-10" />
              <div className="h-[2px] bg-[#00d4ff] flex-1 -ml-1" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Card 1: Quality */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Award className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">
                  {language === "mn" ? "Чанар" : "Quality"}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {language === "mn"
                    ? "Бид хэрэглэгчийн шаардлага болон олон улсын стандартад нийцсэн баталгаат бүтээгдэхүүн нийлүүлдэг."
                    : "We supply guaranteed products complying with customer requirements and international standards."}
                </p>
              </div>
            </div>

            {/* Card 2: Reliability */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-[0_15px_40px_rgba(46,204,113,0.15)] border-2 border-[#00d4ff] relative pt-14 pb-10 transform lg:scale-105 z-10 h-full min-h-[360px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Users className="w-20 h-20 text-[#00d4ff] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">
                  {language === "mn" ? "Найдвартай байдал" : "Reliability"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === "mn"
                    ? "Бид харилцагч төвтэй байдлыг эрхэмлэдэг. Бид хэрэглэгчийн хэрэгцээг ойлгож, хамгийн тохиромжтой шийдлүүдийг санал болгодог."
                    : "We prioritize client-centric service. We understand customer needs and suggest the most appropriate solutions."}
                </p>
              </div>
            </div>

            {/* Card 3: Innovation */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Globe className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">
                  {language === "mn" ? "Инноваци" : "Innovation"}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {language === "mn"
                    ? "Бид үргэлж шинэлэг санаануудыг эрэлхийлж, салбартаа жинхэнэ үр дүнтэй үйл ажиллагааг нэвтрүүлдэг."
                    : "We search for innovative ideas and implement highly effective operations in our sector."}
                </p>
              </div>
            </div>

            {/* Card 4: Safe Operations */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Shield className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">
                  {language === "mn" ? "Аюулгүй ажиллагаа" : "Safe Operations"}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {language === "mn"
                    ? "Бид мэдлэг, ур чадвараа тасралтгүй хөгжүүлж, хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн ил тод стандарт бүхий ажлын байрыг хангадаг."
                    : "We continuously develop our skills and maintain workspaces with transparent occupational health and safety standards."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="pt-24 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Header */}
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-slate-600">
              {language === "mn" ? "Эрхэм зорилго ба Алсын хараа" : "Mission & Vision"}
            </h2>
            <div className="flex items-center flex-1 ml-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] mr-1.5" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] relative z-10" />
              <div className="h-[2px] bg-[#00d4ff] flex-1 -ml-1" />
            </div>
          </div>
        </div>

        {/* Content Banner */}
        <div className="relative w-full overflow-hidden py-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/Featured.png')] bg-cover bg-center" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[450px]">
            {/* Circles Container */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-0 h-full pt-4">
              {/* Vision Circle */}
              <div className="relative md:-mr-8 w-[420px] h-[420px] rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-10 text-center z-20 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-[#00d4ff] mb-6">
                  {language === "mn" ? "Алсын хараа" : "Vision"}
                </h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {language === "mn"
                    ? "Монголын уул уурхайн хөгжилд чанартай, найдвартай бүтээгдэхүүн, инновацын шийдлээр хувь нэмэр оруулан, салбарын тэргүүлэх нийлүүлэгч байна."
                    : "To contribute to the development of Mongolian mining with quality, reliable products and innovative solutions, establishing ourselves as a leading industry supplier."}
                </p>
              </div>

              {/* Partnership Circle */}
              <div className="relative w-[520px] h-[520px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-14 text-center z-30 transition-transform duration-300 hover:-translate-y-2 mt-8 md:mt-0">
                <h3 className="text-4xl font-bold text-[#00d4ff] mb-6">
                  {language === "mn" ? "Хамтын ажиллагаа, түншлэл" : "Partnership & Collaboration"}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  {language === "mn"
                    ? "Алма Кем Трейд ХХК нь Roadway Solution, Celanese, Nouryon зэрэг олон улсын нэр хүндтэй үйлдвэрлэгчидтэй хамтын ажиллагаатай бөгөөд, зам, барилга уул уурхайн салбарт ашиглагддаг нэмэлт бүтээгдэхүүн, материал, уул уурхайн реагентуудыг дотоодын зах зээлд ханган нийлүүлж байна."
                    : "Alma Chem Trade LLC cooperates with world-renowned manufacturers like Roadway Solution, Celanese, and Nouryon, supplying road additives, building materials, and mining reagents to the domestic market."}
                </p>
              </div>
            </div>

            {/* Decorative Sphere bottom right */}
            <div className="absolute right-[8%] bottom-4 w-32 h-32 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] z-40" />
          </div>
        </div>
      </section>

      {/* Impact & Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Text */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <p className="text-2xl md:text-[28px] text-slate-700 leading-normal font-medium">
              {language === "mn"
                ? "Бид Улсын нэр хүндтэй их сургуулиудын хамтын ажиллагааны хүрээнд үйлдвэрлэлийн процессийн судалгааг явуулж харилцагчдын үйлдвэрлэлийн үр ашиг, тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ."
                : "Through collaboration with reputable national universities, we conduct research on industrial processes to optimize client efficiency, operational stability, and cost reductions."}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">
                {language === "mn" ? "Уул уурхайн компани" : "Mining Companies"}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={30} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">
                {language === "mn" ? "Баяжуулах үйлдвэр" : "Ore Processing Plants"}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={20} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">
                {language === "mn" ? "Түншүүд" : "Partners"}
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="text-xl text-slate-600">
                {language === "mn" ? "Сэтгэл ханамж" : "Customer Satisfaction"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .swipe-in {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .swipe-in.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .zoom-in {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 2s ease-out, transform 2s ease-out;
        }
        .zoom-in.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}
