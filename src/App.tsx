import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import District from './pages/District';
import Action from './pages/Action';
import GetInvolved from './pages/GetInvolved';



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.7;
    color: #e2e8f0;
    background: #0a0a0a;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #c4b5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: #f7fafc;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: #a0aec0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #1a202c;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #4a5568 0%, #2d3748 100%);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #718096 0%, #4a5568 100%);
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid #60a5fa;
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background: rgba(96, 165, 250, 0.2);
    color: #ffffff;
  }

  /* Futuristic glow effects */
  .glow {
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.1);
  }

  .glow:hover {
    box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
  }

  /* Animated background */
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Futuristic grid pattern */
  .grid-pattern {
    background-image: 
      linear-gradient(rgba(96, 165, 250, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(96, 165, 250, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a202c 50%, #0a0a0a 100%);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(96, 165, 250, 0.01) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/district" element={<District />} />
            <Route path="/action" element={<Action />} />
            <Route path="/get-involved" element={<GetInvolved />} />


          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
