import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconWrapper } from './IconWrapper';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.05);
  }
  50% {
    box-shadow: 0 0 30px rgba(96, 165, 250, 0.1);
  }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a202c 100%);
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div<{ index: number }>`
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #60a5fa 0%, transparent 100%);
    border-radius: 1px;
    animation: ${glowPulse} 2s ease-in-out infinite;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1rem;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${ContactItem}:hover & {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ContactText = styled.div`
  color: #a0aec0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const QuickLinksList = styled.ul`
  list-style: none;
`;

const QuickLinksItem = styled.li`
  margin-bottom: 0.75rem;
`;

const QuickLink = styled(Link)`
  color: #a0aec0;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #60a5fa 0%, transparent 100%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: #60a5fa;
    transform: translateX(5px);
  }

  &:hover::before {
    width: 100%;
  }
`;

const ResourcesList = styled.ul`
  list-style: none;
`;

const ResourcesItem = styled.li`
  margin-bottom: 0.75rem;
`;

const ResourceLink = styled.a`
  color: #a0aec0;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #60a5fa 0%, transparent 100%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: #60a5fa;
    transform: translateX(5px);
  }

  &:hover::before {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:hover::before {
    transform: scale(1);
  }

  svg {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #0a0a0a;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out 0.4s both;
`;

const Disclaimer = styled.p`
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Copyright = styled.p`
  color: #4a5568;
  font-size: 0.85rem;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
  color: #60a5fa;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  margin-top: 1rem;
  border: 1px solid rgba(96, 165, 250, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-color: rgba(96, 165, 250, 0.2);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0.08) 100%);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection index={0}>
            <FooterTitle>Lisa Kaplan</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <IconWrapper icon={FaPhone} size={16} />
                </ContactIcon>
                <ContactText>(209) 400-5122</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <IconWrapper icon={FaEnvelope} size={16} />
                </ContactIcon>
                <ContactText>lisa@lisakaplan.com</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <IconWrapper icon={FaMapMarkerAlt} size={16} />
                </ContactIcon>
                <ContactText>Sacramento City Council District 1</ContactText>
              </ContactItem>
            </ContactInfo>
            <SocialLinks>
              <SocialLink href="https://x.com/CM_LisaKaplan" target="_blank" rel="noopener noreferrer">
                <IconWrapper icon={FaTwitter} size={20} />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/CouncilwomanLisaKaplan/" target="_blank" rel="noopener noreferrer">
                <IconWrapper icon={FaFacebook} size={20} />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/councilmemberlisakaplan/?hl=en" target="_blank" rel="noopener noreferrer">
                <IconWrapper icon={FaInstagram} size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection index={1}>
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinksList>
              <QuickLinksItem>
                <QuickLink to="/about">About Lisa</QuickLink>
              </QuickLinksItem>
              <QuickLinksItem>
                <QuickLink to="/district">District 1</QuickLink>
              </QuickLinksItem>
              <QuickLinksItem>
                <QuickLink to="/action">Action at District 1</QuickLink>
              </QuickLinksItem>
              <QuickLinksItem>
                <QuickLink to="/get-involved">Get Involved</QuickLink>
              </QuickLinksItem>
            </QuickLinksList>
          </FooterSection>

          <FooterSection index={2}>
            <FooterTitle>Resources</FooterTitle>
            <ResourcesList>
              <ResourcesItem>
                <ResourceLink href="https://www.cityofsacramento.org" target="_blank" rel="noopener noreferrer">
                  City Services
                </ResourceLink>
              </ResourcesItem>
              <ResourcesItem>
                <ResourceLink href="https://www.cityofsacramento.org/City-Council" target="_blank" rel="noopener noreferrer">
                  City Council
                </ResourceLink>
              </ResourcesItem>
              <ResourcesItem>
                <ResourceLink href="/accessibility">Accessibility</ResourceLink>
              </ResourcesItem>
              <ResourcesItem>
                <ResourceLink href="/privacy">Privacy Policy</ResourceLink>
              </ResourcesItem>
            </ResourcesList>
          </FooterSection>

          <FooterSection index={3}>
            <FooterTitle>Stay Connected</FooterTitle>
            <ContactText style={{ marginBottom: '1rem' }}>
              Stay informed about District 1 updates and community events.
            </ContactText>
            <CTAButton to="/get-involved">
              Get Involved
            </CTAButton>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Disclaimer>
            Official website of Councilmember Lisa Kaplan - Sacramento City Council District 1
          </Disclaimer>
          <Copyright>
            © 2025 Lisa Kaplan. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
