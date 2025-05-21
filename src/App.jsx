import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import Home from './components/Home'
import Navbar from './Navbar'
import Stories from './components/Stories'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import StoryReader from './components/StoryReader'

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/story/:storyId" element={<StoryReader />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}

export default App
