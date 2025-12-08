import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Leaf, Shield, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Page = styled.div`
  min-height: 100vh;
  background: #0c1b2a;
  color: #e2e8f0;
  position: relative;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(19, 78, 74, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(15, 118, 110, 0.25) 0%, transparent 50%),
    linear-gradient(135deg, #0c1b2a 0%, #0f2937 50%, #0c1b2a 100%);
  opacity: 0.9;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = styled.section`
  padding: 6rem 0 4rem;
  text-align: left;
`;

const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const AccentBar = styled.div`
  width: 6px;
  height: 60px;
  background: #10b981;
  border-radius: 3px;
  flex-shrink: 0;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #10b981;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TextSection = styled.section`
  padding: 2rem 0 5rem;
`;

const TextContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.9;
  color: #f8fafc;
  margin-bottom: 1.75rem;
  opacity: 0.95;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 0 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #10b981;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #10b981;
  margin: 0;
`;

const content = {
  en: {
    title: 'Sustainability',
    paragraphs: [
      'We prioritize safe chemical use, optimized production processes, and environmentally responsible practices that reduce risk and support long-term sustainability.',
      'Our approach encourages local engagement, resource conservation, and healthier workplace environments.',
      'To strengthen industry capacity, we also offer technical training on production technologies, chemical application, and laboratory monitoring.'
    ],
    features: [
      { icon: <Shield size={24} />, title: 'Safe Practices' },
      { icon: <Leaf size={24} />, title: 'Environmental Care' },
      { icon: <Users size={24} />, title: 'Local Engagement' },
      { icon: <BookOpen size={24} />, title: 'Technical Training' }
    ]
  },
  mn: {
    title: 'Тогтвортой хөгжил',
    paragraphs: [
      'Бид аюулгүй химийн хэрэглээ, оновчтой үйлдвэрлэлийн процесс, байгаль орчинд хариуцлагатай дадлыг нэн тэргүүнд тавьж, эрсдэлийг бууруулж, урт хугацааны тогтвортой байдлыг дэмжинэ.',
      'Манай арга нь орон нутгийн оролцоо, нөөцийн хэмнэлт, эрүүл ажлын орчныг дэмждэг.',
      'Салбарын чадавхыг бэхжүүлэхийн тулд бид үйлдвэрлэлийн технологи, химийн хэрэглээ, лабораторийн хяналтын талаарх техникийн сургалт мөн санал болгодог.'
    ],
    features: [
      { icon: <Shield size={24} />, title: 'Аюулгүй дадлууд' },
      { icon: <Leaf size={24} />, title: 'Байгаль орчны хамгаалалт' },
      { icon: <Users size={24} />, title: 'Орон нутгийн оролцоо' },
      { icon: <BookOpen size={24} />, title: 'Техникийн сургалт' }
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Sustainability() {
  const { language } = useLanguage();
  const currentContent = content[language] || content.en;

  return (
    <Page>
      <BackgroundOverlay />
      <ContentWrapper>
        <Hero>
          <HeroInner>
            <TitleWrapper>
              <AccentBar />
              <Title
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              >
                {currentContent.title}
              </Title>
            </TitleWrapper>
          </HeroInner>
        </Hero>

        <TextSection>
          <TextContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentContent.paragraphs.map((paragraph, idx) => (
              <Paragraph
                key={idx}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {paragraph}
              </Paragraph>
            ))}
          </TextContent>

          <FeaturesGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentContent.features.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(16, 185, 129, 0.2)' }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </TextSection>
      </ContentWrapper>
    </Page>
  );
}

export default Sustainability;
