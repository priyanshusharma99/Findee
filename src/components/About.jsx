import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
`;

const AnimatedDivider = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    transparent 0%,
    #ffd700 20%,
    #ffa500 50%,
    #ffd700 80%,
    transparent 100%
  );
  transform-origin: left;
  z-index: 10;
`;

const DividerGlow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(255, 215, 0, 0.3) 20%,
    rgba(255, 165, 0, 0.3) 50%,
    rgba(255, 215, 0, 0.3) 80%,
    transparent 100%
  );
  filter: blur(8px);
  z-index: 9;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const MissionSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.1);
`;

const MissionTitle = styled.h2`
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 1.5rem;
`;

const MissionText = styled.p`
  color: #e2e2e2;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #e2e2e2;
  line-height: 1.6;
`;

const TeamSection = styled(motion.div)`
  margin-top: 6rem;
`;

const TeamTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  background: ${props => `url(${props.image}) center/cover`};
  border: 3px solid #ffd700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #e2e2e2;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
`;

const About = () => {
  const values = [
    {
      icon: "📚",
      title: "Preserving Heritage",
      description: "We are dedicated to preserving and sharing the rich cultural heritage of India through compelling storytelling."
    },
    {
      icon: "🎯",
      title: "Authentic Narratives",
      description: "Every story we tell is thoroughly researched and presented with historical accuracy and cultural sensitivity."
    },
    {
      icon: "💡",
      title: "Innovative Approach",
      description: "We combine traditional storytelling with modern technology to create engaging and immersive experiences."
    },
    {
      icon: "🤝",
      title: "Community Focus",
      description: "We believe in building a community of storytellers and history enthusiasts who share our passion."
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Historian",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "A passionate historian with over 15 years of experience in Indian cultural studies."
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "An award-winning storyteller who brings history to life through creative narratives."
    },
    {
      name: "Arun Patel",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Expert in digital storytelling and interactive media technologies."
    }
  ];

  return (
    <AboutSection>
      <AnimatedDivider
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <DividerGlow
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
      />

      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Findee
        </Title>

        <MissionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>
            At Findee, we are on a mission to uncover and share the untold stories of India's forgotten heroes. 
            Through our platform, we aim to bridge the gap between the past and present, bringing to light the 
            remarkable achievements and contributions of individuals who have shaped India's rich cultural heritage.
          </MissionText>
          <MissionText>
            We believe that every story has the power to inspire, educate, and connect people across generations. 
            Our team of passionate historians, storytellers, and technologists work together to create engaging 
            narratives that preserve our cultural legacy for future generations.
          </MissionText>
        </MissionSection>

        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>

        <TeamSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TeamTitle>Meet Our Team</TeamTitle>
          <TeamGrid>
            {team.map((member, index) => (
              <TeamMember
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MemberImage image={member.image} />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About; 