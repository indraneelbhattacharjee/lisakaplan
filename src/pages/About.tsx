import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaSchool, FaUsers, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { IconWrapper } from '../components/IconWrapper';

const AboutContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  min-height: 60vh;
  
  &::before {
    content: '#BETTERTOGETHER';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.3);
    white-space: nowrap;
    z-index: 0;
    pointer-events: none;
    
    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 2.2rem;
  color: #ffffff;
  margin-top: 3rem;
  text-align: center;
  max-width: 1200px;
  line-height: 1.8;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  letter-spacing: 0.1em;
  
  span {
    background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #f0f8ff, #ffffff, #f0f8ff);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    flex-direction: column;
    gap: 1rem;
    
    span {
      padding: 0.3rem 0.8rem;
    }
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BioText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;

  p {
    margin-bottom: 1.5rem;
  }
`;

const BioImage = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  margin-top: 2rem;
  
  img {
    width: 120%;
    height: 120%;
    object-fit: cover;
    object-position: center -10%;
    transition: transform 0.3s ease;
    margin-left: -10%;
    margin-top: -10%;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #f4d03f;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 45%;
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;

    @media (max-width: 768px) {
      left: -20px;
      border-right-color: white;
      border-left: none;
    }
  }

  ${TimelineItem}:nth-child(odd) &::before {
    right: -20px;
    border-left-color: white;
  }

  ${TimelineItem}:nth-child(even) &::before {
    left: -20px;
    border-right-color: white;
  }
`;

const TimelineDate = styled.div`
  font-weight: 600;
  color: #f4d03f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const TimelineTitle = styled.h3`
  color: #1a365d;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const TimelineDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: #f4d03f;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
  }
`;



const About: React.FC = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroSubtitle>
            <span>LEADERSHIP</span>
            <span>EXPERIENCE</span>
            <span>RESULTS</span>
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <Section>
          <SectionTitle>Biography</SectionTitle>
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



      </MainContent>
    </AboutContainer>
  );
};

export default About;
