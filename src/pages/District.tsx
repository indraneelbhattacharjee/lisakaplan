import React from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaSchool, FaRoad, FaHome, FaBus, FaEye } from 'react-icons/fa';
import { IconWrapper } from '../components/IconWrapper';
import GoogleDistrictMap from '../components/GoogleDistrictMap';

const DistrictContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), 
              url('/nnaquaticplayground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 6rem 0;
  text-align: center;
  position: relative;
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
  font-weight: 700;
  color: #ffffff !important;
  text-transform: uppercase;
  margin-bottom: 1rem;
  background: none !important;
  -webkit-background-clip: unset !important;
  -webkit-text-fill-color: unset !important;
  background-clip: unset !important;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  color: #ffffff;
  margin-top: 3rem;
  text-align: center;
  max-width: 1200px;
  line-height: 1.8;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const MapSection = styled.div`
  margin: 3rem auto;
  width: 95%;
  max-width: 1600px;
  padding: 0 1rem;
`;

const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  height: 400px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 1.2rem;
  font-weight: 600;
  border: 2px dashed #dee2e6;
  margin-bottom: 2rem;
`;

const MapDescription = styled.p`
  text-align: center;
  color: #a0aec0;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const DistrictDescription = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto 2rem;
  font-weight: 500;
`;



const DistrictInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  color: #1a365d;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const InfoList = styled.ul`
  color: #666;
  line-height: 1.6;
  padding-left: 1.5rem;
`;

const InfoListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const PrioritiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const PriorityCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PriorityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PriorityIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const PriorityTitle = styled.h3`
  color: #1a365d;
  font-size: 1.3rem;
  margin: 0;
`;

const PriorityDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const PriorityActions = styled.ul`
  color: #666;
  line-height: 1.6;
  padding-left: 1.5rem;
`;

const PriorityAction = styled.li`
  margin-bottom: 0.5rem;
`;

const District: React.FC = () => {
  return (
    <DistrictContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>District 1</HeroTitle>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <Section>
          <DistrictDescription>
            District 1 encompasses North Natomas and surrounding areas of Sacramento, including vibrant neighborhoods, schools, parks, and growing communities.
          </DistrictDescription>
        </Section>
      </MainContent>

      <MapSection>
        <GoogleDistrictMap />
      </MapSection>
    </DistrictContainer>
  );
};

export default District;
