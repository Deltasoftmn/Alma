import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from '../components/Particles';
import axios from 'axios';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(180deg, #050816 0%, #0b1023 60%, #0b1023 100%);
  color: white;
  padding: 0;
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  /* Stars layer */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(2px 2px at 12% 22%, rgba(255,255,255,0.9), transparent 51%),
      radial-gradient(1.5px 1.5px at 28% 68%, rgba(255,255,255,0.7), transparent 51%),
      radial-gradient(1.5px 1.5px at 45% 18%, rgba(255,255,255,0.6), transparent 51%),
      radial-gradient(2px 2px at 62% 42%, rgba(255,255,255,0.85), transparent 51%),
      radial-gradient(1px 1px at 73% 77%, rgba(255,255,255,0.7), transparent 51%),
      radial-gradient(1px 1px at 88% 35%, rgba(255,255,255,0.6), transparent 51%),
      radial-gradient(2px 2px at 15% 85%, rgba(255,255,255,0.75), transparent 51%),
      radial-gradient(1.5px 1.5px at 90% 15%, rgba(255,255,255,0.6), transparent 51%);
    animation: twinkle 6s ease-in-out infinite;
    opacity: 0.9;
  }

  /* Nebula/glow layer */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(600px 300px at 20% 10%, rgba(66, 184, 166, 0.15), transparent 70%),
      radial-gradient(800px 400px at 80% 60%, rgba(37, 150, 190, 0.12), transparent 70%),
      radial-gradient(500px 250px at 50% 90%, rgba(99, 102, 241, 0.08), transparent 70%);
    mix-blend-mode: screen;
    pointer-events: none;
    animation: float 10s ease-in-out infinite alternate;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.8; filter: brightness(0.9); }
    50% { opacity: 1; filter: brightness(1.2); }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 2rem 6rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  justify-content: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #2596be 0%, #42b8a6 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(37, 150, 190, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  background: linear-gradient(135deg, #42b8a6 0%, #2596be 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(66, 184, 166, 0.4);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  color: #2596be;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 150, 190, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(37, 150, 190, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.2);
    background: #ffffff;
    color: #42b8a6;
    animation: pulse 2s infinite;

    &::before {
      left: 100%;
    }

    &::after {
      width: 200px;
      height: 200px;
    }
  }

  @keyframes pulse {
    0% { box-shadow: 0 8px 25px rgba(37, 150, 190, 0.2); }
    50% { box-shadow: 0 12px 30px rgba(66, 184, 166, 0.3); }
    100% { box-shadow: 0 8px 25px rgba(37, 150, 190, 0.2); }
  }
`;

const IntroSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const IntroText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
`;

const IntroParagraph = styled.p`
  margin-bottom: 1.5rem;
`;

const MissionStatement = styled(motion.div)`
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #2596be;
  font-style: italic;
  font-size: 1.1rem;
  color: #374151;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 150, 190, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 150, 190, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const AdvantagesSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AdvantageCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(37, 150, 190, 0.08);
  border: 1px solid rgba(37, 150, 190, 0.1);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #2596be, #42b8a6);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(37, 150, 190, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 30px rgba(37, 150, 190, 0.15);
    border-color: #2596be;
    animation: cardFloat 3s ease-in-out infinite;
    
    &::before {
      transform: scaleX(1);
    }

    &::after {
      width: 200px;
      height: 200px;
    }
  }

  @keyframes cardFloat {
    0%, 100% { transform: translateY(-4px) scale(1.02); }
    50% { transform: translateY(-6px) scale(1.02); }
  }
`;

const AdvantageIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 150, 190, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 6px 20px rgba(37, 150, 190, 0.3);
    animation: iconPulse 2s ease-in-out infinite;

    &::before {
      width: 100px;
      height: 100px;
    }
  }

  @keyframes iconPulse {
    0%, 100% { transform: scale(1.05) rotate(5deg); }
    50% { transform: scale(1.1) rotate(5deg); }
  }
`;

const AdvantageTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const AdvantageText = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;


function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await axios.get('/api/home');
        setHomeData(response.data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const content = {
    mn: {
      title: homeData?.title || "Alma Chem Trade LLC",
      subtitle: homeData?.subtitle || "Химийн бодисын импорт, зөвлөгөөний үйлчилгээ",
      cta: "Дэлгэрэнгүй мэдээлэл",
      missionTitle: "Манай зорилго",
      missionText: homeData?.introduction?.paragraph2 || "Манай зорилго нь чанарын бүтээгдэхүүн болон хамтын ажиллагааны уян хатан нөхцөлийг хангаж, үйлчлүүлэгчдийн үйл ажиллагааг тасралтгүй дэмжих явдал юм.",
      introParagraph: homeData?.introduction?.paragraph1 || "Alma Chem Trade LLC бол уул уурхай, боловсруулах болон аж үйлдвэрийн салбарт шаардлагатай химийн бодисуудыг олон улсын найдвартай үйлдвэрлэгчдээс шууд импортолж, Монголын зах зээлд найдвартай нийлүүлдэг худалдааны компани юм.",
      advantagesTitle: "Манай давуу тал",
      advantages: homeData?.advantages || [
        "Олон улсын найдвартай үйлдвэрлэгчдтэй шууд хамтын ажиллагаа",
        "Агуулах, савлагаа, тээвэрлэлтийн стандарт шийдэл",
        "Уул уурхайн компаниудын тусгай хэрэгцээнд тохирсон бүтээгдэхүүн болон үйлчилгээ"
      ],
      advantageTitles: [
        "Шууд хамтын ажиллагаа",
        "Стандарт шийдэл", 
        "Тусгай хэрэгцээ"
      ]
    },
    en: {
      title: "Alma Chem Trade LLC",
      subtitle: "Chemical Import & Consulting Services",
      cta: "Learn More",
      missionTitle: "Our Mission",
      missionText: "Our goal is to provide quality products and flexible terms of cooperation, and to continuously support our customers' activities.",
      introParagraph: "Alma Chem Trade LLC is a trading company that directly imports chemical substances required in the mining, processing, and industrial sectors from reliable international manufacturers and reliably supplies them to the Mongolian market.",
      advantagesTitle: "Our Advantages",
      advantages: [
        "Direct partnership with reliable international manufacturers",
        "Standard solutions for warehousing, storage, and transportation",
        "Products and services tailored to the specific needs of mining companies"
      ],
      advantageTitles: [
        "Direct Partnership",
        "Standard Solutions",
        "Specialized Needs"
      ]
    }
  };

  const currentContent = content[language] || content.mn;

  if (loading) {
    return <div>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Particles
            particleColors={['#ffffff', '#e5e7eb', '#d1d5db', '#9ca3af']}
            particleCount={500}
            particleSpread={20}
            speed={0.2}
            particleBaseSize={300}
            moveParticlesOnHover={true}
            particleHoverFactor={3}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              {currentContent.title}
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              {currentContent.subtitle}
            </HeroSubtitle>
            <motion.div variants={itemVariants}>
              <CTAButton to="/about">
                {currentContent.cta}
                <ArrowRight size={20} />
              </CTAButton>
            </motion.div>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <IntroSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Introduction' : 'Танилцуулга'}
          </SectionTitle>
          
          <IntroGrid>
            <IntroText>
              <IntroParagraph>
                {currentContent.introParagraph}
              </IntroParagraph>
            </IntroText>
            
            <MissionStatement
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              "{currentContent.missionText}"
            </MissionStatement>
          </IntroGrid>
        </SectionContent>
      </IntroSection>

      <AdvantagesSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {currentContent.advantagesTitle}
          </SectionTitle>
          
          <AdvantagesGrid>
            {currentContent.advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <AdvantageIcon>
                  {index === 0 && <TrendingUp size={24} />}
                  {index === 1 && <Shield size={24} />}
                  {index === 2 && <Users size={24} />}
                </AdvantageIcon>
                <AdvantageTitle>
                  {currentContent.advantageTitles[index]}
                </AdvantageTitle>
                <AdvantageText>{advantage}</AdvantageText>
              </AdvantageCard>
            ))}
          </AdvantagesGrid>
        </SectionContent>
      </AdvantagesSection>

    </HomeContainer>
  );
}

export default Home;
