// CommunitySection.jsx
import React from 'react';
import { Section, SectionTitle, PurpleSectionSubTitle, CommunityButton } from './LandingPageStyles';
import styled from 'styled-components';

const CSection = styled.section`
  margin-bottom: 70px;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`;

const CommunitySection = () => {
  return (
    <CSection>
      <SectionTitle>Join Our Community</SectionTitle>
      <PurpleSectionSubTitle>
        Connect with others, share experiences, and get exclusive updates.
      </PurpleSectionSubTitle>
      <CommunityButton to="/community">Join Now</CommunityButton>
    </CSection>
  );
};

export default CommunitySection;
