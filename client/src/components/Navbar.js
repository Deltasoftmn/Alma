import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CardNav from './CardNav';
import logo from '../assets/alma.png';

// CardNav styles are in CardNav.css

const getCardNavItems = (language) => {
  const navItems = {
    mn: [
      {
        label: "Үйлчилгээ",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
          { label: "Алтны уурхай", href: "/services", ariaLabel: "Алтны уурхайн үйлчилгээ" },
          { label: "Химийн бодис", href: "/products", ariaLabel: "Химийн бодисын үйлчилгээ" }
        ]
      },
      {
        label: "Бүтээгдэхүүн", 
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
          { label: "Алтны уурхайн хими", href: "/products", ariaLabel: "Алтны уурхайн химийн бүтээгдэхүүн" },
          { label: "Химийн шинжилгээ", href: "/services", ariaLabel: "Химийн шинжилгээний үйлчилгээ" }
        ]
      },
      {
        label: "Холбоо барих",
        bgColor: "#271E37", 
        textColor: "#fff",
        links: [
          { label: "Бидний тухай", href: "/about", ariaLabel: "Компанийн тухай" },
          { label: "Мэдээ", href: "/news", ariaLabel: "Компанийн мэдээ" },
          { label: "Ажлын байр", href: "/jobs", ariaLabel: "Ажлын байр" }
        ]
      }
    ],
    en: [
      {
        label: "Services",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
          { label: "Gold Mining", href: "/services", ariaLabel: "Gold mining services" },
          { label: "Chemical Products", href: "/products", ariaLabel: "Chemical products services" }
        ]
      },
      {
        label: "Products", 
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
          { label: "Mining Chemicals", href: "/products", ariaLabel: "Mining chemical products" },
          { label: "Chemical Analysis", href: "/services", ariaLabel: "Chemical analysis services" }
        ]
      },
      {
        label: "Contact",
        bgColor: "#271E37", 
        textColor: "#fff",
        links: [
          { label: "About Us", href: "/about", ariaLabel: "About our company" },
          { label: "News", href: "/news", ariaLabel: "Company news" },
          { label: "Careers", href: "/jobs", ariaLabel: "Job opportunities" }
        ]
      }
    ]
  };
  return navItems[language] || navItems.mn;
};

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const cardNavItems = getCardNavItems(language);

  return (
    <CardNav
      logo={logo}
      logoAlt="Alma Chem Trade Logo"
      items={cardNavItems}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#2596be"
      buttonTextColor="#fff"
      ease="power3.out"
      language={language}
      onLanguageChange={toggleLanguage}
    />
  );
}

export default Navbar;
