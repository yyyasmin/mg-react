import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl } from '../helpers/ServerRoutes';
import { SectionTitle, SectionSubTitle, BookGameButton } from './LandingPageStyles';

const COSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const CustomOrderSection = () => {
  const [showCustomOrderForm, setShowCustomOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    ageGroup: '',
    skillLevel: '',
    subject: '',
    customSubject: ''
  });

  const handleShow = () => setShowCustomOrderForm(true);
  const handleClose = () => setShowCustomOrderForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitCustomOrderForm = async (e) => {
    e.preventDefault();
    try {
      console.log("IN handleSubmitCustomOrderForm -- formData:", formData);
      const response = await axios.post(`${baseUrl}/orders/submit_order`, formData);
      console.log(response.data); // Log response from the server
      handleClose();
    } catch (error) {
      console.error('Error submitting custom order:', error);
    }
  };

  return (
    <COSection>
      <SectionTitle>Book a game to pave the way to your goals</SectionTitle>
      <SectionSubTitle>
        Do you want to order a custom game to match your specific needs?
      </SectionSubTitle>
      <BookGameButton onClick={handleShow}>
        Yes, I want a custom game!
      </BookGameButton>

      <Modal show={showCustomOrderForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Custom Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitCustomOrderForm}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
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

            <Form.Group controlId="formAgeGroup" className="mb-3">
              <Form.Label>Age Group</Form.Label>
              <Form.Control
                as="select"
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Age Group</option>
                <option value="kids">Kids</option>
                <option value="teens">Teens</option>
                <option value="adults">Adults</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSkillLevel" className="mb-3">
              <Form.Label>Skill Level</Form.Label>
              <Form.Control
                as="select"
                name="skillLevel"
                value={formData.skillLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select Skill Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="select"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="history">History</option>
                <option value="geography">Geography</option>
                <option value="math">Math</option>
                <option value="english">English</option>
                <option value="literature">Literature</option>
                <option value="social_skills">Social Skills</option>
                <option value="relationships">Relationships</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            
            {formData.subject === 'other' && (
              <Form.Group controlId="formCustomSubject" className="mb-3">
                <Form.Label>Custom Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter custom subject"
                  name="customSubject"
                  value={formData.customSubject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}

            <Button variant="primary" type="submit">
              Get me my game - the one that fulfills my needs perfectly!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </COSection>
  );
};

export default CustomOrderSection;
