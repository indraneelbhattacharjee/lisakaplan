import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: url('/lisaconf2.jpg') center center;
  background-size: cover;
  min-height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: heroFadeIn 1.5s ease-out forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
  
  @keyframes heroFadeIn {
    from {
      opacity: 0;
      transform: scale(1.05);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    min-height: 50vh;
  }

  @media (max-width: 480px) {
    min-height: 40vh;
  }
`;



const StorySection = styled.section`
  padding: 6rem 0;
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
`;

const StoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &.reverse {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }
`;

const StoryImage = styled.div`
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  opacity: 1;
  transform: translateX(0);

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  &.reverse {
    transform: translateX(0);
    
    &.visible {
      transform: translateX(0);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const StoryText = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  h2 {
    font-size: 3.5rem !important;
    font-weight: 900 !important;
    background: linear-gradient(135deg, #012E9D 0%, #1a4db8 50%, #4a90e2 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    margin-bottom: 2.5rem;
    line-height: 1.1;
    
    @media (max-width: 768px) {
      font-size: 2.8rem !important;
    }
  }
  
  p {
    font-size: 1.3rem;
    line-height: 1.8;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  strong {
    color: #012E9D;
    font-weight: 800;
  }
`;

const FullWidthImage = styled.div`
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  margin: 4rem 0;
  opacity: 1;
  transform: translateY(0);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 5rem 3rem;
  background: #ffffff;
  color: #1a1a1a;
  margin-top: 4rem;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 30px rgba(1, 46, 157, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  h2 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 2rem;
    color: #012E9D !important;
    letter-spacing: 0.2em;
    text-shadow: 0 0 20px rgba(1, 46, 157, 0.3);
  }
  
  p {
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 1 !important;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    color: #1a1a1a !important;
  }
  
  strong {
    color: #012E9D !important;
    font-weight: 800 !important;
    -webkit-text-fill-color: #012E9D !important;
    background: none !important;
    background-clip: unset !important;
    -webkit-background-clip: unset !important;
    filter: none !important;
    text-shadow: 0 0 15px rgba(1, 46, 157, 0.4);
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    margin-top: 3rem;
    border-radius: 20px;
    
    h2 {
      font-size: 3rem;
      letter-spacing: 0.1em;
    }
    
    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    margin-top: 2rem;
    
    h2 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.2rem;
    }
  }
`;

const keyframes = {
  fadeInUp: `
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `
};













const About: React.FC = () => {
  const [visibleElements, setVisibleElements] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      if (el.id) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AboutContainer>
      <style>{keyframes.fadeInUp}</style>
      
      <HeroSection />

      <StorySection>
        <StoryContent>
          <StoryGrid>
            <StoryText 
              data-animate 
              id="story-1"
              className={visibleElements.has('story-1') ? 'visible' : ''}
            >
              <h2>The Journey Begins</h2>
              <p>
                Lisa has served District 1 on the Sacramento City Council since 2022, and has been a champion for the voices of her constituents on the issues that matter most to them; from public safety and sustainable growth to efficiency in our public services, and improving our community's infrastructure & family amenities.
              </p>
            </StoryText>
            <StoryImage 
              data-animate 
              id="image-1"
              className={visibleElements.has('image-1') ? 'visible' : ''}
            >
              <img src="/lisaconf1.jpg" alt="Lisa Kaplan - Council Leadership" />
            </StoryImage>
          </StoryGrid>

          <FullWidthImage 
            data-animate 
            id="full-image-1"
            className={visibleElements.has('full-image-1') ? 'visible' : ''}
          >
            <img src="/lisaconf3.jpg" alt="Lisa Kaplan - Community Engagement" />
          </FullWidthImage>

          <StoryGrid className="reverse">
            <StoryImage 
              data-animate 
              id="image-2"
              className={`reverse ${visibleElements.has('image-2') ? 'visible' : ''}`}
            >
              <img src="/lisaconf4.jpg" alt="Lisa Kaplan - School Board Service" />
            </StoryImage>
            <StoryText 
              data-animate 
              id="story-2"
              className={visibleElements.has('story-2') ? 'visible' : ''}
            >
              <h2>Two Decades of Service</h2>
              <p>
                Prior to being elected to the City Council, Lisa served as a Natomas School Board member for twenty years, advocating for our local youth, families and schools.
              </p>
              <p>
                As a Natomas School Board Trustee, Lisa was instrumental in leading the passage of 4 school bonds, contributing to the construction or modernization of every school in Natomas. As Board President in 2020, Lisa proudly led Natomas Unified through the Covid-19 pandemic while prioritizing the safety, equitable treatment and access to education of NUSD's students.
              </p>
            </StoryText>
          </StoryGrid>

          <StoryGrid>
            <StoryText 
              data-animate 
              id="story-3"
              className={visibleElements.has('story-3') ? 'visible' : ''}
            >
              <h2>Leadership in Action</h2>
              <p>
                As our Councilmember, Lisa has led the way in striving to make D1 & Sacramento a safer, more vibrant, and better place to live, work and raise a family. Councilmember Kaplan successfully fought for action to address dangerous sideshows, reckless driving & illegal fireworks; reverse cuts in city services; stop waste from polluting our canals, streets & critical infrastructure; demand change & improved mailbox security from the US Postal Service; improve & beautify our local parks; while working hand-in-hand with constituents every day to deliver the action they need from their city government.
              </p>
            </StoryText>
            <StoryImage 
              data-animate 
              id="image-3"
              className={visibleElements.has('image-3') ? 'visible' : ''}
            >
              <img src="/lisaprofile.jpeg" alt="Lisa Kaplan - Personal Leadership" />
            </StoryImage>
          </StoryGrid>

          <StoryGrid className="reverse">
            <StoryImage 
              data-animate 
              id="image-4"
              className={`reverse ${visibleElements.has('image-4') ? 'visible' : ''}`}
            >
              <img src="/lisaconf2.jpg" alt="Lisa Kaplan - Community Champion" />
            </StoryImage>
            <StoryText 
              data-animate 
              id="story-4"
              className={visibleElements.has('story-4') ? 'visible' : ''}
            >
              <h2>Roots in Community</h2>
              <p>
                Councilmember Kaplan first moved to Sacramento in 1997, and is proud to have called Natomas home for decades. Lisa currently lives in the Westshore community with her husband, Brian, and their daughters, Viva & Asha.
              </p>
              <p>
                Lisa wears many hats as a wife, mother, Councilmember, and small business owner; her family & her community have always been the center of her focus and dedication. She has a deep passion to serve, collaborate, and help improve the lives of others through empathy, hard work and common sense solutions.
              </p>
            </StoryText>
          </StoryGrid>

          <CallToAction 
            data-animate 
            id="cta"
            className={visibleElements.has('cta') ? 'visible' : ''}
          >
            <h2>#BETTERTOGETHER</h2>
            <p>
              The experiences and challenges she's faced throughout her life have helped prepare her to be a leader suited to represent a strong, diverse, and confident community like District 1 - a leader who knows that we are always, <strong>#Bettertogether</strong>.
            </p>
          </CallToAction>
        </StoryContent>
      </StorySection>
    </AboutContainer>
  );
};

export default About;
