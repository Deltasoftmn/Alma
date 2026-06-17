"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {language === "mn" ? "Холбоо барих" : "Contact Us"}
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {language === "mn"
              ? "Бидэнтэй холбогдож асуулт асуух болон хамтран ажиллах хүсэлтээ илгээнэ үү."
              : "Please contact us for any inquiries or partnership requests."}
          </p>
          <div className="w-16 h-1 bg-[#00d4ff] mx-auto rounded-full mt-6" />
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  {language === "mn" ? "Холбоо барих мэдээлэл" : "Contact Information"}
                </h2>
                <div className="w-12 h-1 bg-[#00d4ff] rounded-full" />
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#00d4ff]/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {language === "mn" ? "Утас" : "Phone"}
                    </h4>
                    <p className="text-slate-600 text-sm mt-1">+(976) 8804-2323</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#00d4ff]/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {language === "mn" ? "Мэйл хаяг" : "Email"}
                    </h4>
                    <p className="text-slate-600 text-sm mt-1">info@almachem.mn</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#00d4ff]/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {language === "mn" ? "Төв оффис" : "Head Office"}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">
                      {language === "mn" ? (
                        <>
                          Монгол улс, Улаанбаатар хот 14220, Сүхбаатар дүүрэг, 1-р хороо,<br />
                          13-р хороолол, Элчингийн гудамж 9,<br />
                          Sky Plaza бизнес төв, D хэсэг, 1 давхар
                        </>
                      ) : (
                        <>
                          1st Floor, Section D, Sky Plaza Business Center,<br />
                          Embassy Street 9, 13th micro-district, 1st khoroo,<br />
                          Sukhbaatar district, Ulaanbaatar 14220, Mongolia
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 md:p-10 shadow-sm relative">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {language === "mn" ? "Зурвас илгээх" : "Send a Message"}
              </h3>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-16 h-16 text-[#00d4ff]" />
                  <p className="text-slate-800 font-semibold text-lg">
                    {language === "mn" ? "Зурвас илгээгдлээ!" : "Message Sent!"}
                  </p>
                  <p className="text-slate-500 text-sm max-w-sm">
                    {language === "mn"
                      ? "Таны зурвасыг хүлээн авлаа. Бид тун удахгүй хариу холбогдох болно."
                      : "We have received your message. We will get back to you shortly."}
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-sm text-[#00d4ff] hover:underline font-semibold"
                  >
                    {language === "mn" ? "Дахин илгээх" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2" htmlFor="name">
                      {language === "mn" ? "Таны нэр" : "Your Name"}
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "mn" ? "Нэрээ оруулна уу" : "Enter your name"}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00d4ff] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2" htmlFor="email">
                      {language === "mn" ? "Мэйл хаяг" : "Email Address"}
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === "mn" ? "Мэйл хаягаа оруулна уу" : "Enter your email"}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00d4ff] transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-2" htmlFor="message">
                      {language === "mn" ? "Зурвас" : "Message"}
                    </label>
                    <textarea 
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === "mn" ? "Зурвасаа бичнэ үү" : "Write your message"}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#00d4ff] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-[#00d4ff] hover:bg-[#00b4d8] text-slate-950 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#00d4ff]/10 transition-all"
                  >
                    {language === "mn" ? "Илгээх" : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
