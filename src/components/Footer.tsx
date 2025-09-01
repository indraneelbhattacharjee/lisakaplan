import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
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

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #f8f8ff 0%, #f0f8ff 100%);
  color: #000000;
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
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  text-align: center;

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
  font-size: 1.75rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: #000000;
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



const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.1rem;
  justify-content: center;
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
  padding-top: 0.02rem;
  text-align: center;
  animation: ${fadeInUp} 0.6s ease-out 0.4s both;
`;

const Disclaimer = styled.p`
  color: #718096;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Copyright = styled.p`
  color: #4a5568;
  font-size: 1rem;
  font-weight: 600;
`;



const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection index={0}>
            <FooterTitle>Contact Us</FooterTitle>
            <hr style={{ 
              width: '60px', 
              border: 'none', 
              borderTop: '2px solid #60a5fa', 
              margin: '0.5rem auto 0.5rem auto',
              borderRadius: '1px'
            }} />
            <div style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#000000',
              marginBottom: '0.25rem'
            }}>
              Lisa Kaplan for Council 2026
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '0.1rem'
            }}>
              P.O. Box 5445
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '0.1rem'
            }}>
              Madison Ave
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#000000',
              marginBottom: '1rem'
            }}>
              Sacramento, CA 95841
            </div>

            <SocialLinks>
              <SocialLink 
                href="https://x.com/CM_LisaKaplan" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  background: '#000000',
                  color: '#ffffff',
                  borderColor: '#000000'
                }}
              >
                <IconWrapper icon={FaTwitter} size={20} />
              </SocialLink>
              <SocialLink 
                href="https://www.facebook.com/CouncilwomanLisaKaplan/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  background: '#1877f2',
                  color: '#ffffff',
                  borderColor: '#1877f2'
                }}
              >
                <IconWrapper icon={FaFacebook} size={20} />
              </SocialLink>
              <SocialLink 
                href="https://www.instagram.com/councilmemberlisakaplan/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  color: '#ffffff',
                  borderColor: 'transparent'
                }}
              >
                <IconWrapper icon={FaInstagram} size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>


        </FooterGrid>

        <FooterBottom>
          <Disclaimer>
            Paid for by Lisa Kaplan for City Council 2026
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
