import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../helpers/ServerRoutes';
import { SectionTitle, PurpleSectionSubTitle, BookGameButton } from './LandingPageStyles';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const PPSSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const PartnerProfileModalBody = styled(Modal.Body)`
  background: linear-gradient(to bottom, #BF77F6, #90EE90);
`;

const PartnerProfileSection = ({
  onShowPartnerProfileForm,
  onHidePartnerProfileForm,
  showPartnerProfileForm,
}) => {
    
  const [formData, setFormData] = useState({
    userEmail: '',
    gender: '',
    subject: '',
    ageGroup: '',
    location: '',
    relationshipLevel: '',
    matchingType: '',
    playmateEmail: '',
    playingTime: '',
    playingDate: ''
  });

  const [newInterest, setNewInterest] = useState('');

  const [interests, setInterests] = useState([
    'math', 'history', 'english', 'soccer', 'tennis', 'acting', 'music', 'relationships', 'playback_improvisation', 'any', 'other'
  ]);

  const [ageGroups, setAgeGroups] = useState([
    'kid', 'teen', 'adult', 'any'
  ]);

  const [genders, setGenders] = useState([
    'male', 'female', 'any', 'other'
  ]);

  const [relationshipLevels, setRelationshipLevels] = useState([
    "Don't know", "acquaintances", "friends", "good friends", "life partners", "colleagues", "any"
  ]);

  const [matchingTypes, setMatchingTypes] = useState([
    "Whoever wants to play at the same day and time",
    "Whoever wants to play any time",
    "Someone who has my profile requirements at the same day and time",
    "Someone who has my profile requirements any time"
  ]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      playingDate: date,
    });
  };

  const handleAddInterest = async () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      await axios.post(`${baseUrl}/add_interest`, { newInterest });
    }
    setNewInterest('');
  };

  const handleSubmitPartnerProfileForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/orders/submit_partner_profile`, formData);
      onHidePartnerProfileForm();
      //navigate('/desired-page'); // Replace '/desired-page' with the target path
    } catch (error) {
      console.error('Error submitting partner profile:', error);
    }
  };

  const handleClose = () => onHidePartnerProfileForm();
  const handleShow = () => onShowPartnerProfileForm();

  return (
    <PPSSection>
      <SectionTitle>Find a Perfect Partner for Your Goals</SectionTitle>
      <PurpleSectionSubTitle>
        Create a profile to find the best match for your needs and interests.
      </PurpleSectionSubTitle>
      <BookGameButton onClick={handleShow}>
        Create Partner Profile
      </BookGameButton>

      <Modal show={showPartnerProfileForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Partner Profile</Modal.Title>
        </Modal.Header>
        <PartnerProfileModalBody>
          <Form onSubmit={handleSubmitPartnerProfileForm}>

            <Form.Group controlId="formUserEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
              <Form.Text className="text-muted">
                Enter your email
              </Form.Text>
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
                <option value="">Select age group</option>
                {ageGroups.map((ageGroup) => (
                  <option key={ageGroup} value={ageGroup}>{ageGroup}</option>
                ))}
              </Form.Control>
              <Form.Text className="text-muted">
                Select an age group from the list.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formInterest" className="mb-3">
              <Form.Label>Interest</Form.Label>
              <Form.Control
                as="select"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select interest</option>
                {interests.map((interest) => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </Form.Control>
              <Form.Text className="text-muted">
                Select an interest from the list or add a new one below.
              </Form.Text>
            </Form.Group>

            {formData.interest === 'other' && (
              <Form.Group controlId="formNewInterest" className="mb-3">
                <Form.Label>Add a New Interest</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a new interest"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                />
                <Button variant="secondary" onClick={handleAddInterest} className="mt-2">
                  Add subject                </Button>
              </Form.Group>
            )}

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>{gender}</option>
                ))}
              </Form.Control>
              <Form.Text className="text-muted">
                Select a gender from the list below.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formRelationshipLevel" className="mb-3">
              <Form.Label>Relationship Level</Form.Label>
              <Form.Control
                as="select"
                name="relationshipLevel"
                value={formData.relationshipLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select relationship level</option>
                {relationshipLevels.map((relationshipLevel) => (
                  <option key={relationshipLevel} value={relationshipLevel}>{relationshipLevel}</option>
                ))}
              </Form.Control>
              <Form.Text className="text-muted">
                Select a relationship level from the list.
              </Form.Text>
            </Form.Group>

            {formData.relationshipLevel !== "Don't know" && (
              <Form.Group controlId="formPlaymateEmail" className="mb-3">
                <Form.Label>Playmate Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter playmate email"
                  name="playmateEmail"
                  value={formData.playmateEmail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}

            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <Form.Text className="text-muted">
                Enter the location.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Playing Date and Time</Form.Label>
              <DatePicker
                selected={formData.playingDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                className="form-control"
              />
              <Form.Text className="text-muted">
                Select the desired date and time.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formMatchingType" className="mb-3">
              <Form.Label>Matching Type</Form.Label>
              <Form.Control
                as="select"
                name="matchingType"
                value={formData.matchingType}
                onChange={handleChange}
                required
              >
                <option value="">Select matching type</option>
                {matchingTypes.map((matchingType) => (
                  <option key={matchingType} value={matchingType}>{matchingType}</option>
                ))}
              </Form.Control>
              <Form.Text className="text-muted">
                Select a matching type from the list.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </PartnerProfileModalBody>
      </Modal>
    </PPSSection>
  );
};

export default PartnerProfileSection;
