import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Алма Кем Трейд ХХК",
  description: "Алма Кем Трейд ХХК нь уул уурхай, баяжуулалт, зам, барилга, аж үйлдвэрийн салбарт зориулсан  химийн бодис, урвалж болон бусад төрлийн бүтээгдэхүүнүүдийг ханган нийлүүлэгч компани юм.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
