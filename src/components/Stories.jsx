import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const StoriesSection = styled.section`
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

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: #e2e2e2;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
  }
`;

const StoryImage = styled.div`
  width: 100%;
  height: 250px;
  background: ${props => `url(${props.image}) center/cover`};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8));
  }
`;

const StoryContent = styled.div`
  padding: 2rem;
  position: relative;
`;

const StoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const StoryDescription = styled.p`
  color: #e2e2e2;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const StoryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a0a0a0;
  font-size: 0.9rem;
`;

const ReadMoreButton = styled(motion.button)`
  background: linear-gradient(45deg, #ffd700, #ffa500);
  color: #1a1a2e;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
  }
`;

const CategoryTag = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
`;

const stories = [
  {
    id: 1,
    title: "The Lost Kingdom of Vijayanagara",
    description: "Uncover the secrets of one of India's greatest empires, from its golden age to its mysterious decline. A tale of power, culture, and architectural marvels.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "History",
    readTime: "15 min read",
    author: "Dr. Rajesh Kumar"
  },
  {
    id: 2,
    title: "The Silent Revolution of Indian Science",
    description: "From ancient astronomy to modern space exploration, discover how Indian scientists have shaped our understanding of the universe.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Science",
    readTime: "12 min read",
    author: "Prof. Meera Sharma"
  },
  {
    id: 3,
    title: "The Forgotten Queens of India",
    description: "Meet the powerful women who ruled kingdoms, led armies, and shaped the course of Indian history, yet remain largely unknown.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Biography",
    readTime: "20 min read",
    author: "Dr. Priya Singh"
  },
  {
    id: 4,
    title: "The Artisans of Ancient India",
    description: "Explore the incredible craftsmanship and artistic traditions that have been passed down through generations of Indian artisans.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Culture",
    readTime: "10 min read",
    author: "Rahul Verma"
  },
  {
    id: 5,
    title: "The Great Indian Ocean Traders",
    description: "Journey through the maritime history of India's ancient seafarers who established trade routes across the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "History",
    readTime: "18 min read",
    author: "Capt. Arun Nair"
  },
  {
    id: 6,
    title: "The Mystics of the Himalayas",
    description: "Discover the spiritual traditions and wisdom of the Himalayan sages who have preserved ancient knowledge for millennia.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Spirituality",
    readTime: "25 min read",
    author: "Swami Anand"
  }
];

const Stories = () => {
  const navigate = useNavigate();
  
  const handleStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  return (
    <StoriesSection>
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
      
      <PageTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Discover Untold Stories
      </PageTitle>
      
      <PageSubtitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Journey through the rich tapestry of India's forgotten tales, where every story is a window into our extraordinary heritage.
      </PageSubtitle>
      
      <StoryGrid>
        {stories.map((story, index) => (
          <StoryCard
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StoryImage image={story.image} />
            <StoryContent>
              <CategoryTag>{story.category}</CategoryTag>
              <StoryTitle>{story.title}</StoryTitle>
              <StoryDescription>{story.description}</StoryDescription>
              <StoryMeta>
                <span>{story.readTime}</span>
                <span>By {story.author}</span>
              </StoryMeta>
              <ReadMoreButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStoryClick(story.id)}
              >
                Read Full Story
              </ReadMoreButton>
            </StoryContent>
          </StoryCard>
        ))}
      </StoryGrid>
    </StoriesSection>
  );
};

export default Stories; 