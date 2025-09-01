import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const GetInvolvedContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(45, 90, 135, 0.9) 100%), url('/sacramento.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 4rem 0;
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
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 600px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const UnifiedCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const MessageSection = styled.div`
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormSection = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MessageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CampaignMessage = styled.div`
  position: relative;
  z-index: 1;
`;

const MessageText = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-weight: 400;
  opacity: 0.95;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: #60a5fa;
    font-weight: 700;
  }
`;

const Signature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
`;

const SignatureText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`;

const SignatureImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  position: relative;
  z-index: 1;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #1a365d;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background: #f8f9fa;

  &:focus {
    border-color: #60a5fa;
    background: white;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }

  &::placeholder {
    color: #6c757d;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #60a5fa;
  background: white;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #1a365d;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #1a365d;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  margin: 0;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(26, 54, 93, 0.3);
    background: linear-gradient(135deg, #2d5a87 0%, #1a365d 100%);
  }

  &:active {
    transform: translateY(0);
  }
`;

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    address: '',
    volunteer: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <GetInvolvedContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Get Involved</HeroTitle>
          <HeroSubtitle>
            Join us in building a stronger, more vibrant District 1 community
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <UnifiedCard>
          <MessageSection>
            <MessageTitle>Join Team Kaplan</MessageTitle>
            
            <CampaignMessage>
              <MessageText>
                Without you, none of the accomplishments of the last few years would have been possible. 
                We still have more work to do to achieve our city's full potential, but I know that 
                everything is within our grasp if we move forward together.
              </MessageText>
              <MessageText>
                Can I count on you to join Team Kaplan and help us take this campaign to victory in June?
              </MessageText>
              <MessageText>
                With your time, energy and support, I'm confident that we can win this race and continue 
                fighting for a better future for District 1 & Sacramento, because we are always 
                <strong> #BETTERTOGETHER</strong> ✍️
              </MessageText>
              
              <Signature>
                <SignatureImage 
                  src="/lisaprofile.jpeg" 
                  alt="Lisa Kaplan" 
                />
                <SignatureText>
                  Lisa
                </SignatureText>
              </Signature>
              
              <SocialLinks>
                <SocialLink href="https://x.com/CM_LisaKaplan" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={20} />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/CouncilwomanLisaKaplan/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/councilmemberlisakaplan/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} />
                </SocialLink>
              </SocialLinks>
            </CampaignMessage>
          </MessageSection>
          
          <FormSection>
            <SectionTitle>Get Involved</SectionTitle>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="mobile">Mobile *</Label>
                  <Input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                required
              />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="address">Address *</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  required
                />
              </FormGroup>
              
              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  id="volunteer"
                  name="volunteer"
                  checked={formData.volunteer}
                  onChange={handleChange}
                />
                <CheckboxLabel htmlFor="volunteer">
                  I want to Volunteer
                </CheckboxLabel>
              </CheckboxGroup>
              
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </FormSection>
        </UnifiedCard>
      </MainContent>
    </GetInvolvedContainer>
  );
};

export default GetInvolved;
