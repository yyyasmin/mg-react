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

const UserDetailsSection = ({ onShowUserDetailForm, onHideUserDetailForm, onSubmitUserDetailForm, showUserDetailForm, buttonLabel }) => {
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
        Let us know you:
      </SectionTitle>
      <PurpleSectionSubTitle>
        Do you want to improve your communication skills and connect better with others?
      </PurpleSectionSubTitle>
      <CommunityButton onClick={handleShow}>
        {buttonLabel}
      </CommunityButton>

      <Modal show={showUserDetailForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUserDetailForm}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <CommunityButton type="submit">
                Submit
              </CommunityButton>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </UDSection>
  );
};

export default UserDetailsSection;
