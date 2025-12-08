import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Factory, Building2, HardHat } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Page = styled.div`
  min-height: 100vh;
  background: #0c1b2a;
  color: #f8fafc;
`;

const Hero = styled.section`
  padding: 6rem 0 4rem;
  background: radial-gradient(circle at 20% 20%, rgba(66, 184, 166, 0.12), transparent 35%),
    radial-gradient(circle at 80% 10%, rgba(37, 150, 190, 0.12), transparent 35%),
    linear-gradient(135deg, #0c1b2a, #12324b 50%, #0c1b2a);
`;

const HeroInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 780px;
  margin: 0 auto;
  line-height: 1.7;
`;

const DiagramSection = styled.section`
  padding: 3rem 0 5rem;
`;

const DiagramWrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  gap: 2rem;
  justify-items: center;
`;

const Circle = styled.div`
  position: relative;
  width: min(520px, 90vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(37, 150, 190, 0.8) 0deg 120deg,
    rgba(66, 184, 166, 0.85) 120deg 240deg,
    rgba(19, 121, 162, 0.85) 240deg 360deg
  );
  display: grid;
  place-items: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
`;

const InnerCircle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #0c1b2a;
  border: 6px solid rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #e2e8f0;
  text-align: center;
  line-height: 1.3;
  padding: 1rem;
`;

const Label = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  text-align: center;
  color: #f8fafc;
  font-weight: 700;
  z-index: 3;
  pointer-events: none;
  font-size: 0.9rem;
  line-height: 1.25;
`;

const LabelIcon = styled.div`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  margin: 0 auto 0.4rem;
  background: transparent;
  color: #f8fafc;
`;

const Spoke = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  background: rgba(248, 250, 252, 0.55);
  transform-origin: center bottom;
  z-index: 2;
  pointer-events: none;
`;

const LabelTitle = styled.div`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.3;
`;

const FooterNote = styled.p`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  color: #e2e8f0;
  line-height: 1.8;
  text-align: center;
  opacity: 0.95;
`;

const segments = [
  {
    key: 'mineral',
    icon: <Factory size={22} />,
    rotate: 0,
    en: {
      title: 'Mineral Processing Plants',
      text: 'Process chemicals, flotation aids, and performance monitoring to maximize plant throughput and recovery.'
    },
    mn: {
      title: 'Эрдэс боловсруулах үйлдвэр',
      text: 'Үйлдвэрийн дамжлагын химийн бодис, флотацийн нэмэлт, гүйцэтгэл хянах шийдлээр гарц, авалтыг нэмэгдүүлэх.'
    }
  },
  {
    key: 'roads',
    icon: <Building2 size={22} />,
    rotate: 120,
    en: {
      title: 'Road Construction Projects',
      text: 'Bitumen emulsion additives, asphalt modifiers, and QA support for durable road surfaces.'
    },
    mn: {
      title: 'Зам барилгын төсөл',
      text: 'Битумын эмульсийн нэмэлт, асфальтын нэмэгдэл болон чанарын баталгаажуулалтын дэмжлэгээр удаан эдэлгээтэй замын хучилт.'
    }
  },
  {
    key: 'mining',
    icon: <HardHat size={22} />,
    rotate: 240,
    en: {
      title: 'Mining Operations',
      text: 'Reagents, process optimization, lab testing, and commissioning support for safe, efficient production.'
    },
    mn: {
      title: 'Уул уурхайн үйл ажиллагаа',
      text: 'Уусмалын бодис, процессын оновчлол, лабораторийн шинжилгээ, ашиглалтад оруулах дэмжлэгээр аюулгүй, үр ашигтай үйлдвэрлэл.'
    }
  }
];

function MarketSectors() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const [labelRadius, setLabelRadius] = useState(230);

  useEffect(() => {
    const updateRadius = () => {
      const size = Math.min(window.innerWidth * 0.9, 520);
      setLabelRadius(size * 0.48);
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const subtitle = isEnglish
    ? 'Alma Chem Trade LLC delivers engineering, supply, and consulting services across key industries:'
    : 'Alma Chem Trade LLC нь инженеринг, нийлүүлэлт, зөвлөх үйлчилгээг дараах гол салбаруудад хүргэдэг:';

  const bottomNote = isEnglish
    ? 'We support mining chemical operations end-to-end—including usage, process optimization, laboratory testing, monitoring, and commissioning—to ensure consistent, sustainable performance.'
    : 'Бид уул уурхайн химийн үйл ажиллагааг хэрэглээнээс эхлээд процессын оновчлол, лабораторийн шинжилгээ, мониторинг, ашиглалтад оруулах хүртэл бүх үе шатанд дэмжиж, тогтвортой, найдвартай гүйцэтгэлийг хангадаг.';

  return (
    <Page>
      <Hero>
        <HeroInner>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isEnglish ? 'Market Sectors' : 'Зах зээлийн салбарууд'}
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </Subtitle>
        </HeroInner>
      </Hero>

      <DiagramSection>
        <DiagramWrap>
          <Circle>
            <InnerCircle>
              {isEnglish ? 'Core Industries' : 'Үндсэн салбарууд'}
            </InnerCircle>
            {segments.map((segment, idx) => {
              const content = isEnglish ? segment.en : segment.mn;
              const angle = segment.rotate;
              return (
                <React.Fragment key={segment.key}>
                  <Spoke
                    style={{
                      height: `${labelRadius}px`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`
                    }}
                  />
                  <Label
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${labelRadius}px) rotate(${-angle}deg)`
                    }}
                  >
                    <LabelIcon>{segment.icon}</LabelIcon>
                    <LabelTitle>{content.title}</LabelTitle>
                  </Label>
                </React.Fragment>
              );
            })}
          </Circle>
          <FooterNote>{bottomNote}</FooterNote>
        </DiagramWrap>
      </DiagramSection>
    </Page>
  );
}

export default MarketSectors;
