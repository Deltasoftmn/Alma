import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Shield, 
  Microscope, 
  Search, 
  Cog, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import axios from 'axios';

const ServicesContainer = styled.div`
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
    animation: float 7s ease-in-out infinite;
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
    animation: float 5s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(0.3deg); }
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

const ServicesSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border: 1px solid rgba(37, 150, 190, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(37, 150, 190, 0.08);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(37, 150, 190, 0.15);
    border-color: #2596be;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #2596be, #42b8a6);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, ${props => props.gradient || '#2596be, #42b8a6'});
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 150, 190, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.4);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.7;
  font-size: 1rem;
`;

const ServiceFeatures = styled.div`
  margin-top: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.9rem;
`;

const SpecialServiceSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const SpecialServiceCard = styled(motion.div)`
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
  border-radius: 24px;
  padding: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    opacity: 0.3;
  }
`;

const SpecialIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  position: relative;
  z-index: 1;
`;

const SpecialTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const SpecialDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
  position: relative;
  z-index: 1;
`;

const ProcessSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`;

const StepTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const StepDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 3rem auto 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }
`;

function Services() {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await axios.get('/api/services');
        setServicesData(response.data);
      } catch (error) {
        console.error('Error fetching services data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  const content = {
    mn: {
      heroTitle: "Үйлчилгээ",
      heroSubtitle: "Манай компанийн санал болгож буй мэргэжлийн үйлчилгээнүүд",
      servicesTitle: "Манай үйлчилгээнүүд",
      featuresTitle: "Яагаад биднийг сонгох ёстой вэ?",
      ctaTitle: "Бидэнтэй холбогдох",
      ctaSubtitle: "Таны хэрэгцээнд тохирсон шийдлийг олохын тулд бидэнтэй холбогдоорой",
      ctaButton: "Холбоо барих"
    },
    en: {
      heroTitle: "Services",
      heroSubtitle: "Professional services offered by our company",
      servicesTitle: "Our Services",
      featuresTitle: "Why Choose Us?",
      ctaTitle: "Get In Touch",
      ctaSubtitle: "Contact us to find the solution that fits your needs",
      ctaButton: "Contact Us"
    }
  };

  const currentContent = content[language] || content.mn;

  if (loading) {
    return <div>Loading...</div>;
  }

  const serviceIcons = [
    { icon: <Truck size={32} />, gradient: '#3b82f6, #1d4ed8' },
    { icon: <Shield size={32} />, gradient: '#10b981, #059669' },
    { icon: <Microscope size={32} />, gradient: '#8b5cf6, #7c3aed' },
    { icon: <Search size={32} />, gradient: '#f59e0b, #d97706' },
    { icon: <Cog size={32} />, gradient: '#ef4444, #dc2626' },
    { icon: <TrendingUp size={32} />, gradient: '#06b6d4, #0891b2' }
  ];

  const serviceTitles = language === 'en'
    ? [
      'Chemical Import',
      'Safety Consulting',
      'Laboratory Research',
      'Technology Research',
      'Cyanide Leaching Solutions',
      'Process Optimization'
    ]
    : [
      'Химийн бодисын импорт',
      'Аюулгүй ажиллагааны зөвлөгөө',
      'Лабораторийн судалгаа',
      'Технологийн судалгаа',
      'Цианидын уусгалтын шийдэл',
      'Процессын оновчтой шийдэл'
    ];

  const serviceFeatures = language === 'en'
    ? [
      ['International standards', 'Quality assurance', 'Fast delivery'],
      ['Storage standards', 'Safety compliance', 'Professional consulting'],
      ['Analytical work', 'Test orchestration', 'Result reporting'],
      ['Technology analysis', 'Process improvement', 'Professional research'],
      ['Planning', 'Equipment selection', 'Installation & management'],
      ['Quality improvement', 'Process optimization', 'Technology selection']
    ]
    : [
      ['Олон улсын стандарт', 'Чанарын баталгаа', 'Хурдан хүргэлт'],
      ['Хадгалалтын стандарт', 'Аюулгүй ажиллагаа', 'Мэргэжлийн зөвлөгөө'],
      ['Шинжилгээний ажил', 'Туршилтын зохион байгуулалт', 'Үр дүнгийн тайлан'],
      ['Технологийн шинжилгээ', 'Процессын сайжруулалт', 'Мэргэжлийн судалгаа'],
      ['Төлөвлөлт', 'Тоног төхөөрөмжийн сонголт', 'Угсралт, удирдлага'],
      ['Чанарын сайжруулалт', 'Процессын оновчтой болгох', 'Технологийн сонголт']
    ];

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
    <ServicesContainer>
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

      <ServicesSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {currentContent.servicesTitle}
          </SectionTitle>
          
          <ServicesGrid>
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceIcon gradient={serviceIcons[index]?.gradient}>
                  {serviceIcons[index]?.icon}
                </ServiceIcon>
                <ServiceTitle>
                  {serviceTitles[index] || service}
                </ServiceTitle>
                <ServiceDescription>
                  {service}
                </ServiceDescription>
                <ServiceFeatures>
                  {serviceFeatures[index]?.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckCircle size={16} color="#10b981" />
                      {feature}
                    </FeatureItem>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </SectionContent>
      </ServicesSection>

      <SpecialServiceSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: '#1a1a1a' }}
          >
            {language === 'en' ? 'Special Service' : 'Тусгай үйлчилгээ'}
          </SectionTitle>
          
          <SpecialServiceCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SpecialIcon>
              <Star size={50} />
            </SpecialIcon>
            <SpecialTitle>
              {language === 'en' 
                ? 'End-to-end Cyanide Leaching Solution for Gold Mining'
                : 'Алт олборлолтын цианидын уусгалтын иж бүрэн шийдэл'}
            </SpecialTitle>
            <SpecialDescription>
              {language === 'en'
                ? 'A complete solution covering everything from planning and equipment selection to installation, technological management, and monitoring. Our professional team fully supports the successful implementation of your project.'
                : 'Төлөвлөлтөөс эхлээд тоног төхөөрөмжийн сонголт, угсралт, технологийн удирдлага, хяналт хүртэл бүх зүйлийг хамарсан иж бүрэн шийдэл. Манай мэргэжлийн баг танай төслийг амжилттай хэрэгжүүлэхэд бүрэн дэмжлэг үзүүлнэ.'}
            </SpecialDescription>
          </SpecialServiceCard>
        </SectionContent>
      </SpecialServiceSection>

      <ProcessSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Service Process' : 'Үйлчилгээний процесс'}
          </SectionTitle>
          
          <ProcessSteps>
            <ProcessStep
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StepNumber>1</StepNumber>
              <StepTitle>{language === 'en' ? 'Needs Analysis' : 'Хэрэгцээний шинжилгээ'}</StepTitle>
              <StepDescription>
                {language === 'en' 
                  ? 'We carefully analyze your company\'s needs, goals, and capabilities to propose the right solution.'
                  : 'Танай компанийн хэрэгцээ, зорилго, боломжийг нарийвчлан судалж, тохирох шийдлийг санал болгоно.'}
              </StepDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StepNumber>2</StepNumber>
              <StepTitle>{language === 'en' ? 'Planning' : 'Төлөвлөлт'}</StepTitle>
              <StepDescription>
                {language === 'en'
                  ? 'We prepare a detailed plan, timeline, budget, and risk management.'
                  : 'Дэлгэрэнгүй төлөвлөгөө, цаг хугацаа, төсөв, эрсдэлийн удирдлагыг боловсруулна.'}
              </StepDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StepNumber>3</StepNumber>
              <StepTitle>{language === 'en' ? 'Implementation' : 'Хэрэгжүүлэлт'}</StepTitle>
              <StepDescription>
                {language === 'en'
                  ? 'We work with a professional team to successfully execute the plan.'
                  : 'Мэргэжлийн багтай хамтран ажиллаж, төлөвлөгөөг амжилттай хэрэгжүүлнэ.'}
              </StepDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <StepNumber>4</StepNumber>
              <StepTitle>{language === 'en' ? 'Support' : 'Дэмжлэг'}</StepTitle>
              <StepDescription>
                {language === 'en'
                  ? 'We provide long-term post-project support, maintenance, and upgrades.'
                  : 'Төслийн дараа урт хугацааны дэмжлэг, засвар үйлчилгээ, шинэчлэл үзүүлнэ.'}
              </StepDescription>
            </ProcessStep>
          </ProcessSteps>

          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {language === 'en' ? 'Get Service Plan' : 'Үйлчилгээний төлөвлөгөө авах'}
            <ArrowRight size={20} />
          </CTAButton>
        </SectionContent>
      </ProcessSection>
    </ServicesContainer>
  );
}

export default Services;
