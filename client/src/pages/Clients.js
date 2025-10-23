import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Building2, Users, Users2, Award, Star, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

const ClientsContainer = styled.div`
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

const ClientsSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ClientCard = styled(motion.div)`
  background: white;
  border: 1px solid rgba(37, 150, 190, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
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

const ClientIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.gradient || '#2596be, #42b8a6'});
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(37, 150, 190, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(37, 150, 190, 0.4);
  }
`;

const ClientTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ClientDescription = styled.p`
  color: #6b7280;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ClientFeatures = styled.div`
  text-align: left;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #4b5563;
  font-size: 0.95rem;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #8b5cf6;
    opacity: 0.3;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
`;

const AuthorRating = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const StatsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

function Clients() {
  const clientsData = companyData.clients;

  const clientIcons = [
    { icon: <Building2 size={40} />, gradient: '#8b5cf6, #7c3aed' },
    { icon: <Users size={40} />, gradient: '#3b82f6, #1d4ed8' },
    { icon: <Users2 size={40} />, gradient: '#10b981, #059669' }
  ];

  const clientTitles = [
    'Уул уурхайн компаниуд',
    'Боловсруулах үйлдвэрүүд',
    'Түнш байгууллагууд'
  ];

  const clientFeatures = [
    [
      'Алт, зэс олборлолт',
      'Төмрийн хүдэр ашиглалт',
      'Цагаан тугалганы уурхай',
      'Молибдений олборлолт'
    ],
    [
      'Хүдрийн баяжуулалт',
      'Металлургийн үйлдвэр',
      'Цементийн үйлдвэр',
      'Химийн үйлдвэр'
    ],
    [
      'Олон улсын түнш',
      'Технологийн хамтрагчид',
      'Санхүүгийн түнш',
      'Логистикийн түнш'
    ]
  ];

  const testimonials = [
    {
      text: "Alma Chem Trade-тай хамтран ажиллаж байгаа нь манай уул уурхайн үйл ажиллагаанд ихээхэн хувь нэмэр оруулж байна. Тэдний мэргэжлийн зөвлөгөө, чанарын бүтээгдэхүүн манай үр ашгийг нэмэгдүүлсэн.",
      author: "Батбаяр",
      title: "Уул уурхайн компанийн захирал"
    },
    {
      text: "Химийн бодисын аюулгүй хадгалалт, хэрэглээний талаар манай багийг сургаж, стандарт процедурыг нэвтрүүлэхэд тэдний дэмжлэг үнэхээр үнэтэй байсан.",
      author: "Сэрэгмаа",
      title: "Аюулгүй ажиллагааны менежер"
    },
    {
      text: "Лабораторийн судалгааны ажилд тэдний мэргэжлийн баг, дэвшилтэт тоног төхөөрөмж манай судалгааны чанарыг эрс сайжруулсан.",
      author: "Отгонбаяр",
      title: "Судалгааны хүрээлэнгийн эрдэмтэн"
    }
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
    <ClientsContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              Харилцагчид
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              Манай үйлчлүүлэгч болон хамтрагч байгууллагууд
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <ClientsSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Манай харилцагчид
          </SectionTitle>
          
          <ClientsGrid>
            {clientsData.map((client, index) => (
              <ClientCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ClientIcon gradient={clientIcons[index]?.gradient}>
                  {clientIcons[index]?.icon}
                </ClientIcon>
                <ClientTitle>
                  {clientTitles[index] || client}
                </ClientTitle>
                <ClientDescription>
                  {client}
                </ClientDescription>
                <ClientFeatures>
                  {clientFeatures[index]?.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckCircle size={16} color="#10b981" />
                      {feature}
                    </FeatureItem>
                  ))}
                </ClientFeatures>
              </ClientCard>
            ))}
          </ClientsGrid>
        </SectionContent>
      </ClientsSection>

      <TestimonialsSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Үйлчлүүлэгчдийн санал
          </SectionTitle>
          
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </AuthorInfo>
                  <AuthorRating>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </AuthorRating>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </SectionContent>
      </TestimonialsSection>

      <StatsSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            Харилцагчдын тоо
          </SectionTitle>
          
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatIcon>
                <Building2 size={24} />
              </StatIcon>
              <StatNumber>50+</StatNumber>
              <StatLabel>Уул уурхайн компани</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatIcon>
                <Users size={24} />
              </StatIcon>
              <StatNumber>30+</StatNumber>
              <StatLabel>Боловсруулах үйлдвэр</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatIcon>
                <Users2 size={24} />
              </StatIcon>
              <StatNumber>20+</StatNumber>
              <StatLabel>Түнш байгууллага</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <StatIcon>
                <Award size={24} />
              </StatIcon>
              <StatNumber>98%</StatNumber>
              <StatLabel>Сэтгэл ханамж</StatLabel>
            </StatCard>
          </StatsGrid>
        </SectionContent>
      </StatsSection>
    </ClientsContainer>
  );
}

export default Clients;
