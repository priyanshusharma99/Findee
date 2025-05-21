import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const StoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const StoryText = styled(motion.div)`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
`;

const StoryButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    background-color: #357abd;
  }
`;

const Story = () => {
  const storyParts = [
    "Once upon a time, in a magical forest...",
    "There lived a curious little fox...",
    "Who loved to explore and make new friends...",
  ];

  const [currentPart, setCurrentPart] = useState(0);

  const nextPart = () => {
    if (currentPart < storyParts.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };

  return (
    <StoryContainer>
      <StoryText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {storyParts[currentPart]}
      </StoryText>
      
      {currentPart < storyParts.length - 1 && (
        <StoryButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextPart}
        >
          Continue Story
        </StoryButton>
      )}
    </StoryContainer>
  );
};

export default Story; 