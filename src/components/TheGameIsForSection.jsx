import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl } from '../helpers/ServerRoutes';
import { SectionTitle, PurpleSectionSubTitle, CommunityButton } from './LandingPageStyles';

const UDSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const TheGameIsForText = `
  ✔️ Anyone who feels lonely most of the time<br />
  ✔️ Anyone who has difficulty - at any age! - Find friends or relationships<br />
  ✔️ Anyone who is "stuck" in social interactions<br />
  ✔️ All those who feel "transparent" and that the environment does not really know them<br />
  ✔️ All those who are pushed aside in every conversation and do not really participate<br />
  ✔️ Caregivers<br />
  ✔️ Coaches and coaches<br />
  ✔️ Bridges and bridges<br />
  ✔️ Teachers<br />
  ✔️ Parents of children with social difficulties or in special education<br />
  ✔️ Students and singles who find it difficult to find a relationship<br />

`;



const TheGameIsForSection = ({ onShowUserDetailForm, onHideUserDetailForm, onSubmitUserDetailForm, showUserDetailForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  return (
    <UDSection>

      <SectionTitle>
        Who is Play Your Game suitable for?<br />
      </SectionTitle>

      <PurpleSectionSubTitle dangerouslySetInnerHTML={{ __html: TheGameIsForText }} />

    </UDSection>
  );
};

export default TheGameIsForSection;
