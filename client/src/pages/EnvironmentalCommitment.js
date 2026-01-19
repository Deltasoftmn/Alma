import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Leaf, TreePine, FishSymbol } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Page = styled.div`
  min-height: 100vh;
  background: #0c1b2a;
  color: #e2e8f0;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(37, 150, 190, 0.16), transparent 50%),
    radial-gradient(circle at 80% 60%, rgba(16, 185, 129, 0.12), transparent 55%),
    linear-gradient(135deg, #0c1b2a, #0f2738 45%, #0c1b2a);
  opacity: 0.95;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = styled.section`
  padding: 5rem 0 3rem;
`;

const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const Accent = styled.div`
  width: 6px;
  height: 60px;
  background: #10b981;
  border-radius: 3px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  color: #f8fafc;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Section = styled.section`
  padding: 2rem 0 5rem;
`;

const Block = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto 2.5rem;
  padding: 0 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #dbeafe;
  margin: 0 0 1.2rem;
`;

const Figure = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  margin: 1.2rem 0 1.6rem;
  position: relative;
  display: grid;
  place-items: center;
`;

const FigureOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(16, 185, 129, 0.15), transparent 70%);
`;

const FigureIcon = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.16);
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: #34d399;
  display: grid;
  place-items: center;
  z-index: 1;
`;

const content = {
  en: {
    title: 'Environmental Commitment',
    blocks: [
      {
        icon: <FishSymbol size={38} />,
        text: "Alma Chem Trade LLC is proud to support the 'Chuluut Tul' environmental project, dedicated to protecting the Chuluut River valley and conserving Mongolia's native Hucho taimen species. Our partners conduct research, fish breeding, and restocking programs to restore native fish populations. Through these activities, 2.23 million grayling and trout fry were released into the Altai River tributaries, strengthening ecosystem restoration and long-term biodiversity protection."
      },
      {
        icon: <TreePine size={38} />,
        text: "We support the 'Billion Trees National Movement' to plant, cultivate, and protect one billion trees by 2030. Goals include raising forest coverage to 9%, reducing desertification and land degradation, enhancing greenhouse gas absorption, protecting water resources, and improving national climate resilience."
      },
      {
        icon: <Leaf size={38} />,
        text: "Aligned with national Tree-Planting Days (first Saturday of May and October) and Presidential decrees, we will organize tree-planting and care activities with local authorities, community groups, and volunteers. All efforts follow MNS 4918:2000 to promote sustainable planting and long-term environmental protection."
      }
    ]
  },
  mn: {
    title: 'Байгаль орчны амлалт',
    blocks: [
      {
        icon: <FishSymbol size={38} />,
        text: "Алма Кем Трейд ХХК нь 'Chuluut Tul' байгаль орчны төслийг дэмжин ажиллаж, Чулуутын хөндийг хамгаалах, Монголын уугуул хуучо таймен загасыг хадгалахад хувь нэмэр оруулж байна. Хамтрагчид судалгаа, загас үржүүлэг, нутагшуулах ажил хэрэгжүүлж, уугуул загасны нөөцийг сэргээдэг. Эдгээр үйл ажиллагааны хүрээнд Алтайн мөрний цутгалуудад 2.23 сая цаана, цурхай загасны үр төл амжилттай нутагшуулж, экосистемийн сэргэлт, урт хугацааны биологийн олон янз байдлын хамгаалалтад чухал дэмжлэг үзүүлэв." 
      },
      {
        icon: <TreePine size={38} />,
        text: "Бид 2030 он гэхэд нэг тэрбум мод тарих, ургуулах, хамгаалах зорилготой 'Тэрбум Мод' үндэсний хөдөлгөөнийг дэмждэг. Үүнд ойжуулалтын түвшинг 9%-д хүргэх, цөлжилт, газрын доройтол бууруулах, хүлэмжийн хийн шингээлтийг нэмэгдүүлэх, усны нөөцийг хамгаалах, уур амьсгалын тогтвортой байдлыг сайжруулах зорилтууд багтана." 
      },
      {
        icon: <Leaf size={38} />,
        text: "БНХАУХороо/Ерөнхийлөгчийн зарлигт нийцсэн Мод тарих өдрүүдэд (5, 10-р сарын эхний Бямба) орон нутгийн захиргаа, иргэний бүлэг, сайн дурынхантай хамт мод тарих, арчлах ажлыг зохион байгуулна. Бүх үйл ажиллагаа MNS 4918:2000 стандартыг мөрдөж, тогтвортой мод тарих дадлыг дэмжиж, урт хугацааны байгаль хамгаалалтад чиглэнэ." 
      }
    ]
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function EnvironmentalCommitment() {
  const { language } = useLanguage();
  const currentContent = content[language] || content.en;

  return (
    <Page>
      <Overlay />
      <Content>
        <Hero>
          <HeroInner>
            <TitleRow>
              <Accent />
              <Title
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
              >
                {currentContent.title}
              </Title>
            </TitleRow>
          </HeroInner>
        </Hero>

        <Section>
          {currentContent.blocks.map((block, idx) => (
            <Block
              key={idx}
              as={motion.div}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <Paragraph>{block.text}</Paragraph>
              <Figure>
                <FigureOverlay />
                <FigureIcon>{block.icon}</FigureIcon>
              </Figure>
            </Block>
          ))}
        </Section>
      </Content>
    </Page>
  );
}

export default EnvironmentalCommitment;
