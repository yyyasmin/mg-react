import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionTitle, PurpleSectionSubTitle } from './LandingPageStyles';

const UDSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const TheGameIsForText = `
  ✔️ Anyone who <b>feels lonely most of the time</b><br />
  ✔️ Anyone who <b>has difficulty - at any age! - to find friends or relationships</b><br />
  ✔️ Anyone who is <b>"stuck" in social interactions</b><br />
  ✔️ All those who feel <b>"transparent"</b> and that the environment does not really know them<br />
  ✔️ All those who are <b>pushed aside</b> in every conversation and do not really participate<br />
  ✔️ <b>Caregivers</b><br />
  ✔️ <b>Coaches</b><br />
  ✔️ <b>Bridges</b><br />
  ✔️ <b>Teachers</b><br />
  ✔️ <b>Parents of children</b> with social difficulties or in special education<br />
  ✔️ <b>Students and singles</b> who find it difficult to find a relationship<br />
`;

const TheGameIsForSection = () => {
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
