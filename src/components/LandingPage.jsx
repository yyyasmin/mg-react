//LandingPage.jsx
import React, { useState } from 'react';
import HeaderComponent from './Header';
import AnimatedHighlightsSection from './AnimatedHighlightsSection';
import SolutionTextSection from './SolutionTextSection';
import TheGameCanDoSection from './TheGameCanDoSection';
import TheGameIsForSection from './TheGameIsForSection';
import UserDetailsSection from './UserDetailsSection'; // Only one UserDetailsSection
import ClosingTextSection from './ClosingTextSection';
import CustomOrderSection from './CustomOrderSection';
import FeaturedGamesSection from './FeaturedGamesSection';
import CommunitySection from './CommunitySection';
import FooterComponent from './Footer';
import PartnerProfileSection from './PartnerProfileSection';

const LandingPage = () => {
  const [showUserDetailForm1, setShowUserDetailForm1] = useState(false);
  const [showUserDetailForm2, setShowUserDetailForm2] = useState(false);
  const [showPartnerProfileForm, setShowPartnerProfileForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const [formData, setFormData] = useState({
    userDetails: {
      name: '',
      email: '',
      password: '',
    },
    partnerProfile: {
      partnerDetails: '',
    },
  });

  // USER DETAILS 1
  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      userDetails: {
        ...formData.userDetails,
        [name]: value,
      },
    });
  };

  const handleShowUserDetailForm1 = () => {
    setShowUserDetailForm1(true);
  };

  const handleCloseUserDetailForm1 = () => {
    setShowUserDetailForm1(false);
  };

  const handleSubmitUserDetailForm1 = (email) => {
    setUserEmail(email);
    setShowUserDetailForm1(false);
  };

  // USER DETAILS 2
  const handleShowUserDetailForm2 = () => {
    setShowUserDetailForm2(true);
  };

  const handleCloseUserDetailForm2 = () => {
    setShowUserDetailForm2(false);
  };

  const handleSubmitUserDetailForm2 = (email) => {
    setUserEmail(email);
    setShowUserDetailForm2(false);
  };

  // PARTNER PROFILE
  const handlePartnerProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      partnerProfile: {
        ...formData.partnerProfile,
        [name]: value,
      },
    });
  };

  const handleShowPartnerProfileForm = () => {
    if (!userEmail) {
      alert("Please complete the 'Yes I do' section first.");
      return;
    }
    setShowPartnerProfileForm(true);
  };

  const handleClosePartnerProfileForm = () => {
    setShowPartnerProfileForm(false);
  };

  return (
    <>
      <HeaderComponent />
      <AnimatedHighlightsSection />
      <SolutionTextSection />
      <UserDetailsSection
        onShowUserDetailForm={handleShowUserDetailForm1}
        onHideUserDetailForm={handleCloseUserDetailForm1}
        onSubmitUserDetailForm={handleSubmitUserDetailForm1}
        formData={formData.userDetails}
        handleChange={handleUserDetailsChange}
        showUserDetailForm={showUserDetailForm1}
        buttonLabel="Yes I do!"
      />
      <TheGameCanDoSection />
      <TheGameIsForSection />
      <UserDetailsSection
        onShowUserDetailForm={handleShowUserDetailForm2}
        onHideUserDetailForm={handleCloseUserDetailForm2}
        onSubmitUserDetailForm={handleSubmitUserDetailForm2}
        formData={formData.userDetails}
        handleChange={handleUserDetailsChange}
        showUserDetailForm={showUserDetailForm2}
        buttonLabel="Yes, I want to practice communicating with others in a fun way!"
      />
      <ClosingTextSection />
      <CustomOrderSection />
      <PartnerProfileSection
        onShowPartnerProfileForm={handleShowPartnerProfileForm}
        onHidePartnerProfileForm={handleClosePartnerProfileForm}
        formData={formData.partnerProfile}
        handleChange={handlePartnerProfileChange}
        showPartnerProfileForm={showPartnerProfileForm}
      />
      <FeaturedGamesSection />
      <CommunitySection />
      <FooterComponent />
    </>
  );
};

export default LandingPage;
