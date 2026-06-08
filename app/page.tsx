"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowRight, Target, Award, Users, Globe, Shield, ChevronLeft, ChevronRight } from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";


export default function Home() {
  // State for image slider
  const slides = ["/hero-bg2.png", "/hero-bg2.png", "/hero-bg2.png"];
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
    // Add swipe-in class to all sections
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
  {/* Custom gradient overlay similar to mockup */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent pointer-events-none" />
</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Монголын уул уурхай, үйлдвэрлэлийн найдвартай ханган нийлүүлэгч
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
             Алма Кем Трейд ХХК нь уул уурхай, баяжуулалт, зам, барилга, аж үйлдвэрийн салбарт зориулсан  химийн бодис, урвалж болон бусад төрлийн бүтээгдэхүүнүүдийг ханган нийлүүлэгч компани юм.
            </p>

            <Link href="/about" className="inline-flex items-center gap-3 group">
              <span className="text-[#00d4ff] text-2xl font-semibold tracking-wide group-hover:text-[#00b4d8] transition-colors">
                Танилцуулга
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
                {/* Decorative overlapping 3D circle */}
                <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] -z-10" />
                <h2 className="text-4xl font-bold text-slate-800">Бидний тухай</h2>
                <div className="w-12 h-1.5 bg-[#00d4ff] rounded-full mt-4" />
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                Бид  зөвхөн ханган нийлүүлэгчийн хувиар бус, үйлдвэрлэлийн процессын онцлогт нийцсэн  шийдлийг санал болгодог.
Мэргэжлийн баг хамт олны мэдлэг туршлагад тулгуурлан урвалж, бүтээгдэхүүний оновчтой хэрэглээний талаар зөвлөмж өгч, аюулгүй ажиллагааны мэдлэг мэдээллээр ханган ажилладаг.
Бид харилцагчдын үйлдвэрлэлийн үр ашиг, процессын тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ.

                </p>
              
              </div>
            </div>

            {/* Right Content - Our Mission Card */}
            <div className="relative">
              {/* Decorative spheres mimicking the image */}
              <div className="absolute -left-6 top-2/3 w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] z-10" />
              <div className="absolute -right-10 top-10 w-20 h-20 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] -z-10" />
              
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-[1.5rem] p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Decorative green top right accent */}
                <div className="absolute top-6 right-6 w-8 h-1.5 bg-[#00d4ff] rounded-full opacity-60" />
                
                {/* Concentric Circle Icon */}
                <div className="w-16 h-16 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#00d4ff] opacity-20" />
                  <div className="absolute inset-2 rounded-full border-2 border-[#00d4ff] opacity-50" />
                  <div className="absolute inset-4 rounded-full border-2 border-[#00d4ff]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff]" />
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-6">Эрхэм зорилго</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                 Бид Улсын нэр хүндтэй их сургуулиудын хамтын ажиллагааны хүрээнд үйлдвэрлэлийн процессийн судалгааг явуулж харилцагчдын үйлдвэрлэлийн үр ашиг, тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ.
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
            <h2 className="text-4xl font-bold text-slate-600">Манай компанийн давуу талууд</h2>
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
                <h3 className="text-xl font-bold text-slate-500 mb-4">Чанар</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Бид хэрэглэгчийн шаардлага болон олон улсын стандартад нийцсэн баталгаат бүтээгдэхүүн нийлүүлдэг.
                </p>
              </div>
            </div>

            {/* Card 2: Reliability (Active) */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-[0_15px_40px_rgba(46,204,113,0.15)] border-2 border-[#00d4ff] relative pt-14 pb-10 transform lg:scale-105 z-10 h-full min-h-[360px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Users className="w-20 h-20 text-[#00d4ff] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Найдвартай байдал</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Бид харилцагч төвтэй байдлыг эрхэмлэдэг. Бид хэрэглэгчийн хэрэгцээг ойлгож, хамгийн тохиромжтой шийдлүүдийг санал болгодог.
                </p>
              </div>
            </div>

            {/* Card 3: Innovation */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Globe className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Инноваци</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Бид үргэлж шинэлэг санаануудыг эрэлхийлж, салбартаа жинхэнэ үр дүнтэй үйл ажиллагааг нэвтрүүлдэг.
                </p>
              </div>
            </div>

            {/* Card 4: Safe Operations */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#00d4ff] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Shield className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Аюулгүй ажиллагаа</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Бид мэдлэг, ур чадвараа тасралтгүй хөгжүүлж, хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн ил тод стандарт бүхий ажлын байрыг хангадаг.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-20 swipe-in">
          <img src="/values.png" alt="" className="w-full h-[600px] object-cover  rounded-2xl" />
          <div className=" absolute top-60 left-20  ">
            <h1 className="text-black text-4xl font-bold swipe-in-text">АЛМА КЕM ТРЕЙД ХХК</h1>
          <p className="absolute mt-5 text-black text-sm leading-relaxed swipe-in-text">Бид дэлхийн нэр хүндтэй үйлдвэрлэгчдийн олон улсын стандартад нийцсэн бүтээгдэхүүнийг нийлүүлж, салбарын мэргэжлийн туршлага, тасралтгүй үйл ажиллагааг хослуулан харилцагчдын урт хугацааны түншлэлийг эрхэмлэн ажилладаг.</p>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="bg-white pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold text-slate-600">Компанийн түүх</h2>
        </div>
        
        {/* Full width slider area */}
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Background Image placeholder */}
          <div className="absolute inset-0 z-0">
            {/* Make sure to add history_background.png to your public folder! */}
            <div className="absolute inset-0 bg-[url('/history_background.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-cyan-900/80 to-teal-900/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-green-900/30 mix-blend-overlay" />
          </div>

          {/* Left Arrow */}
          <button className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-[#00cbb4] hover:text-white transition-colors">
            <ChevronLeft className="w-12 h-12 stroke-[2]" />
          </button>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
              Олон улсын стандартад нийцсэн<br />дотоодын туршлага
            </h3>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Бид Монголын нөхцөл байдлыг ойлгож, бодит амьдрал дээр<br />хэрэгжих шийдлүүдийг хүргэдэг.
            </p>
            
            {/* Bottom Arrow button */}
            <button className="mt-12 w-12 h-12 rounded-full border-2 border-[#00d4ff] flex items-center justify-center group hover:bg-[#00d4ff]/20 transition-colors">
              <ChevronRight className="w-6 h-6 text-[#00d4ff]" />
            </button>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="pt-24 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Header */}
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-slate-600">Эрхэм зорилго ба Алсын хараа</h2>
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
              {/* Mission Circle */}
              <div className="relative md:-mr-8 w-[420px] h-[420px] rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-10 text-center z-20 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-[#00d4ff] mb-6">Алсын хараа</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                 Монголын уул уурхайн хөгжилд чанартай, найдвартай бүтээгдэхүүн, инновацын шийдлээр хувь нэмэр оруулан, салбарын тэргүүлэх нийлүүлэгч байна.
                 </p>
                   </div>

              {/* Vision Circle (Larger) */}
              <div className="relative w-[520px] h-[520px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-14 text-center z-30 transition-transform duration-300 hover:-translate-y-2 mt-8 md:mt-0">
                <h3 className="text-4xl font-bold text-[#00d4ff] mb-6">Хамтын ажиллагаа, түншлэл</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  Алма Кем Трейд ХХК нь Roadway Solution, Celanese, Nouryon зэрэг олон улсын нэр хүндтэй үйлдвэрлэгчидтэй хамтын ажиллагаатай бөгөөд, зам, барилга уул уурхайн салбарт ашиглагддаг  нэмэлт бүтээгдэхүүн, материал, уул уурхайн реагентуудыг дотоодын зах зээлд ханган нийлүүлж байна.
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
              Бид Улсын нэр хүндтэй их сургуулиудын хамтын ажиллагааны хүрээнд үйлдвэрлэлийн процессийн судалгааг явуулж харилцагчдын үйлдвэрлэлийн үр ашиг, тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Уул уурхайн компани</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={30} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Баяжуулах үйлдвэр</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={20} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Түншүүд</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#00d4ff] mb-4 tracking-tighter">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="text-xl text-slate-600">Сэтгэл ханамж</span>
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
