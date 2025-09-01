import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandshake, FaNewspaper, FaUsers, FaShieldAlt, FaCity, FaTree, FaChild, FaHandHoldingHeart } from 'react-icons/fa';
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
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.2) 0%, rgba(26, 32, 44, 0.2) 50%, rgba(10, 10, 10, 0.2) 100%), url('/lisad1council.jpg');
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

  @media (max-width: 768px) {
    padding: 4rem 0 2rem;
    min-height: 80vh;
    background-attachment: scroll;
    background-position: center;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 1.5rem;
    min-height: 70vh;
  }


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
  padding-left: 2rem;
  margin-left: 20px;
  padding-top: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: center;
    text-align: center;
    margin-left: auto;
  }
`;

const HeroTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    align-items: center;
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

const HeroLogo = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  margin-top: -5rem;
  
  img {
    max-width: 400px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  
  @media (max-width: 768px) {
    text-align: center;
    
    img {
      max-width: 250px;
    }
  }
`;

const HeroBio = styled.div`
  text-align: left;
  max-width: 500px;
  margin-left: 0;
  margin-top: 0.8rem;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    margin-top: 0.8rem;
  }
`;

const BioText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 2rem;
  font-weight: 900;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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

const HighlightsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%), 
              url('/lisaconf5.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(150px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const HighlightsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(3, 350px);
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
  
  /* Position cards to form X pattern */
  & > *:nth-child(1) { grid-area: 1 / 1; } /* Top left */
  & > *:nth-child(2) { grid-area: 1 / 3; } /* Top right */
  & > *:nth-child(3) { grid-area: 2 / 2; } /* Center */
  & > *:nth-child(4) { grid-area: 3 / 1; } /* Bottom left */
  & > *:nth-child(5) { grid-area: 3 / 3; } /* Bottom right */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(3, 300px);
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const HighlightsTitle = styled.h2`
  font-size: 3rem !important;
  font-weight: 900 !important;
  text-align: center !important;
  margin-bottom: 3rem !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  text-transform: uppercase !important;
  letter-spacing: 0.3em !important;

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
    margin-bottom: 2rem !important;
    letter-spacing: 0.2em !important;
  }

  @media (max-width: 480px) {
    font-size: 2rem !important;
    margin-bottom: 1.5rem !important;
    letter-spacing: 0.1em !important;
  }
`;

const CategoryCard = styled.div`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a202c 50%, #0a0a0a 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 250px;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    min-height: 200px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(96, 165, 250, 0.2);
    background: rgba(255, 255, 255, 0.03);
    cursor: pointer;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #60a5fa;
  font-size: 1.5rem;
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.2);
  border: 2px solid rgba(96, 165, 250, 0.2);
`;

const CategoryPreview = styled.p`
  color: #a0aec0;
  line-height: 1.4;
  margin-bottom: 0;
  text-align: center;
  font-size: 0.95rem;
`;

const HorizontalLine = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(147, 112, 219, 0.5), transparent);
  margin: 3rem 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  
  &.visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: scale(0.8);
  transition: transform 0.3s ease;
  
  .visible & {
    transform: scale(1);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: #012E9D;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
  }
`;

const SwipeContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background: #f8f9fa;
  padding: 2rem;
  margin: 1rem 0;
`;

const SwipeContent = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(0);
`;

const SwipeItem = styled.div`
  min-width: 100%;
  padding: 1rem;
  
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #012E9D;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    color: #333;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const SwipeControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SwipeButton = styled.button`
  background: #012E9D;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a4db8;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);


  const highlightsData = {
    'Public Safety & Infrastructure': {
      preview: 'Keeping our communities safe and improving our infrastructure',
      items: [
        {
          title: 'Traffic Safety Improvements',
          content: [
            'Identified & improved accident-prone intersections by working with City staff to install quick-build pedestrian islands & safety markers',
            'Ex: Club Center Dr & Banfield Dr and Blackrock Dr & Irongate Way',
            'Re-striped cross walks and added speed tables in our neighborhoods to slow down drivers and put community safety first',
            'Successfully advocated for speed lump installations in key areas to reduce the safety risks of speeding & reckless driving in our neighborhoods',
            'Ex: Sardinia Island Way, Hovnanian Drive, Rose Arbor Drive, Natomas Central Drive'
          ]
        },
        {
          title: 'Community Security',
          content: [
            'Partnered with Congressman Ami Bera, regional leaders & District 1 residents to fight for an audit of USPS mailbox security and demand steps be taken to fix the mail theft issue immediately',
            'Took action to crackdown on illegal fireworks and prevent property damage & fires near our neighborhoods, parks & schools',
            'Partnered with Sacramento PD to increase patrols around critical areas like schools to hold reckless drivers accountable',
            'Responded to dangerous sideshows which endangered the lives of innocent bystanders by passing legislation to increase fines, impound cars in sideshows, and allow our DA to charge participants with public nuisance'
          ]
        }
      ]
    },
    'City Services & Development': {
      preview: 'Improving city services and fostering sustainable development',
      items: [
        {
          title: 'Infrastructure Projects',
          content: [
            'Actively collaborating with City staff around plans for the Shora Vista overcrossing to reduce congestion and improve connectivity',
            'Partnered with Congressman Ami Bera to secure federal funds for the preliminary work needed to create a design for a pedestrian & bicycle overcrossing over Interstate 5, between Arena Boulevard & Del Paso Road',
            'Brought affordable housing units to the district for working families'
          ]
        },
        {
          title: 'Environmental Initiatives',
          content: [
            'Partnered with the RCWA, Forensiclean & the Friends of Steelhead Creek to clean up over 12,000 pounds of waste affecting Steelhead Creek',
            'Worked with the community to host over a dozen tree plantings, community clean ups, & park beatifications in District 1'
          ]
        }
      ]
    },
    'Parks & Recreation': {
      preview: 'Enhancing our parks and recreational facilities',
      items: [
        {
          title: 'Park Improvements',
          content: [
            'Secured $300,000 of funds to renovate North Pointe Park',
            'Secured local funding to install additional lights at North Natomas Regional Park',
            'Secured the installation of a cricket pitch at Northlake Community Park, allowing for Natomas\' & District 1\'s first ever official cricket league to be formed',
            'Opened the new Westshore Park in March of 2025',
            'Mobilized volunteers to plant over 150 new trees in our local parks'
          ]
        }
      ]
    },
    'Youth & Community Support': {
      preview: 'Supporting our youth and building stronger communities',
      items: [
        {
          title: 'Community Events',
          content: [
            'Hosted more than 180, family friendly, community events for constituents in District One',
            'Founded the One Youth program in 2023 - providing opportunities for community service, experience building, leadership development, and extracurricular activities to over 400 local students in D1',
            'Awarded $1,500 of scholarship funds to local District 1 students in 2025, and provided free chromebooks to students in 2023 & 2024'
          ]
        }
      ]
    },
    'Homelessness & Social Services': {
      preview: 'Addressing homelessness and improving social services',
      items: [
        {
          title: 'Homelessness Response',
          content: [
            'Pushed for an audit of our City\'s homelessness response programs - continuing the fight for further accountability from service providers and better strategies to exit people into long-term housing',
            'Partnered with Council Colleagues to adopt updated Homeless Response Protocols',
            'Annual sponsor the Packs of Love & Compassion event, which distributes hundreds of backpacks to the unhoused every year'
          ]
        }
      ]
    }
  };

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedCategory) {
      const categoryData = highlightsData[selectedCategory as keyof typeof highlightsData];
      if (currentSlide < categoryData.items.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTop>
            <HeroLogo>
              <img src="/kaplancampaignnew.png" alt="Lisa Kaplan Campaign Logo" />
            </HeroLogo>
            <HeroBio>
              <BioText>
                Lisa has served District 1 on the Sacramento City Council since 2022, and has been a champion for the voices of her constituents on the issues that matter most to them; from public safety and sustainable growth to efficiency in our public services, and improving our community's infrastructure & family amenities.
              </BioText>
              <HeroButtonGroup>
                <GetInvolvedButton to="/get-involved">
                  Get Involved
                </GetInvolvedButton>
                <HeroActionButton to="/about">About Lisa</HeroActionButton>
                <HeroActionButton to="/action">Action For District 1</HeroActionButton>
              </HeroButtonGroup>
            </HeroBio>
          </HeroTop>
        </HeroContent>
      </HeroSection>

      <HighlightsSection>
        <HighlightsContent>
          <HighlightsTitle>Achievements</HighlightsTitle>
          
          <CardsGrid>
            {Object.entries(highlightsData).map(([category, data]) => (
              <CategoryCard 
                key={category} 
                onClick={() => {
                  console.log('Card clicked:', category);
                  openModal(category);
                }}
                style={{ cursor: 'pointer' }}
              >
                <CategoryIcon>
                  {category === 'Public Safety & Infrastructure' && <FaShieldAlt />}
                  {category === 'City Services & Development' && <FaCity />}
                  {category === 'Parks & Recreation' && <FaTree />}
                  {category === 'Youth & Community Support' && <FaChild />}
                  {category === 'Homelessness & Social Services' && <FaHandHoldingHeart />}
                </CategoryIcon>
                <CategoryTitle>{category}</CategoryTitle>
                <CategoryPreview>{data.preview}</CategoryPreview>
              </CategoryCard>
            ))}
          </CardsGrid>
        </HighlightsContent>
      </HighlightsSection>

      <Modal className={selectedCategory ? 'visible' : ''} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {selectedCategory && (
            <>
              <ModalHeader>
                <ModalTitle>{selectedCategory}</ModalTitle>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
              </ModalHeader>
              
              <SwipeContainer>
                <SwipeContent style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {highlightsData[selectedCategory as keyof typeof highlightsData].items.map((item, index) => (
                    <SwipeItem key={index}>
                      <h4>{item.title}</h4>
                      <ul>
                        {item.content.map((content, contentIndex) => (
                          <li key={contentIndex}>{content}</li>
                        ))}
                      </ul>
                    </SwipeItem>
                  ))}
                </SwipeContent>
                
                <SwipeControls>
                  <SwipeButton 
                    onClick={prevSlide} 
                    disabled={currentSlide === 0}
                  >
                    ← Previous
                  </SwipeButton>
                  <span style={{ padding: '0.5rem 1rem', color: '#666' }}>
                    {currentSlide + 1} of {highlightsData[selectedCategory as keyof typeof highlightsData].items.length}
                  </span>
                  <SwipeButton 
                    onClick={nextSlide} 
                    disabled={currentSlide === highlightsData[selectedCategory as keyof typeof highlightsData].items.length - 1}
                  >
                    Next →
                  </SwipeButton>
                </SwipeControls>
              </SwipeContainer>
            </>
          )}
        </ModalContent>
      </Modal>
    </HomeContainer>
  );
};

export default Home;
