import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Globe, Shield, Building, Calendar, ArrowRight } from 'lucide-react';
import axios from 'axios';

const NewsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const NewsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NewsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const NewsTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const NewsSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const NewsCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(37, 150, 190, 0.08);
  border: 1px solid rgba(37, 150, 190, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(37, 150, 190, 0.15);
  }
`;

const NewsImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const NewsCardContent = styled.div`
  padding: 1.5rem;
`;

const NewsCardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2596be;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const NewsCardCategory = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const NewsCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const NewsCardExcerpt = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const NewsCardLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2596be;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #42b8a6;
    transform: translateX(4px);
  }
`;

const LoadMoreButton = styled(motion.button)`
  background: linear-gradient(135deg, #2596be, #42b8a6);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.3);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #2596be;
  font-size: 1.1rem;
`;

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/news');
      setNews(response.data);
    } catch (err) {
      setError('Мэдээ ачаалахад алдаа гарлаа');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <NewsContainer>
        <NewsContent>
          <LoadingSpinner>Мэдээ ачаалж байна...</LoadingSpinner>
        </NewsContent>
      </NewsContainer>
    );
  }

  if (error) {
    return (
      <NewsContainer>
        <NewsContent>
          <NewsHeader>
            <NewsTitle>Мэдээ</NewsTitle>
            <NewsSubtitle>{error}</NewsSubtitle>
          </NewsHeader>
        </NewsContent>
      </NewsContainer>
    );
  }

  return (
    <NewsContainer>
      <NewsContent>
        <NewsHeader>
          <NewsTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Мэдээ
          </NewsTitle>
          <NewsSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Alma Chem Trade компанийн сүүлийн үеийн мэдээ, мэдээлэл болон үйл ажиллагааны талаар мэдээлэл аваарай
          </NewsSubtitle>
        </NewsHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <NewsGrid>
            {news.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <NewsCard>
                  <NewsImage>
                    <Building size={48} />
                  </NewsImage>
                  <NewsCardContent>
                    <NewsCardDate>
                      <Calendar size={16} />
                      {new Date(item.date).toLocaleDateString('mn-MN')}
                    </NewsCardDate>
                    <NewsCardCategory>{item.category}</NewsCardCategory>
                    <NewsCardTitle>{item.title}</NewsCardTitle>
                    <NewsCardExcerpt>{item.excerpt}</NewsCardExcerpt>
                    <NewsCardLink>
                      Дэлгэрэнгүй унших
                      <ArrowRight size={16} />
                    </NewsCardLink>
                  </NewsCardContent>
                </NewsCard>
              </motion.div>
            ))}
          </NewsGrid>
        </motion.div>

        <LoadMoreButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Илүү их мэдээ үзэх
        </LoadMoreButton>
      </NewsContent>
    </NewsContainer>
  );
}

export default News;
