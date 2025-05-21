import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 2rem;
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 215, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #ffd700;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #e2e2e2;
  font-size: 1.1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact; 