import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers, Users, Leaf, HeartHandshake, Globe } from 'lucide-react';
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
    radial-gradient(circle at 20% 30%, rgba(15, 118, 110, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(37, 150, 190, 0.15) 0%, transparent 50%),
    linear-gradient(180deg, #0c1b2a 0%, #0f2937 40%, #1a2e3a 100%);
  opacity: 0.9;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = styled.section`
  padding: 5rem 0 3rem;
`;

const HeroInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  color: #f8fafc;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #e2e8f0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  opacity: 0.95;
`;

const ContentSection = styled.section`
  padding: 3rem 0 5rem;
`;

const ContentGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(16, 185, 129, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #10b981;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #e2e8f0;
  margin: 0;
  opacity: 0.95;
`;

const content = {
  en: {
    title: 'Why Work With Us',
    subtitle: 'A Trusted Partner for Safe, Efficient, and Sustainable Operations',
    features: [
      {
        title: 'Proven Expertise',
        text: 'Our team comprises specialists with real-world experience in mining, beneficiation, laboratory analysis, and process optimization. We understand operational challenges and deliver practical, effective solutions.',
        icon: <Award size={24} />
      },
      {
        title: 'International-Standard Products',
        text: 'As an official dealer of leading global chemical manufacturers, we supply reliable, internationally certified chemicals and materials that ensure consistent performance and safety.',
        icon: <ShieldCheck size={24} />
      },
      {
        title: 'End-to-End Solutions',
        text: 'From chemical supply and laboratory testing to commissioning, process monitoring, and safety compliance—we support every stage of your operation to reduce downtime and increase efficiency.',
        icon: <Layers size={24} />
      },
      {
        title: 'Strong Safety Culture',
        text: 'We adhere to international safety standards, offer professional chemical-handling training, and ensure all employees are insured and regularly trained. Our zero-harm commitment protects people, assets, and the environment.',
        icon: <Users size={24} />
      },
      {
        title: 'Commitment to Sustainability',
        text: 'We actively support environmental conservation, community initiatives, and industry-wide safety improvements—demonstrating our dedication to responsible and sustainable operations.',
        icon: <Leaf size={24} />
      },
      {
        title: 'Reliable Partnership',
        text: 'We value transparency, accountability, and long-term cooperation. With rapid response, technical assistance, and on-site guidance, we provide dependable support to every client.',
        icon: <HeartHandshake size={24} />
      },
      {
        title: 'Local Insight, Global Quality',
        text: 'We combine strong local understanding with the quality and reliability of international product standards—helping customers operate safely and efficiently in Mongolia\'s unique climate and mining conditions.',
        icon: <Globe size={24} />
      }
    ]
  },
  mn: {
    title: 'Яагаад бидэнтэй ажиллах вэ',
    subtitle: 'Аюулгүй, үр ашигтай, тогтвортой үйл ажиллагааны найдвартай түнш',
    features: [
      {
        title: 'Батлагдсан мэргэжил',
        text: 'Манай баг нь уул уурхай, баяжуулалт, лабораторийн шинжилгээ, процессын оновчлолын бодит туршлагатай мэргэжилтнүүдээс бүрддэг. Бид үйл ажиллагааны бэрхшээлийг ойлгож, практик, үр дүнтэй шийдлүүдийг хүргэдэг.',
        icon: <Award size={24} />
      },
      {
        title: 'Олон улсын стандартын бүтээгдэхүүн',
        text: 'Дэлхийн тэргүүлэгч химийн үйлдвэрлэгчдийн албан ёсны дилерийн хувьд бид тогтвортой гүйцэтгэл, аюулгүй байдлыг хангах найдвартай, олон улсын баталгаажсан химийн бодис, материал нийлүүлдэг.',
        icon: <ShieldCheck size={24} />
      },
      {
        title: 'Иж бүрэн шийдэл',
        text: 'Химийн хангамжаас эхлээд лабораторийн туршилт, ашиглалтад оруулах, процессын мониторинг, аюулгүй байдлын нийцэл хүртэл—бид танай үйл ажиллагааны бүх үе шатыг дэмжиж, зоголтыг бууруулж, үр ашгийг нэмэгдүүлдэг.',
        icon: <Layers size={24} />
      },
      {
        title: 'Хүчтэй аюулгүй байдлын соёл',
        text: 'Бид олон улсын аюулгүй байдлын стандартыг мөрдөж, мэргэжлийн химийн бодис боловсруулах сургалт үзүүлж, бүх ажилтнууд даатгагдсан, тогтмол сургалтад хамрагдаж байгаа эсэхийг хангадаг. Манай тэг хохиролын амлалт нь хүмүүс, хөрөнгө, байгаль орчныг хамгаалдаг.',
        icon: <Users size={24} />
      },
      {
        title: 'Тогтвортой байдлын амлалт',
        text: 'Бид байгаль орчны хамгаалалт, нийгмийн санаачилга, салбарын аюулгүй байдлын сайжруулалтыг идэвхтэй дэмжиж, хариуцлагатай, тогтвортой үйл ажиллагаанд зориулсан хүсэл эрмэлзлээ илэрхийлдэг.',
        icon: <Leaf size={24} />
      },
      {
        title: 'Найдвартай түншлэл',
        text: 'Бид ил тод байдал, хариуцлага, урт хугацааны хамтын ажиллагааг эрхэмлэдэг. Хурдан хариу үйлдэл, техникийн туслалцаа, талбайн удирдлагаар бид харилцагч бүрт найдвартай дэмжлэг үзүүлдэг.',
        icon: <HeartHandshake size={24} />
      },
      {
        title: 'Орон нутгийн ойлголт, дэлхийн чанар',
        text: 'Бид орон нутгийн гүнзгий ойлголтыг олон улсын бүтээгдэхүүний стандартын чанар, найдвартай байдалтай хослуулж, харилцагчдад Монголын өвөрмөц уур амьсгал, уул уурхайн нөхцөлд аюулгүй, үр ашигтай ажиллахад тусалдаг.',
        icon: <Globe size={24} />
      }
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function WhyWorkWithUs() {
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
            <Subtitle
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {currentContent.subtitle}
            </Subtitle>
          </HeroInner>
        </Hero>

        <ContentSection>
          <ContentGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentContent.features.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureCard>
            ))}
          </ContentGrid>
        </ContentSection>
      </ContentWrapper>
    </Page>
  );
}

export default WhyWorkWithUs;
