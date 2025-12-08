import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Lightbulb, Shield, Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #1f7fa5, #42b8a6);
  color: #fff;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 35%),
      radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.06) 0%, transparent 30%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  opacity: 0.92;
  max-width: 780px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
`;

const IconWrap = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  display: grid;
  place-items: center;
  color: #fff;
  box-shadow: 0 6px 18px rgba(37, 150, 190, 0.25);
`;

const ValueTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
  color: #0f172a;
`;

const ValueText = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
`;

const valuesEn = [
  {
    title: 'Quality',
    text: 'We supply products that meet international standards and consistently satisfy customer requirements.',
    icon: <Award size={26} />
  },
  {
    title: 'Reliability',
    text: 'We understand operational needs and provide practical, effective, and timely solutions.',
    icon: <ShieldCheck size={26} />
  },
  {
    title: 'Innovation',
    text: 'We bring progressive technologies and new ideas that create long-term impact.',
    icon: <Lightbulb size={26} />
  },
  {
    title: 'Safety',
    text: 'We prioritize safe operations through continuous training, compliance, and strict warehouse and transport safety standards. Our team receives regular HSE training from local and international organizations, and all employees are fully insured.',
    icon: <Shield size={26} />
  },
  {
    title: 'Sustainability',
    text: 'We promote environmentally responsible practices across all stages of our work.',
    icon: <Leaf size={26} />
  }
];

const valuesMn = [
  {
    title: 'Чанар',
    text: 'Бид олон улсын стандарт хангах бүтээгдэхүүн нийлүүлж, харилцагчийн шаардлагыг тогтмол биелүүлдэг.',
    icon: <Award size={26} />
  },
  {
    title: 'Найдвартай байдал',
    text: 'Бид үйл ажиллагааны хэрэгцээг ойлгож, практик, үр дүнтэй, цаг тухайд нь шийдэл хүргэдэг.',
    icon: <ShieldCheck size={26} />
  },
  {
    title: 'Инноваци',
    text: 'Бид дэвшилтэт технологи, шинэ санааг нэвтрүүлж урт хугацааны үр нөлөө бий болгодог.',
    icon: <Lightbulb size={26} />
  },
  {
    title: 'Аюулгүй ажиллагаа',
    text: 'Бид тасралтгүй сургалт, нийцэл, агуулах болон тээврийн хатуу стандартаар аюулгүй ажиллагааг нэн тэргүүнд тавьдаг. Манай баг дотоод, олон улсын байгууллагын HSE сургалтад тогтмол хамрагддаг бөгөөд бүх ажилтан бүрэн даатгагдсан.',
    icon: <Shield size={26} />
  },
  {
    title: 'Тогтвортой хөгжил',
    text: 'Бид ажлын бүх үе шатанд байгаль орчинд ээлтэй, хариуцлагатай дадлыг дэмждэг.',
    icon: <Leaf size={26} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

function Values() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <PageContainer>
      <Hero>
        <HeroContent>
          <HeroTitle
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {isEnglish ? 'Our Values' : 'Бидний үнэт зүйлс'}
          </HeroTitle>
          <HeroSubtitle
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isEnglish
              ? 'Our commitments to quality, reliability, innovation, safety, and sustainability guide every partnership and solution we deliver.'
              : 'Чанар, найдвартай байдал, инноваци, аюулгүй ажиллагаа, тогтвортой хөгжилд тавьдаг манай амлалт хамтын ажиллагаа, шийдэл бүрийг тодорхойлдог.'}
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ValuesGrid>
              {(isEnglish ? valuesEn : valuesMn).map((value, idx) => (
                <ValueCard
                  key={value.title}
                  variants={itemVariants}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 35px rgba(0,0,0,0.08)' }}
                >
                  <IconWrap>{value.icon}</IconWrap>
                  <div>
                    <ValueTitle>{value.title}</ValueTitle>
                    <ValueText>{value.text}</ValueText>
                  </div>
                </ValueCard>
              ))}
            </ValuesGrid>
          </motion.div>
        </SectionContent>
      </Section>
    </PageContainer>
  );
}

export default Values;
