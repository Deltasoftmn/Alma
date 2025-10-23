import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

const ContactContainer = styled.div`
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

const ContactSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: #f9fafb;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const ContactText = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-weight: 600;
  color: #374151;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(6, 182, 212, 0.3);
  }
`;

const MapSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const MapContainer = styled(motion.div)`
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="map-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.688"/></pattern></defs><rect width="100" height="100" fill="url(%23map-pattern)"/></svg>');
    opacity: 0.3;
  }
`;

const MapIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  position: relative;
  z-index: 1;
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const MapText = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
`;

const MapButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  position: relative;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const HoursSection = styled.section`
  padding: 6rem 0;
  background: white;
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const HoursCard = styled(motion.div)`
  background: #f9fafb;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e5e7eb;
`;

const HoursIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const HoursTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const HoursText = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

function Contact() {
  const contactData = companyData.contact;

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Таны санал хүсэлт амжилттай илгээгдлээ. Бид танд хариу өгөх болно.');
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              Холбоо барих
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              Бидэнтэй холбоо бариж, хамтран ажиллах боломжийг ашиглаарай
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <ContactSection>
        <SectionContent>
          <ContactGrid>
            <ContactInfo>
              <ContactCard
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <MapPin size={24} />
                </ContactIcon>
                <ContactTitle>Хаяг</ContactTitle>
                <ContactText>
                  {contactData?.address || 'Монгол Улс, Улаанбаатар 14220, Сүхбаатар дүүрэг, 1-р хороо, Элчин сайдын гудамж, Скай Плаза бизнес төв, 9 тоот'}
                </ContactText>
              </ContactCard>

              <ContactCard
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <Phone size={24} />
                </ContactIcon>
                <ContactTitle>Утас</ContactTitle>
                <ContactText>
                  {contactData?.phone || '+976 88042323'}
                </ContactText>
              </ContactCard>

              <ContactCard
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <Mail size={24} />
                </ContactIcon>
                <ContactTitle>И-мэйл</ContactTitle>
                <ContactText>
                  {contactData?.email || 'Info@khimiconsulting.mn'}
                </ContactText>
              </ContactCard>
            </ContactInfo>

            <ContactForm
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleFormSubmit}
            >
              <FormTitle>Бидэнтэй холбоо барих</FormTitle>
              
              <FormGroup>
                <FormLabel>Нэр</FormLabel>
                <FormInput type="text" placeholder="Таны нэр" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>И-мэйл</FormLabel>
                <FormInput type="email" placeholder="Таны и-мэйл хаяг" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Утасны дугаар</FormLabel>
                <FormInput type="tel" placeholder="Таны утасны дугаар" />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Сэдэв</FormLabel>
                <FormInput type="text" placeholder="Санал хүсэлтийн сэдэв" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Санал хүсэлт</FormLabel>
                <FormTextarea placeholder="Таны санал хүсэлтийг энд бичнэ үү..." required />
              </FormGroup>
              
              <SubmitButton type="submit">
                Илгээх
                <Send size={16} />
              </SubmitButton>
            </ContactForm>
          </ContactGrid>
        </SectionContent>
      </ContactSection>

      <MapSection>
        <SectionContent>
          <MapContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MapIcon>
              <MapPin size={40} />
            </MapIcon>
            <MapTitle>Байршлын зураг</MapTitle>
            <MapText>
              Скай Плаза бизнес төвд байрлах манай оффисын байршлыг 
              доорх зураг дээрээс харж болно.
            </MapText>
            <MapButton>
              Google Maps дээр харах
            </MapButton>
          </MapContainer>
        </SectionContent>
      </MapSection>

      <HoursSection>
        <SectionContent>
          <HoursGrid>
            <HoursCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <HoursIcon>
                <Clock size={24} />
              </HoursIcon>
              <HoursTitle>Ажлын цаг</HoursTitle>
              <HoursText>
                Даваа - Баасан: 09:00 - 18:00<br />
                Бямба: 09:00 - 14:00<br />
                Ням: Амарна
              </HoursText>
            </HoursCard>

            <HoursCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <HoursIcon>
                <CheckCircle size={24} />
              </HoursIcon>
              <HoursTitle>Хурдан хариу</HoursTitle>
              <HoursText>
                Бид таны санал хүсэлтэд 24 цагийн дотор 
                хариу өгөхөөр амлаж байна.
              </HoursText>
            </HoursCard>

            <HoursCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <HoursIcon>
                <Phone size={24} />
              </HoursIcon>
              <HoursTitle>24/7 Дэмжлэг</HoursTitle>
              <HoursText>
                Яаралтай тохиолдолд 24 цаг турш 
                утасны дэмжлэг үзүүлнэ.
              </HoursText>
            </HoursCard>
          </HoursGrid>
        </SectionContent>
      </HoursSection>
    </ContactContainer>
  );
}

export default Contact;
