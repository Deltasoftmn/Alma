import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-72 pb-12 text-white">
      {/* Background Graphic Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg_footer.png')] bg-cover bg-left opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -top-10">


        {/* Top Centered Text */}
        <div className="text-right max-w-3xl mx-auto mb-20">
          <p className="text-xl md:text-[30px] font-medium leading-relaxed">
            Монголын уул уурхайн хөгжилд чанартай, найдвартай бүтээгдэхүүн, инновацын шийдлээр хувь нэмэр оруулан, салбарын тэргүүлэх нийлүүлэгч байна.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Contact Us */}
          <div className="lg:col-span-4">
            <h3 className="text-[30px] mb-6">Холбоо барих</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-100 text-sm">+(976) 8804-2323</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-100 text-sm">info@almachem.mn</span>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0d4a2e] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0d4a2e] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0d4a2e] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Principal Office */}
          <div className="lg:col-span-5">
            <h3 className="text-[30px] mb-6">Төв оффис</h3>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-slate-100 text-sm leading-relaxed">
                Монгол улс, Улаанбаатар хот 14220, Сүхбаатар дүүрэг, 1-р хороо,<br />
                13-р хороолол, Элчингийн гудамж 9,<br />
                Sky Plaza бизнес төв, D хэсэг, 1 давхар
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-3 flex lg:items-end lg:justify-end h-full">
            <p className="text-xs text-slate-200 lg:mb-2">
              © 2026 Алма Кем Трейд ХХК. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
