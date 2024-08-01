import styled, { keyframes, css } from 'styled-components';
import { Button } from 'react-bootstrap';


export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

export const Header = styled.header`
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  background-color: #f8f9fa;
`;

export const SubTitle = styled.p`
  font-size: 1.8em;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  background-color: #8f67d9;
  color: #fff;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  background-color: #f8f9fa;
`;

export const Section = styled.section`
  margin-bottom: 70px;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  background-color: #f8f9fa;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8em;
  background-color: #f8f9fa;
`;

export const SectionSubTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: green;
  background-color: #f8f9fa;
`;

export const PurpleSectionSubTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: purple;
`;
export const GreenSectionSubTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: green;
`;

export const RedSectionSubTitle = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  color: red;
`;

export const Description = styled.p`
  font-size: 1.3em;
`;

export const GameCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f8f9fa;
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  z-index: 1000;
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
`;

export const CommunityButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #28a745;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  border: none;
  font-weight: bold;
  margin: 0 auto;
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const BookGameButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #28a745;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 auto;
  font-size: 1.2em;

  &:hover {
    background-color: #218838;
  }
`;

export const FormSubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

export const CopyRight = styled.p`
  color: #fff;
  padding: 5px;
  background-color: #000;
  display: inline-block;
  border-radius: 5px;
`;

export const LandingSection = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  align-items: center;
  background-color: #f8f9fa;
`;

export const fadeInFromFar = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5em;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DatePickerContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const TimePickerContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
`;

export const Icon = styled.div`
  font-size: 1.5em;
  color: #333;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: left;
`;

export const CardTitle = styled.h4`
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #333;
`;

export const CardText = styled.p`
  font-size: 1em;
  color: #555;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-left: 10px;
`;



export const AnimatedHighlight = styled.div
