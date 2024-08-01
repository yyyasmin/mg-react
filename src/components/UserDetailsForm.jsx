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

const solutionsText = `
  It's time<br />
  use the innovative digital memory game - <br />
  Play Your Way – <br />
  The game that will allow you <br />
  Get to know others without pressure<br />
  and develop social skills <br />
  In the most friendly and efficient way!
`;

const UserDetailsSection = ({ onShowUserDetailForm, onHideUserDetailForm, onSubmitUserDetailForm, showUserDetailForm }) => {
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
        If you answered "yes" to one or more of these questions:
      </SectionTitle>
      <SectionSubTitle dangerouslySetInnerHTML={{ __html: solutionsText }} />
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={showUserDetailForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUserDetailForm}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </UDSection>
  );
};

export default UserDetailsSection;
