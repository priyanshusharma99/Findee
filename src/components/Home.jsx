import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #0f3460, #533483);
  opacity: 0.15;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: #e2e2e2;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  background: ${props => props.primary ? 'linear-gradient(45deg, #ffd700, #ffa500)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.primary ? '#1a1a2e' : '#ffffff'};
  border: ${props => props.primary ? 'none' : '2px solid #ffd700'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.1);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  z-index: 1;
`;

const FeaturedStoriesSection = styled.section`
  margin-top: 4rem;
`;

const FeaturedTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const StoryImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  background: ${props => `url(${props.image}) center/cover`};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
  }
`;

const StoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const StoryDescription = styled.p`
  color: #e2e2e2;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMoreButton = styled(motion.button)`
  background: linear-gradient(45deg, #ffd700, #ffa500);
  color: #1a1a2e;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
  }
`;

const featuredStories = [
  {
    id: 1,
    title: "The Unsung Hero of Indian Railways",
    description: "Discover the incredible story of Jamsetji Tata, whose vision and determination laid the foundation for India's industrial revolution.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Forgotten Mathematician",
    description: "Learn about Srinivasa Ramanujan, the self-taught genius whose mathematical discoveries continue to influence modern mathematics.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Pioneer of Indian Cinema",
    description: "Explore the life of Dadasaheb Phalke, the father of Indian cinema who revolutionized entertainment in India.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <BackgroundAnimation />
      
      <FloatingElement
        style={{ top: '20%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <FloatingElement
        style={{ top: '60%', right: '15%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Findee
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the untold stories of India's forgotten heroes and explore the rich tapestry of our cultural heritage.
        </Subtitle>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
          >
            Start Your Journey
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/stories')}
          >
            Explore Stories
          </Button>
        </ButtonContainer>

        <FeaturedStoriesSection>
          <FeaturedTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Stories
          </FeaturedTitle>
          
          <StoriesGrid>
            {featuredStories.map((story, index) => (
              <StoryCard
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate('/stories')}
              >
                <StoryImage image={story.image} />
                <StoryTitle>{story.title}</StoryTitle>
                <StoryDescription>{story.description}</StoryDescription>
                <ReadMoreButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Story
                </ReadMoreButton>
              </StoryCard>
            ))}
          </StoriesGrid>
        </FeaturedStoriesSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home; 