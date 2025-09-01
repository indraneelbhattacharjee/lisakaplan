import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandshake, FaNewspaper, FaUsers } from 'react-icons/fa';
import { IconWrapper } from '../components/IconWrapper';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(96, 165, 250, 0.2);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  0%, 50% {
    border-color: transparent;
  }
  51%, 100% {
    border-color: #60a5fa;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.6) 0%, rgba(26, 32, 44, 0.6) 50%, rgba(10, 10, 10, 0.6) 100%), url('/favicon_io/lisajuly3rdpress.jpg');
  background-size: cover;
  background-position: center -10%;
  background-attachment: fixed;
  color: white;
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(96, 165, 250, 0.02) 0%, transparent 50%);
    animation: ${pulse} 4s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgba(10, 10, 10, 1), transparent);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-right: 0;
  margin-right: 20px;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: center;
    text-align: center;
    margin-right: auto;
  }
`;

const HeroTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

// Removed HeroBottom since nav is now inline under the button

const HeroButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const HeroActionButton = styled(Link)`
  background: #012E9D;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 46, 157, 0.3);
    background: #1a4db8;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #60a5fa, transparent);
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 3rem;
  opacity: 1;
  max-width: 1000px;
  line-height: 1.6;
  font-weight: 700;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

const HeroBio = styled.div`
  text-align: left;
  max-width: 500px;
  margin-right: 0;
  margin-top: 10rem;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    margin-top: 4rem;
  }
`;

const BioText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const GetInvolvedButton = styled(Link)`
  background: #012E9D;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 46, 157, 0.3);
    background: #1a4db8;
  }
`;

const HeroProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: -15.1875rem 0 0 -3rem;
  overflow: hidden;
  border: 4px solid rgba(96, 165, 250, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #60a5fa, #a78bfa, #60a5fa);
    border-radius: 50%;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: -7.59375rem auto 0;
  }
`;



const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4rem;
  margin-left: -3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ActionButton = styled(Link)<{ $primary?: boolean }>`
  background: ${props => props.$primary 
    ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)' 
    : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.$primary ? '#60a5fa' : '#a0aec0'};
  padding: 1.25rem 2.5rem;
  border: 2px solid ${props => props.$primary ? 'rgba(96, 165, 250, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  animation: ${float} 3s ease-in-out infinite;
  min-height: 60px;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.5);
    background: ${props => props.$primary 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)' 
      : 'rgba(255, 255, 255, 0.1)'};
  }

  &:hover::before {
    left: 100%;
  }
`;

const MissionSection = styled.section`
  padding: 6rem 0;
  background: #0a0a0a;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const MissionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MissionText = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: #a0aec0;
  font-weight: 400;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const FeatureIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(96, 165, 250, 0.1);
  animation: ${float} 4s ease-in-out infinite;

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0.08) 100%);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  color: #a0aec0;
  line-height: 1.7;
  font-size: 1.1rem;
`;

const ContactSection = styled.section`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a202c 100%);
  padding: 6rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${float} 3s ease-in-out infinite;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactLabel = styled.div`
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const ContactValue = styled.div`
  color: #a0aec0;
  font-size: 1rem;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTop>
            <HeroBio>
              <BioText>
                Lisa has served District 1 on the Sacramento City Council since 2022, and has been a champion for the voices of her constituents on the issues that matter most to them; from public safety and sustainable growth to efficiency in our public services, and improving our community's infrastructure & family amenities.
              </BioText>
              <HeroButtonGroup>
                <GetInvolvedButton to="/get-involved">
                  Get Involved
                </GetInvolvedButton>
                <HeroActionButton to="/about">About Lisa</HeroActionButton>
                <HeroActionButton to="/action">Action @ D1</HeroActionButton>
              </HeroButtonGroup>
            </HeroBio>
          </HeroTop>
        </HeroContent>
      </HeroSection>






    </HomeContainer>
  );
};

export default Home;
