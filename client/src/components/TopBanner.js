import React from 'react';
import styled from 'styled-components';
import { Phone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TopBannerContainer = styled.div`
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 1001;

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
    animation: float 10s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-2px); }
  }
`;

const BannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e1;
  transition: color 0.3s ease;

  &:hover {
    color: #2596be;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LanguageOption = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: rgba(37, 150, 190, 0.1);
    border-color: #2596be;
    color: #2596be;
  }

  &.active {
    background: linear-gradient(135deg, #2596be, #42b8a6);
    border-color: #2596be;
    color: white;
  }
`;

const WelcomeText = styled.div`
  color: #94a3b8;
  font-size: 0.85rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

function TopBanner() {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    mn: {
      welcome: 'Алма Кем Трейд ХХК-д тавтай морилно уу',
      mongolian: 'Монгол',
      english: 'English'
    },
    en: {
      welcome: 'Welcome to Alma Chem Trade LLC',
      mongolian: 'Монгол',
      english: 'English'
    }
  };

  return (
    <TopBannerContainer>
      <BannerContent>
        <ContactInfo>
          <PhoneNumber>
            <Phone size={16} />
            +976 88042323
          </PhoneNumber>
          <WelcomeText>{content[language].welcome}</WelcomeText>
        </ContactInfo>
        
        <LanguageSelector>
          <LanguageOption 
            className={language === 'mn' ? 'active' : ''}
            onClick={() => language !== 'mn' && toggleLanguage()}
          >
            <Globe size={14} />
            {content[language].mongolian}
          </LanguageOption>
          <LanguageOption 
            className={language === 'en' ? 'active' : ''}
            onClick={() => language !== 'en' && toggleLanguage()}
          >
            <Globe size={14} />
            {content[language].english}
          </LanguageOption>
        </LanguageSelector>
      </BannerContent>
    </TopBannerContainer>
  );
}

export default TopBanner;
