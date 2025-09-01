import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExclamationTriangle, FaTools, FaLightbulb, FaComments, FaChartLine, FaHandshake } from 'react-icons/fa';
import { IconWrapper } from '../components/IconWrapper';

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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const IssuesContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a202c 50%, #0a0a0a 100%);
  color: white;
  padding: 6rem 0 4rem;
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
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.03) 0%, transparent 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 1s ease-out;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: #a0aec0;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const IssuesSection = styled.section`
  padding: 6rem 0;
  background: #0a0a0a;
  position: relative;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  text-align: center;
  color: #ffffff;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const IssuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const IssueCard = styled.div`
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

const IssueIcon = styled.div`
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

  ${IssueCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0.08) 100%);
  }
`;

const IssueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
`;

const IssueDescription = styled.p`
  color: #a0aec0;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const IssueStatus = styled.div<{ $status: 'active' | 'resolved' | 'in-progress' }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  background: ${props => {
    switch (props.$status) {
      case 'active': return 'rgba(239, 68, 68, 0.1)';
      case 'resolved': return 'rgba(34, 197, 94, 0.1)';
      case 'in-progress': return 'rgba(245, 158, 11, 0.1)';
      default: return 'rgba(96, 165, 250, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'active': return '#ef4444';
      case 'resolved': return '#22c55e';
      case 'in-progress': return '#f59e0b';
      default: return '#60a5fa';
    }
  }};
  border: 1px solid ${props => {
    switch (props.$status) {
      case 'active': return 'rgba(239, 68, 68, 0.2)';
      case 'resolved': return 'rgba(34, 197, 94, 0.2)';
      case 'in-progress': return 'rgba(245, 158, 11, 0.2)';
      default: return 'rgba(96, 165, 250, 0.2)';
    }
  }};
`;

const IssueActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
  color: #60a5fa;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0.08) 100%);
    border-color: rgba(96, 165, 250, 0.3);
  }
`;

const Issues: React.FC = () => {
  return (
    <IssuesContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Current Issues</HeroTitle>
          <HeroSubtitle>
            Addressing the challenges facing District 1 with transparency and community-driven solutions
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <IssuesSection>
        <SectionContent>
          <SectionTitle>Issues We're Addressing</SectionTitle>
          
          <IssuesGrid>
            <IssueCard>
              <IssueIcon>
                <IconWrapper icon={FaExclamationTriangle} size={40} />
              </IssueIcon>
              <IssueTitle>Traffic Safety Concerns</IssueTitle>
              <IssueStatus $status="active">Active Issue</IssueStatus>
              <IssueDescription>
                Working to improve traffic flow and safety at key intersections throughout District 1, 
                including speed limit enforcement and pedestrian safety measures.
              </IssueDescription>
              <IssueActions>
                <ActionButton>Report Issue</ActionButton>
                <ActionButton>Track Progress</ActionButton>
              </IssueActions>
            </IssueCard>

            <IssueCard>
              <IssueIcon>
                <IconWrapper icon={FaTools} size={40} />
              </IssueIcon>
              <IssueTitle>Infrastructure Maintenance</IssueTitle>
              <IssueStatus $status="in-progress">In Progress</IssueStatus>
              <IssueDescription>
                Addressing road repairs, street lighting, and drainage improvements to maintain 
                quality infrastructure and prevent flooding issues.
              </IssueDescription>
              <IssueActions>
                <ActionButton>Report Issue</ActionButton>
                <ActionButton>Track Progress</ActionButton>
              </IssueActions>
            </IssueCard>

            <IssueCard>
              <IssueIcon>
                <IconWrapper icon={FaLightbulb} size={40} />
              </IssueIcon>
              <IssueTitle>Public Lighting</IssueTitle>
              <IssueStatus $status="resolved">Resolved</IssueStatus>
              <IssueDescription>
                Successfully upgraded street lighting in residential areas to improve safety 
                and visibility for pedestrians and motorists.
              </IssueDescription>
              <IssueActions>
                <ActionButton>View Details</ActionButton>
                <ActionButton>Provide Feedback</ActionButton>
              </IssueActions>
            </IssueCard>

            <IssueCard>
              <IssueIcon>
                <IconWrapper icon={FaComments} size={40} />
              </IssueIcon>
              <IssueTitle>Community Communication</IssueTitle>
              <IssueStatus $status="in-progress">In Progress</IssueStatus>
              <IssueDescription>
                Enhancing communication channels between residents and city services to ensure 
                faster response times and better service delivery.
              </IssueDescription>
              <IssueActions>
                <ActionButton>Learn More</ActionButton>
                <ActionButton>Get Updates</ActionButton>
              </IssueActions>
            </IssueCard>

            <IssueCard>
              <IssueIcon>
                <IconWrapper icon={FaChartLine} size={40} />
              </IssueIcon>
              <IssueTitle>Economic Development</IssueTitle>
              <IssueStatus $status="active">Active Issue</IssueStatus>
              <IssueDescription>
                Supporting local businesses and attracting new economic opportunities to 
                strengthen our community's economic foundation and create jobs.
              </IssueDescription>
              <IssueActions>
                <ActionButton>Learn More</ActionButton>
                <ActionButton>Get Involved</ActionButton>
              </IssueActions>
            </IssueCard>

            <IssueCard>
              <IssueIcon>
                <IconWrapper icon={FaHandshake} size={40} />
              </IssueIcon>
              <IssueTitle>Community Engagement</IssueTitle>
              <IssueStatus $status="in-progress">In Progress</IssueStatus>
              <IssueDescription>
                Building stronger community connections and increasing resident participation 
                in local decision-making processes and events.
              </IssueDescription>
              <IssueActions>
                <ActionButton>Learn More</ActionButton>
                <ActionButton>Get Involved</ActionButton>
              </IssueActions>
            </IssueCard>
          </IssuesGrid>
        </SectionContent>
      </IssuesSection>
    </IssuesContainer>
  );
};

export default Issues;
