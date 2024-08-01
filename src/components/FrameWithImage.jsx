import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';

const FSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;


  text-align: center;
  align-items: center;
  margin-bottom: 80px;
`;

const ImageFrame = styled.div`
  position: relative;
  width: 300px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50% / 35%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
    background-color: #f8f9fa;

  
  margin-bottom: 10px; /* Reduced margin for closer text */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50% / 35%;

`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: green;
  margin: 0; /* Closer to the image */
  font-family: 'Comic Sans MS', 'Arial', sans-serif; /* Rounded font */
`;

const FrameWithImage = () => {
  return (
    <FSection>
      <ImageFrame>
        <Image src={logo} alt="Logo" />
      </ImageFrame>
      <Text>Play Your Way - fun games to improve social skills</Text>
    </FSection>
  );
};

export default FrameWithImage;
