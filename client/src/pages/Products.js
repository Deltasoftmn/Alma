import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Package, Truck, Shield, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import axios from 'axios';

const ProductsContainer = styled.div`
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

const ProductsSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const ProductCard = styled(motion.div)`
  background: white;
  border: 1px solid rgba(37, 150, 190, 0.1);
  border-radius: 20px;
  padding: 3rem;
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

const ProductIcon = styled.div`
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

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ProductDescription = styled.p`
  color: #6b7280;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ProductFeatures = styled.div`
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

const CategoriesSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const CategoryCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryIcon = styled.div`
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

const CategoryTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const CategoryText = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const QualitySection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
`;

const QualityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const QualityCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const QualityIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const QualityTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const QualityText = styled.p`
  opacity: 0.9;
  line-height: 1.6;
`;

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  const content = {
    mn: {
      heroTitle: "Бүтээгдэхүүн",
      heroSubtitle: "Манай компанийн санал болгож буй химийн бүтээгдэхүүнүүд",
      productsTitle: "Манай бүтээгдэхүүнүүд",
      qualityTitle: "Чанарын баталгаа",
      qualityText: "Бид зөвхөн олон улсын стандартад нийцсэн, найдвартай үйлдвэрлэгчдээс бүтээгдэхүүн импортолдог."
    },
    en: {
      heroTitle: "Products",
      heroSubtitle: "Chemical products offered by our company",
      productsTitle: "Our Products",
      qualityTitle: "Quality Assurance",
      qualityText: "We only import products from reliable manufacturers that meet international standards."
    }
  };

  const currentContent = content[language] || content.mn;

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get('/api/products');
        setProductsData(response.data);
      } catch (error) {
        console.error('Error fetching products data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const productIcons = [
    { icon: <Package size={40} />, gradient: '#10b981, #059669' },
    { icon: <Truck size={40} />, gradient: '#3b82f6, #1d4ed8' },
    { icon: <Shield size={40} />, gradient: '#8b5cf6, #7c3aed' }
  ];

  const productTitles = [
    'Уул уурхайн химийн бодисууд',
    'Боловсруулах үйлдвэрийн бүтээгдэхүүн',
    'Агуулах, савлагаа, тээврийн шийдэл'
  ];

  const productFeatures = [
    [
      'Олон улсын стандартын дагуу',
      'Чанарын баталгаатай',
      'Аюулгүй хадгалалт',
      'Мэргэжлийн зөвлөгөө'
    ],
    [
      'Дэвшилтэт технологи',
      'Өндөр үр ашиг',
      'Байгаль орчинд ээлтэй',
      'Удаан эдэлгээ'
    ],
    [
      'Стандарт савлагаа',
      'Аюулгүй тээвэрлэлт',
      'Туршлагатай баг',
      'Хурдан хүргэлт'
    ]
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
    <ProductsContainer>
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

      <ProductsSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Манай бүтээгдэхүүн
          </SectionTitle>
          
          <ProductsGrid>
            {productsData.map((product, index) => (
              <ProductCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProductIcon gradient={productIcons[index]?.gradient}>
                  {productIcons[index]?.icon}
                </ProductIcon>
                <ProductTitle>
                  {productTitles[index] || product}
                </ProductTitle>
                <ProductDescription>
                  {product}
                </ProductDescription>
                <ProductFeatures>
                  {productFeatures[index]?.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckCircle size={16} color="#10b981" />
                      {feature}
                    </FeatureItem>
                  ))}
                </ProductFeatures>
              </ProductCard>
            ))}
          </ProductsGrid>
        </SectionContent>
      </ProductsSection>

      <CategoriesSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {currentContent.productsTitle}
          </SectionTitle>
          
          <ProductsGrid>
            <CategoryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <CategoryIcon>
                <Package size={24} />
              </CategoryIcon>
              <CategoryTitle>Уул уурхай</CategoryTitle>
              <CategoryText>
                Алт, зэс, төмрийн хүдэр олборлолтод ашиглагдах 
                химийн бодисууд, катализатор, флотацийн бодис
              </CategoryText>
            </CategoryCard>

            <CategoryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <CategoryIcon>
                <Truck size={24} />
              </CategoryIcon>
              <CategoryTitle>Боловсруулалт</CategoryTitle>
              <CategoryText>
                Хүдрийн баяжуулалт, металлургийн процессод 
                ашиглагдах химийн бодисууд, катализатор
              </CategoryText>
            </CategoryCard>

            <CategoryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <CategoryIcon>
                <Shield size={24} />
              </CategoryIcon>
              <CategoryTitle>Аюулгүй байдал</CategoryTitle>
              <CategoryText>
                Химийн бодисын аюулгүй хадгалалт, 
                тээвэрлэлт, хэрэглээний стандарт шийдэл
              </CategoryText>
            </CategoryCard>
          </ProductsGrid>
        </SectionContent>
      </CategoriesSection>

      <QualitySection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            {currentContent.qualityTitle}
          </SectionTitle>
          
          <QualityGrid>
            <QualityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <QualityIcon>
                <Star size={40} />
              </QualityIcon>
              <QualityTitle>Олон улсын стандарт</QualityTitle>
              <QualityText>
                ISO, ASTM болон бусад олон улсын стандартын 
                дагуу чанарын баталгаатай бүтээгдэхүүн
              </QualityText>
            </QualityCard>

            <QualityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <QualityIcon>
                <CheckCircle size={40} />
              </QualityIcon>
              <QualityTitle>Шинжилгээний тайлан</QualityTitle>
              <QualityText>
                Лабораторийн шинжилгээний дэлгэрэнгүй тайлан, 
                чанарын баталгаа, техникийн мэдээлэл
              </QualityText>
            </QualityCard>

            <QualityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <QualityIcon>
                <Shield size={40} />
              </QualityIcon>
              <QualityTitle>Аюулгүй байдал</QualityTitle>
              <QualityText>
                Бүтээгдэхүүний аюулгүй хадгалалт, тээвэрлэлт, 
                хэрэглээний бүрэн дэмжлэг
              </QualityText>
            </QualityCard>
          </QualityGrid>
        </SectionContent>
      </QualitySection>
    </ProductsContainer>
  );
}

export default Products;
