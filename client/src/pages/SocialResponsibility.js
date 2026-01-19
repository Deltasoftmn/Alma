import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, Users, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #1a1a1a;
`;

const Hero = styled.section`
  padding: 5rem 0 3rem;
  background: #ffffff;
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
  color: #1a1a1a;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentSection = styled.section`
  padding: 2rem 0 5rem;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TextBlock = styled(motion.div)`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: #4b5563;
  margin-bottom: 2rem;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgba(16, 185, 129, 0.3), transparent);
    border-radius: 0 0 12px 12px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ImageIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  position: relative;
  z-index: 1;
`;

const DecorativePattern = styled.div`
  position: absolute;
  right: -100px;
  top: 0;
  width: 300px;
  height: 100%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%);
  border-radius: 50%;
  transform: rotate(-15deg);
  pointer-events: none;
`;

const content = {
  en: {
    title: 'Social Responsibility',
    blocks: [
      {
        text: "We contribute to improving children's well-being and education through the Little Tooth School Project led by Little Tod Family Dental Clinic, delivering oral health lessons to preschool and primary school students at institutions including New Mongolia Harumofuju School, Erdem Altai Primary School, and the 15th High School.",
        icon: <Heart size={40} />
      },
      {
        text: "Alma Chem Trade LLC is actively exploring ways to strengthen its operational capabilities and expand its local footprint. As part of this initiative, we intend to collaborate with a human resources service provider located in Khan-bogd soum through an outsourcing arrangement to support workforce-related functions.",
        icon: <Users size={40} />
      },
      {
        text: "Furthermore, we are in the process of developing a Memorandum of Understanding (MoU) to establish a framework for potential cooperation on the development and commissioning of a chemical warehouse near the Oyu Tolgoi mine. This MoU will help align mutual interests and assess the feasibility of future joint operations.",
        icon: <Building2 size={40} />
      }
    ]
  },
  mn: {
    title: 'Нийгмийн хариуцлага',
    blocks: [
      {
        text: "Бид Little Tod Family Dental Clinic-ийн удирдсан Little Tooth School Project-оор дамжуулан хүүхдүүдийн сайн сайхан байдал, боловсролыг сайжруулахад хувь нэмэр оруулж байна. Бид New Mongolia Harumofuju School, Erdem Altai Primary School, 15-р дунд сургууль зэрэг байгууллагуудад хүүхдийн цэцэрлэг, бага сургуулийн сурагчдад амны эрүүл мэндийн хичээл зааж байна.",
        icon: <Heart size={40} />
      },
      {
        text: "Алма Кем Трейд ХХК нь үйл ажиллагааны чадавхаа бэхжүүлэх, орон нутгийн байр сууриа өргөжүүлэх арга замыг идэвхтэй судалж байна. Энэхүү санаачилгын хүрээнд бид Хан-богд сумд байрлах хүний нөөцийн үйлчилгээний ханган нийлүүлэгчтэй аутсорсингийн хэлбэрээр хамтран ажиллаж, ажиллах хүчний холбогдох үйл ажиллагааг дэмжихээр төлөвлөж байна.",
        icon: <Users size={40} />
      },
      {
        text: "Цаашид бид Оюу Толгойн уурхайн ойролцоо химийн агуулах хөгжүүлэх, ашиглалтад оруулах талаарх боломжит хамтын ажиллагааны хүрээг тогтоох зорилгоор Ойлголцлын Меморандум (MoU) боловсруулах явцад байна. Энэхүү MoU нь харилцан ашиг сонирхлыг зэрэгцүүлэх, ирээдүйн хамтарсан үйл ажиллагааны боломжийг үнэлэхэд тусална.",
        icon: <Building2 size={40} />
      }
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function SocialResponsibility() {
  const { language } = useLanguage();
  const currentContent = content[language] || content.en;

  return (
    <Page>
      <DecorativePattern />
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

      <ContentSection>
        <ContentWrapper
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentContent.blocks.map((block, idx) => (
            <TextBlock key={idx} variants={itemVariants}>
              <Paragraph>{block.text}</Paragraph>
              {idx < currentContent.blocks.length - 1 && (
                <ImagePlaceholder>
                  <ImageIcon>{block.icon}</ImageIcon>
                </ImagePlaceholder>
              )}
            </TextBlock>
          ))}
        </ContentWrapper>
      </ContentSection>
    </Page>
  );
}

export default SocialResponsibility;
