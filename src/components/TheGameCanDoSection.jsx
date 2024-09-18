import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl } from '../helpers/ServerRoutes';
import { SectionTitle, SectionSubTitle, CommunityButton } from './LandingPageStyles';

const UDSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const TheGameCanDoText = `
  ✔️ <b>Meet others</b> with common interests<br />
  ✔️ <b>Practice active listening</b> and asking questions<br />
  ✔️ Strengthen your <b>interpersonal skills</b><br />
  ✔️ Discover new knowledge and <b>explore unfamiliar areas</b><br />
  ✔️ Share with others and <b>allow people to really get to know you</b> - including hobbies, ambitions, goals, feelings - without embarrassment<br />
`;

const TheGameCanDoSection = ({ onShowUserDetailForm, onHideUserDetailForm, onSubmitUserDetailForm, showUserDetailForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitUserDetailForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, formData);
      if (response.status === 201) {
        onSubmitUserDetailForm(formData.email);
      } else {
        alert(response.data.error || 'Failed to register user. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error === 'User already exists') {
          alert(`User already exists. Using email: ${formData.email}`);
          onSubmitUserDetailForm(formData.email);
        } else {
          alert(error.response.data.error);
        }
      } else {
        alert('Failed to register user. Please try again.');
      }
    }
  };

  const handleClose = () => onHideUserDetailForm();
  const handleShow = () => onShowUserDetailForm();

  return (
    <UDSection>
      <SectionTitle>
        Play Your Way connects users through an immersive experience and offers practical, convenient, and ongoing benefits:<br />
      </SectionTitle>

      <SectionSubTitle dangerouslySetInnerHTML={{ __html: TheGameCanDoText }} />

    </UDSection>
  );
};

export default TheGameCanDoSection;
