import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, Award, ArrowRight, Send } from 'lucide-react';
import { companyData } from '../data/companyData';

const JobsContainer = styled.div`
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


const BenefitsSection = styled.section`
  padding: 6rem 0;
  background: #f9fafb;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BenefitCard = styled(motion.div)`
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

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2596be, #42b8a6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 150, 190, 0.3);

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 20px rgba(37, 150, 190, 0.4);
  }
`;

const BenefitTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const BenefitText = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const ApplicationSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
`;

const ApplicationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ApplicationTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const ApplicationText = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  text-align: center;
`;

const ApplicationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: 600;
  color: white;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2596be;
    box-shadow: 0 0 0 3px rgba(37, 150, 190, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2596be;
    box-shadow: 0 0 0 3px rgba(37, 150, 190, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #2596be, #42b8a6);
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 150, 190, 0.3);
  }
`;

function Jobs() {
  const jobsData = companyData.jobs;

  const hrPolicy = jobsData?.hrPolicy || {};

  const benefits = hrPolicy.benefits?.map((benefit, index) => ({
    icon: [<Award size={24} />, <Users size={24} />, <Award size={24} />][index % 3],
    title: benefit,
    text: `${benefit}ийн боломж`
  })) || [];

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

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert('Таны өргөдөл амжилттай илгээгдлээ. Бид танд хариу өгөх болно.');
  };

  return (
    <JobsContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle variants={itemVariants}>
              Ажлын байр
            </HeroTitle>
            <HeroSubtitle variants={itemVariants}>
              Манай багт нэгдэж, хамтдаа амжилттай болох боломж
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>


      <BenefitsSection>
        <SectionContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ажлын давуу тал
          </SectionTitle>
          
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <BenefitIcon>
                  {benefit.icon}
                </BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitText>{benefit.text}</BenefitText>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </SectionContent>
      </BenefitsSection>

      <ApplicationSection>
        <SectionContent>
          <ApplicationCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ApplicationTitle>Өргөдөл гаргах</ApplicationTitle>
            <ApplicationText>
              Та манай багт нэгдэхийг хүсвэл доорх маягтыг бөглөнө үү. 
              Бид таны өргөдлийг хянаж, хариу өгөх болно.
            </ApplicationText>
            
            <ApplicationForm onSubmit={handleApplicationSubmit}>
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
                <FormInput type="tel" placeholder="Таны утасны дугаар" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Ажиллахыг хүсэж буй албан тушаал</FormLabel>
                <FormInput type="text" placeholder="Албан тушаалын нэр" required />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Туршлага, ур чадвар</FormLabel>
                <FormTextarea placeholder="Таны туршлага, ур чадварын талаар бичнэ үү..." required />
              </FormGroup>
              
              <SubmitButton type="submit">
                Өргөдөл илгээх
                <Send size={16} />
              </SubmitButton>
            </ApplicationForm>
          </ApplicationCard>
        </SectionContent>
      </ApplicationSection>
    </JobsContainer>
  );
}

export default Jobs;
