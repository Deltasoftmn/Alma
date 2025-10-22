import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Target, Eye, History, Award, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import axios from 'axios';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #2596be, #42b8a6);
  color: white;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 30%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 30%);
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 20%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 20%);
    animation: float 6s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(0.5deg); }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
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

const IntroSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

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

const IntroHighlight = styled(motion.div)`
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  padding: 2.5rem;
  border-radius: 16px;
  border-left: 4px solid #2596be;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(37, 150, 190, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(30px, -30px);
  }
`;

const HighlightIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  box-shadow: 0 4px 15px rgba(37, 150, 190, 0.3);
`;

const HighlightTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #4b5563;
`;

const AdvantagesSection = styled.section`
  padding: 6rem 0;
  background: white;
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
  line-height: 1.7;
  font-size: 1rem;
`;

const HistorySection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HistoryText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
`;

const HistoryVisual = styled(motion.div)`
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23666" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
    opacity: 0.5;
  }
`;

const VisualIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(37, 150, 190, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(37, 150, 190, 0.4);
  }
`;

const VisualTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
  position: relative;
  z-index: 1;
`;

const VisualText = styled.p`
  color: #6b7280;
  position: relative;
  z-index: 1;
`;

const MissionVisionSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
`;

const MissionVisionCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.gradient || '#3b82f6, #1d4ed8'});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  font-style: italic;
`;

const ValuesSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-4px);
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const ValueTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ValueText = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('/api/about');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const content = {
    mn: {
      heroTitle: "Бидний тухай",
      heroSubtitle: "Alma Chem Trade LLC - Монголын химийн салбарын тэргүүлэгч компани",
      introTitle: "Танилцуулга",
      historyTitle: "Компанийн түүх",
      missionVisionTitle: "Эрхэм зорилго болон алсын хараа",
      advantagesTitle: "Манай компанийн давуу тал",
      valuesTitle: "Үнэт зүйлс",
      history: aboutData?.history || "Бид олон улсын үйлдвэрлэгчдтэй шууд хамтын ажиллагаа тогтоож, Монголын нөхцөлд тохирсон оновчтой нийлүүлэлтийн шийдлийг хэрэгжүүлсэн.",
      mission: aboutData?.mission || "Монгол улсад химийн импорт болон зөвлөгөөний үйлчилгээний салбарт шинэчлэгч, тэргүүлэгч мэргэжлийн компани болж, уул уурхай болон аж үйлдвэрийн салбарын тогтвортой хөгжлийг дэмжих.",
      vision: aboutData?.vision || "Монгол улсад химийн импорт болон зөвлөгөөний үйлчилгээний салбарт шинэчлэгч, тэргүүлэгч мэргэжлийн компани болж, уул уурхай болон аж үйлдвэрийн салбарын тогтвортой хөгжлийг дэмжих.",
      values: [
        { title: "Харилцагч төвтэй", text: "Үйлчлүүлэгчдийн хэрэгцээг эрхэмлэн, тэдний амжилтад хувь нэмэр оруулах" },
        { title: "Чанар", text: "Олон улсын стандартад нийцсэн өндөр чанарын бүтээгдэхүүн, үйлчилгээ" },
        { title: "Инноваци", text: "Шинэ технологи, шинэлэг шийдлийг ашиглан үйлчлүүлэгчдэд илүү сайн үйлчилгээ үзүүлэх" }
      ]
    },
    en: {
      heroTitle: "About Us",
      heroSubtitle: "Alma Chem Trade LLC - Leading Company in Mongolia's Chemical Sector",
      introTitle: "Introduction",
      historyTitle: "Company History",
      missionVisionTitle: "Mission & Vision",
      advantagesTitle: "Our Company's Advantages",
      valuesTitle: "Our Values",
      history: "We have established direct partnerships with international manufacturers and implemented optimal supply solutions suitable for Mongolian conditions.",
      mission: "To become an innovative, leading professional company in Mongolia's chemical import and consulting services sector, supporting the sustainable development of mining and industrial sectors.",
      vision: "To become an innovative, leading professional company in Mongolia's chemical import and consulting services sector, supporting the sustainable development of mining and industrial sectors.",
      values: [
        { title: "Customer-Centric", text: "Valuing customer needs and contributing to their success" },
        { title: "Quality", text: "High-quality products and services that meet international standards" },
        { title: "Innovation", text: "Using new technologies and innovative solutions to provide better services to customers" }
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

  const values = [
    {
      icon: <Users size={24} />,
      title: currentContent.values[0].title,
      text: currentContent.values[0].text
    },
    {
      icon: <Award size={24} />,
      title: currentContent.values[1].title,
      text: currentContent.values[1].text
    },
    {
      icon: <Globe size={24} />,
      title: currentContent.values[2].title,
      text: currentContent.values[2].text
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              {currentContent.heroTitle}
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              {currentContent.heroSubtitle}
            </HeroSubtitle>
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
            {currentContent.introTitle}
          </SectionTitle>
          
          <IntroGrid>
            <IntroText>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '1.5rem' }}>
                {currentContent.history}
              </p>
            </IntroText>
            
            <IntroHighlight
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <HighlightIcon>
                <Target size={40} />
              </HighlightIcon>
              <HighlightTitle>{language === 'en' ? 'Our Goal' : 'Манай зорилго'}</HighlightTitle>
                    <HighlightText>
                      {currentContent.mission}
                    </HighlightText>
            </IntroHighlight>
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
            {values.map((value, index) => (
              <AdvantageCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <AdvantageIcon>
                  {value.icon}
                </AdvantageIcon>
                <AdvantageTitle>{value.title}</AdvantageTitle>
                <AdvantageText>{value.text}</AdvantageText>
              </AdvantageCard>
            ))}
          </AdvantagesGrid>
        </SectionContent>
      </AdvantagesSection>

      <HistorySection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {currentContent.historyTitle}
          </SectionTitle>
          
          <HistoryGrid>
            <HistoryText>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
                {currentContent.history}
              </p>
            </HistoryText>
            
            <HistoryVisual
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <VisualIcon>
                <History size={40} />
              </VisualIcon>
              <VisualTitle>Амжилттай түүх</VisualTitle>
              <VisualText>
                Олон улсын туршлагатай үйлдвэрлэгчдтэй хамтран ажиллаж, 
                Монголын зах зээлд найдвартай байр сууриа тогтоосон.
              </VisualText>
            </HistoryVisual>
          </HistoryGrid>
        </SectionContent>
      </HistorySection>

      <MissionVisionSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {currentContent.missionVisionTitle}
          </SectionTitle>
          
          <MissionVisionGrid>
            <MissionVisionCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CardIcon gradient="#3b82f6, #1d4ed8">
                <Target size={40} />
              </CardIcon>
              <CardTitle>{language === 'en' ? 'Mission' : 'Эрхэм зорилго'}</CardTitle>
              <CardText>
                "{currentContent.mission}"
              </CardText>
            </MissionVisionCard>
            
            <MissionVisionCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CardIcon gradient="#10b981, #059669">
                <Eye size={40} />
              </CardIcon>
              <CardTitle>{language === 'en' ? 'Vision' : 'Алсын хараа'}</CardTitle>
              <CardText>
                {currentContent.vision}
              </CardText>
            </MissionVisionCard>
          </MissionVisionGrid>
        </SectionContent>
      </MissionVisionSection>

      <ValuesSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Бидний үнэт зүйлс
          </SectionTitle>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <ValueIcon>
                  {value.icon}
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueText>{value.text}</ValueText>
              </ValueCard>
            ))}
          </ValuesGrid>
        </SectionContent>
      </ValuesSection>
    </AboutContainer>
  );
}

export default About;
