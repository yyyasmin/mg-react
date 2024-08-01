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


const ClosingText = `

Still wondering?<br />
Do you have any more questions?<br />

Call now - 0544901835<br />
And we'll get back to you for a match test call -<br /> 
Free of charge and without obligation - <br />
Or write us your name and phone number<br /> 
Email yasminamran@gmail.com<br /> 
And we will gladly come back to you!<br />

It's time to overcome the social difficulties,<br /> 
develop listening and conversation skills with others,<br /> 
and find partners, friends and/or people just like you<br /> 
who will be happy to connect with you!<br />

are you ready?<br />

`;


const ClosingTextSection = ({ onShowUserDetailForm, onHideUserDetailForm, onSubmitUserDetailForm, showUserDetailForm }) => {
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
      <PurpleSectionSubTitle dangerouslySetInnerHTML={{ __html: ClosingText }} />
    </UDSection>
  );
};

export default ClosingTextSection;
