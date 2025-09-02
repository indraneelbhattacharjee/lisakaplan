import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaShieldAlt, FaSchool, FaRoad, FaHome, FaBus, FaEye, FaHandshake, FaUsers, FaExclamationTriangle, FaTools, FaLightbulb, FaComments, FaChartLine, FaTimes, FaFire, FaCar, FaWalking, FaUsersCog, FaCity, FaBuilding, FaTree, FaChild, FaHandHoldingHeart, FaRecycle } from 'react-icons/fa';
import { IconWrapper } from '../components/IconWrapper';
import GoogleDistrictMap from '../components/GoogleDistrictMap';

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ActionContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a202c 50%, #0a0a0a 100%);
  color: white;
  padding: 3rem 0 2rem;
  position: relative;
  overflow: hidden;
  min-height: 25vh;
  display: flex;
  align-items: center;
`;

const MapBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.3;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background: rgba(0, 0, 0, 0.033);
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: #ffffff !important;
  text-transform: uppercase !important;
  animation: ${fadeInUp} 1s ease-out;
  background: none !important;
  -webkit-background-clip: unset !important;
  -webkit-text-fill-color: #ffffff !important;
  background-clip: unset !important;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 400;
  color: #a0aec0;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const ActionSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f8ff 0%, #f0f8ff 100%);
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
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  color: #012E9D;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const PrioritiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  position: relative;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const PriorityCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%);
  border: 2px solid rgba(1, 46, 157, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 35px rgba(1, 46, 157, 0.1);
  position: relative;
  overflow: visible;
  cursor: pointer;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
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
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const PriorityIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #60a5fa;
  font-size: 2rem;
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.2);
  border: 2px solid rgba(96, 165, 250, 0.2);
  animation: ${float} 3s ease-in-out infinite;
`;

const PriorityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
`;

const PriorityDescription = styled.p`
  color: #000000;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ClickToLearn = styled.div`
  color: #60a5fa;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #a78bfa;
    transform: translateX(5px);
  }
`;

// Modal Styles
const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${slideIn} 0.3s ease-out;
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 85vh;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    max-width: 98vw;
    max-height: 80vh;
    border-radius: 10px;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem 0.5rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #000000 !important;
  margin: 0;
  text-shadow: none !important;
  background: none !important;
  background-color: transparent !important;
  -webkit-text-fill-color: #000000 !important;
  -webkit-background-clip: unset !important;
  background-clip: unset !important;
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666666;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  color: #333333;
  line-height: 1.7;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    color: #012E9D;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const SubBulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 1rem;
`;

const SubBulletItem = styled.li`
  color: #444444;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  font-size: 0.95rem;

  &::before {
    content: '◦';
    color: #012E9D;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const SubSubBulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 1rem;
`;

const SubSubBulletItem = styled.li`
  color: #555555;
  line-height: 1.5;
  margin-bottom: 0.3rem;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;

  &::before {
    content: '▪';
    color: #012E9D;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Action: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'public-safety',
      title: 'Public Safety',
      icon: FaShieldAlt,
      description: 'Ensuring our neighborhoods are safe and secure through comprehensive safety initiatives.',
      content: {
        'Illegal Fireworks': [
          'Took action to crackdown on illegal fireworks and prevent property damage & fires near our neighborhoods, parks & schools',
          'Gave Sacramento FD new tools to monitor illegal fireworks and increased fines for possession of illegal fireworks',
          'Coordinated with Sacramento PD & the community to stop an illegal fireworks gathering in District 1 - leading to the confiscation of over 200 pounds of illegal fireworks, preventing thousands of dollars in damage to our public spaces, and leading to the offenders being arrested',
          'Total fines issued for illegal fireworks in Sacramento in 2025 exceeded $3,000,000'
        ],
        'Sideshows': [
          'Responded to dangerous sideshows which endangered the lives of innocent bystanders by passing legislation to increase fines, impound cars in sideshows, and allow our DA to charge participants with causing a public nuisance',
          'Partnered with local HOAs to host meetings with residents in areas affected by sideshows to talk about how they could report incidents, and work with my office to solve the issue'
        ],
        'Quick Builds & Street Safety': [
          {
            text: 'Identified & improved accident-prone intersections by working with City staff to install quick-build pedestrian islands & safety markers',
            subPoints: [
              'Ex: Club Center Dr & Banfield Dr and Blackrock Dr & Irongate Way',
              'Re-striped cross walks and added speed tables in our neighborhoods to slow down drivers and put community safety first'
            ]
          },
          'Tackled congestion by working with Sac RT to mitigate conflicts with bus layover schedules',
          'Partnered with North Natomas Jibe to launch the "For Each Other Campaign" to spread awareness about the importance of safe driving, obeying traffic rules, and instruct our students on how to stay safe when walking, cycling, or scootering',
          {
            text: 'Advocated for increased Sacramento PD patrols & presence to keep residents safe',
            subPoints: [
              'Partnered with Sacramento PD to increase patrols around critical areas like schools to hold reckless drivers accountable',
              'Partnered with Sacramento PD to expand enforcement efforts around preventing speeding in District 1'
            ]
          },
          {
            text: 'Reduced speed limits along Northborough Drive between Elkhorn & North Park Drive',
            subPoints: [
              'My offices continues to fight for additional reductions where needed and for the implementation of further traffic calming measures',
              'I support a 2026 Transportation Safety Measure being on the ballot to fund the improvements needed to achieve the safety our communities deserve'
            ]
          },
          {
            text: 'My office successfully advocated for speed lump installations in key areas to reduce the safety risks of speeding and reckless driving within neighborhoods:',
            subPoints: [
              {
                text: 'Sardinia Island Way, 3 Speed Lumps',
                subPoints: ['Between Lenten Way & Natomas Central Drive']
              },
              {
                text: 'Hovnanian Drive, 4 Speed Lumps',
                subPoints: ['Between Tracian Sea Lane & Natomas Central Drive']
              },
              {
                text: 'Rose Arbor Drive, 2 Speed Lumps',
                subPoints: ['Between Northborough Drive & Hidden Trail Lane']
              },
              {
                text: 'Natomas Central Drive, 3 Speed Lumps',
                subPoints: ['Between Odessa Lane & El Centro Road']
              }
            ]
          }
        ],
        'Mailbox Theft & Community Safety': [
          'Partnered with Congressman Ami Bera, regional leaders & District 1 residents to fight for an audit of USPS mailbox security and demand steps be taken to fix the mail theft issue immediately',
          'This audit proved the security failures of the USPS which allowed for mail thieves to use stolen master keys to access our mailboxes - now, we\'re continuing to fight for greater accountability, investment and protection of privacy from USPS',
          'Demanded USPS take action to improve security, such as paying for increased surveillance - for updates on progress around this issue, please email: district1@cityofsacramento.org',
          'Supported the passage of Proposition 36 to give law enforcement new tools to prevent retail theft and protect local businesses',
          {
            text: 'My office hosts Sacramento PD District 1 Forums at our Natomas Police & Community Resource Center annually',
            subPoints: [
              'These forums addressed general questions, concerns, or complaints residents may have had with our Sac PD North Area team',
              'In these meetings, we discussed issues such as street racing, sideshows, mailbox theft, and were able to learn more about our Problem Oriented Policing (POP) Team and School Resource Officers (SRO\'s)'
            ]
          }
        ],
        'Homelessness': [
          {
            text: 'Partnered with Council Colleagues to adopt updated Homeless Response Protocols',
            subPoints: [
              'Gave direction to the Sacramento city manager to ensure safe environments near our critical infrastructure, on our sidewalks in our parks'
            ]
          },
          {
            text: 'Pushed for an audit of our City\'s homelessness response programs',
            subPoints: [
              'My office continues to fight for further accountability from service providers and better strategies to exit people into long-term housing'
            ]
          },
          'My office annually sponsor the Packs of Love & Compassion event, which distributes hundreds of backpacks to the unhoused every year'
        ],
        'Violence Prevention': [
          'My office meets regularly with organizations focused on reducing & ending gun violence locally to try to identify strategies to reduce violence through community engagement while working with City staff to develop long-term policy solutions',
          'Successfully proposed that Sacramento adopt the Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) and officially become a City for CEDAW',
          'On March 29th, Team Kaplan launched our Women\'s Empowerment Series with an extraordinary group of women from organizations including Saint John\'s, WEAVE, Dress for Success Sacramento, Sacramento Family Justice Center, C.A.S.H., My Sister\'s House, City of Refuge Sacramento, SAC Connect, Wellspring Women\'s Center and Sac DA\'s Office around a common effort to raise awareness around & fight against domestic violence in all its forms'
        ]
      }
    },
    {
      id: 'city-services',
      title: 'City Services, Budget, Housing & Our Infrastructure',
      icon: FaCity,
      description: 'Working to improve city services, manage budgets effectively, and develop sustainable infrastructure.',
      content: {
        'Budget Management': [
          {
            text: 'When the City\'s budget deficit caused public maintenance services to be cut from 4x per month to 1x per month - significantly impacting underserved neighborhoods - my office took action',
            subPoints: [
              'Worked with City staff to find 1-time funding to increase services to 2x per month with priority given to those underserved neighborhoods',
              'My office prioritizes pushing for additional funding to maintain services at current levels'
            ]
          },
          'After the City issued D1 residents large citations for driveway extensions built up to 20 years ago, my office successfully proposed a moratorium on the enforcement of violations while the City reviews existing rules to ensure they are not being enforced in an inequitable way',
          'Amended the draft 2040 General Plan, the City\'s guiding document around growth management, to include policy additions I requested for District 1 and the City that promote connectivity, create community gathering spaces & amenities, create a town center, promote public transportation, expand tree canopy, and implement traffic calming measures',
          {
            text: 'Proposed that the City adopt a two-year budget cycle to address the structural budget deficit',
            subPoints: [
              'The current one-year budget cycle leads to new rounds of cuts every year and causes immense uncertainty to residents & local businesses who rely on City services, City employees and community organizations which partner with the City',
              'A two-year budget cycle will allow for greater stability, making space for long term deficit reduction strategies and helping create the predictability needed for the City to grow its way out of the structural deficit'
            ]
          },
          'Partnered with the office of Congressman Ami Bera to request federal funds for the preliminary work necessary to create a design for a pedestrian & bicycle overcrossing over Interstate 5, between Arena Boulevard & Del Paso Road',
          'My office is in the process of working with City staff around plans for the Shora Vista overcrossing to reduce congestion and improve connectivity',
          'Hosted a community meeting to address the impacts of airport noise, gathered input from the community, provided information on how residents can advocate for change when reporting and submitting letters to the FAA, and continue to assist constituents demand improvements around the mitigation of noise'
        ],
        'Housing & Development': [
          'Brought affordable housing units to the district for working families',
          'Worked with City staff around the next steps on Innovation Park and the creation of the EIFD term sheet',
          'Voted with the City Council to send a letter to Sacramento County voicing concerns with the proposed Upper Westside development\'s implications for congestion and strain on city services'
        ]
      }
    },
    {
      id: 'parks',
      title: 'Our Parks',
      icon: FaTree,
      description: 'Enhancing our community spaces and recreational facilities for all residents to enjoy.',
      content: {
        'New Park Openings': [
          {
            text: 'Opened the new Westshore Park in March of 2025',
            subPoints: [
              'Included tennis courts with a pickleball overlay, a basketball court, group exercise areas, a games area with cornhole stations, and a play structure with an added shade structure'
            ]
          }
        ],
        'Park Improvements': [
          'Secured local funding to install additional lights at North Natomas Regional Park',
          'Secured funding for new restroom facilities at Burberry Park and Black Bird Community Park',
          'Began construction of new parks in the Northlake Community in 2024',
          'Partnered with the Tony Hawk Foundation to renovate the skatepark at Regency Park for the community - naming the skatepark in honor & remembrance of Tyre Nichols',
          'Secured the installation of a cricket pitch at Northlake Community Park, allowing for Natomas\' & District 1\'s first ever official cricket league to be formed',
          'Secured $300,000 of funds to renovate North Pointe Park',
          'Partnered with the Heritage Park Veterans\' Club to rename a local park in honor of our veterans and their service to our country'
        ],
        'Park Advocacy': [
          {
            text: 'Advocated for District 1 in the city\'s 2040 Parks Plan',
            subPoints: [
              'Directed Parks staff to address safety risks in our public spaces, such as camping in public restrooms',
              'Advocated for increased services for District 1 residents and equity in park maintenance',
              'Highlighted the protection of wildlife within the Natomas Basin Conservancy',
              'Informed Parks staff on the importance of making the North Natomas Community Center more affordable and accessible to young people, seniors & all residents'
            ]
          },
          'Mobilized volunteers to plant over 150 new trees in our local parks!'
        ]
      }
    },
    {
      id: 'youth-families',
      title: 'Youth, Families & Community Support',
      icon: FaChild,
      description: 'Supporting our youth, families, and building stronger community connections.',
      content: {
        'One Youth Program': [
          'Founded the One Youth program in 2023 - providing opportunities for community service, experience building, leadership development, and extracurricular activities to over 400 local students in D1',
          'Team Kaplan has also provided internship opportunities, special activities like free tickets to Sacramento Kings games, and support for school/extracurricular projects like community clean ups & food collections to dozens of participating students'
        ],
        'Supporting Students & Schools': [
          'Awarded $1,500 of scholarship funds to local District 1 students',
          'Provided students with new computers through a D1 chromebook scholarship',
          'Partnered with Sac Republic FC to help purchase and deliver toys and coats to benefit students and families in the Robla School District',
          'Sponsored Heron Elementary\'s Gatsby Gala Fundraiser',
          'Sponsored Inderkum High School\'s Sports Booster Gala',
          'Sponsored food for local PTA teacher appreciation days',
          'Sponsored fees for community events hosted by PTAs and parent groups'
        ],
        'Community Events': [
          'Hosted more than 180, family friendly, community events for constituents in District One',
          {
            text: 'Ensure D1 residents\' access to fresh, local produce & support local businesses every year through the One Natomas Farmers Market',
            subPoints: [
              'Partnered with Alchemist CDC to double the food benefits of EBT & CalFresh users up to $15 when spent at the One Natomas farmers Market'
            ]
          },
          'Partnered with North Natomas Jibe to offer free bike repairs for D1 residents',
          'Partnered with local organizations to sponsor more than 40 additional community events',
          'Partnered with Council Colleagues to declare the Sacramento Youth Commission as the official youth voice in the City of Sacramento and to establish a youth representative on each board and commission where possible'
        ],
        'Neighborhood Ambassadors': [
          'Launched the District 1 Neighborhood Ambassadors Program',
          'Partnered with D1 constituents throughout the district who wish to serve the community - our community ambassadors are an extension of Team Kaplan that helps our office stay grounded in & informed around the needs of our D1 neighborhoods',
          'Ambassadors assist in providing info from our office to their communities, helping residents reach our office with their concerns & requests, and help report issues like waste, illegal parking, encampments, mailbox issues, etc',
          'I\'m proud to work hand in hand with the community to solve local issues and uplift the voices of constituents - we are always #bettertogether'
        ]
      }
    },
    {
      id: 'clean-community',
      title: 'Keeping D1 Clean',
      icon: FaRecycle,
      description: 'Maintaining clean neighborhoods and protecting our environment through community initiatives.',
      content: {
        'Waste Management': [
          'Updated the City\'s shopping cart ordinance to prevent shopping carts from being left in our neighborhoods, critical infrastructure, canals, creeks, and other waterways',
          'Team Kaplan has received & responded to over 1,500 requests for assistance by D1 constituents',
          'Team Kaplan partnered with Caltrans, River City Water Alliance and RD100 for a CA Community Clean-Up Day to clean Jack Rabbit Trail, the Eastern Canal, and Sump 14',
          'Partnered with the RCWA, Forensiclean & the Friends of Steelhead Creek to clean up over 12,000 pounds of waste affecting Steelhead Creek',
          'My office has worked with the community to host over a dozen tree plantings, community clean ups, & park beatifications in District 1'
        ]
      }
    }
  ];

  const handleCardClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <ActionContainer>
      <HeroSection>
        <MapBackground>
          <GoogleDistrictMap />
        </MapBackground>
        <Overlay />
        <HeroContent>
          <HeroTitle>ACTION FOR DISTRICT 1</HeroTitle>
        </HeroContent>
      </HeroSection>

      <ActionSection>
        <SectionContent>
          <PrioritiesGrid>
            {categories.map((category, index) => (
              <PriorityCard key={category.id} onClick={() => handleCardClick(category.id)}>
              <PriorityIcon>
                  <IconWrapper icon={category.icon} size={40} />
              </PriorityIcon>
                <PriorityTitle>{category.title}</PriorityTitle>
                <PriorityDescription>{category.description}</PriorityDescription>
                <ClickToLearn>
                  Click to learn more →
                </ClickToLearn>
            </PriorityCard>
            ))}
          </PrioritiesGrid>
        </SectionContent>
      </ActionSection>

      <ModalOverlay $isOpen={!!selectedCategory} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {selectedCategoryData && (
            <>
              <ModalHeader>
                <ModalTitle>{selectedCategoryData.title}</ModalTitle>
                <CloseButton onClick={closeModal}>
                  <FaTimes />
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                {Object.entries(selectedCategoryData.content).map(([subcategory, items]) => (
                  <CategorySection key={subcategory}>
                    <CategoryTitle>
                      <IconWrapper icon={FaExclamationTriangle} size={20} />
                      {subcategory}
                    </CategoryTitle>
                    <BulletList>
                      {items.map((item: any, index: number) => (
                        <BulletItem key={index}>
                          {typeof item === 'string' ? item : item.text}
                          {item.subPoints && (
                            <SubBulletList>
                              {item.subPoints.map((subItem: any, subIndex: number) => (
                                <SubBulletItem key={subIndex}>
                                  {typeof subItem === 'string' ? subItem : subItem.text}
                                  {subItem.subPoints && (
                                    <SubSubBulletList>
                                      {subItem.subPoints.map((subSubItem: string, subSubIndex: number) => (
                                        <SubSubBulletItem key={subSubIndex}>
                                          {subSubItem}
                                        </SubSubBulletItem>
                                      ))}
                                    </SubSubBulletList>
                                  )}
                                </SubBulletItem>
                              ))}
                            </SubBulletList>
                          )}
                        </BulletItem>
                      ))}
                    </BulletList>
                  </CategorySection>
                ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </ActionContainer>
  );
};

export default Action;
