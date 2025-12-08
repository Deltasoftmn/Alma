import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Activity, Leaf, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Page = styled.div`
  min-height: 100vh;
  background: #0c1b2a;
  color: #e2e8f0;
`;

const Hero = styled.section`
  padding: 5rem 0 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(37, 150, 190, 0.16), rgba(66, 184, 166, 0.12));
`;

const HeroInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.6rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.15rem;
  opacity: 0.9;
`;

const ListSection = styled.section`
  padding: 4rem 0 5rem;
`;

const ListGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
`;

const BenefitCard = styled(motion.div)`
  background: rgba(12, 27, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

const BenefitHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
  color: #f8fafc;
  font-weight: 800;
  font-size: 1.05rem;
`;

const BenefitText = styled.p`
  margin: 0;
  color: #cbd5e1;
  line-height: 1.6;
`;

const benefitsEn = [
  { icon: <Award size={22} />, title: 'World-class quality from global leaders', text: 'Complete support across chemical supply, laboratory evaluation, process optimization, operational monitoring, and safety management—ensuring reliable and efficient project performance.' },
  { icon: <CheckCircle2 size={22} />, title: 'Exceptional purity & consistency', text: 'Produced to international standards for stable, high-purity quality in every batch, delivering predictable, repeatable performance.' },
  { icon: <ShieldCheck size={22} />, title: 'Proven industrial performance', text: 'Trusted worldwide; our chemicals consistently demonstrate strong efficiency and reliability in real mining and processing environments.' },
  { icon: <TrendingUp size={22} />, title: 'Enhanced process recovery', text: 'Engineered to improve mineral separation efficiency, reduce losses, and strengthen overall plant performance.' },
  { icon: <ShieldCheck size={22} />, title: 'Safe, compliant, and certified', text: 'Manufactured and supplied in full accordance with global safety, quality, and regulatory requirements for secure handling.' },
  { icon: <Activity size={22} />, title: 'Cost-efficient application', text: 'High activity and superior formulation reduce dosage needs, lowering total chemical consumption and operational costs.' },
  { icon: <Leaf size={22} />, title: 'Environmentally responsible', text: 'Developed to support cleaner processes, reduce impact, and enable more sustainable long-term operations.' }
];

const benefitsMn = [
  { icon: <Award size={22} />, title: 'Дэлхийд тэргүүлэгч чанар', text: 'Химийн хангамж, лабораторийн үнэлгээ, процессын оновчлол, ажиллагааны мониторинг, аюулгүй байдлын менежментийг цогцоор нь дэмжиж, найдвартай үр ашигтай гүйцэтгэлийг хангана.' },
  { icon: <CheckCircle2 size={22} />, title: 'Онцгой цэвэршилт ба жигд чанар', text: 'Олон улсын стандартаар үйлдвэрлэсэн тул багц бүр тогтвортой, өндөр цэвэршилттэй, найдвартай, давтагдахүйц чанарыг өгдөг.' },
  { icon: <ShieldCheck size={22} />, title: 'Үйлдвэрлэлийн батлагдсан гүйцэтгэл', text: 'Дэлхий даяар итгэгдсэн бүтээгдэхүүнүүд маань уул уурхай, боловсруулах орчинд тогтмол өндөр үр ашиг, найдвартай ажиллагааг харуулдаг.' },
  { icon: <TrendingUp size={22} />, title: 'Процессын авалтыг нэмэгдүүлнэ', text: 'Эрдсийн ялгалтын үр ашгийг сайжруулж, алдагдлыг бууруулан, үйлдвэрийн нийт гүйцэтгэлийг бэхжүүлдэг.' },
  { icon: <ShieldCheck size={22} />, title: 'Аюулгүй, нийцтэй, баталгаажсан', text: 'Дэлхийн аюулгүй байдал, чанар, зохицуулалтын шаардлагыг бүрэн ханган үйлдвэрлэж, нийлүүлдэг тул аюулгүй, хариуцлагатай хэрэглээг дэмжинэ.' },
  { icon: <Activity size={22} />, title: 'Зардал хэмнэлттэй хэрэглээ', text: 'Өндөр идэвх ба найрлагын давуу тал нь зарцуулалтыг бууруулж, нийт химийн хэрэглээ болон үйл ажиллагааны зардлыг багасгана.' },
  { icon: <Leaf size={22} />, title: 'Байгальд ээлтэй', text: 'Цэвэр технологийг дэмжиж, нөлөөллийг бууруулан, урт хугацаанд тогтвортой ажиллагааг хангах зорилгоор боловсруулагдсан.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 }
};

function ProductBenefits() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const benefits = isEnglish ? benefitsEn : benefitsMn;

  return (
    <Page>
      <Hero>
        <HeroInner>
          <Title
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {isEnglish ? 'Product Benefits' : 'Бүтээгдэхүүний давуу тал'}
          </Title>
          <Subtitle
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isEnglish
              ? 'Quality, performance, safety, and sustainability advantages across our chemical portfolio.'
              : 'Манай бүтээгдэхүүний чанар, гүйцэтгэл, аюулгүй байдал, тогтвортой байдлын давуу талууд.'}
          </Subtitle>
        </HeroInner>
      </Hero>

      <ListSection>
        <ListGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={benefit.title}
              variants={itemVariants}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              whileHover={{ y: -4, boxShadow: '0 14px 30px rgba(0,0,0,0.25)' }}
            >
              <BenefitHead>
                {benefit.icon}
                {benefit.title}
              </BenefitHead>
              <BenefitText>{benefit.text}</BenefitText>
            </BenefitCard>
          ))}
        </ListGrid>
      </ListSection>
    </Page>
  );
}

export default ProductBenefits;
