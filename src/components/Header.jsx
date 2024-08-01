import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import { SectionSubTitle } from './LandingPageStyles';


const FSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  align-items: center;
  margin-bottom: 80px;
  // background-color: yellow;
`;

const EllipseContainer = styled.div`
  width: 500px; /* Adjust width for a wider ellipse */
  height: 300px; /* Adjust height for a taller ellipse */
  position: relative;
`;

const InnerEllipse = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: green;
  margin-top: 20px; /* Adjust top margin to bring text closer */
  font-family: 'Comic Sans MS', 'Arial', sans-serif;
`;

const HeaderComponent  = () => {
  return (
    <FSection>
      <EllipseContainer>
          <Image src={logo} alt="Logo" />
      </EllipseContainer>
      {/* <Text>Play Your Way - fun games to improve social skills</Text> */}
      <SectionSubTitle>
      The digital game that will get you used to communicating with others and will help you overcome social activities!
      </SectionSubTitle>
    </FSection>
  );
};

export default HeaderComponent;
