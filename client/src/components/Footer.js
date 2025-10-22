import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/alma.png';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
  padding: 4rem 0 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(37, 150, 190, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(66, 184, 166, 0.05) 0%, transparent 50%);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const FooterText = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  border-radius: 4px;

  &:hover {
    color: #2596be;
    transform: translateX(4px);
    background: rgba(37, 150, 190, 0.1);
    padding-left: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94a3b8;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: linear-gradient(135deg, #2596be, #42b8a6);
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
`;

const BackToTop = styled(motion.button)`
  background: linear-gradient(135deg, #2596be, #42b8a6);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(37, 150, 190, 0.2);

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 12px 30px rgba(37, 150, 190, 0.4);
    background: linear-gradient(135deg, #42b8a6, #2596be);
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 8px rgba(37, 150, 190, 0.3));
  }
`;

const LogoImage = styled.img`
  height: 48px;
  width: auto;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(37, 150, 190, 0.2));
  
  &:hover {
    transform: scale(1.1) rotate(2deg);
    filter: drop-shadow(0 4px 12px rgba(37, 150, 190, 0.4));
  }
`;

function Footer() {
  const { language } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNavItems = (language) => {
    const navItems = {
      mn: [
        { path: '/', label: 'Нүүр хуудас' },
        { path: '/about', label: 'Бидний тухай' },
        { path: '/services', label: 'Үйлчилгээ' },
        { path: '/products', label: 'Бүтээгдэхүүн' },
        { path: '/clients', label: 'Харилцагчид' },
        { path: '/news', label: 'Мэдээ' },
        { path: '/jobs', label: 'Ажлын байр' },
        { path: '/contact', label: 'Холбоо барих' }
      ],
      en: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/products', label: 'Products' },
        { path: '/clients', label: 'Clients' },
        { path: '/news', label: 'News' },
        { path: '/jobs', label: 'Careers' },
        { path: '/contact', label: 'Contact' }
      ]
    };
    return navItems[language] || navItems.mn;
  };

  const content = {
    mn: {
      description: "Монголын химийн салбарын тэргүүлэгч компани. Чанарын баталгаатай химийн бүтээгдэхүүн, мэргэжлийн зөвлөгөө болон технологийн шийдэл үзүүлдэг.",
      linksTitle: "Холбоос",
      contactTitle: "Холбоо барих",
      address: "Монгол Улс, Улаанбаатар 14220, Сүхбаатар дүүрэг, 1-р хороо, Элчин сайдын гудамж, Скай Плаза бизнес төв, 9 тоот",
      phone: "+976 88042323",
      email: "Info@khimiconsulting.mn",
      copyright: "© 2024 Alma Chem Trade LLC. Бүх эрх хуулиар хамгаалагдсан.",
      backToTop: "Дээшээ буцах"
    },
    en: {
      description: "Leading company in Mongolia's chemical sector. We provide quality chemical products, professional consulting, and technological solutions.",
      linksTitle: "Links",
      contactTitle: "Contact Us",
      address: "Mongolia, Ulaanbaatar 14220, Sukhbaatar District, 1st Khoroo, Ambassador Street, Sky Plaza Business Center, No. 9",
      phone: "+976 88042323",
      email: "Info@khimiconsulting.mn",
      copyright: "© 2024 Alma Chem Trade LLC. All rights reserved.",
      backToTop: "Back to Top"
    }
  };

  const currentContent = content[language] || content.mn;
  const navItems = getNavItems(language);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <Logo>
              <LogoImage src={logo} alt="Alma Chem Trade Logo" />
            </Logo>
            <FooterText>
              {currentContent.description}
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>{currentContent.linksTitle}</FooterTitle>
            <FooterLinks>
              {navItems.slice(0, 4).map((item) => (
                <FooterLink key={item.path} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>{language === 'en' ? 'Services' : 'Үйлчилгээ'}</FooterTitle>
            <FooterLinks>
              {navItems.slice(4).map((item) => (
                <FooterLink key={item.path} to={item.path}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>{currentContent.contactTitle}</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <MapPin size={16} />
                <span>{language === 'en' ? 'Ulaanbaatar, Sky Plaza' : 'Улаанбаатар, Скай Плаза'}</span>
              </ContactItem>
              <ContactItem>
                <Phone size={16} />
                <span>+976 88042323</span>
              </ContactItem>
              <ContactItem>
                <Mail size={16} />
                <span>Info@khimiconsulting.mn</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            {currentContent.copyright}
          </Copyright>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={currentContent.backToTop}
          >
            <ArrowUp size={20} />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
