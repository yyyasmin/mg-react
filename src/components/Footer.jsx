// Footer.jsx
import React from 'react';
import { Footer, CopyRight } from './LandingPageStyles';

const FooterComponent = () => {
  return (
    <Footer>
      <CopyRight>&copy; {new Date().getFullYear()} Play Your Way Games. All rights reserved.</CopyRight>
    </Footer>
  );
};

export default FooterComponent;
