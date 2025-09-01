import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f8ff 0%, #f0f8ff 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(147, 112, 219, 0.3), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(147, 112, 219, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(245, 245, 220, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;





const Section = styled.section`
  margin-bottom: 4rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 100%;
  }
`;

const BioText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #000000;
  font-weight: 900;

  p {
    margin-bottom: 1.5rem;
  }
  
  strong {
    color: #000000;
    font-weight: 900;
  }
`;

const BioImage = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(244, 228, 188, 0.3);
  margin-top: 2rem;
  border: 2px solid rgba(244, 228, 188, 0.2);
  
  img {
    width: 120%;
    height: 120%;
    object-fit: cover;
    object-position: center -10%;
    transition: transform 0.3s ease;
    margin-left: -10%;
    margin-top: -10%;
  }
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 35px rgba(244, 228, 188, 0.4);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;





const About: React.FC = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionTitle>About Lisa</SectionTitle>
        <BioGrid>
          <BioText>
            <p>
              Lisa has served District 1 on the Sacramento City Council since 2022, and has been a champion for the voices of her constituents on the issues that matter most to them; from public safety and sustainable growth to efficiency in our public services, and improving our community's infrastructure & family amenities.
            </p>
            <p>
              As our Councilmember, Lisa has led the way in striving to make D1 & Sacramento a safer, more vibrant, and better place to live, work and raise a family. Councilmember Kaplan successfully fought for action to address dangerous sideshows, reckless driving & illegal fireworks; reverse cuts in city services; stop waste from polluting our canals, streets & critical infrastructure; demand change & improved mailbox security from the US Postal Service; improve & beautify our local parks; while working hand-in-hand with constituents every day to deliver the action they need from their city government.
            </p>
            <p>
              Prior to being elected to the City Council, Lisa served as a Natomas School Board member for twenty years, advocating for our local youth, families and schools.
            </p>
            <p>
              As a Natomas School Board Trustee, Lisa was instrumental in leading the passage of 4 school bonds, contributing to the construction or modernization of every school in Natomas. As Board President in 2020, Lisa proudly led Natomas Unified through the Covid-19 pandemic while prioritizing the safety, equitable treatment and access to education of NUSD's students. Her leadership helped provide much-needed access to childcare, healthcare and day-to-day meals for NUSD students and families in times of crisis.
            </p>
            <p>
              Councilmember Kaplan first moved to Sacramento in 1997, and is proud to have called Natomas home for decades. Lisa currently lives in the Westshore community with her husband, Brian, and their daughters, Viva & Asha.
            </p>
            <p>
              Lisa wears many hats as a wife, mother, Councilmember, and small business owner; her family & her community have always been the center of her focus and dedication. She has a deep passion to serve, collaborate, and help improve the lives of others through empathy, hard work and common sense solutions.
            </p>
            <p>
              The experiences and challenges she's faced throughout her life have helped prepare her to be a leader suited to represent a strong, diverse, and confident community like District 1 - a leader who knows that we are always, <strong>#Bettertogether</strong>.
            </p>
          </BioText>
          <BioImage>
            <img src="/lisaprofile.jpeg" alt="Lisa Kaplan - Sacramento City Council District 1" />
            </BioImage>
          </BioGrid>
        </Section>
    </AboutContainer>
  );
};

export default About;
