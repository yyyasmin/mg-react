import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RedSectionSubTitle } from './LandingPageStyles';

import lineImage1 from '../assets/linesImages/p10.jfif';
import lineImage2 from '../assets/linesImages/p2.jfif';
import lineImage3 from '../assets/linesImages/p3.jfif';
import lineImage4 from '../assets/linesImages/p4.jfif';
import lineImage5 from '../assets/linesImages/p5.jfif';
import lineImage6 from '../assets/linesImages/p6.jfif';
import lineImage7 from '../assets/linesImages/p7.jfif';
import lineImage8 from '../assets/linesImages/p8.jfif';

const lines = [
  { text: <><b>Having trouble connecting with other people</b> in social interactions?</>, img: lineImage1 },
  { text: <><b>Feeling "stuck" and not belonging</b> in social interactions?</>, img: lineImage2 },
  { text: <><b>No suggestions for entertainment or events?</b></>, img: lineImage3 },
  { text: <><b>Do you stay "out of the conversation"</b> even in WhatsApp groups or on social networks?</>, img: lineImage4 },
  { text: <><b>Feeling lonely?</b> Can&apos;t find a partner?</>, img: lineImage5 },
  { text: <><b>You hardly leave the house</b> because you have nowhere to go and with whom?</>, img: lineImage6 },
  { text: <><b>Are you very stressed before going out or "dates"</b> and don&apos;t know how to start a conversation?</>, img: lineImage7 },
  { text: <><b>Choose only hobbies that do not require communication</b> with people?</>, img: lineImage8 },
];

const LinesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  text-align: center;
`;

const AnimatedHighlight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1800px;
  padding: 0 20px;
  background-color: #f8f9fa;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;

  p {
    padding-left: 40px;
    text-align: left;
    font-size: 1.3em;
    font-weight: normal;
    color: red;

    b {
      font-weight: bold;
    }
  }
`;

const RightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    padding-left: 50px;
    text-align: left;
    font-size: 1.3em;
    font-weight: normal;
    color: red;

    b {
      font-weight: bold;
    }
  }
`;

const AnimatedHighlightsSection = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LinesSection>
      <AnimatedHighlight>
        <LeftTextContainer>
          {lines.slice(0, Math.ceil(lines.length / 2)).map((line, index) => (
            <p key={index}>{line.text}</p>
          ))}
        </LeftTextContainer>
        <img src={lines[imageIndex].img} alt="" />
        <RightTextContainer>
          {lines.slice(Math.ceil(lines.length / 2)).map((line, index) => (
            <p key={index}>{line.text}</p>
          ))}
        </RightTextContainer>
      </AnimatedHighlight>
    </LinesSection>
  );
};

export default AnimatedHighlightsSection;
